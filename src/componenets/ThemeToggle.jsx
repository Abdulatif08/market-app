import React from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
import { useTheme } from './ThemeContext'

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <button  onClick={toggleTheme}  className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 flex items-center justify-center aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <FaSun className="text-yellow-500 text-xl" />
      ) : (
        <FaMoon className="text-gray-600 text-xl" />
      )}
    </button>
  )
}

export default ThemeToggle
