import React, { useState, useEffect } from "react"
import { HiMenu, HiX } from "react-icons/hi"
import { NavLink, useNavigate, useLocation } from "react-router-dom"
import websitelogo from '../../assets/websitelogo.png'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeScroll, setActiveScroll] = useState("hero") // Track scroll sections
  const navigate = useNavigate()
  const location = useLocation()

  const navigationData = {
    logo: { text: "FuelDeal.ai" },
    menuItems: [
      { id: 1, label: "Home", href: "/", isScroll: true, scrollId: "hero" },
      { id: 2, label: "How it works", href: "/", isScroll: true, scrollId: "how-it-works" },
      { id: 3, label: "Modules", href: "" },
      { id: 4, label: "Pricing", href: "/pricing" },
      { id: 5, label: "About Us", href: "/about_us" },
      { id: 6, label: "FAQ", href: "/faq" },
    ],
    ctaButton: { text: "Register", href: "/register" },
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const scrollToSection = (id) => {
    const offset = 100
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: "smooth" })
      setActiveScroll(id)
    }
  }

  const handleNavClick = (item) => {
    setIsMenuOpen(false)

    if (item.isScroll) {
      // If Home clicked
      if (item.scrollId === "hero") {
        setActiveScroll("hero") // explicitly set Home active
      }

      if (location.pathname !== "/") {
        navigate("/", { state: { scrollTo: item.scrollId } })
      } else {
        scrollToSection(item.scrollId)
      }
    } else {
      setActiveScroll(null) // reset scroll active for normal pages
      navigate(item.href)
    }
  }


  // Track scroll and update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationData.menuItems
        .filter(i => i.isScroll)
        .map(i => document.getElementById(i.scrollId))
        .filter(Boolean)

      const offset = 120
      const scrollPos = window.scrollY + offset
      let current = sections[0]?.id || "hero"

      for (let section of sections) {
        if (section.offsetTop <= scrollPos) {
          current = section.id
        }
      }

      setActiveScroll(current)
    }

    if (location.pathname === "/") {
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    } else {
      setActiveScroll(null)
    }
  }, [location.pathname])

  return (
    <header className="fixed top-0 left-0  w-full bg-[#0F172A] z-50 ">
      <div className="mx-auto  px-5 lg:px-15 xl:15 2xl:px-36">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
           onClick={() => {
  if (location.pathname !== "/") {
    // If on another route, go home first and then scroll to hero
    navigate("/", { state: { scrollTo: "hero" } })
  } else {
    // If already home, force scroll to very top
    window.scrollTo({ top: 0, behavior: "smooth" })
    setActiveScroll("hero")
  }
}}

            className="flex items-center gap-5 cursor-pointer">
            <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
              <img
                src={websitelogo}
                alt="Website Logo"
                className="scale-140 h-full w-full rounded-full border-2 border-transparent hover:border-[#66ADD3] transition-colors duration-300 transform "
              />
            </div>
            <span className="font-bold text-3xl xl:text-4xl">{navigationData.logo.text}</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationData.menuItems.map(item => {
              const isActive = item.isScroll
                ? activeScroll === item.scrollId
                : activeScroll === null && location.pathname === item.href

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`cursor-pointer text-md font-medium hover:text-blue-300 hover:font-bold transition-transform duration-900 ease-in-out ${isActive ? "text-[#66ADD3] underline underline-offset-4" : "text-gray-300"
                    }`}
                >
                  {item.label}
                </button>
              )
            })}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <NavLink
              to={navigationData.ctaButton.href}
              className="bg-[#66ADD3] hover:bg-[#309dd8] text-black px-6 py-3 rounded-lg text-sm font-semibold transition-colors duration-200 cursor-pointer"
            >
              {navigationData.ctaButton.text}
            </NavLink>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-300 hover:text-white cursor-pointer">
              {isMenuOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2">
            {navigationData.menuItems.map(item => {
              const isActive = item.isScroll
                ? activeScroll === item.scrollId
                : activeScroll === null && location.pathname === item.href

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`block w-full text-left px-3 py-2 rounded-md ${isActive ? "text-[#66ADD3] underline underline-offset-4" : "text-gray-300"
                    } hover:text-blue-300 hover:bg-slate-800 cursor-pointer`}
                >
                  {item.label}
                </button>
              )
            })}
          </div>
        )}
      </div>
    </header>
  )
}

export default NavBar
