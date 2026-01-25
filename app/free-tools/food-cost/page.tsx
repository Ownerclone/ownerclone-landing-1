'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function FoodCostCalculator() {
  const [ingredientCost, setIngredientCost] = useState('')
  const [sellingPrice, setSellingPrice] = useState('')

  const cost = parseFloat(ingredientCost) || 0
  const price = parseFloat(sellingPrice) || 0

  // Calculate food cost percentage
  const foodCostPercentage = price > 0 ? (cost / price) * 100 : 0

  // Calculate ideal selling price for different food cost targets
  const idealPrice28 = cost > 0 ? cost / 0.28 : 0
  const idealPrice30 = cost > 0 ? cost / 0.30 : 0
  const idealPrice32 = cost > 0 ? cost / 0.32 : 0
  const idealPrice35 = cost > 0 ? cost / 0.35 : 0

  // Determine status color and message
  const getStatus = (percentage) => {
    if (percentage === 0) return { color: 'text-gray-500', bg: 'backdrop-blur-xl bg-white/5', border: 'border-white/10', message: 'Enter your numbers above' }
    if (percentage < 28) return { color: 'text-[#10b981]', bg: 'backdrop-blur-xl bg-[#10b981]/10', border: 'border-[#10b981]', message: 'Excellent! You\'re maximizing profit per dish.' }
    if (percentage < 32) return { color: 'text-[#10b981]', bg: 'backdrop-blur-xl bg-[#10b981]/10', border: 'border-[#10b981]', message: 'Great! You\'re in the ideal range for most restaurants.' }
    if (percentage < 35) return { color: 'text-[#fbbf24]', bg: 'backdrop-blur-xl bg-[#fbbf24]/10', border: 'border-[#fbbf24]', message: 'Acceptable, but you could increase prices or reduce portions.' }
    if (percentage < 40) return { color: 'text-[#fb923c]', bg: 'backdrop-blur-xl bg-[#fb923c]/10', border: 'border-[#fb923c]', message: 'High - Consider menu engineering or supplier negotiations.' }
    return { color: 'text-[#ef4444]', bg: 'backdrop-blur-xl bg-[#ef4444]/10', border: 'border-[#ef4444]', message: 'Critical! You\'re losing money on this dish.' }
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
            Calculate your food cost percentage and optimize menu pricing
          </p>
        </div>
      </section>

      <section className="relative py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Calculator Input */}
            <div>
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-[0_0_50px_rgba(16,185,129,0.1)]">
                <h2 className="text-2xl font-bold mb-6">Enter Your Numbers</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Ingredient Cost (COGS)
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-3.5 text-gray-500">$</span>
                      <input
                        type="number"
                        value={ingredientCost}
                        onChange={(e) => setIngredientCost(e.target.value)}
                        className="w-full pl-8 pr-4 py-3 backdrop-blur-xl bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#10b981] focus:outline-none text-lg text-white transition-colors"
                        placeholder="8.50"
                        step="0.01"
                      />
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Total cost of all ingredients per plate</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Menu Selling Price
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-3.5 text-gray-500">$</span>
                      <input
                        type="number"
                        value={sellingPrice}
                        onChange={(e) => setSellingPrice(e.target.value)}
                        className="w-full pl-8 pr-4 py-3 backdrop-blur-xl bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#10b981] focus:outline-none text-lg text-white transition-colors"
                        placeholder="28.95"
                        step="0.01"
                      />
                    </div>
                    <p className="text-sm text-gray-500 mt-1">What you charge customers</p>
                  </div>
                </div>

                {/* Quick Example */}
                <div className="mt-8 backdrop-blur-xl bg-[#10b981]/10 border border-[#10b981]/30 rounded-lg p-4">
                  <h3 className="text-sm font-bold text-[#10b981] mb-2">💡 Quick Example</h3>
                  <p className="text-sm text-gray-300">
                    A burger costs you $8.50 in ingredients. You sell it for $28.95. That's a 29.4% food cost - right in the ideal range!
                  </p>
                </div>
              </div>
            </div>

            {/* Results */}
            <div>
              <div className={`${status.bg} border-2 ${status.border} rounded-2xl p-8 mb-6`}>
                <h2 className="text-2xl font-bold mb-4">Your Results</h2>
                
                <div className="space-y-6">
                  <div>
                    <div className="text-sm font-semibold text-gray-400 mb-1">Ingredient Cost</div>
                    <div className="text-3xl font-bold text-white">
                      ${cost.toFixed(2)}
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-gray-400 mb-1">Selling Price</div>
                    <div className="text-3xl font-bold text-white">
                      ${price.toFixed(2)}
                    </div>
                  </div>

                  <div className="pt-6 border-t-4 border-[#10b981]">
                    <div className="text-sm font-semibold text-gray-400 mb-1">FOOD COST PERCENTAGE</div>
                    <div className={`text-5xl font-bold ${status.color}`}>
                      {foodCostPercentage.toFixed(1)}%
                    </div>
                  </div>

                  {foodCostPercentage > 0 && (
                    <div className={`mt-4 p-4 rounded-lg ${status.bg} border-2 ${status.border}`}>
                      <div className={`font-bold ${status.color} mb-2`}>
                        {foodCostPercentage < 28 ? '✓ Excellent!' : foodCostPercentage < 32 ? '✓ Great!' : foodCostPercentage < 35 ? '⚠ Acceptable' : foodCostPercentage < 40 ? '⚠ High' : '⚠ Critical!'}
                      </div>
                      <div className="text-gray-300">{status.message}</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Ideal Pricing Guide */}
              {cost > 0 && (
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-lg font-bold mb-4">Ideal Pricing for Your Dish</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between backdrop-blur-xl bg-black/20 border border-white/10 rounded-lg p-3">
                      <div>
                        <span className="text-sm text-gray-400">28% Food Cost (Premium)</span>
                      </div>
                      <span className="text-xl font-bold text-[#10b981]">${idealPrice28.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center justify-between backdrop-blur-xl bg-black/20 border border-white/10 rounded-lg p-3">
                      <div>
                        <span className="text-sm text-gray-400">30% Food Cost (Ideal)</span>
                      </div>
                      <span className="text-xl font-bold text-[#10b981]">${idealPrice30.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center justify-between backdrop-blur-xl bg-black/20 border border-white/10 rounded-lg p-3">
                      <div>
                        <span className="text-sm text-gray-400">32% Food Cost (Good)</span>
                      </div>
                      <span className="text-xl font-bold text-[#fbbf24]">${idealPrice32.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center justify-between backdrop-blur-xl bg-black/20 border border-white/10 rounded-lg p-3">
                      <div>
                        <span className="text-sm text-gray-400">35% Food Cost (Maximum)</span>
                      </div>
                      <span className="text-xl font-bold text-[#fb923c]">${idealPrice35.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Educational Content */}
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#10b981] mb-3">What is Food Cost?</h3>
              <p className="text-gray-300">
                Food cost percentage tells you what portion of your menu price goes to ingredients. A $30 dish with $9 in ingredients = 30% food cost.
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#10b981] mb-3">Industry Benchmarks</h3>
              <p className="text-gray-300">
                Most successful restaurants aim for 28-32% food cost. Fine dining can push to 35%. Quick service targets 25-28%. Above 35% means you're leaving money on the table.
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#10b981] mb-3">How to Improve It</h3>
              <p className="text-gray-300">
                Three levers: Reduce ingredient costs (negotiate with vendors), increase menu prices (even $1-2 makes a big difference), or reduce portions (carefully!).
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 backdrop-blur-xl bg-gradient-to-br from-[#10b981]/20 to-[#059669]/20 border-2 border-[#10b981] rounded-3xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Want Automatic <span className="text-[#10b981]">Food Cost Tracking</span>?</h2>
            <p className="text-lg text-gray-300 mb-6">
              OwnerClone automatically calculates food cost for every menu item by analyzing your invoices and POS data. No more manual calculations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing" className="bg-[#10b981] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#059669] transition-colors">
                Join Early Access
              </Link>
              <Link href="/blog" className="border-2 border-[#10b981] text-[#10b981] px-8 py-3 rounded-lg font-bold hover:bg-[#10b981]/10 transition-colors">
                Read Complete Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
