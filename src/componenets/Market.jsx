import React, { useEffect, useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'

const Market = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [showCart, setShowCart] = useState(false)

  // API'dan mahsulotlarni olish
  useEffect(() => {
    fetch("https://dummyjson.com/products")
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
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Online Market</h1>
        <div className="relative cursor-pointer" onClick={() => setShowCart(!showCart)}>
          <FaShoppingCart size={28} />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cart.length}
            </span>
          )}
        </div>
      </div>

      <div className="mb-6">
        <input   type="text" placeholder="Search products..." value={searchTerm}  onChange={(e) => setSearchTerm(e.target.value)}  className="w-full md:w-1/2 block mx-auto p-2 border border-gray-300 rounded-md"/>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((item) => (
          <div key={item.id} className="bg-white shadow-md rounded-xl p-4">
            <img  src={item.thumbnail || item.image}  alt={item.title}  className="h-40 object-contain mx-auto mb-3"/>
            <h2 className="text-lg font-semibold mb-1">{item.title}</h2>
            <p className="text-sm text-gray-600 mb-2 line-clamp-2">{item.description}</p>
            <p className="text-green-600 font-bold text-lg mb-3">${item.price}</p>
            <button  onClick={() => addToCart(item)}  className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded-md">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
       (
        <div className="absolute right-4 top-24 bg-white shadow-lg border p-4 rounded-lg w-80 max-h-[70vh] overflow-y-auto z-50">
          <h3 className="text-xl font-bold mb-3">🛒 Cart ({cart.length})</h3>
          {cart.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            cart.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between gap-2 py-3 border-b"
              >
                <div className="flex items-center gap-3">
                  <img  src={item.thumbnail || item.image}  alt={item.title}  className="w-12 h-12 object-contain"/>
                  <div>
                    <h4 className="font-semibold text-sm">{item.title}</h4>
                    <p className="text-sm text-gray-600">${item.price}</p>
                  </div>
                </div>
                <button  onClick={() => removeFromCart(index)}  className="bg-red-500 hover:bg-red-600 text-white w-7 h-7 flex items-center justify-center rounded-md">
                  ×
                </button>
              </div>
            ))
          )}
          <button  className="mt-4 w-full bg-gray-300 hover:bg-gray-400 text-black py-2 rounded-md"  onClick={() => setShowCart(false)} >
            Close
          </button>
        </div>
      )
    </div>
  )
}

export default Market
