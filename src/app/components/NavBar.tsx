"use client"
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FiAlignJustify, FiX, FiChevronDown } from "react-icons/fi"; // Import FiChevronDown

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [menuIcon, setMenuIcon] = useState(<FiAlignJustify />); // Initial icon

  // Function to handle outside clicks for mobile menu
  const handleOutsideClick = useCallback((event: MouseEvent) => {
    if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
      setIsMobileMenuOpen(false);
    }
  }, []);

  // Effect to add and remove the click listener
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      setMenuIcon(<FiX />); // Change icon when menu is open
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
      setMenuIcon(<FiAlignJustify />); // Change back when menu is closed
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isMobileMenuOpen, handleOutsideClick]);

  // Toggle function for mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Animation variants
  const mobileMenuVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
        duration: 0.3,
      },
    },
    closed: {
      x: '-100%',
      opacity: 0,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
        duration: 0.3,
      },
    },
  };

  // const navItemVariants = {
  //       hidden: { opacity: 0, y: -10 },
  //       visible: { opacity: 1, y: 0 },
  //   };

  // School classes data
  const schoolClasses = [
    { name: 'JSS1', url: '/classes/jss1' },
    { name: 'JSS2', url: '/classes/jss2' },
    { name: 'JSS3', url: '/classes/jss3' },
    { name: 'SS1', url: '/classes/ss1' },
    { name: 'SS2', url: '/classes/ss2' },
    { name: 'SS3', url: '/classes/ss3' },
  ];

  return (
    <nav className="bg-white shadow-md py-6 px-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Left Child: App Name/Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center text-xl font-bold text-gray-800   transition-colors duration-300">
            Teacher&apos;s Aid
          </Link>
        </div>

        {/* Right Child: Desktop Navigation and Mobile Menu Button */}
        <div className="flex items-center">
          {/* Desktop Navigation (Hidden on small screens) */}
          <ul className="hidden md:flex space-x-6">
            {schoolClasses.map((schoolClass) => (
              <li key={schoolClass.name}>
                <Link
                  href={schoolClass.url}
                  className="text-gray-700 hover:bg-gray-100 transition-colors duration-300 flex items-center p-2" // Added flex and items-center
                >
                  {schoolClass.name} <FiChevronDown className="ml-1 w-4 h-4" /> {/* Added the icon */}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button (Visible on small screens) */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:bg-gray-100 transition-colors duration-300"
              aria-label="Toggle Mobile Menu"
            >
              {menuIcon}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Slide-in) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 left-0 bg-white z-50 w-full max-w-xs"
          >
            <div className="p-4">
              <div className="flex justify-end mb-4">
                <button
                  onClick={toggleMobileMenu}
                  className="text-gray-700 hover:bg-gray-200 transition-colors duration-300" // Corrected hover background
                  aria-label="Close Mobile Menu"
                >
                  <FiX className="w-6 h-6" />
                </button>
              </div>
              <ul className="space-y-4">
                <li> {/* App Name as First Item with lightgray background */}
                  <Link
                    href="/"
                    className="block text-xl font-bold text-gray-800 hover:bg-gray-100 transition-colors duration-300 p-2 bg-gray-100"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Choose Class
                  </Link>
                </li>
                {schoolClasses.map((schoolClass) => (
                  <li key={schoolClass.name}>
                    <Link
                      href={schoolClass.url}
                      className="block text-gray-700 hover:bg-gray-100 transition-colors duration-300 p-2 flex items-center" // Added flex and items-center
                      onClick={() => setIsMobileMenuOpen(false)} // Close menu on item click
                    >
                      {schoolClass.name} <FiChevronDown className="ml-1 w-4 h-4" /> {/* Added the icon */}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;