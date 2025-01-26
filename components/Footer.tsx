"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const pathname = usePathname()

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com" },
    { icon: Twitter, href: "https://twitter.com" },
    { icon: Instagram, href: "https://instagram.com" },
    { icon: Linkedin, href: "https://linkedin.com" },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-heading">Modern Web Project</h3>
            <p className="text-muted-foreground">Building the future of web experiences.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 font-heading">Quick Links</h4>
            <nav className="space-y-2 font-sans">
              <Link
                href="/"
                className={`block hover:text-primary transition-colors ${pathname === "/" ? "text-primary" : ""}`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`block hover:text-primary transition-colors ${pathname === "/about" ? "text-primary" : ""}`}
              >
                About
              </Link>
              <Link
                href="/services"
                className={`block hover:text-primary transition-colors ${pathname === "/services" ? "text-primary" : ""}`}
              >
                Services
              </Link>
              <Link
                href="/contact"
                className={`block hover:text-primary transition-colors ${pathname === "/contact" ? "text-primary" : ""}`}
              >
                Contact
              </Link>
            </nav>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 font-heading">Contact Us</h4>
            <address className="not-italic text-muted-foreground font-sans">
              <p>123 Web Street</p>
              <p>Internet City, Digital 12345</p>
              <p>Email: info@modernwebproject.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 font-heading">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <link.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-muted flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground font-sans">
            © {new Date().getFullYear()} Modern Web Project. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-primary text-primary-foreground p-2 rounded-full transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

