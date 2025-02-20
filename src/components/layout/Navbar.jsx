// components/layout/Navbar.jsx
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Close menu when resizing to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  const navbarClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    scrolled 
      ? 'bg-white shadow-md py-2' 
      : 'bg-transparent py-4'
  }`;

  const navLinks = [
    { title: 'Personal', href: '/personal' },
    { title: 'Business', href: '/business' },
    { title: 'Investments', href: '/investments' },
    { title: 'About Us', href: '/about' }
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <nav className={navbarClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className={`text-2xl font-bold ${scrolled ? 'text-primary-600' : 'text-white'}`}>
              Global Online Banking
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.title} 
                href={link.href}
                className={`font-medium hover:text-primary-500 transition-colors ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.title}
              </Link>
            ))}
            <Link href="/login">
              <Button 
                variant={scrolled ? "outline" : "secondary"} 
                className="ml-4"
              >
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button variant="primary">Get Started</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-5">
              <span 
                className={`absolute h-0.5 w-6 transform transition duration-300 ease-in-out ${
                  isMenuOpen 
                    ? 'rotate-45 translate-y-2.5 bg-gray-900' 
                    : `${scrolled ? 'bg-gray-900' : 'bg-white'}`
                }`}
              />
              <span 
                className={`absolute h-0.5 w-6 top-2 transition-opacity duration-300 ease-in-out ${
                  isMenuOpen 
                    ? 'opacity-0' 
                    : `opacity-100 ${scrolled ? 'bg-gray-900' : 'bg-white'}`
                }`}
              />
              <span 
                className={`absolute h-0.5 w-6 top-4 transform transition duration-300 ease-in-out ${
                  isMenuOpen 
                    ? '-rotate-45 -translate-y-2.5 bg-gray-900' 
                    : `${scrolled ? 'bg-gray-900' : 'bg-white'}`
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden mt-4 bg-white rounded-lg shadow-xl overflow-hidden"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <div className="px-4 py-2">
                {navLinks.map((link) => (
                  <motion.div key={link.title} variants={itemVariants}>
                    <Link 
                      href={link.href}
                      className="block py-3 text-gray-900 font-medium hover:text-primary-500 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.title}
                    </Link>
                    <div className="h-px bg-gray-100 my-1" />
                  </motion.div>
                ))}

                <motion.div variants={itemVariants} className="pt-2 pb-4 space-y-3">
                  <Link 
                    href="/propeneer-login" 
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full"
                  >
                    <Button variant="outline" className="w-full">
                      Login
                    </Button>
                  </Link>
                  <Link 
                    href="/join" 
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full"
                  >
                    <Button variant="primary" className="w-full">
                      Get Started
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
