import React, { useEffect, useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'

const Market = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [showCart, setShowCart] = useState(false)

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

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="relative container mx-auto p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Online Market</h1>
        <div
          className="relative cursor-pointer"
          onClick={() => {
            if (cart.length > 0) setShowCart(!showCart)
          }}
        >
          <FaShoppingCart size={28} />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cart.length}
            </span>
          )}
        </div>
      </div>

      {/* Qidiruv */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/2 block mx-auto p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Mahsulotlar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((item) => (
          <div key={item.id} className="bg-white shadow-md rounded-xl p-4">
            <img
              src={item.thumbnail || item.image}
              alt={item.title}
              className="h-40 object-contain mx-auto mb-3"
            />
            <h2 className="text-lg font-semibold mb-1">{item.title}</h2>
            <p className="text-sm text-gray-600 mb-2 line-clamp-2">{item.description}</p>
            <p className="text-green-600 font-bold text-lg mb-3">${item.price}</p>
            <button
              onClick={() => addToCart(item)}
              className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded-md"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Savat (Cart) Modal - faqat agar cart bo‘sh bo‘lmasa */}
      {showCart && cart.length > 0 && (
        <div className="fixed inset-0  bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white shadow-lg border p-4 rounded-lg w-96 max-h-[70vh] overflow-y-auto">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              🛒 Cart ({cart.length})
            </h3>
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between gap-2 py-3 border-b"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.thumbnail || item.image}
                    alt={item.title}
                    className="w-12 h-12 object-contain"
                  />
                  <div>
                    <h4 className="font-semibold text-sm">{item.title}</h4>
                    <p className="text-sm text-gray-600">${item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(index)}
                  className="bg-red-500 hover:bg-red-600 text-white w-7 h-7 flex items-center justify-center rounded-md"
                >
                  ×
                </button>
              </div>
            ))}
            <button
              onClick={() => setShowCart(false)}
              className="mt-4 w-full bg-gray-400 hover:bg-gray-500 text-black py-2 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Market
