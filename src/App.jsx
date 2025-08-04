import React from 'react'
import Market from './componenets/Market'
import { ThemeProvider } from './componenets/ThemeContext'

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-purple-200/30 dark:from-blue-800/20 dark:to-purple-800/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-200/30 to-pink-200/30 dark:from-indigo-800/20 dark:to-pink-800/20 rounded-full blur-3xl"></div>
        </div>
        
        {/* Main content */}
        <div className="relative z-10 p-4">
          <Market />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
