import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { supabase, Applicant } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  Loader2, 
  LogOut, 
  Users, 
  Clock, 
  CheckCircle, 
  XCircle,
  FileText,
  Mail,
  Phone,
  Briefcase,
  Calendar,
  Eye,
  Download,
  Sparkles,
  RefreshCw
} from 'lucide-react';

const statusColors: Record<string, string> = {
  pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  reviewed: 'bg-blue-100 text-blue-800 border-blue-200',
  interviewed: 'bg-purple-100 text-purple-800 border-purple-200',
  hired: 'bg-green-100 text-green-800 border-green-200',
  rejected: 'bg-red-100 text-red-800 border-red-200',
};

const statusIcons: Record<string, React.ReactNode> = {
  pending: <Clock className="w-3 h-3" />,
  reviewed: <Eye className="w-3 h-3" />,
  interviewed: <Users className="w-3 h-3" />,
  hired: <CheckCircle className="w-3 h-3" />,
  rejected: <XCircle className="w-3 h-3" />,
};

const AdminDashboard = () => {
  const { user, signOut, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [applicants, setApplicants] = useState<Applicant[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedApplicant, setSelectedApplicant] = useState<Applicant | null>(null);
  const [updatingStatus, setUpdatingStatus] = useState<string | null>(null);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/admin/login');
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (user) {
      fetchApplicants();
    }
  }, [user]);

  const fetchApplicants = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('applicants')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setApplicants(data || []);
    } catch (error) {
      console.error('Error fetching applicants:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateApplicantStatus = async (id: string, status: string) => {
    setUpdatingStatus(id);
    try {
      const { error } = await supabase
        .from('applicants')
        .update({ status })
        .eq('id', id);

      if (error) throw error;
      
      setApplicants(prev => 
        prev.map(app => app.id === id ? { ...app, status: status as Applicant['status'] } : app)
      );
      
      if (selectedApplicant?.id === id) {
        setSelectedApplicant(prev => prev ? { ...prev, status: status as Applicant['status'] } : null);
      }
    } catch (error) {
      console.error('Error updating status:', error);
    } finally {
      setUpdatingStatus(null);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/admin/login');
  };

  const downloadResume = async (resumeUrl: string, filename: string) => {
    try {
      const { data, error } = await supabase.storage
        .from('resumes')
        .download(resumeUrl);
      
      if (error) throw error;
      
      const url = URL.createObjectURL(data);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading resume:', error);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const stats = {
    total: applicants.length,
    pending: applicants.filter(a => a.status === 'pending').length,
    reviewed: applicants.filter(a => a.status === 'reviewed').length,
    interviewed: applicants.filter(a => a.status === 'interviewed').length,
    hired: applicants.filter(a => a.status === 'hired').length,
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Header */}
      <header className="bg-background/80 backdrop-blur-lg border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Smile Innovation</h1>
              <p className="text-sm text-muted-foreground">Admin Dashboard</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden sm:block">
              {user.email}
            </span>
            <Button variant="outline" size="sm" onClick={handleSignOut}>
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {[
            { label: 'Total Applications', value: stats.total, icon: Users, color: 'from-blue-500 to-cyan-500' },
            { label: 'Pending Review', value: stats.pending, icon: Clock, color: 'from-yellow-500 to-orange-500' },
            { label: 'Reviewed', value: stats.reviewed, icon: Eye, color: 'from-indigo-500 to-purple-500' },
            { label: 'Interviewed', value: stats.interviewed, icon: Users, color: 'from-pink-500 to-rose-500' },
            { label: 'Hired', value: stats.hired, icon: CheckCircle, color: 'from-green-500 to-emerald-500' },
          ].map((stat, index) => (
            <Card key={index} className="border-0 shadow-lg overflow-hidden">
              <CardContent className="p-4">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3`}>
                  <stat.icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Applicants Table */}
        <Card className="border-0 shadow-xl">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="w-5 h-5" />
              Job Applications
            </CardTitle>
            <Button variant="outline" size="sm" onClick={fetchApplicants} disabled={loading}>
              <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
              </div>
            ) : applicants.length === 0 ? (
              <div className="text-center py-12">
                <Users className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">No Applications Yet</h3>
                <p className="text-muted-foreground">Applications will appear here when candidates apply.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Applicant</TableHead>
                      <TableHead>Position</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Applied</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {applicants.map((applicant) => (
                      <TableRow key={applicant.id} className="cursor-pointer hover:bg-muted/50">
                        <TableCell>
                          <div>
                            <p className="font-medium">{applicant.full_name}</p>
                            <p className="text-sm text-muted-foreground">{applicant.email}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{applicant.position}</Badge>
                        </TableCell>
                        <TableCell>
                          <Select 
                            value={applicant.status} 
                            onValueChange={(value) => updateApplicantStatus(applicant.id, value)}
                            disabled={updatingStatus === applicant.id}
                          >
                            <SelectTrigger className={`w-32 h-8 text-xs ${statusColors[applicant.status]} border`}>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {['pending', 'reviewed', 'interviewed', 'hired', 'rejected'].map((status) => (
                                <SelectItem key={status} value={status}>
                                  <div className="flex items-center gap-2">
                                    {statusIcons[status]}
                                    <span className="capitalize">{status}</span>
                                  </div>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          {formatDate(applicant.created_at)}
                        </TableCell>
                        <TableCell className="text-right">
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => setSelectedApplicant(applicant)}
                          >
                            <Eye className="w-4 h-4 mr-1" />
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </main>

      {/* Applicant Detail Dialog */}
      <Dialog open={!!selectedApplicant} onOpenChange={() => setSelectedApplicant(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedApplicant && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedApplicant.full_name}</DialogTitle>
                <DialogDescription>
                  Applied for {selectedApplicant.position}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6 mt-4">
                {/* Status */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Status</span>
                  <Select 
                    value={selectedApplicant.status} 
                    onValueChange={(value) => updateApplicantStatus(selectedApplicant.id, value)}
                    disabled={updatingStatus === selectedApplicant.id}
                  >
                    <SelectTrigger className={`w-40 ${statusColors[selectedApplicant.status]} border`}>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {['pending', 'reviewed', 'interviewed', 'hired', 'rejected'].map((status) => (
                        <SelectItem key={status} value={status}>
                          <div className="flex items-center gap-2">
                            {statusIcons[status]}
                            <span className="capitalize">{status}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                {/* Contact Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Email</p>
                      <a href={`mailto:${selectedApplicant.email}`} className="text-sm font-medium hover:text-primary">
                        {selectedApplicant.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Phone</p>
                      <a href={`tel:${selectedApplicant.phone}`} className="text-sm font-medium hover:text-primary">
                        {selectedApplicant.phone}
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Application Date */}
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Applied On</p>
                    <p className="text-sm font-medium">{formatDate(selectedApplicant.created_at)}</p>
                  </div>
                </div>
                
                {/* Resume */}
                {selectedApplicant.resume_url && (
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Resume</p>
                        <p className="text-sm font-medium">{selectedApplicant.resume_filename || 'Resume'}</p>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => downloadResume(selectedApplicant.resume_url!, selectedApplicant.resume_filename || 'resume.pdf')}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                )}
                
                {/* Cover Letter */}
                {selectedApplicant.cover_letter && (
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Cover Letter / Message</h4>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm whitespace-pre-wrap">{selectedApplicant.cover_letter}</p>
                    </div>
                  </div>
                )}
                
                {/* Quick Actions */}
                <div className="flex flex-wrap gap-2 pt-4 border-t">
                  <a href={`mailto:${selectedApplicant.email}`}>
                    <Button variant="outline" size="sm">
                      <Mail className="w-4 h-4 mr-2" />
                      Send Email
                    </Button>
                  </a>
                  <a href={`tel:${selectedApplicant.phone}`}>
                    <Button variant="outline" size="sm">
                      <Phone className="w-4 h-4 mr-2" />
                      Call
                    </Button>
                  </a>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminDashboard;
