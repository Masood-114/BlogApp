// src/components/layout/Navbar/Navbar.jsx
// Professional Navbar - Fully Responsive (Mobile, Tablet, Desktop)
// Features: Dark mode, search, user menu, notifications, mobile menu

import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
  FaSearch,
  FaBell,
  FaUser,
  FaChevronDown,
  FaPencilAlt,
  FaBookmark,
  FaCog,
  FaSignOutAlt,
  FaHome,
  FaNewspaper,
  FaTh,
  FaInfoCircle,
  FaEnvelope,
} from 'react-icons/fa';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const location = useLocation();
  const navigate = useNavigate();
  const searchRef = useRef(null);
  const userMenuRef = useRef(null);

  // Navigation links
  const navLinks = [
    { name: 'Home', path: '/', icon: FaHome },
    { name: 'Blogs', path: '/blogs', icon: FaNewspaper },
    { name: 'Categories', path: '/categories', icon: FaTh },
    { name: 'About', path: '/about', icon: FaInfoCircle },
    { name: 'Contact', path: '/contact', icon: FaEnvelope },
  ];

  // User menu items
  const userMenuItems = [
    { name: 'My Profile', icon: FaUser, path: '/profile' },
    { name: 'Write Article', icon: FaPencilAlt, path: '/create' },
    { name: 'Bookmarks', icon: FaBookmark, path: '/bookmarks' },
    { name: 'Settings', icon: FaCog, path: '/settings' },
    { name: 'Logout', icon: FaSignOutAlt, action: 'logout' },
  ];

  // Dark mode initialization
  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode.toString());
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Close menus on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  // Handle user menu action
  const handleUserMenuAction = (item) => {
    if (item.action === 'logout') {
      // Add logout logic here
      console.log('Logout clicked');
    } else if (item.path) {
      navigate(item.path);
    }
    setUserMenuOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 shadow-lg backdrop-blur-lg dark:bg-gray-900/95'
          : 'bg-white/80 backdrop-blur-md dark:bg-gray-900/80'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link to="/" className="group z-50 flex items-center gap-3">
            <motion.div
              className="from-primary-600 via-primary-500 to-secondary-600 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br shadow-lg lg:h-12 lg:w-12"
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-xl font-bold text-white lg:text-2xl">
                M
              </span>
            </motion.div>
            <div className="hidden sm:block">
              <span className="from-primary-600 to-secondary-600 bg-gradient-to-r bg-clip-text text-xl font-bold text-transparent lg:text-2xl">
                ModernBlog
              </span>
              <p className="-mt-1 text-xs text-gray-500 dark:text-gray-400">
                Stories that matter
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex xl:gap-2">
            {navLinks.map((link, index) => {
              const isActive = location.pathname === link.path;
              return (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={`relative rounded-lg px-4 py-2 font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
                        : 'hover:text-primary-600 dark:hover:text-primary-400 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="bg-primary-600 dark:bg-primary-400 absolute right-0 bottom-0 left-0 h-0.5 rounded-full"
                        initial={false}
                        transition={{
                          type: 'spring',
                          stiffness: 500,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 lg:gap-3">
            {/* Search Button/Bar - Desktop */}
            <div className="relative hidden md:block" ref={searchRef}>
              <AnimatePresence>
                {searchOpen ? (
                  <motion.form
                    onSubmit={handleSearch}
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 280, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    className="relative"
                  >
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search articles..."
                      className="focus:ring-primary-500 w-full rounded-lg border border-gray-200 bg-gray-100 py-2 pr-4 pl-10 text-sm text-gray-900 focus:ring-2 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                      autoFocus
                    />
                    <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-sm text-gray-400" />
                  </motion.form>
                ) : (
                  <motion.button
                    onClick={() => setSearchOpen(true)}
                    className="rounded-lg p-2.5 text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaSearch className="text-lg" />
                  </motion.button>
                )}
              </AnimatePresence>
            </div>

            {/* Notifications - Desktop */}
            <motion.button
              className="relative hidden rounded-lg p-2.5 text-gray-700 transition-colors hover:bg-gray-100 md:flex dark:text-gray-300 dark:hover:bg-gray-800"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaBell className="text-lg" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 animate-pulse rounded-full bg-red-500" />
            </motion.button>

            {/* Dark Mode Toggle */}
            <motion.button
              onClick={toggleDarkMode}
              className="rounded-lg bg-gray-100 p-2.5 text-gray-700 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {darkMode ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaSun className="text-lg text-yellow-500" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaMoon className="text-lg text-gray-700" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* User Menu - Desktop */}
            <div className="relative hidden lg:block" ref={userMenuRef}>
              <motion.button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2 rounded-lg p-2 pr-3 pl-3 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <img
                  src="https://i.pravatar.cc/150?img=12"
                  alt="User"
                  className="border-primary-500 h-8 w-8 rounded-full border-2"
                />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  John Doe
                </span>
                <FaChevronDown
                  className={`text-xs text-gray-500 transition-transform ${userMenuOpen ? 'rotate-180' : ''}`}
                />
              </motion.button>

              {/* User Dropdown */}
              <AnimatePresence>
                {userMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-56 rounded-xl border border-gray-200 bg-white py-2 shadow-xl dark:border-gray-700 dark:bg-gray-800"
                  >
                    {userMenuItems.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => handleUserMenuAction(item)}
                        className={`flex w-full items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                          item.action === 'logout'
                            ? 'text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20'
                            : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                        }`}
                      >
                        <item.icon className="text-base" />
                        <span>{item.name}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Auth Buttons - Desktop (if not logged in) */}
            <div className="hidden items-center gap-2 lg:flex">
              {/* Uncomment when implementing auth */}
              {/* <Button variant="ghost" size="sm" onClick={() => navigate('/login')}>
                Login
              </Button>
              <Button variant="primary" size="sm" onClick={() => navigate('/register')}>
                Sign Up
              </Button> */}
            </div>

            {/* Mobile Menu Toggle */}
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="z-50 rounded-lg p-2.5 text-gray-700 transition-colors hover:bg-gray-100 lg:hidden dark:text-gray-300 dark:hover:bg-gray-800"
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <FaTimes className="text-xl" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <FaBars className="text-xl" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden"
              style={{ top: '4rem' }}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-16 right-0 bottom-0 w-80 max-w-[85vw] overflow-y-auto bg-white shadow-2xl lg:hidden dark:bg-gray-900"
            >
              <div className="space-y-6 p-6">
                {/* User Profile Section - Mobile */}
                <div className="flex items-center gap-3 border-b border-gray-200 pb-6 dark:border-gray-800">
                  <img
                    src="https://i.pravatar.cc/150?img=12"
                    alt="User"
                    className="border-primary-500 h-12 w-12 rounded-full border-2"
                  />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      John Doe
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      john@example.com
                    </p>
                  </div>
                </div>

                {/* Search - Mobile */}
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search articles..."
                    className="focus:ring-primary-500 w-full rounded-lg bg-gray-100 py-3 pr-4 pl-10 text-sm text-gray-900 focus:ring-2 focus:outline-none dark:bg-gray-800 dark:text-white"
                  />
                  <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                </form>

                {/* Navigation Links - Mobile */}
                <nav className="space-y-1">
                  {navLinks.map((link) => {
                    const isActive = location.pathname === link.path;
                    return (
                      <Link
                        key={link.path}
                        to={link.path}
                        className={`flex items-center gap-3 rounded-lg px-4 py-3 font-medium transition-colors ${
                          isActive
                            ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                            : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                        }`}
                      >
                        <link.icon className="text-lg" />
                        <span>{link.name}</span>
                      </Link>
                    );
                  })}
                </nav>

                {/* User Menu Items - Mobile */}
                <div className="space-y-1 border-t border-gray-200 pt-6 dark:border-gray-800">
                  {userMenuItems.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => handleUserMenuAction(item)}
                      className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 font-medium transition-colors ${
                        item.action === 'logout'
                          ? 'text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20'
                          : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                      }`}
                    >
                      <item.icon className="text-lg" />
                      <span>{item.name}</span>
                    </button>
                  ))}
                </div>

                {/* Auth Buttons - Mobile (if not logged in) */}
                <div className="space-y-3 border-t border-gray-200 pt-6 dark:border-gray-800">
                  {/* Uncomment when implementing auth */}
                  {/* <Button variant="outline" fullWidth onClick={() => navigate('/login')}>
                    Login
                  </Button>
                  <Button variant="primary" fullWidth onClick={() => navigate('/register')}>
                    Sign Up
                  </Button> */}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
