'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import InterventionModal from '@/components/InterventionModal'

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState<'full' | 'bnpl' | null>(null)
  const [showIntervention, setShowIntervention] = useState(false)
  const [orderComplete, setOrderComplete] = useState(false)
  
  // Mock cart total (in real app, would come from cart state)
  const cartTotal = 299.99
  const bnplPayment = (cartTotal / 4).toFixed(2)

  const handleBNPLClick = () => {
    setShowIntervention(true)
  }

  const handleInterventionClose = (decision: 'bnpl' | 'full' | 'back') => {
    setShowIntervention(false)
    
    if (decision === 'bnpl') {
      setPaymentMethod('bnpl')
      setTimeout(() => setOrderComplete(true), 500)
    } else if (decision === 'full') {
      setPaymentMethod('full')
      setTimeout(() => setOrderComplete(true), 500)
    }
    // If 'back', just close modal and let user reconsider
  }

  const handlePayFull = () => {
    setPaymentMethod('full')
    setTimeout(() => setOrderComplete(true), 500)
  }

  if (orderComplete) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl w-full"
        >
          <div className="bg-white rounded-3xl shadow-2xl p-12 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="text-7xl mb-6"
            >
              ✅
            </motion.div>
            <h1 className="text-4xl font-bold mb-4 text-gray-900">
              Order Confirmed!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {paymentMethod === 'full' 
                ? 'Thank you for choosing to pay in full. Your order is being processed.'
                : "Your BNPL payment plan is set up. You'll receive payment reminders."}
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
              <h3 className="font-bold text-blue-900 mb-2">
                What just happened?
              </h3>
              <p className="text-blue-700 text-sm leading-relaxed mb-4">
                {paymentMethod === 'bnpl'
                  ? 'You saw the intervention modal and chose BNPL anyway. That\'s okay! The goal isn\'t to remove choice—it\'s to ensure informed consent. You now understand the opportunity cost.'
                  : 'After seeing the investment visualization, you chose to pay in full. You\'ve avoided the opportunity cost and potential future financial friction. Great decision!'}
              </p>
              
              {/* Decision Summary Card */}
              <div className="bg-white rounded-xl p-4 border-l-4 border-blue-500">
                <h4 className="font-semibold text-gray-900 mb-3">Your Decision Summary:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Purchase Amount:</span>
                    <span className="font-semibold text-gray-900">${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Payment Method:</span>
                    <span className="font-semibold text-gray-900">
                      {paymentMethod === 'bnpl' ? 'Pay in 4 installments' : 'Full payment today'}
                    </span>
                  </div>
                  {paymentMethod === 'full' && (
                    <>
                      <div className="flex justify-between text-green-600">
                        <span>Potential 5-year growth:</span>
                        <span className="font-bold">+${(cartTotal * 0.41).toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-green-600">
                        <span>Hours of work saved from debt:</span>
                        <span className="font-bold">{Math.round(cartTotal / 25)} hours</span>
                      </div>
                    </>
                  )}
                  {paymentMethod === 'bnpl' && (
                    <div className="flex justify-between text-orange-600">
                      <span>Opportunity cost (5 years):</span>
                      <span className="font-bold">-${(cartTotal * 0.41).toFixed(2)}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Reflection Questions */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 mb-8">
              <h3 className="font-bold text-purple-900 mb-3">
                🤔 Reflect on Your Choice
              </h3>
              <div className="space-y-3">
                {paymentMethod === 'bnpl' ? (
                  <>
                    <p className="text-sm text-purple-800">
                      ✓ You saw the information and still chose BNPL
                    </p>
                    <p className="text-sm text-purple-800">
                      ✓ You understand the ${(cartTotal * 0.41).toFixed(2)} opportunity cost
                    </p>
                    <p className="text-sm text-purple-800">
                      ✓ You made an <strong>informed</strong> decision
                    </p>
                    <p className="text-xs text-purple-600 mt-4 italic">
                      This is the goal of Value Sensitive Design: not to eliminate choice, 
                      but to ensure choices are made with full awareness of consequences.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-sm text-purple-800">
                      ✓ You prioritized long-term financial health
                    </p>
                    <p className="text-sm text-purple-800">
                      ✓ You preserved ${(cartTotal * 0.41).toFixed(2)} in potential growth
                    </p>
                    <p className="text-sm text-purple-800">
                      ✓ You avoided future payment obligations
                    </p>
                    <p className="text-xs text-purple-600 mt-4 italic">
                      By seeing the opportunity cost, you made a choice aligned with your 
                      financial wellbeing. This is informed consent in action.
                    </p>
                  </>
                )}
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <Link href="/shop">
                <motion.button
                  className="btn btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ← Back to Shop
                </motion.button>
              </Link>
              <Link href="/">
                <motion.button
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Back to Home
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-6 py-4">
          <Link href="/">
            <motion.h1 
              className="text-2xl font-bold text-blue-600 cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              TrueCost
            </motion.h1>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold">
                  ✓
                </div>
                <span className="text-sm font-medium text-gray-600">Cart</span>
              </div>
              <div className="w-16 h-0.5 bg-gray-300" />
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <span className="text-sm font-medium text-gray-900">Payment</span>
              </div>
              <div className="w-16 h-0.5 bg-gray-300" />
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gray-300 text-white flex items-center justify-center text-sm font-bold">
                  3
                </div>
                <span className="text-sm font-medium text-gray-400">Confirm</span>
              </div>
            </div>
          </div>

          {/* Checkout Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
          >
            <h2 className="text-3xl font-bold mb-2 text-gray-900">
              Payment Method
            </h2>
            <p className="text-gray-600 mb-8">
              Choose how you'd like to pay for your order
            </p>

            {/* Order Summary */}
            <div className="bg-gray-50 rounded-2xl p-6 mb-8">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Order Total</span>
                <span className="text-3xl font-bold text-gray-900">
                  ${cartTotal.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Payment Options */}
            <div className="space-y-4">
              {/* Pay in Full Option */}
              <motion.div
                className={`border-2 rounded-2xl p-6 cursor-pointer transition-all ${
                  paymentMethod === 'full' 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                whileHover={{ scale: 1.01 }}
                onClick={handlePayFull}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <input
                      type="radio"
                      checked={paymentMethod === 'full'}
                      onChange={handlePayFull}
                      className="mt-1 w-5 h-5 text-blue-600"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        Pay in Full
                      </h3>
                      <p className="text-gray-600 text-sm">
                        One-time payment, no hassle, no future obligations
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-900">
                      ${cartTotal.toFixed(2)}
                    </p>
                    <p className="text-xs text-gray-500">today</p>
                  </div>
                </div>
              </motion.div>

              {/* BNPL Option - The Dark Pattern */}
              <motion.div
                className={`border-2 rounded-2xl p-6 cursor-pointer transition-all relative overflow-hidden ${
                  paymentMethod === 'bnpl' 
                    ? 'border-pink-500' 
                    : 'border-gray-200'
                }`}
                whileHover={{ scale: 1.02 }}
                onClick={handleBNPLClick}
              >
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10" />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start gap-4">
                      <input
                        type="radio"
                        checked={paymentMethod === 'bnpl'}
                        onChange={() => {}} // Handled by div onClick
                        className="mt-1 w-5 h-5"
                      />
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl font-bold text-gray-900">
                            Pay in 4
                          </h3>
                          <span className="px-2 py-0.5 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-bold rounded-full">
                            POPULAR ✨
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm mb-2">
                          Interest-free payments every 2 weeks
                        </p>
                        <p className="text-xs text-gray-500">
                          No impact to credit score • Instant approval
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                        ${bnplPayment}
                      </p>
                      <p className="text-xs text-gray-500">× 4 payments</p>
                    </div>
                  </div>

                  {/* Payment Schedule */}
                  <div className="grid grid-cols-4 gap-2 pt-3 border-t border-gray-200">
                    {[1, 2, 3, 4].map((num) => (
                      <div key={num} className="text-center">
                        <p className="text-xs text-gray-500 mb-1">Payment {num}</p>
                        <p className="text-sm font-bold text-gray-700">${bnplPayment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Info Banner */}
            <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <div className="text-2xl">💡</div>
                <div>
                  <p className="text-sm text-yellow-800">
                    <span className="font-semibold">Demo Note:</span> Click "Pay in 4" to experience 
                    the TrueCost intervention modal. This is where the value-sensitive design happens!
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-8">
              <Link href="/shop" className="flex-1">
                <motion.button
                  className="btn btn-secondary w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  ← Back to Cart
                </motion.button>
              </Link>
              
              {paymentMethod && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="btn btn-primary flex-1"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    if (paymentMethod === 'full') {
                      setOrderComplete(true)
                    }
                  }}
                >
                  Complete Order →
                </motion.button>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Intervention Modal */}
      <AnimatePresence>
        {showIntervention && (
          <InterventionModal
            amount={cartTotal}
            onClose={handleInterventionClose}
          />
        )}
      </AnimatePresence>
    </main>
  )
}
