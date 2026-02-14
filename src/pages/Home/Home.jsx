// src/pages/Test/TestPage.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaTimesCircle, FaRocket } from 'react-icons/fa';

const TestPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode for testing
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-white py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-4xl px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 text-center"
          >
            <h1 className="mb-4 text-5xl font-bold text-gray-900 dark:text-white">
              Setup Test Page ✅
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Yeh page check karne ke liye hai ke sab kuch sahi kaam kar raha
              hai
            </p>
          </motion.div>

          {/* Dark Mode Toggle */}
          <div className="mb-12 flex justify-center">
            <button
              onClick={toggleDarkMode}
              className="bg-primary-600 hover:bg-primary-700 rounded-lg px-6 py-3 font-medium text-white shadow-lg transition-all hover:shadow-xl"
            >
              {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
            </button>
          </div>

          {/* Test Sections */}
          <div className="space-y-6">
            {/* Tailwind Test */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-xl border-l-4 border-green-500 bg-white p-6 shadow-lg dark:bg-gray-800"
            >
              <div className="mb-3 flex items-center gap-3">
                <FaCheckCircle className="text-2xl text-green-500" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Tailwind CSS
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                ✓ Colors working
                <br />
                ✓ Dark mode working
                <br />✓ Responsive classes working
              </p>
            </motion.div>

            {/* Framer Motion Test */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.02, x: 10 }}
              className="cursor-pointer rounded-xl border-l-4 border-blue-500 bg-white p-6 shadow-lg dark:bg-gray-800"
            >
              <div className="mb-3 flex items-center gap-3">
                <FaCheckCircle className="text-2xl text-blue-500" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Framer Motion
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                ✓ Animations working
                <br />
                ✓ Hover effects working
                <br />
                ✓ Transitions smooth
                <br />
                💡 Hover this card to test!
              </p>
            </motion.div>

            {/* React Icons Test */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="rounded-xl border-l-4 border-purple-500 bg-white p-6 shadow-lg dark:bg-gray-800"
            >
              <div className="mb-3 flex items-center gap-3">
                <FaCheckCircle className="text-2xl text-purple-500" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  React Icons
                </h3>
              </div>
              <div className="flex gap-4 text-3xl">
                <FaCheckCircle className="text-green-500" />
                <FaTimesCircle className="text-red-500" />
                <FaRocket className="text-yellow-500" />
              </div>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                ✓ Icons rendering properly
              </p>
            </motion.div>

            {/* Gradient Test */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="from-primary-600 to-secondary-600 rounded-xl bg-gradient-to-r p-6 shadow-lg"
            >
              <h3 className="mb-3 text-xl font-bold text-white">
                Custom Gradient Colors
              </h3>
              <p className="text-white/90">
                ✓ Primary color: #667eea
                <br />
                ✓ Secondary color: #764ba2
                <br />✓ Gradient working perfectly
              </p>
            </motion.div>

            {/* Typography Test */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="rounded-xl border-l-4 border-orange-500 bg-white p-6 shadow-lg dark:bg-gray-800"
            >
              <div className="mb-3 flex items-center gap-3">
                <FaCheckCircle className="text-2xl text-orange-500" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Typography
                </h3>
              </div>
              <div className="space-y-2">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                  Heading 1
                </h1>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Heading 2
                </h2>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Heading 3
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Regular paragraph text with proper contrast
                </p>
              </div>
            </motion.div>

            {/* Button Tests */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="rounded-xl border-l-4 border-pink-500 bg-white p-6 shadow-lg dark:bg-gray-800"
            >
              <div className="mb-4 flex items-center gap-3">
                <FaCheckCircle className="text-2xl text-pink-500" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Button Styles
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                <button className="bg-primary-600 hover:bg-primary-700 rounded-lg px-6 py-2 font-medium text-white transition-all">
                  Primary
                </button>
                <button className="bg-secondary-600 hover:bg-secondary-700 rounded-lg px-6 py-2 font-medium text-white transition-all">
                  Secondary
                </button>
                <button className="border-primary-600 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg border-2 px-6 py-2 font-medium transition-all">
                  Outline
                </button>
                <button className="rounded-lg bg-red-600 px-6 py-2 font-medium text-white transition-all hover:bg-red-700">
                  Danger
                </button>
              </div>
            </motion.div>

            {/* Responsive Test */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="rounded-xl border-l-4 border-teal-500 bg-white p-6 shadow-lg dark:bg-gray-800"
            >
              <div className="mb-3 flex items-center gap-3">
                <FaCheckCircle className="text-2xl text-teal-500" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Responsive Design
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="bg-primary-100 dark:bg-primary-900/20 rounded-lg p-4 text-center">
                  <p className="text-primary-700 dark:text-primary-300 font-medium">
                    Mobile
                  </p>
                </div>
                <div className="bg-secondary-100 dark:bg-secondary-900/20 rounded-lg p-4 text-center">
                  <p className="text-secondary-700 dark:text-secondary-300 font-medium">
                    Tablet
                  </p>
                </div>
                <div className="rounded-lg bg-green-100 p-4 text-center dark:bg-green-900/20">
                  <p className="font-medium text-green-700 dark:text-green-300">
                    Desktop
                  </p>
                </div>
              </div>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                💡 Browser window resize karke test karo
              </p>
            </motion.div>
          </div>

          {/* Success Message */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-3 rounded-2xl bg-green-100 px-8 py-4 dark:bg-green-900/20">
              <FaCheckCircle className="text-3xl text-green-600 dark:text-green-400" />
              <div className="text-left">
                <h3 className="text-xl font-bold text-green-800 dark:text-green-300">
                  Sab Kuch Perfect Hai! 🎉
                </h3>
                <p className="text-green-700 dark:text-green-400">
                  Aap ab apna blog app bana sakte hain
                </p>
              </div>
            </div>
          </motion.div>

          {/* Instructions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-8 rounded-xl bg-blue-50 p-6 dark:bg-blue-900/20"
          >
            <h3 className="mb-3 text-lg font-bold text-blue-900 dark:text-blue-300">
              📝 Next Steps:
            </h3>
            <ul className="space-y-2 text-blue-800 dark:text-blue-300">
              <li>✓ Sab animations smoothly chal rahi hain</li>
              <li>✓ Dark mode toggle kaam kar raha hai</li>
              <li>✓ Colors aur typography perfect hain</li>
              <li>✓ Responsive design kaam kar raha hai</li>
              <li>🚀 Ab aap Home page use kar sakte hain!</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
