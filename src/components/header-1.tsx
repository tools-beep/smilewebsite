import { useEffect, useMemo, useRef, useState } from "react"
import { AnimatePresence, motion, MotionConfig } from "motion/react"
import { useTheme } from "next-themes"
import { Link } from "react-router-dom"

export function useScrollY(containerRef: React.RefObject<HTMLElement | null> | null) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef && containerRef.current) {
        setScrollY(containerRef.current.scrollTop)
      } else {
        setScrollY(window.scrollY)
      }
    }

    const container = containerRef?.current
    if (container) {
      container.addEventListener("scroll", handleScroll)
    } else {
      window.addEventListener("scroll", handleScroll)
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll)
      } else {
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, [containerRef])

  return scrollY
}

export function StickyHeader({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLElement | null>
}) {
  const scrollY = useScrollY(containerRef)
  const stickyNavRef = useRef<HTMLElement>(null)
  const { theme } = useTheme()
  const [active, setActive] = useState(false)

  const navLinks = useMemo(
    () => [
      { id: 1, label: "Home", link: "#home" },
      { id: 2, label: "About", link: "/about" },
      { id: 3, label: "Services", link: "#services", children: [
        { id: "svc-1", label: "Cosmetic Dentistry", link: "#services-cosmetic" },
        { id: "svc-2", label: "General & Family", link: "#services-general" },
        { id: "svc-3", label: "Restorative & Reconstructive Dentistry", link: "#services-restorative" },
        { id: "svc-4", label: "Surgical & Emergency", link: "#services-surgical" },
      ] },
      { id: 4, label: "Contact", link: "#contact" },
    ],
    []
  )

  return (
    <header ref={stickyNavRef} className="sticky top-0 z-50 px-10 py-7 xl:px-0">
      <nav className="relative mx-auto flex max-w-2xl items-center justify-between">
        <Link to="/">
          <motion.img
            className="h-12 w-auto"
            src="/smilelogo.png"
            alt="Smile Innovation Logo"
            animate={{
              y: scrollY >= 120 ? -50 : 0,
              opacity: scrollY >= 120 ? 0 : 1,
            }}
            transition={{ duration: 0.15 }}
          />
        </Link>

        <ul className="sticky top-4 right-4 left-4 z-[60] hidden items-center justify-center gap-x-5 md:flex">
          <motion.div
            initial={{ x: 0 }}
            animate={{
              boxShadow:
                scrollY >= 120
                  ? theme === "dark"
                    ? "0 0 0 1px rgba(255,255,255,.08), 0 1px 2px -1px rgba(255,255,255,.08), 0 2px 4px rgba(255,255,255,.04)"
                    : "0 0 0 1px rgba(17,24,28,.08), 0 1px 2px -1px rgba(17,24,28,.08), 0 2px 4px rgba(17,24,28,.04)"
                  : "none",
            }}
            transition={{
              ease: "linear",
              duration: 0.05,
              delay: 0.05,
            }}
            className="bg-background flex h-12 w-auto items-center justify-center overflow-hidden rounded-full px-6 py-2.5 transition-all md:p-1.5 md:py-2"
          >
            <nav className="relative h-full items-center justify-between gap-x-3.5 md:flex">
              <ul className="flex h-full flex-col justify-center gap-6 md:flex-row md:justify-start md:gap-0 lg:gap-1">
                {navLinks.map((navItem) => (
                  <li
                    key={navItem.id}
                    className="flex items-center justify-center px-[0.75rem] py-[0.375rem]"
                  >
                    <a href={navItem.link}>{navItem.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <motion.div
              initial={{ width: 0 }}
              animate={{
                width: scrollY >= 120 ? "auto" : 0,
              }}
              transition={{
                ease: "linear",
                duration: 0.25,
                delay: 0.05,
              }}
              className="!hidden overflow-hidden rounded-full md:!block"
            >
              <AnimatePresence>
                {scrollY >= 120 && (
                  <motion.ul
                    initial={{ x: "125%" }}
                    animate={{ x: "0" }}
                    exit={{
                      x: "125%",
                      transition: { ease: "linear", duration: 1 },
                    }}
                    transition={{ ease: "linear", duration: 0.3 }}
                    className="shrink-0 whitespace-nowrap"
                  >
                    <li>
                      <a
                        href="#contact"
                        className="bg-primary text-primary-foreground relative inline-flex w-fit items-center justify-center gap-x-1.5 overflow-hidden rounded-full px-3 py-1.5 outline-none"
                      >
                        Get Started
                      </a>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </ul>

        <motion.div
          className="z-[999] hidden items-center gap-x-5 md:flex"
          animate={{
            y: scrollY >= 120 ? -50 : 0,
            opacity: scrollY >= 120 ? 0 : 1,
          }}
          transition={{ duration: 0.15 }}
        >
          <a href="#contact">
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-full hover:bg-primary/90 transition-colors">
              Get Started
            </button>
          </a>
        </motion.div>
        <MotionConfig transition={{ duration: 0.3, ease: "easeInOut" }}>
          <motion.button
            onClick={() => setActive((prev) => !prev)}
            animate={active ? "open" : "close"}
            className="relative flex h-8 w-8 items-center justify-center rounded-md md:hidden"
          >
            <motion.span
              style={{ left: "50%", top: "35%", x: "-50%", y: "-50%" }}
              className="absolute h-0.5 w-5 bg-black dark:bg-white"
              variants={{
                open: {
                  rotate: ["0deg", "0deg", "45deg"],
                  top: ["35%", "50%", "50%"],
                },
                close: {
                  rotate: ["45deg", "0deg", "0deg"],
                  top: ["50%", "50%", "35%"],
                },
              }}
              transition={{ duration: 0.3 }}
            ></motion.span>
            <motion.span
              style={{ left: "50%", top: "50%", x: "-50%", y: "-50%" }}
              className="absolute h-0.5 w-5 bg-black dark:bg-white"
              variants={{
                open: {
                  opacity: 0,
                },
                close: {
                  opacity: 1,
                },
              }}
            ></motion.span>
            <motion.span
              style={{ left: "50%", bottom: "30%", x: "-50%", y: "-50%" }}
              className="absolute h-0.5 w-5 bg-black dark:bg-white"
              variants={{
                open: {
                  rotate: ["0deg", "0deg", "-45deg"],
                  top: ["65%", "50%", "50%"],
                },
                close: {
                  rotate: ["-45deg", "0deg", "0deg"],
                  top: ["50%", "50%", "65%"],
                },
              }}
              transition={{ duration: 0.3 }}
            ></motion.span>
          </motion.button>
        </MotionConfig>
      </nav>
    </header>
  )
}

export function Header() {
  const containerRef = useRef<HTMLElement>(null)

  return (
    <main ref={containerRef} className="h-[100vh] w-full overflow-y-auto">
      <StickyHeader containerRef={containerRef} />
      <div className="w-full">
        <div className="mx-auto flex h-[200vh] w-full max-w-3xl flex-col items-center justify-center gap-y-5"></div>
      </div>
    </main>
  )
}

// Site-ready header that responds to window scroll and only renders the sticky header bar
export function SiteHeader() {
  const scrollY = useScrollY(null)
  const { theme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [expandedService, setExpandedService] = useState<string | null>(null)
  
  const servicesCategories = useMemo(
    () => [
      {
        id: "svc-1",
        label: "Cosmetic Dentistry",
        link: "/services/cosmetic-dentistry",
        items: [
          { id: "cos-1", label: "Teeth Whitening", link: "/services/teeth-whitening" },
          { id: "cos-2", label: "Invisalign", link: "/services/invisalign" },
          { id: "cos-3", label: "Veneers", link: "/services/veneers" },
          { id: "cos-4", label: "Smile Makeover", link: "/services/smile-makeover" },
          { id: "cos-5", label: "Bonding", link: "/services/bonding" },
          { id: "cos-6", label: "Cosmetic Consultations", link: "/services/cosmetic-consultations" },
        ],
      },
      {
        id: "svc-2",
        label: "General & Family",
        link: "/services/general-family",
        items: [
          { id: "gen-1", label: "Pediatric Dentistry", link: "/services/pediatric-dentistry" },
          { id: "gen-2", label: "Cleaning and Exams", link: "/services/cleaning-exams" },
          { id: "gen-3", label: "Sealants and Fluoride", link: "/services/sealants-fluoride" },
          { id: "gen-4", label: "X-rays", link: "/services/xrays" },
          { id: "gen-5", label: "Night Guard", link: "/services/night-guard" },
        ],
      },
      {
        id: "svc-3",
        label: "Restorative & Reconstructive",
        link: "/services/restorative-reconstructive",
        items: [
          { id: "res-1", label: "Crowns & Bridges", link: "/services/crowns-bridges" },
          { id: "res-2", label: "Dental Implants", link: "/services/implants" },
          { id: "res-3", label: "Full Mouth Rehabilitation", link: "/services/full-mouth-rehabilitation" },
          { id: "res-4", label: "Dentures & Partials", link: "/services/dentures-partials" },
          { id: "res-5", label: "Tooth-Colored Fillings", link: "/services/tooth-colored-fillings" },
        ],
      },
      {
        id: "svc-4",
        label: "Surgical & Emergency",
        link: "/services/surgical-emergency",
        items: [
          { id: "sur-1", label: "Emergency Dentistry", link: "/services/emergency-dentistry" },
          { id: "sur-2", label: "Root Canal Treatment", link: "/services/root-canal" },
          { id: "sur-3", label: "Oral Surgery", link: "/services/oral-surgery" },
          { id: "sur-4", label: "Tooth Extraction", link: "/services/tooth-extraction" },
          { id: "sur-5", label: "Sleep Dentistry", link: "/services/sleep-dentistry" },
          { id: "sur-6", label: "Laser Dentistry", link: "/services/laser-dentistry" },
        ],
      },
    ],
    []
  )
  const navLinks = useMemo(
    () => [
      { id: 1, label: "Home", link: "/" },
      { id: 2, label: "About", link: "/about" },
      { id: 3, label: "Services", link: "/services", children: servicesCategories as any },
      { id: 4, label: "Contact", link: "/#contact" },
    ],
    [servicesCategories]
  )
  const [activeServiceIndex, setActiveServiceIndex] = useState(0)

  const handleContactClick = (e: React.MouseEvent) => {
    // If we're on the home page, just scroll to contact
    if (window.location.pathname === '/') {
      e.preventDefault()
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }
    // Otherwise, navigate to /#contact (default link behavior)
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 px-4 sm:px-6 lg:px-10 py-4 sm:py-7 xl:px-0 bg-background/60 backdrop-blur-md">
      <nav className="relative mx-auto flex max-w-6xl items-center justify-between">
        <Link to="/" className="flex-shrink-0">
          <motion.img
            className="h-8 sm:h-10 w-auto"
            src="/smilelogo.png"
            alt="Smile Innovation Logo"
            animate={{ y: scrollY >= 120 ? -50 : 0, opacity: scrollY >= 120 ? 0 : 1 }}
            transition={{ duration: 0.15 }}
          />
        </Link>
        
        {/* Desktop Navigation */}
        <motion.div
          initial={{ x: 0 }}
          animate={{
            boxShadow:
              scrollY >= 120
                ? theme === "dark"
                  ? "0 0 0 1px rgba(255,255,255,.08), 0 1px 2px -1px rgba(255,255,255,.08), 0 2px 4px rgba(255,255,255,.04)"
                  : "0 0 0 1px rgba(17,24,28,.08), 0 1px 2px -1px rgba(17,24,28,.08), 0 2px 4px rgba(17,24,28,.04)"
                : "none",
          }}
          transition={{ ease: "linear", duration: 0.05, delay: 0.05 }}
          className="bg-background hidden h-12 items-center justify-center rounded-full px-3 py-2.5 transition-all md:flex"
        >
          <nav className="relative h-full items-center justify-between gap-x-3.5 md:flex">
            <ul className="flex h-full flex-col justify-center gap-6 md:flex-row md:justify-start md:gap-0 lg:gap-1">
              {navLinks.map((navItem) => (
                <li key={navItem.id} className="relative flex items-center justify-center px-[0.75rem] py-[0.375rem] group">
                  {navItem.label === "Contact" ? (
                    <a href="/#contact" onClick={handleContactClick}>{navItem.label}</a>
                  ) : (
                    <Link to={navItem.link}>{navItem.label}</Link>
                  )}
                  {Array.isArray((navItem as any).children) && (
                    <>
                      {/* Invisible bridge to prevent hover gap */}
                      <div className="absolute left-0 top-full h-4 w-full hidden group-hover:block"></div>
                      <div className="absolute left-0 top-full pt-4 hidden rounded-xl group-hover:block z-50 w-[560px]">
                        <div className="border bg-background p-3 shadow-lg rounded-xl">
                      <div className="grid grid-cols-2 gap-4">
                        <ul className="flex flex-col">
                          {(navItem as any).children.map((child: any, idx: number) => (
                            <li
                              key={child.id}
                                  className={`px-3 py-2 rounded-md cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors ${idx === activeServiceIndex ? 'bg-accent/50' : ''}`}
                              onMouseEnter={() => setActiveServiceIndex(idx)}
                            >
                                  <Link to={child.link} className="block">{child.label}</Link>
                            </li>
                          ))}
                        </ul>
                        <ul className="flex flex-col">
                          {((navItem as any).children[activeServiceIndex]?.items || []).map((item: any) => (
                                <li key={item.id} className="px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">
                                  <Link to={item.link} className="block">{item.label}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <motion.div initial={{ width: 0 }} animate={{ width: scrollY >= 120 ? "auto" : 0 }} transition={{ ease: "linear", duration: 0.25, delay: 0.05 }} className="!hidden overflow-hidden rounded-full md:!block">
            <AnimatePresence>
              {scrollY >= 120 && (
                <motion.ul initial={{ x: "125%" }} animate={{ x: "0" }} exit={{ x: "125%", transition: { ease: "linear", duration: 1 } }} transition={{ ease: "linear", duration: 0.3 }} className="shrink-0 whitespace-nowrap flex gap-2">
                  <li>
                    <Link to="/careers" className="bg-secondary text-secondary-foreground relative inline-flex w-fit items-center justify-center gap-x-1.5 overflow-hidden rounded-full px-3 py-1.5 outline-none hover:bg-secondary/90 transition-colors">
                      Apply
                    </Link>
                  </li>
                  <li>
                    <a href="/#contact" onClick={handleContactClick} className="bg-primary text-primary-foreground relative inline-flex w-fit items-center justify-center gap-x-1.5 overflow-hidden rounded-full px-3 py-1.5 outline-none">
                      Get Started
                    </a>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
        
        {/* Desktop CTA Buttons */}
        <motion.div className="z-[999] hidden items-center gap-x-3 md:flex" animate={{ y: scrollY >= 120 ? -50 : 0, opacity: scrollY >= 120 ? 0 : 1 }} transition={{ duration: 0.15 }}>
          <Link to="/careers">
            <button className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full hover:bg-secondary/90 transition-colors">
              Apply
            </button>
          </Link>
          <a href="/#contact" onClick={handleContactClick}>
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-full hover:bg-primary/90 transition-colors">
              Get Started
            </button>
          </a>
        </motion.div>

        {/* Mobile Menu Button */}
        <MotionConfig transition={{ duration: 0.3, ease: "easeInOut" }}>
          <motion.button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            animate={mobileMenuOpen ? "open" : "close"}
            className="relative flex h-10 w-10 items-center justify-center rounded-lg md:hidden bg-muted/50"
            aria-label="Toggle menu"
          >
            <motion.span
              style={{ left: "50%", top: "35%", x: "-50%", y: "-50%" }}
              className="absolute h-0.5 w-5 bg-foreground"
              variants={{
                open: {
                  rotate: ["0deg", "0deg", "45deg"],
                  top: ["35%", "50%", "50%"],
                },
                close: {
                  rotate: ["45deg", "0deg", "0deg"],
                  top: ["50%", "50%", "35%"],
                },
              }}
              transition={{ duration: 0.3 }}
            ></motion.span>
            <motion.span
              style={{ left: "50%", top: "50%", x: "-50%", y: "-50%" }}
              className="absolute h-0.5 w-5 bg-foreground"
              variants={{
                open: {
                  opacity: 0,
                },
                close: {
                  opacity: 1,
                },
              }}
            ></motion.span>
            <motion.span
              style={{ left: "50%", bottom: "30%", x: "-50%", y: "-50%" }}
              className="absolute h-0.5 w-5 bg-foreground"
              variants={{
                open: {
                  rotate: ["0deg", "0deg", "-45deg"],
                  top: ["65%", "50%", "50%"],
                },
                close: {
                  rotate: ["-45deg", "0deg", "0deg"],
                  top: ["50%", "50%", "65%"],
                },
              }}
              transition={{ duration: 0.3 }}
            ></motion.span>
          </motion.button>
        </MotionConfig>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
          >
            <div className="pt-4 pb-6 space-y-2">
              {/* Main Nav Links */}
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-lg font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-lg font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
              >
                About
              </Link>
              
              {/* Services with Accordion */}
              <div>
                <button
                  onClick={() => setExpandedService(expandedService === 'services' ? null : 'services')}
                  className="flex items-center justify-between w-full px-4 py-3 text-lg font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                >
                  <span>Services</span>
                  <motion.svg
                    animate={{ rotate: expandedService === 'services' ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>
                
                <AnimatePresence>
                  {expandedService === 'services' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 space-y-1 mt-1">
                        {servicesCategories.map((category) => (
                          <Link
                            key={category.id}
                            to={category.link}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-4 py-2.5 text-base text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                          >
                            {category.label}
                          </Link>
                        ))}
                        <Link
                          to="/services"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-4 py-2.5 text-base font-medium text-primary hover:bg-primary/10 rounded-lg transition-colors"
                        >
                          View All Services →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <a
                href="/#contact"
                onClick={handleContactClick}
                className="block px-4 py-3 text-lg font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
              >
                Contact
              </a>
              
              {/* Divider */}
              <div className="border-t border-border my-4"></div>
              
              {/* CTA Buttons */}
              <div className="space-y-3 px-4">
                <a href="tel:+14808207777" className="block">
                  <button className="w-full bg-primary text-primary-foreground px-4 py-3 rounded-full hover:bg-primary/90 transition-colors font-medium">
                    Call (480) 820-7777
                  </button>
                </a>
                <Link to="/careers" onClick={() => setMobileMenuOpen(false)} className="block">
                  <button className="w-full bg-secondary text-secondary-foreground px-4 py-3 rounded-full hover:bg-secondary/90 transition-colors font-medium">
                    Apply for Jobs
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
