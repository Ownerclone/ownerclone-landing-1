'use client'

import { useState } from 'react'
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
    if (percentage === 0) return { color: 'text-gray-500', bg: 'backdrop-blur-xl bg-white/5', border: 'border-white/10', message: 'Enter your numbers above' }
    if (percentage < 55) return { color: 'text-[#3b82f6]', bg: 'backdrop-blur-xl bg-[#3b82f6]/10', border: 'border-[#3b82f6]', message: 'Excellent! You\'re running very efficiently.' }
    if (percentage < 60) return { color: 'text-[#3b82f6]', bg: 'backdrop-blur-xl bg-[#3b82f6]/10', border: 'border-[#3b82f6]', message: 'Great! You\'re in the optimal range.' }
    if (percentage < 65) return { color: 'text-[#fbbf24]', bg: 'backdrop-blur-xl bg-[#fbbf24]/10', border: 'border-[#fbbf24]', message: 'Caution - You\'re in the acceptable range but watch closely.' }
    return { color: 'text-[#ef4444]', bg: 'backdrop-blur-xl bg-[#ef4444]/10', border: 'border-[#ef4444]', message: 'Alert! Your prime cost is too high - immediate action needed.' }
  }

  const status = getStatus(primeCostPercentage)

  return (
    <div className="min-h-screen relative">
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url(/bg-glow.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <div className="relative z-10 container mx-auto px-4 pt-24 pb-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/free-tools" 
            className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-100 transition-colors mb-4"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Free Tools
          </Link>
          
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-4">
              <div className="p-3 backdrop-blur-xl bg-blue-500/20 border border-blue-300/30 rounded-xl">
                <svg className="w-8 h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">Prime Cost Calculator</h1>
                <p className="text-blue-200 mt-1">Calculate your restaurant's most important profitability metric</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calculator Input */}
          <div>
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-[0_0_50px_rgba(59,130,246,0.1)]">
              <h2 className="text-2xl font-bold mb-6">Enter Your Numbers</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Beginning Inventory ($)
                  </label>
                  <input
                    type="number"
                    value={beginningInventory}
                    onChange={(e) => setBeginningInventory(e.target.value)}
                    className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#3b82f6] focus:outline-none text-lg text-white transition-colors"
                    placeholder="5,000"
                  />
                  <p className="text-sm text-gray-500 mt-1">Value of inventory at start of period</p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Purchases ($)
                  </label>
                  <input
                    type="number"
                    value={purchases}
                    onChange={(e) => setPurchases(e.target.value)}
                    className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#3b82f6] focus:outline-none text-lg text-white transition-colors"
                    placeholder="8,000"
                  />
                  <p className="text-sm text-gray-500 mt-1">Total purchases during the period</p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Ending Inventory ($)
                  </label>
                  <input
                    type="number"
                    value={endingInventory}
                    onChange={(e) => setEndingInventory(e.target.value)}
                    className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#3b82f6] focus:outline-none text-lg text-white transition-colors"
                    placeholder="4,500"
                  />
                  <p className="text-sm text-gray-500 mt-1">Value of inventory at end of period</p>
                </div>

                <div className="pt-4 border-t-2 border-white/10">
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Total Labor Cost ($)
                  </label>
                  <input
                    type="number"
                    value={totalLabor}
                    onChange={(e) => setTotalLabor(e.target.value)}
                    className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#3b82f6] focus:outline-none text-lg text-white transition-colors"
                    placeholder="8,800"
                  />
                  <p className="text-sm text-gray-500 mt-1">Wages + payroll taxes + benefits</p>
                </div>

                <div className="pt-4 border-t-2 border-white/10">
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Total Sales ($)
                  </label>
                  <input
                    type="number"
                    value={totalSales}
                    onChange={(e) => setTotalSales(e.target.value)}
                    className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#3b82f6] focus:outline-none text-lg text-white transition-colors"
                    placeholder="30,000"
                  />
                  <p className="text-sm text-gray-500 mt-1">Total revenue for the same period</p>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div>
            <div className={`${status.bg} border-2 ${status.border} rounded-2xl p-8 mb-6`}>
              <h2 className="text-2xl font-bold mb-4">Your Results</h2>
              
              <div className="space-y-6">
                <div>
                  <div className="text-sm font-semibold text-gray-400 mb-1">Cost of Goods Sold (COGS)</div>
                  <div className="text-3xl font-bold text-white">
                    ${cogs.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                  {foodCostPercentage > 0 && (
                    <div className="text-lg text-gray-400 mt-1">
                      {foodCostPercentage.toFixed(1)}% of sales
                    </div>
                  )}
                </div>

                <div>
                  <div className="text-sm font-semibold text-gray-400 mb-1">Total Labor Cost</div>
                  <div className="text-3xl font-bold text-white">
                    ${parseFloat(totalLabor || '0').toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                  {laborCostPercentage > 0 && (
                    <div className="text-lg text-gray-400 mt-1">
                      {laborCostPercentage.toFixed(1)}% of sales
                    </div>
                  )}
                </div>

                <div className="pt-6 border-t-4 border-[#3b82f6]">
                  <div className="text-sm font-semibold text-gray-400 mb-1">PRIME COST</div>
                  <div className="text-5xl font-bold text-white">
                    ${primeCost.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                  {primeCostPercentage > 0 && (
                    <div className={`text-3xl font-bold ${status.color} mt-2`}>
                      {primeCostPercentage.toFixed(1)}%
                    </div>
                  )}
                </div>

                {primeCostPercentage > 0 && (
                  <div className={`mt-4 p-4 rounded-lg ${status.bg} border-2 ${status.border}`}>
                    <div className={`font-bold ${status.color} mb-2`}>
                      {primeCostPercentage < 55 ? '✓ Excellent!' : primeCostPercentage < 60 ? '✓ Great!' : primeCostPercentage < 65 ? '⚠ Caution' : '⚠ Alert!'}
                    </div>
                    <div className="text-gray-300">{status.message}</div>
                  </div>
                )}
              </div>
            </div>

            {/* Understanding Your Results */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-3">Understanding Your Results</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start">
                  <span className="text-[#3b82f6] font-bold mr-2">Below 55%:</span>
                  <span className="text-gray-300">Exceptional efficiency - you're doing great!</span>
                </div>
                <div className="flex items-start">
                  <span className="text-[#3b82f6] font-bold mr-2">55-60%:</span>
                  <span className="text-gray-300">Optimal range - keep it here for sustainable profits</span>
                </div>
                <div className="flex items-start">
                  <span className="text-[#fbbf24] font-bold mr-2">60-65%:</span>
                  <span className="text-gray-300">Acceptable but tight - watch for increases</span>
                </div>
                <div className="flex items-start">
                  <span className="text-[#ef4444] font-bold mr-2">Above 65%:</span>
                  <span className="text-gray-300">Crisis mode - you need immediate changes</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Educational Content */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-bold text-[#3b82f6] mb-3">What is Prime Cost?</h3>
            <p className="text-gray-300">
              Prime cost is your two largest controllable expenses: Cost of Goods Sold (food and beverage) plus Total Labor Cost. These typically represent 55-65% of your sales.
            </p>
          </div>

          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-bold text-[#3b82f6] mb-3">Why It Matters</h3>
            <p className="text-gray-300">
              Prime cost tells you if your fundamental business model works. If it's too high, you won't have enough money left to cover rent, utilities, and profit.
            </p>
          </div>

          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-bold text-[#3b82f6] mb-3">How to Improve It</h3>
            <p className="text-gray-300">
              Focus on menu engineering, portion control, waste reduction, efficient scheduling, and vendor negotiations. Small improvements in either area compound quickly.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 backdrop-blur-xl bg-gradient-to-br from-[#3b82f6]/20 to-[#60a5fa]/20 border-2 border-[#3b82f6] rounded-3xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Want Automatic <span className="text-[#3b82f6]">Prime Cost Tracking</span>?</h2>
          <p className="text-lg text-gray-300 mb-6">
            OwnerClone calculates your prime cost automatically from your POS data. No more manual calculations or spreadsheets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing" className="bg-[#3b82f6] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#2563eb] transition-colors">
              Join Early Access
            </Link>
            <Link href="/blog" className="border-2 border-[#3b82f6] text-[#3b82f6] px-8 py-3 rounded-lg font-bold hover:bg-[#3b82f6]/10 transition-colors">
              Read Complete Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
