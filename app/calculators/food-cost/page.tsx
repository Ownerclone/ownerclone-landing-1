'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function FoodCostCalculator() {
  const [beginningInventory, setBeginningInventory] = useState('')
  const [purchases, setPurchases] = useState('')
  const [endingInventory, setEndingInventory] = useState('')
  const [totalSales, setTotalSales] = useState('')

  // Calculate COGS
  const cogs = beginningInventory && purchases && endingInventory
    ? parseFloat(beginningInventory) + parseFloat(purchases) - parseFloat(endingInventory)
    : 0

  // Calculate Food Cost Percentage
  const foodCostPercentage = totalSales && cogs
    ? (cogs / parseFloat(totalSales)) * 100
    : 0

  // Determine status
  const getStatus = (percentage: number) => {
    if (percentage === 0) return { color: 'text-gray-500', bg: 'bg-gray-100', message: 'Enter your numbers to see results' }
    if (percentage < 28) return { color: 'text-green-600', bg: 'bg-green-50', message: 'Excellent! Very efficient food cost management.' }
    if (percentage < 32) return { color: 'text-green-600', bg: 'bg-green-50', message: 'Great! You\'re in the optimal range for most restaurants.' }
    if (percentage < 35) return { color: 'text-yellow-600', bg: 'bg-yellow-50', message: 'Acceptable, but look for opportunities to improve.' }
    return { color: 'text-red-600', bg: 'bg-red-50', message: 'Too high! Your food costs are cutting into profitability.' }
  }

  const status = getStatus(foodCostPercentage)

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-6">Food Cost Calculator</h1>
          <p className="text-xl text-green-100">
            Calculate your restaurant's Cost of Goods Sold (COGS) and food cost percentage in seconds.
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
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-600 focus:outline-none text-lg"
                      placeholder="6,000"
                    />
                    <p className="text-sm text-gray-600 mt-1">Total value of food/beverage at start of period</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Purchases ($)
                    </label>
                    <input
                      type="number"
                      value={purchases}
                      onChange={(e) => setPurchases(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-600 focus:outline-none text-lg"
                      placeholder="9,000"
                    />
                    <p className="text-sm text-gray-600 mt-1">All food/beverage purchases during period</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Ending Inventory ($)
                    </label>
                    <input
                      type="number"
                      value={endingInventory}
                      onChange={(e) => setEndingInventory(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-600 focus:outline-none text-lg"
                      placeholder="5,500"
                    />
                    <p className="text-sm text-gray-600 mt-1">Total value of food/beverage at end of period</p>
                  </div>

                  <div className="pt-4 border-t-2 border-gray-200">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Total Sales ($)
                    </label>
                    <input
                      type="number"
                      value={totalSales}
                      onChange={(e) => setTotalSales(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-600 focus:outline-none text-lg"
                      placeholder="30,000"
                    />
                    <p className="text-sm text-gray-600 mt-1">Total food/beverage revenue for the same period</p>
                  </div>
                </div>

                {/* Formula Explanation */}
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm font-semibold text-gray-700 mb-2">Formula:</div>
                  <div className="text-sm text-gray-600">
                    COGS = Beginning Inventory + Purchases - Ending Inventory
                  </div>
                  <div className="text-sm text-gray-600 mt-2">
                    Food Cost % = (COGS ÷ Total Sales) × 100
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div>
              <div className={`${status.bg} border-2 ${foodCostPercentage > 35 ? 'border-red-300' : foodCostPercentage > 32 ? 'border-yellow-300' : 'border-green-300'} rounded-lg p-8 mb-6`}>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Results</h2>
                
                <div className="space-y-6">
                  <div>
                    <div className="text-sm font-semibold text-gray-700 mb-1">Cost of Goods Sold (COGS)</div>
                    <div className="text-4xl font-bold text-gray-900">
                      ${cogs.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      This is how much you spent on food and beverage that was actually sold or used.
                    </p>
                  </div>

                  <div className="pt-6 border-t-4 border-gray-900">
                    <div className="text-sm font-semibold text-gray-700 mb-1">FOOD COST PERCENTAGE</div>
                    {foodCostPercentage > 0 ? (
                      <div className={`text-6xl font-bold ${status.color}`}>
                        {foodCostPercentage.toFixed(1)}%
                      </div>
                    ) : (
                      <div className="text-4xl font-bold text-gray-400">
                        --%
                      </div>
                    )}
                    {foodCostPercentage > 0 && totalSales && (
                      <p className="text-gray-700 mt-4">
                        For every $100 in sales, ${foodCostPercentage.toFixed(2)} goes to food costs.
                      </p>
                    )}
                  </div>

                  {foodCostPercentage > 0 && (
                    <div className={`mt-6 p-4 rounded-lg ${status.bg} border-2 ${foodCostPercentage > 35 ? 'border-red-300' : foodCostPercentage > 32 ? 'border-yellow-300' : 'border-green-300'}`}>
                      <div className={`font-bold ${status.color} mb-2`}>
                        {foodCostPercentage < 28 ? '✓ Excellent!' : foodCostPercentage < 32 ? '✓ Great!' : foodCostPercentage < 35 ? '⚠ Acceptable' : '⚠ Too High'}
                      </div>
                      <div className="text-gray-700">{status.message}</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Target Ranges */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Target Food Cost Ranges</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                    <span className="font-semibold text-gray-900">Fast Casual:</span>
                    <span className="text-green-600 font-bold">25-28%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                    <span className="font-semibold text-gray-900">Full Service:</span>
                    <span className="text-green-600 font-bold">28-35%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-yellow-50 rounded">
                    <span className="font-semibold text-gray-900">Fine Dining:</span>
                    <span className="text-yellow-600 font-bold">32-38%</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Your target depends on your concept, menu prices, and market positioning.
                </p>
              </div>
            </div>
          </div>

          {/* Tips to Reduce Food Cost */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">How to Reduce Your Food Cost</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">1. Portion Control</h3>
                <p className="text-gray-700">
                  Use scales, scoops, and measuring tools to ensure consistent portions. A ten percent larger portion means ten percent higher food cost.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">2. Reduce Waste</h3>
                <p className="text-gray-700">
                  Implement FIFO rotation, proper storage procedures, and accurate prep planning. Track what you throw away for a week and you'll find thousands in savings.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">3. Menu Engineering</h3>
                <p className="text-gray-700">
                  Know the food cost of every menu item. Push high-margin dishes, fix or remove low-margin items, and price appropriately for your market.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">4. Vendor Management</h3>
                <p className="text-gray-700">
                  Get quotes from multiple suppliers. Compare prices regularly. Negotiate aggressively. Even a two percent savings adds up to thousands annually.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">5. Recipe Costing</h3>
                <p className="text-gray-700">
                  Cost every recipe down to the ingredient level. Know which dishes are profitable and which are secretly losing you money.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">6. Theft Prevention</h3>
                <p className="text-gray-700">
                  Monitor inventory closely, limit storage access, track comps and voids, and use cameras. Most restaurants have theft they don't know about.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Automate Your Food Cost Tracking</h2>
            <p className="text-lg text-gray-700 mb-6">
              OwnerClone automatically calculates your food cost from POS data and invoice uploads. Get real-time visibility without manual calculations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/early-access" className="btn-primary">
                Join Early Access Waitlist
              </Link>
              <Link href="/blog/food-cost-management-guide" className="btn-secondary">
                Read Complete Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
