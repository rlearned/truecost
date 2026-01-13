'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-purple-50 min-h-screen flex items-center">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                🛡️ Value Sensitive Design Project
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold mb-6 text-gray-900"
            >
              True<span className="text-blue-600">Cost</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4"
            >
              An Anti-Dark Pattern Intervention
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              What if checkout <span className="font-semibold text-gray-900">helped you make better decisions</span>, 
              not impulse ones? Experience a redesigned BNPL flow that prioritizes{' '}
              <span className="font-semibold text-blue-600">informed consent</span> over conversion.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/shop">
                <motion.button
                  className="btn btn-primary text-lg px-8 py-4 shadow-xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Try the Demo
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.button>
              </Link>
              <a href="#about">
                <motion.button
                  className="btn btn-secondary text-lg px-8 py-4"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More
                </motion.button>
              </a>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-16"
            >
              <a href="#about" className="inline-block">
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-gray-400"
                >
                  <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </motion.div>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                The Problem
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                BNPL services like Klarna and Afterpay have exploded among Gen Z users. 
                While marketed as "interest-free," these services <span className="font-semibold text-gray-900">obscure risk</span> and{' '}
                <span className="font-semibold text-gray-900">exploit impulse buying psychology</span>.
              </p>
            </motion.div>

            {/* Problem Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="card text-center"
              >
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Zero Friction</h3>
                <p className="text-gray-600">
                  Dark patterns remove hesitation to maximize conversion
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="card text-center"
              >
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Hidden Costs</h3>
                <p className="text-gray-600">
                  Opportunity cost of investing is never shown
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="card text-center"
              >
                <div className="text-4xl mb-4">🎭</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Impulse Exploitation</h3>
                <p className="text-gray-600">
                  Designed to bypass rational decision-making
                </p>
              </motion.div>
            </div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                The Solution
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                <span className="font-semibold text-blue-600">Value Sensitive Design</span> offers a framework for ethical intervention. 
                Rather than removing choice, TrueCost focuses on{' '}
                <span className="font-semibold text-gray-900">informed consent</span>—helping users understand 
                implications before deciding.
              </p>
            </motion.div>

            {/* Key Features */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="card bg-blue-50 border-blue-200"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">📊</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-900">Investment Visualization</h3>
                    <p className="text-blue-700">
                      See what your money could become in 5 years if invested instead
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="card bg-orange-50 border-orange-200"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">⏱️</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-orange-900">Cool-Down Timer</h3>
                    <p className="text-orange-700">
                      A gentle nudge introducing healthy friction (skippable)
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="card bg-green-50 border-green-200"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">💭</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-green-900">Non-Paternalistic</h3>
                    <p className="text-green-700">
                      Information, not judgment. You choose what matters to you
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="card bg-purple-50 border-purple-200"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🎓</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-purple-900">Educational</h3>
                    <p className="text-purple-700">
                      Teaches compound interest and opportunity cost through interaction
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Reformed Marketer Quote */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card bg-gradient-to-br from-gray-50 to-blue-50 border-gray-300 p-8 mb-16"
            >
              <blockquote className="text-center">
                <p className="text-xl md:text-2xl italic text-gray-700 mb-4">
                  "In Marketing, I learned how to <span className="font-semibold text-gray-900">reduce friction</span> to increase sales. 
                  For this project, I used my coding skills to <span className="font-semibold text-blue-600">reintroduce friction</span> to 
                  increase user wellbeing."
                </p>
                <footer className="text-gray-600 font-medium">— The Reformed Marketer Approach</footer>
              </blockquote>
            </motion.div>

            {/* Before/After Comparison */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h3 className="text-3xl font-bold mb-8 text-gray-900 text-center">
                The Difference: Dark Pattern vs TrueCost
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Dark Pattern Version */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="card bg-red-50 border-red-300 relative"
                >
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                      ❌ DARK PATTERN
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-red-900 mb-4 mt-8">
                    Standard BNPL Experience
                  </h4>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <span className="text-red-600">×</span>
                      <p className="text-sm text-red-800">
                        <strong>Zero friction:</strong> Instant approval, one-click checkout
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-red-600">×</span>
                      <p className="text-sm text-red-800">
                        <strong>Hidden costs:</strong> No mention of opportunity cost
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-red-600">×</span>
                      <p className="text-sm text-red-800">
                        <strong>Impulse-optimized:</strong> Designed to bypass rational thinking
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-red-600">×</span>
                      <p className="text-sm text-red-800">
                        <strong>No education:</strong> Users unaware of long-term impact
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 text-center border-2 border-red-300">
                    <p className="text-sm text-gray-600 mb-2">Conversion-optimized button:</p>
                    <div className="inline-block px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl font-bold">
                      Pay in 4 ✨
                    </div>
                    <p className="text-xs text-gray-500 mt-2">→ Instant checkout</p>
                  </div>
                </motion.div>

                {/* TrueCost Version */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="card bg-green-50 border-green-300 relative"
                >
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                      ✓ TRUECOST
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-green-900 mb-4 mt-8">
                    Value Sensitive Design
                  </h4>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <span className="text-green-600">✓</span>
                      <p className="text-sm text-green-800">
                        <strong>Intentional pause:</strong> Cool-down timer introduces reflection
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-600">✓</span>
                      <p className="text-sm text-green-800">
                        <strong>Transparent costs:</strong> Investment visualization + time cost
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-600">✓</span>
                      <p className="text-sm text-green-800">
                        <strong>Informed consent:</strong> Show consequences before decision
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-600">✓</span>
                      <p className="text-sm text-green-800">
                        <strong>Educational:</strong> Teaches compound interest & opportunity cost
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 text-center border-2 border-green-300">
                    <p className="text-sm text-gray-600 mb-2">Same button triggers:</p>
                    <div className="inline-block px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl font-bold">
                      Pay in 4 ✨
                    </div>
                    <p className="text-xs text-gray-500 mt-2">→ Information modal</p>
                    <p className="text-xs text-green-600 mt-1 font-semibold">→ Then user decides</p>
                  </div>
                </motion.div>
              </div>

              <p className="text-center text-gray-600 mt-8 italic">
                Same interface, radically different experience. That's the power of Value Sensitive Design.
              </p>
            </motion.div>

            {/* Final CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Ready to experience the difference?
              </h3>
              <Link href="/shop">
                <motion.button
                  className="btn btn-primary text-lg px-8 py-4 shadow-xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Try the Interactive Demo
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            A Value Sensitive Design project demonstrating ethical intervention in fintech UX
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Built with Next.js, Framer Motion, and Chart.js
          </p>
        </div>
      </footer>
    </main>
  )
}
