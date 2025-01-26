"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-sm fixed w-full z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold">
            MWP
          </Link>

          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className={`text-gray-600 hover:text-gray-900 ${pathname === "/" ? "font-semibold" : ""}`}
            >
              Home
            </button>
            <button onClick={() => scrollToSection("features")} className="text-gray-600 hover:text-gray-900">
              Features
            </button>
            <Link
              href="/about"
              className={`text-gray-600 hover:text-gray-900 ${pathname === "/about" ? "font-semibold" : ""}`}
            >
              About
            </Link>
            <Link
              href="/services"
              className={`text-gray-600 hover:text-gray-900 ${pathname === "/services" ? "font-semibold" : ""}`}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className={`text-gray-600 hover:text-gray-900 ${pathname === "/contact" ? "font-semibold" : ""}`}
            >
              Contact
            </Link>
          </nav>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className={`text-gray-600 hover:text-gray-900 ${pathname === "/" ? "font-semibold" : ""}`}
              >
                Home
              </button>
              <button onClick={() => scrollToSection("features")} className="text-gray-600 hover:text-gray-900">
                Features
              </button>
              <Link
                href="/about"
                className={`text-gray-600 hover:text-gray-900 ${pathname === "/about" ? "font-semibold" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className={`text-gray-600 hover:text-gray-900 ${pathname === "/services" ? "font-semibold" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/contact"
                className={`text-gray-600 hover:text-gray-900 ${pathname === "/contact" ? "font-semibold" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

