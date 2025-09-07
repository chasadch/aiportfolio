import React from "react";
import { motion, useScroll } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Work", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800"
    >
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="font-bold text-xl text-white tracking-wider"
          >
            MUHAMMAD ASAD ARSHAD
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)"
                }}
                className="relative px-4 py-2 text-white hover:text-blue-400 transition-colors duration-300 font-medium tracking-wide rounded-lg overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <span className="relative z-10">{item.name}</span>
                <motion.div
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"
                />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)"
            }}
            whileTap={{ scale: 0.9 }}
            className="relative md:hidden p-2 text-white rounded-lg overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ 
            opacity: isOpen ? 1 : 0,
            height: isOpen ? "auto" : 0,
            y: isOpen ? 0 : -20
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, x: -30 }}
                animate={{ 
                  opacity: isOpen ? 1 : 0, 
                  x: isOpen ? 0 : -30 
                }}
                transition={{ 
                  duration: 0.3, 
                  delay: isOpen ? index * 0.1 : 0 
                }}
                onClick={() => setIsOpen(false)}
                whileHover={{ 
                  x: 10,
                  scale: 1.02
                }}
                className="relative block px-4 py-2 text-white hover:text-blue-400 transition-colors duration-200 font-medium rounded-lg overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <span className="relative z-10">{item.name}</span>
                <motion.div
                  className="absolute left-0 top-0 w-0 h-full bg-blue-400/20 group-hover:w-1 transition-all duration-300"
                />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}