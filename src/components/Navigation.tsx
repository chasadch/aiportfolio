import { motion, useScroll } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollY } = useScroll();
  const [navBackground, setNavBackground] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setNavBackground(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        navBackground ? "glass backdrop-blur-xl" : ""
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ 
              scale: 1.1,
              rotate: [0, -10, 10, -10, 0],
            }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="font-bold text-2xl text-gradient flex items-center gap-2">
              <Sparkles className="w-6 h-6" />
              MA
            </div>
            <motion.div
              className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 glass rounded-full px-6 py-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.1,
                  y: -2,
                }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-4 py-2 rounded-full transition-all duration-300 ${
                  activeSection === item.name.toLowerCase() 
                    ? "text-primary" 
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {activeSection === item.name.toLowerCase() && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-primary/10 rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-3 rounded-full glass"
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
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
          <div className="glass rounded-2xl mt-4 p-4 space-y-2">
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
                whileHover={{ x: 10, scale: 1.05 }}
                className="block py-3 px-4 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200"
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}