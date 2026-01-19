'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import Link from 'next/link'

export default function PrimeCostCalculator() {
  const [beginningInventory, setBeginningInventory] = useState('')
  const [purchases, setPurchases] = useState('')
  const [endingInventory, setEndingInventory] = useState('')
  const [totalLabor, setTotalLabor] = useState('')
  const [totalSales, setTotalSales] = useState('')

  // Calculate COGS
  const cogs = beginningInventory && purchases && endingInventory
    ? parseFloat(beginningInventory) + parseFloat(purchases) - parseFloat(endingInventory)
    : 0

  // Calculate Prime Cost
  const primeCost = cogs && totalLabor
    ? cogs + parseFloat(totalLabor || '0')
    : 0

  // Calculate Percentages
  const foodCostPercentage = totalSales && cogs
    ? (cogs / parseFloat(totalSales)) * 100
    : 0

  const laborCostPercentage = totalSales && totalLabor
    ? (parseFloat(totalLabor) / parseFloat(totalSales)) * 100
    : 0

  const primeCostPercentage = totalSales && primeCost
    ? (primeCost / parseFloat(totalSales)) * 100
    : 0

  // Determine status color and message
  const getStatus = (percentage: number) => {
    if (percentage === 0) return { color: 'text-gray-500', bg: 'bg-gray-100', message: 'Enter your numbers above' }
    if (percentage < 55) return { color: 'text-green-600', bg: 'bg-green-50', message: 'Excellent! You\'re running very efficiently.' }
    if (percentage < 60) return { color: 'text-green-600', bg: 'bg-green-50', message: 'Great! You\'re in the optimal range.' }
    if (percentage < 65) return { color: 'text-yellow-600', bg: 'bg-yellow-50', message: 'Caution - You\'re in the acceptable range but watch closely.' }
    return { color: 'text-red-600', bg: 'bg-red-50', message: 'Alert! Your prime cost is too high - immediate action needed.' }
  }

  const status = getStatus(primeCostPercentage)

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-6">Prime Cost Calculator</h1>
          <p className="text-xl text-primary-100">
            Calculate your restaurant's prime cost in seconds. The single most important metric for profitability.
          </p>
        </div>
      </section>

      <section className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Calculator Input */}
            <div>
              <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Enter Your Numbers</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Beginning Inventory ($)
                    </label>
                    <input
                      type="number"
                      value={beginningInventory}
                      onChange={(e) => setBeginningInventory(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:outline-none text-lg"
                      placeholder="5,000"
                    />
                    <p className="text-sm text-gray-600 mt-1">Value of inventory at start of period</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Purchases ($)
                    </label>
                    <input
                      type="number"
                      value={purchases}
                      onChange={(e) => setPurchases(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:outline-none text-lg"
                      placeholder="8,000"
                    />
                    <p className="text-sm text-gray-600 mt-1">Total purchases during the period</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Ending Inventory ($)
                    </label>
                    <input
                      type="number"
                      value={endingInventory}
                      onChange={(e) => setEndingInventory(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:outline-none text-lg"
                      placeholder="4,500"
                    />
                    <p className="text-sm text-gray-600 mt-1">Value of inventory at end of period</p>
                  </div>

                  <div className="pt-4 border-t-2 border-gray-200">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Total Labor Cost ($)
                    </label>
                    <input
                      type="number"
                      value={totalLabor}
                      onChange={(e) => setTotalLabor(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:outline-none text-lg"
                      placeholder="8,800"
                    />
                    <p className="text-sm text-gray-600 mt-1">Wages + payroll taxes + benefits</p>
                  </div>

                  <div className="pt-4 border-t-2 border-gray-200">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Total Sales ($)
                    </label>
                    <input
                      type="number"
                      value={totalSales}
                      onChange={(e) => setTotalSales(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:outline-none text-lg"
                      placeholder="30,000"
                    />
                    <p className="text-sm text-gray-600 mt-1">Total revenue for the same period</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div>
              <div className={`${status.bg} border-2 ${primeCostPercentage > 65 ? 'border-red-300' : primeCostPercentage > 60 ? 'border-yellow-300' : 'border-green-300'} rounded-lg p-8 mb-6`}>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Results</h2>
                
                <div className="space-y-6">
                  <div>
                    <div className="text-sm font-semibold text-gray-700 mb-1">Cost of Goods Sold (COGS)</div>
                    <div className="text-3xl font-bold text-gray-900">
                      ${cogs.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>
                    {foodCostPercentage > 0 && (
                      <div className="text-lg text-gray-600 mt-1">
                        {foodCostPercentage.toFixed(1)}% of sales
                      </div>
                    )}
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-gray-700 mb-1">Total Labor Cost</div>
                    <div className="text-3xl font-bold text-gray-900">
                      ${parseFloat(totalLabor || '0').toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>
                    {laborCostPercentage > 0 && (
                      <div className="text-lg text-gray-600 mt-1">
                        {laborCostPercentage.toFixed(1)}% of sales
                      </div>
                    )}
                  </div>

                  <div className="pt-6 border-t-4 border-gray-900">
                    <div className="text-sm font-semibold text-gray-700 mb-1">PRIME COST</div>
                    <div className="text-5xl font-bold text-gray-900">
                      ${primeCost.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>
                    {primeCostPercentage > 0 && (
                      <div className={`text-3xl font-bold ${status.color} mt-2`}>
                        {primeCostPercentage.toFixed(1)}%
                      </div>
                    )}
                  </div>

                  {primeCostPercentage > 0 && (
                    <div className={`mt-4 p-4 rounded-lg ${status.bg} border-2 ${primeCostPercentage > 65 ? 'border-red-300' : primeCostPercentage > 60 ? 'border-yellow-300' : 'border-green-300'}`}>
                      <div className={`font-bold ${status.color} mb-2`}>
                        {primeCostPercentage < 55 ? '✓ Excellent!' : primeCostPercentage < 60 ? '✓ Great!' : primeCostPercentage < 65 ? '⚠ Caution' : '⚠ Alert!'}
                      </div>
                      <div className="text-gray-700">{status.message}</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Understanding Your Results */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Understanding Your Results</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">Below 55%:</span>
                    <span className="text-gray-700">Exceptional efficiency - you're doing great!</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">55-60%:</span>
                    <span className="text-gray-700">Optimal range - keep it here for sustainable profits</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-yellow-600 font-bold mr-2">60-65%:</span>
                    <span className="text-gray-700">Acceptable but tight - watch for increases</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">Above 65%:</span>
                    <span className="text-gray-700">Crisis mode - you need immediate changes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Educational Content */}
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">What is Prime Cost?</h3>
              <p className="text-gray-700">
                Prime cost is your two largest controllable expenses: Cost of Goods Sold (food and beverage) plus Total Labor Cost. These typically represent 55-65% of your sales.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Why It Matters</h3>
              <p className="text-gray-700">
                Prime cost tells you if your fundamental business model works. If it's too high, you won't have enough money left to cover rent, utilities, and profit.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">How to Improve It</h3>
              <p className="text-gray-700">
                Focus on menu engineering, portion control, waste reduction, efficient scheduling, and vendor negotiations. Small improvements in either area compound quickly.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Want Automatic Prime Cost Tracking?</h2>
            <p className="text-lg text-gray-700 mb-6">
              OwnerClone calculates your prime cost automatically from your POS data. No more manual calculations or spreadsheets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/early-access" className="btn-primary">
                Join Early Access Waitlist
              </Link>
              <Link href="/blog/how-to-calculate-prime-cost" className="btn-secondary">
                Read Our Complete Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
