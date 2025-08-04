import React, { useEffect, useState } from 'react'
import { FaShoppingCart, FaCheck, FaTimes, FaHeart, FaRegHeart } from 'react-icons/fa'
import { useTheme } from './ThemeContext'
import ThemeToggle from './ThemeToggle'

const Market = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [showCart, setShowCart] = useState(false)
  const [selectedItems, setSelectedItems] = useState([])
  const [favorites, setFavorites] = useState([])
  const [isSelectionMode, setIsSelectionMode] = useState(false)
  const { isDarkMode } = useTheme()

  // API'dan mahsulotlarni olish
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
  }, [])

  const addToCart = (item) => {
    setCart([...cart, item])
  }

  const removeFromCart = (indexToRemove) => {
    const updatedCart = cart.filter((_, i) => i !== indexToRemove)
    setCart(updatedCart)
  }

  const toggleSelection = (productId) => {
    setSelectedItems(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  const toggleFavorite = (productId) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  const addSelectedToCart = () => {
    const selectedProducts = products.filter(product => selectedItems.includes(product.id))
    setCart([...cart, ...selectedProducts])
    setSelectedItems([])
    setIsSelectionMode(false)
  }

  const clearSelection = () => {
    setSelectedItems([])
    setIsSelectionMode(false)
  }

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="relative container mx-auto p-4">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Online Market
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-1">Discover amazing products</p>
        </div>
        
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button  onClick={() => setIsSelectionMode(!isSelectionMode)} className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              isSelectionMode 
                ? 'bg-blue-500 text-white shadow-lg' 
                : 'bg-white/70 dark:bg-gray-800/70 text-gray-700 dark:text-gray-200 backdrop-blur-sm border border-gray-200 dark:border-gray-600 hover:bg-white/90 dark:hover:bg-gray-800/90'
            }`}
          >
            {isSelectionMode ? 'Exit Selection' : 'Select Items'}
          </button>
          <div
            className="relative cursor-pointer p-3 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-600 hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-200"
            onClick={() => {
              if (cart.length > 0) setShowCart(!showCart)
            }}
          >
            <FaShoppingCart size={24} className="text-gray-700 dark:text-gray-200" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs w-6 h-6 flex items-center justify-center rounded-full font-medium shadow-lg">
                {cart.length}
              </span>
            )}
          </div>
        </div>
      </div>
      {isSelectionMode && (
        <div className="mb-6 p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-600">
          <div className="flex items-center justify-between">
            <span className="text-gray-700 dark:text-gray-200 font-medium">
              {selectedItems.length} items selected
            </span>
            <div className="flex gap-2">
              <button  onClick={addSelectedToCart} disabled={selectedItems.length === 0} className="px-4 py-2 bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white rounded-lg font-medium transition-colors duration-200 disabled:cursor-not-allowed"
              >
                Add to Cart ({selectedItems.length})
              </button>
              <button
                onClick={clearSelection}
                className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors duration-200"
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="mb-8">
        <div className="relative max-w-md mx-auto">
          <input  type="text"  placeholder="Search products..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-4 pl-6 pr-12 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200 dark:border-gray-600 rounded-xl text-gray-700 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200"
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            🔍
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((item) => (
          <div   key={item.id} 
  className={`group relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200 dark:border-gray-600 shadow-lg rounded-2xl p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 ${
              selectedItems.includes(item.id) ? 'ring-2 ring-blue-500 dark:ring-blue-400' : ''
            }`}
          >
            {isSelectionMode && (
              <div className="absolute top-4 left-4 z-10">
                <button onClick={() => toggleSelection(item.id)} className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 ${
                    selectedItems.includes(item.id)
                      ? 'bg-blue-500 text-white'
                      : 'bg-white/80 dark:bg-gray-700/80 border-2 border-gray-300 dark:border-gray-500'
                  }`}
                >
                  {selectedItems.includes(item.id) && <FaCheck size={12} />}
                </button>
              </div>
            )}
            <button onClick={() => toggleFavorite(item.id)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/80 dark:bg-gray-700/80 hover:bg-white dark:hover:bg-gray-700 transition-all duration-200 z-10"
            >
              {favorites.includes(item.id) ? (
                <FaHeart className="text-red-500" size={16} />
              ) : (
                <FaRegHeart className="text-gray-400 hover:text-red-500" size={16} />
              )}
            </button>
            <div className="relative mb-4 overflow-hidden rounded-xl">
              <img
                src={item.thumbnail || item.image}
                alt={item.title}
                className="h-48 w-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                {item.title}
              </h2>
              
              <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                {item.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent">
                    ${item.price}
                  </span>
                  {item.discountPercentage && (
                    <span className="text-xs bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-2 py-1 rounded-full">
                      -{Math.round(item.discountPercentage)}%
                    </span>
                  )}
                </div>
                
               
              </div>

              <button  onClick={() => addToCart(item)}
                disabled={isSelectionMode}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 disabled:from-gray-400 disabled:to-gray-500 text-white py-3 px-4 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                {isSelectionMode ? 'Selection Mode' : 'Add to Cart'}
              </button>
            </div>
          </div>
        ))}
      </div>
      {showCart && cart.length > 0 && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-lg shadow-2xl border border-gray-200 dark:border-gray-600 rounded-2xl w-full max-w-md max-h-[80vh] overflow-hidden">
            <div className="p-6 border-b border-gray-200 dark:border-gray-600">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-3">
                  🛒 Cart ({cart.length})
                </h3>
                <button  onClick={() => setShowCart(false)} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors duration-200"
                >
                  <FaTimes className="text-gray-500 dark:text-gray-400" />
                </button>
              </div>
            </div>
            <div className="overflow-y-auto max-h-96 p-4">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 py-4 border-b border-gray-100 dark:border-gray-700 last:border-b-0"
                >
                  <img src={item.thumbnail || item.image} alt={item.title} className="w-16 h-16 object-cover rounded-xl"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-100 truncate">
                      {item.title}
                    </h4>
                    <p className="text-lg font-bold text-green-600 dark:text-green-400">
                      ${item.price}
                    </p>
                  </div>
                  <button onClick={() => removeFromCart(index)} className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors duration-200 flex items-center justify-center"
                  >
                    <FaTimes size={12} />
                  </button>
                </div>
              ))}
            </div>
            <div className="p-6 border-t border-gray-200 dark:border-gray-600">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                  Total: 
                </span>
                <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent">
                  ${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}
                </span>
              </div>
              <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 shadow-lg">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Market

