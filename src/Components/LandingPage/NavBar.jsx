"use client"

import React, { useState } from "react"
import { HiMenu, HiX } from "react-icons/hi"
import { NavLink } from "react-router-dom"
import { Link as ScrollLink } from "react-scroll" // 👈 For smooth scroll
import websitelogo from '../../assets/websitelogo.png'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigationData = {
    logo: { text: "FuelDeal.ai", icon: "⚡" },
    menuItems: [
      { id: 1, label: "Home", href: "/" },
      { id: 2, label: "How it works", href: "how-it-works", isScroll: true }, // 👈 only this will scroll
      { id: 3, label: "Modules", href: "/modules" },
      { id: 4, label: "Pricing", href: "/pricing" },
      { id: 5, label: "About Us", href: "/about_us" },
      { id: 6, label: "FAQ", href: "/faq" },
    ],
    ctaButton: { text: "Register", href: "/register" },
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const activeClass = "text-[#66ADD3] underline underline-offset-4"
  const inactiveClass = "text-gray-300"

  return (
    <header className="text-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <img
                src={websitelogo}
                alt="Website Logo"
                className="scale-140 h-full w-full rounded-full border-2 border-transparent hover:border-[#66ADD3] transition-colors duration-300 transform hover:scale-[1.1]"
              />
            </div>
            <span className="font-bold text-3xl xl:text-4xl">{navigationData.logo.text}</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-base">
            {navigationData.menuItems.map(item => (
              item.isScroll ? (
                <ScrollLink
                  key={item.id}
                  to={item.href}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer text-md font-medium hover:text-blue-300 hover:font-bold transition-transform duration-900 ease-in-out"
                  activeClass={activeClass}
                  spy={true}
                >
                  {item.label}
                </ScrollLink>
              ) : (
                <NavLink
                  key={item.id}
                  to={item.href}
                  className={({ isActive }) =>
                    `text-md font-medium hover:text-blue-300 hover:font-bold transform transition-transform duration-900 ease-in-out ${isActive ? activeClass : inactiveClass}`
                  }
                >
                  {item.label}
                </NavLink>
              )
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <NavLink
              to={navigationData.ctaButton.href}
              className="bg-[#66ADD3] hover:bg-[#309dd8] text-black px-6 py-3 rounded-lg text-sm font-semibold transition-colors duration-200"
            >
              {navigationData.ctaButton.text}
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-300 hover:text-white focus:outline-none cursor-pointer hover:scale-105 transform transition-transform duration-700 ease-in-out">
              {isMenuOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-slate-700">
              {navigationData.menuItems.map(item => (
                item.isScroll ? (
                  <ScrollLink
                    key={item.id}
                    to={item.href}
                    smooth={true}
                    duration={500}
                    className="block px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-blue-300 hover:bg-slate-800 rounded-md cursor-pointer"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </ScrollLink>
                ) : (
                  <NavLink
                    key={item.id}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `block px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-blue-300 hover:bg-slate-800 rounded-md ${isActive ? activeClass : inactiveClass}`
                    }
                  >
                    {item.label}
                  </NavLink>
                )
              ))}

              <div className="pt-2">
                <NavLink
                  to={navigationData.ctaButton.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                >
                  {navigationData.ctaButton.text}
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default NavBar
