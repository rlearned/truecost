'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

interface Product {
  id: string
  name: string
  price: number
  image: string
  description: string
  category: string
}

const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299.99,
    image: '🎧',
    description: 'Studio-quality sound with active noise cancellation',
    category: 'Audio'
  },
  {
    id: '2',
    name: 'Designer Sneakers',
    price: 249.99,
    image: '👟',
    description: 'Limited edition colorway, premium materials',
    category: 'Fashion'
  },
  {
    id: '3',
    name: 'Smart Watch Pro',
    price: 399.99,
    image: '⌚',
    description: 'Fitness tracking, notifications, and more',
    category: 'Tech'
  },
  {
    id: '4',
    name: 'Portable Speaker',
    price: 199.99,
    image: '🔊',
    description: 'Waterproof, 20-hour battery life',
    category: 'Audio'
  },
  {
    id: '5',
    name: 'Leather Backpack',
    price: 179.99,
    image: '🎒',
    description: 'Handcrafted Italian leather, laptop compartment',
    category: 'Fashion'
  },
  {
    id: '6',
    name: 'Gaming Mouse',
    price: 89.99,
    image: '🖱️',
    description: 'RGB lighting, programmable buttons',
    category: 'Tech'
  }
]

export default function ShopPage() {
  const [cart, setCart] = useState<Product[]>([])

  const addToCart = (product: Product) => {
    setCart([...cart, product])
  }

  const removeFromCart = (productId: string) => {
    setCart(cart.filter(item => item.id !== productId))
  }

  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <motion.h1 
                className="text-2xl font-bold text-blue-600 cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                TrueCost
              </motion.h1>
            </Link>
            
            {/* Cart Summary */}
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm text-gray-600">Cart Total</p>
                <p className="text-xl font-bold text-gray-900">
                  ${cartTotal.toFixed(2)}
                </p>
              </div>
              <Link href="/checkout">
                <motion.button
                  className="btn btn-primary relative"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={cart.length === 0}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Checkout
                  {cart.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {cart.length}
                    </span>
                  )}
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-4">Mock Shop</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Browse products and add to cart. The magic happens at checkout when you see the BNPL option.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Shopping Cart (if items) */}
      {cart.length > 0 && (
        <section className="bg-blue-50 border-b border-blue-200 py-4">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-700 font-medium">
                  {cart.length} item{cart.length !== 1 ? 's' : ''} in cart
                </p>
              </div>
              <Link href="/checkout">
                <motion.button
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm underline"
                  whileHover={{ x: 5 }}
                >
                  Proceed to Checkout →
                </motion.button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  className="card card-hover bg-white h-full flex flex-col"
                  whileHover={{ y: -8 }}
                >
                  {/* Product Image */}
                  <div className="text-center mb-4">
                    <div className="text-8xl mb-4">{product.image}</div>
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                      {product.category}
                    </span>
                  </div>

                  {/* Product Info */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {product.description}
                    </p>
                  </div>

                  {/* Price and Action */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <p className="text-2xl font-bold text-gray-900">
                        ${product.price.toFixed(2)}
                      </p>
                      <p className="text-xs text-gray-500">
                        or 4 payments of ${(product.price / 4).toFixed(2)}
                      </p>
                    </div>
                    
                    {cart.find(item => item.id === product.id) ? (
                      <motion.button
                        className="btn btn-secondary text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => removeFromCart(product.id)}
                      >
                        Remove
                      </motion.button>
                    ) : (
                      <motion.button
                        className="btn btn-primary text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => addToCart(product)}
                      >
                        Add to Cart
                      </motion.button>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Empty Cart Message */}
      {cart.length === 0 && (
        <section className="py-12">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-md mx-auto"
            >
              <div className="text-6xl mb-4">🛒</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Your cart is empty
              </h3>
              <p className="text-gray-600">
                Add some products to your cart to proceed to checkout and experience the TrueCost intervention
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Info Banner */}
      <section className="bg-yellow-50 border-y border-yellow-200 py-8">
        <div className="container mx-auto px-6">
          <div className="flex items-start gap-4 max-w-3xl mx-auto">
            <div className="text-3xl">💡</div>
            <div>
              <h3 className="font-bold text-yellow-900 mb-2">
                This is a demonstration
              </h3>
              <p className="text-yellow-800">
                This is a simulated shopping experience. No actual purchases will be made. 
                Add items to your cart and proceed to checkout to experience the TrueCost intervention 
                when you encounter the "Pay in 4" option.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-8 mt-12">
        <div className="container mx-auto px-6 text-center">
          <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">
            ← Back to Home
          </Link>
        </div>
      </footer>
    </main>
  )
}
