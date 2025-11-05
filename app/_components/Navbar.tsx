'use client'


import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'


export default function Navbar() {
  const [visible, setVisible] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false) // Mobile menu state

  const router=useRouter();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setVisible(false) // scrolling down → hide
      } else {
        setVisible(true) // scrolling up → show
      }
      setScrolled(window.scrollY > 50)
      setLastScrollY(window.scrollY)

      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  // Close mobile menu when clicking on a link
  const handleNavClick = () => {
    setMobileMenuOpen(false)
  }

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' }
  ]

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      visible ? 'translate-y-0' : '-translate-y-full'
    } ${
      scrolled ? 'bg-black/80 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            
            
            <span onClick={()=>router.push('/')} className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent cursor-pointer">
              Ravi.tech
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  className={`px-3 py-2 rounded-md text-lg font-medium transition-all duration-300 hover:scale-105 ${
                    activeSection === item.href.substring(1) 
                      ? 'text-cyan-400 bg-cyan-400/10 border-b-2 border-cyan-400' 
                      : 'text-white hover:text-cyan-400'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full text-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-cyan-400 focus:outline-none focus:text-cyan-400 transition-colors duration-300"
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Conditionally rendered */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                onClick={handleNavClick}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                  activeSection === item.href.substring(1) 
                    ? 'text-cyan-400 bg-cyan-400/10' 
                    : 'text-white hover:text-cyan-400 hover:bg-white/5'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="/contact" 
              onClick={handleNavClick}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white block px-3 py-2 rounded-md text-base font-medium text-center hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 mt-4"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}