// src/pages/Test/TestPage.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaTimesCircle, FaRocket } from 'react-icons/fa';
import Navbar from '@/components/layout/Navbar/Navbar';

const TestPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode for testing
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return <Navbar />;
};

export default TestPage;
