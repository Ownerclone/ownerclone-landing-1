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
    if (percentage === 0) return { color: 'text-gray-500', bg: 'backdrop-blur-xl bg-white/5', border: 'border-white/10', message: 'Enter your numbers to see results' }
    if (percentage < 28) return { color: 'text-[#10b981]', bg: 'backdrop-blur-xl bg-[#10b981]/10', border: 'border-[#10b981]', message: 'Excellent! Very efficient food cost management.' }
    if (percentage < 32) return { color: 'text-[#10b981]', bg: 'backdrop-blur-xl bg-[#10b981]/10', border: 'border-[#10b981]', message: 'Great! You\'re in the optimal range for most restaurants.' }
    if (percentage < 35) return { color: 'text-[#fbbf24]', bg: 'backdrop-blur-xl bg-[#fbbf24]/10', border: 'border-[#fbbf24]', message: 'Acceptable, but look for opportunities to improve.' }
    return { color: 'text-[#ef4444]', bg: 'backdrop-blur-xl bg-[#ef4444]/10', border: 'border-[#ef4444]', message: 'Too high! Your food costs are cutting into profitability.' }
  }

  const status = getStatus(foodCostPercentage)

  return (
    <div className="min-h-screen text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Food Cost <span className="text-[#10b981]">Calculator</span>
          </h1>
          <p className="text-xl text-gray-300">
            Calculate your restaurant's Cost of Goods Sold (COGS) and food cost percentage in seconds.
          </p>
        </div>
      </section>

      <section className="relative py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Calculator Input - GLASS CARD */}
            <div>
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
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
                      className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#10b981] focus:outline-none text-lg text-white"
                      placeholder="6,000"
                    />
                    <p className="text-sm text-gray-500 mt-1">Total value of food/beverage at start of period</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Purchases ($)
                    </label>
                    <input
                      type="number"
                      value={purchases}
                      onChange={(e) => setPurchases(e.target.value)}
                      className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#10b981] focus:outline-none text-lg text-white"
                      placeholder="9,000"
                    />
                    <p className="text-sm text-gray-500 mt-1">All food/beverage purchases during period</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Ending Inventory ($)
                    </label>
                    <input
                      type="number"
                      value={endingInventory}
                      onChange={(e) => setEndingInventory(e.target.value)}
                      className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#10b981] focus:outline-none text-lg text-white"
                      placeholder="5,500"
                    />
                    <p className="text-sm text-gray-500 mt-1">Total value of food/beverage at end of period</p>
                  </div>

                  <div className="pt-4 border-t-2 border-white/10">
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Total Sales ($)
                    </label>
                    <input
                      type="number"
                      value={totalSales}
                      onChange={(e) => setTotalSales(e.target.value)}
                      className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#10b981] focus:outline-none text-lg text-white"
                      placeholder="30,000"
                    />
                    <p className="text-sm text-gray-500 mt-1">Total food/beverage revenue for the same period</p>
                  </div>
                </div>

                {/* Formula Explanation - GLASS CARD */}
                <div className="mt-6 p-4 backdrop-blur-xl bg-black/20 border border-white/10 rounded-lg">
                  <div className="text-sm font-semibold text-gray-300 mb-2">Formula:</div>
                  <div className="text-sm text-gray-400">
                    COGS = Beginning Inventory + Purchases - Ending Inventory
                  </div>
                  <div className="text-sm text-gray-400 mt-2">
                    Food Cost % = (COGS ÷ Total Sales) × 100
                  </div>
                </div>
              </div>
            </div>

            {/* Results - GLASS CARD */}
            <div>
              <div className={`${status.bg} border-2 ${status.border} rounded-2xl p-8 mb-6`}>
                <h2 className="text-2xl font-bold mb-6">Your Results</h2>
                
                <div className="space-y-6">
                  <div>
                    <div className="text-sm font-semibold text-gray-400 mb-1">Cost of Goods Sold (COGS)</div>
                    <div className="text-4xl font-bold text-white">
                      ${cogs.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>
                    <p className="text-sm text-gray-400 mt-2">
                      This is how much you spent on food and beverage that was actually sold or used.
                    </p>
                  </div>

                  <div className="pt-6 border-t-4 border-[#10b981]">
                    <div className="text-sm font-semibold text-gray-400 mb-1">FOOD COST PERCENTAGE</div>
                    {foodCostPercentage > 0 ? (
                      <div className={`text-6xl font-bold ${status.color}`}>
                        {foodCostPercentage.toFixed(1)}%
                      </div>
                    ) : (
                      <div className="text-4xl font-bold text-gray-600">
                        --%
                      </div>
                    )}
                    {foodCostPercentage > 0 && totalSales && (
                      <p className="text-gray-300 mt-4">
                        For every $100 in sales, ${foodCostPercentage.toFixed(2)} goes to food costs.
                      </p>
                    )}
                  </div>

                  {foodCostPercentage > 0 && (
                    <div className={`mt-6 p-4 rounded-lg ${status.bg} border-2 ${status.border}`}>
                      <div className={`font-bold ${status.color} mb-2`}>
                        {foodCostPercentage < 28 ? '✓ Excellent!' : foodCostPercentage < 32 ? '✓ Great!' : foodCostPercentage < 35 ? '⚠ Acceptable' : '⚠ Too High'}
                      </div>
                      <div className="text-gray-300">{status.message}</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Target Ranges - GLASS CARD */}
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-4">Target Food Cost Ranges</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 backdrop-blur-xl bg-[#10b981]/10 border border-[#10b981]/30 rounded">
                    <span className="font-semibold">Fast Casual:</span>
                    <span className="text-[#10b981] font-bold">25-28%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 backdrop-blur-xl bg-[#10b981]/10 border border-[#10b981]/30 rounded">
                    <span className="font-semibold">Full Service:</span>
                    <span className="text-[#10b981] font-bold">28-35%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 backdrop-blur-xl bg-[#fbbf24]/10 border border-[#fbbf24]/30 rounded">
                    <span className="font-semibold">Fine Dining:</span>
                    <span className="text-[#fbbf24] font-bold">32-38%</span>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-4">
                  Your target depends on your concept, menu prices, and market positioning.
                </p>
              </div>
            </div>
          </div>

          {/* Tips to Reduce Food Cost - GLASS CARDS */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-center">How to Reduce Your <span className="text-[#10b981]">Food Cost</span></h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3 text-[#10b981]">1. Portion Control</h3>
                <p className="text-gray-300">
                  Use scales, scoops, and measuring tools to ensure consistent portions. A ten percent larger portion means ten percent higher food cost.
                </p>
              </div>

              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3 text-[#10b981]">2. Reduce Waste</h3>
                <p className="text-gray-300">
                  Implement FIFO rotation, proper storage procedures, and accurate prep planning. Track what you throw away for a week and you'll find thousands in savings.
                </p>
              </div>

              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3 text-[#10b981]">3. Menu Engineering</h3>
                <p className="text-gray-300">
                  Know the food cost of every menu item. Push high-margin dishes, fix or remove low-margin items, and price appropriately for your market.
                </p>
              </div>

              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3 text-[#10b981]">4. Vendor Management</h3>
                <p className="text-gray-300">
                  Get quotes from multiple suppliers. Compare prices regularly. Negotiate aggressively. Even a two percent savings adds up to thousands annually.
                </p>
              </div>

              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3 text-[#10b981]">5. Recipe Costing</h3>
                <p className="text-gray-300">
                  Cost every recipe down to the ingredient level. Know which dishes are profitable and which are secretly losing you money.
                </p>
              </div>

              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3 text-[#10b981]">6. Theft Prevention</h3>
                <p className="text-gray-300">
                  Monitor inventory closely, limit storage access, track comps and voids, and use cameras. Most restaurants have theft they don't know about.
                </p>
              </div>
            </div>
          </div>'use client'

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
    if (percentage === 0) return { color: 'text-gray-500', bg: 'backdrop-blur-xl bg-white/5', border: 'border-white/10', message: 'Enter your numbers to see results' }
    if (percentage < 28) return { color: 'text-[#10b981]', bg: 'backdrop-blur-xl bg-[#10b981]/10', border: 'border-[#10b981]', message: 'Excellent! Very efficient food cost management.' }
    if (percentage < 32) return { color: 'text-[#10b981]', bg: 'backdrop-blur-xl bg-[#10b981]/10', border: 'border-[#10b981]', message: 'Great! You\'re in the optimal range for most restaurants.' }
    if (percentage < 35) return { color: 'text-[#fbbf24]', bg: 'backdrop-blur-xl bg-[#fbbf24]/10', border: 'border-[#fbbf24]', message: 'Acceptable, but look for opportunities to improve.' }
    return { color: 'text-[#ef4444]', bg: 'backdrop-blur-xl bg-[#ef4444]/10', border: 'border-[#ef4444]', message: 'Too high! Your food costs are cutting into profitability.' }
  }

  const status = getStatus(foodCostPercentage)

  return (
    <div className="min-h-screen text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Food Cost <span className="text-[#10b981]">Calculator</span>
          </h1>
          <p className="text-xl text-gray-300">
            Calculate your restaurant's Cost of Goods Sold (COGS) and food cost percentage in seconds.
          </p>
        </div>
      </section>

      <section className="relative py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Calculator Input - GLASS CARD */}
            <div>
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
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
                      className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#10b981] focus:outline-none text-lg text-white"
                      placeholder="6,000"
                    />
                    <p className="text-sm text-gray-500 mt-1">Total value of food/beverage at start of period</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Purchases ($)
                    </label>
                    <input
                      type="number"
                      value={purchases}
                      onChange={(e) => setPurchases(e.target.value)}
                      className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#10b981] focus:outline-none text-lg text-white"
                      placeholder="9,000"
                    />
                    <p className="text-sm text-gray-500 mt-1">All food/beverage purchases during period</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Ending Inventory ($)
                    </label>
                    <input
                      type="number"
                      value={endingInventory}
                      onChange={(e) => setEndingInventory(e.target.value)}
                      className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#10b981] focus:outline-none text-lg text-white"
                      placeholder="5,500"
                    />
                    <p className="text-sm text-gray-500 mt-1">Total value of food/beverage at end of period</p>
                  </div>

                  <div className="pt-4 border-t-2 border-white/10">
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Total Sales ($)
                    </label>
                    <input
                      type="number"
                      value={totalSales}
                      onChange={(e) => setTotalSales(e.target.value)}
                      className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#10b981] focus:outline-none text-lg text-white"
                      placeholder="30,000"
                    />
                    <p className="text-sm text-gray-500 mt-1">Total food/beverage revenue for the same period</p>
                  </div>
                </div>

                {/* Formula Explanation - GLASS CARD */}
                <div className="mt-6 p-4 backdrop-blur-xl bg-black/20 border border-white/10 rounded-lg">
                  <div className="text-sm font-semibold text-gray-300 mb-2">Formula:</div>
                  <div className="text-sm text-gray-400">
                    COGS = Beginning Inventory + Purchases - Ending Inventory
                  </div>
                  <div className="text-sm text-gray-400 mt-2">
                    Food Cost % = (COGS ÷ Total Sales) × 100
                  </div>
                </div>
              </div>
            </div>

            {/* Results - GLASS CARD */}
            <div>
              <div className={`${status.bg} border-2 ${status.border} rounded-2xl p-8 mb-6`}>
                <h2 className="text-2xl font-bold mb-6">Your Results</h2>
                
                <div className="space-y-6">
                  <div>
                    <div className="text-sm font-semibold text-gray-400 mb-1">Cost of Goods Sold (COGS)</div>
                    <div className="text-4xl font-bold text-white">
                      ${cogs.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>
                    <p className="text-sm text-gray-400 mt-2">
                      This is how much you spent on food and beverage that was actually sold or used.
                    </p>
                  </div>

                  <div className="pt-6 border-t-4 border-[#10b981]">
                    <div className="text-sm font-semibold text-gray-400 mb-1">FOOD COST PERCENTAGE</div>
                    {foodCostPercentage > 0 ? (
                      <div className={`text-6xl font-bold ${status.color}`}>
                        {foodCostPercentage.toFixed(1)}%
                      </div>
                    ) : (
                      <div className="text-4xl font-bold text-gray-600">
                        --%
                      </div>
                    )}
                    {foodCostPercentage > 0 && totalSales && (
                      <p className="text-gray-300 mt-4">
                        For every $100 in sales, ${foodCostPercentage.toFixed(2)} goes to food costs.
                      </p>
                    )}
                  </div>

                  {foodCostPercentage > 0 && (
                    <div className={`mt-6 p-4 rounded-lg ${status.bg} border-2 ${status.border}`}>
                      <div className={`font-bold ${status.color} mb-2`}>
                        {foodCostPercentage < 28 ? '✓ Excellent!' : foodCostPercentage < 32 ? '✓ Great!' : foodCostPercentage < 35 ? '⚠ Acceptable' : '⚠ Too High'}
                      </div>
                      <div className="text-gray-300">{status.message}</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Target Ranges - GLASS CARD */}
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-4">Target Food Cost Ranges</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 backdrop-blur-xl bg-[#10b981]/10 border border-[#10b981]/30 rounded">
                    <span className="font-semibold">Fast Casual:</span>
                    <span className="text-[#10b981] font-bold">25-28%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 backdrop-blur-xl bg-[#10b981]/10 border border-[#10b981]/30 rounded">
                    <span className="font-semibold">Full Service:</span>
                    <span className="text-[#10b981] font-bold">28-35%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 backdrop-blur-xl bg-[#fbbf24]/10 border border-[#fbbf24]/30 rounded">
                    <span className="font-semibold">Fine Dining:</span>
                    <span className="text-[#fbbf24] font-bold">32-38%</span>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-4">
                  Your target depends on your concept, menu prices, and market positioning.
                </p>
              </div>
            </div>
          </div>

          {/* Tips to Reduce Food Cost - GLASS CARDS */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-center">How to Reduce Your <span className="text-[#10b981]">Food Cost</span></h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3 text-[#10b981]">1. Portion Control</h3>
                <p className="text-gray-300">
                  Use scales, scoops, and measuring tools to ensure consistent portions. A ten percent larger portion means ten percent higher food cost.
                </p>
              </div>

              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3 text-[#10b981]">2. Reduce Waste</h3>
                <p className="text-gray-300">
                  Implement FIFO rotation, proper storage procedures, and accurate prep planning. Track what you throw away for a week and you'll find thousands in savings.
                </p>
              </div>

              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3 text-[#10b981]">3. Menu Engineering</h3>
                <p className="text-gray-300">
                  Know the food cost of every menu item. Push high-margin dishes, fix or remove low-margin items, and price appropriately for your market.
                </p>
              </div>

              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3 text-[#10b981]">4. Vendor Management</h3>
                <p className="text-gray-300">
                  Get quotes from multiple suppliers. Compare prices regularly. Negotiate aggressively. Even a two percent savings adds up to thousands annually.
                </p>
              </div>

              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3 text-[#10b981]">5. Recipe Costing</h3>
                <p className="text-gray-300">
                  Cost every recipe down to the ingredient level. Know which dishes are profitable and which are secretly losing you money.
                </p>
              </div>

              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3 text-[#10b981]">6. Theft Prevention</h3>
                <p className="text-gray-300">
                  Monitor inventory closely, limit storage access, track comps and voids, and use cameras. Most restaurants have theft they don't know about.
                </p>
              </div>
            </div>
          </div>

          {/* CTA - KEEP GRADIENT */}
          <div className="mt-12 backdrop-blur-xl bg-gradient-to-br from-[#10b981]/20 to-[#34d399]/20 border border-[#10b981] rounded-3xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Automate Your <span className="text-[#10b981]">Food Cost Tracking</span></h2>
            <p className="text-lg text-gray-300 mb-6">
              OwnerClone automatically calculates your food cost from POS data and invoice uploads. Get real-time visibility without manual calculations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing" className="bg-[#10b981] text-black px-8 py-3 rounded-lg font-bold hover:bg-[#059669] transition">
                Join Early Access
              </Link>
              <Link href="/blog" className="border-2 border-[#10b981] text-[#10b981] px-8 py-3 rounded-lg font-bold hover:bg-[#10b981]/10 transition">
                Read Complete Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

          {/* CTA - KEEP GRADIENT */}
          <div className="mt-12 backdrop-blur-xl bg-gradient-to-br from-[#10b981]/20 to-[#34d399]/20 border border-[#10b981] rounded-3xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Automate Your <span className="text-[#10b981]">Food Cost Tracking</span></h2>
            <p className="text-lg text-gray-300 mb-6">
              OwnerClone automatically calculates your food cost from POS data and invoice uploads. Get real-time visibility without manual calculations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing" className="bg-[#10b981] text-black px-8 py-3 rounded-lg font-bold hover:bg-[#059669] transition">
                Join Early Access
              </Link>
              <Link href="/blog" className="border-2 border-[#10b981] text-[#10b981] px-8 py-3 rounded-lg font-bold hover:bg-[#10b981]/10 transition">
                Read Complete Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
