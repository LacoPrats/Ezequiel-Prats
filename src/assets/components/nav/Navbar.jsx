"use client"

import React from 'react'
import './navbar.css'
import { motion } from 'framer-motion'
import { Home, User, Layers, Mail } from 'lucide-react'

const navLinks = [
  { icon: <Home />, label: "Home", href: "#header" },
  { icon: <User />, label: "About", href: "#about" },
  { icon: <Layers />, label: "Projects", href: "#portfolio" },
  { icon: <Mail />, label: "Contact", href: "#contact" }
]

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 12 }}
    >
      <motion.div
        className="logo"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h3>
          <span className="logo-e">E</span>
          <span className="logo-p">P</span>
        </h3>
      </motion.div>

      <motion.div
        className="nav-links"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15
            }
          }
        }}
      >
        {navLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            whileHover={{ scale: 1.2, color: "#a855f7" }}
            whileTap={{ scale: 0.95 }}
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            {link.icon}
            <span>{link.label}</span>
          </motion.a>
        ))}
      </motion.div>
    </motion.nav>
  )
}

export default Navbar
