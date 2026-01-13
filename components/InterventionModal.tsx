'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

interface InterventionModalProps {
  amount: number
  onClose: (decision: 'bnpl' | 'full' | 'back') => void
}

// Calculate compound interest
function calculateInvestmentGrowth(principal: number, years: number, rate: number = 0.07) {
  const data = []
  for (let year = 0; year <= years; year++) {
    const value = principal * Math.pow(1 + rate, year)
    data.push(value)
  }
  return data
}

export default function InterventionModal({ amount, onClose }: InterventionModalProps) {
  const [countdown, setCountdown] = useState(60)
  const [timerActive, setTimerActive] = useState(true)
  const [showContent, setShowContent] = useState(false)
  const [hourlyWage, setHourlyWage] = useState(25)

  const investmentData = calculateInvestmentGrowth(amount, 5)
  const futureValue = investmentData[5]
  const growth = futureValue - amount
  const hoursWorked = Math.round(amount / hourlyWage)

  useEffect(() => {
    // Trigger content animation
    setTimeout(() => setShowContent(true), 300)
  }, [])

  useEffect(() => {
    if (!timerActive || countdown <= 0) return

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          setTimerActive(false)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [timerActive, countdown])

  const chartData = {
    labels: ['Today', 'Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
    datasets: [
      {
        label: 'Investment Growth',
        data: investmentData,
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        tension: 0.4,
        fill: true,
        pointRadius: 6,
        pointHoverRadius: 8,
        pointBackgroundColor: 'rgb(16, 185, 129)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `$${context.parsed.y.toFixed(2)}`
          }
        },
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 12,
        titleFont: {
          size: 14,
        },
        bodyFont: {
          size: 16,
          weight: 'bold' as const,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        ticks: {
          callback: function(value: any) {
            return '$' + value.toFixed(0)
          },
          font: {
            size: 12,
          },
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
          },
        },
      },
    },
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose('back')
        }
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 100, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 100, scale: 0.9 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8 md:p-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
            transition={{ delay: 0.1 }}
            className="text-center mb-8"
          >
            <div className="text-5xl mb-4">💭</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Before you decide...
            </h2>
            <p className="text-gray-600 text-lg">
              Let's visualize what this money could become
            </p>
          </motion.div>

          {/* Investment Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 mb-6"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              If you invest ${amount.toFixed(2)} instead:
            </h3>
            
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">Today</p>
                <p className="text-2xl font-bold text-gray-900">
                  ${amount.toFixed(0)}
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">In 5 Years</p>
                <p className="text-2xl font-bold text-green-600">
                  ${futureValue.toFixed(0)}
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">Growth</p>
                <p className="text-2xl font-bold text-blue-600">
                  +${growth.toFixed(0)}
                </p>
              </div>
            </div>

            {/* Chart */}
            <div className="bg-white rounded-xl p-4" style={{ height: '250px' }}>
              <Line data={chartData} options={chartOptions} />
            </div>

            <p className="text-xs text-gray-500 mt-3 text-center">
              *Assumes 7% annual return (historical S&P 500 average)
            </p>
          </motion.div>

          {/* Hours Worked Equivalent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 mb-6"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">⏰</span>
              Time Cost: How many hours of work?
            </h3>
            
            <div className="bg-white rounded-xl p-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Hourly wage:</span>
                <div className="flex items-center gap-2">
                  <span className="text-gray-700">$</span>
                  <input
                    type="number"
                    value={hourlyWage}
                    onChange={(e) => setHourlyWage(Math.max(1, Number(e.target.value)))}
                    className="w-20 px-2 py-1 border border-gray-300 rounded text-center font-semibold"
                    min="1"
                  />
                  <span className="text-gray-700">/hr</span>
                </div>
              </div>
              
              <div className="text-center py-4">
                <p className="text-sm text-gray-600 mb-2">This purchase equals:</p>
                <p className="text-4xl font-bold text-purple-600 mb-1">
                  {hoursWorked} hours
                </p>
                <p className="text-sm text-gray-500">of your time at work</p>
              </div>

              {/* Visual bar showing hours */}
              <div className="mt-4">
                <div className="flex items-center gap-2 text-xs text-gray-600 mb-2">
                  <span>0 hrs</span>
                  <div className="flex-1 h-8 bg-gray-100 rounded-lg overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min((hoursWorked / 40) * 100, 100)}%` }}
                      transition={{ duration: 1, delay: 0.6 }}
                      className="h-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-end pr-2"
                    >
                      {hoursWorked <= 40 && (
                        <span className="text-white font-bold text-xs">{hoursWorked}h</span>
                      )}
                    </motion.div>
                  </div>
                  <span>40 hrs</span>
                </div>
                <p className="text-xs text-center text-gray-500">
                  {hoursWorked > 40 
                    ? `More than a full work week!` 
                    : `${Math.round((hoursWorked / 40) * 100)}% of a work week`}
                </p>
              </div>
            </div>

            <p className="text-xs text-gray-500 text-center">
              Think: "Would I work {hoursWorked} hours for this item?"
            </p>
          </motion.div>

          {/* Cool-down Timer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
            transition={{ delay: 0.5 }}
            className="bg-orange-50 border border-orange-200 rounded-2xl p-6 mb-6"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="text-3xl">⏱️</div>
                <div>
                  <h3 className="font-semibold text-orange-900">
                    Take a moment to think
                  </h3>
                  <p className="text-sm text-orange-700">
                    {timerActive ? 'Cooling down...' : "Time's up - your choice now"}
                  </p>
                </div>
              </div>
              
              {/* Circular Timer */}
              <div className="relative w-16 h-16">
                <svg className="transform -rotate-90 w-16 h-16">
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="#fed7aa"
                    strokeWidth="4"
                    fill="none"
                  />
                  <motion.circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="#f97316"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 28}`}
                    strokeDashoffset={`${2 * Math.PI * 28 * (1 - countdown / 60)}`}
                    strokeLinecap="round"
                    transition={{ duration: 1, ease: 'linear' }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-bold text-orange-600">
                    {countdown}
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setTimerActive(false)}
              className="text-sm text-orange-600 hover:text-orange-800 font-medium underline"
            >
              Skip timer
            </button>
          </motion.div>

          {/* Explanation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
            transition={{ delay: 0.7 }}
            className="border-t border-gray-200 pt-6 mb-8"
          >
            <p className="text-center text-gray-700 leading-relaxed">
              This isn't judgment—it's <span className="font-semibold">information</span>. 
              Buy Now, Pay Later isn't "free"—it has an <span className="font-semibold text-blue-600">opportunity cost</span>. 
              That money could grow instead of being locked into payments.
            </p>
            <p className="text-center text-sm text-gray-500 mt-3 italic">
              You choose what matters to you.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
            transition={{ delay: 0.9 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-3"
          >
            <motion.button
              className="btn btn-secondary text-sm py-4"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onClose('back')}
            >
              ← Go Back
            </motion.button>
            
            <motion.button
              className="btn btn-primary text-sm py-4"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onClose('full')}
            >
              Pay in Full
            </motion.button>
            
            <motion.button
              className="btn text-sm py-4 border-2 border-pink-500 text-pink-700 hover:bg-pink-50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onClose('bnpl')}
            >
              Still Pay in 4
            </motion.button>
          </motion.div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showContent ? 1 : 0 }}
            transition={{ delay: 1.1 }}
            className="mt-6 text-center"
          >
            <p className="text-xs text-gray-400">
              All options remain available. Your autonomy is respected.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}
