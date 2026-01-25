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
            className="inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-100 transition-colors mb-4"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Free Tools
          </Link>
          
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-4">
              <div className="p-3 backdrop-blur-xl bg-emerald-500/20 border border-emerald-300/30 rounded-xl">
                <svg className="w-8 h-8 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">Food Cost Calculator</h1>
                <p className="text-emerald-200 mt-1">Calculate your food cost percentage and optimize profitability</p>
              </div>
            </div>
          </div>
        </div>

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
                  <div className="text-sm font-semibold text-gray-400 mb-1">Food Cost Percentage</div>
                  <div className={`text-5xl font-bold ${status.color}`}>
                    {foodCostPercentage.toFixed(1)}%
                  </div>
                </div>

                <div className={`p-4 rounded-lg ${status.bg} border-2 ${status.border}`}>
                  <div className={`font-bold ${status.color} mb-2`}>
                    {foodCostPercentage === 0 ? '📊 Status' : foodCostPercentage < 32 ? '✓ Great!' : foodCostPercentage < 40 ? '⚠ Caution' : '⚠ Alert!'}
                  </div>
                  <div className="text-gray-300">{status.message}</div>
                </div>

                {foodCostPercentage > 0 && (
                  <>
                    <div className="pt-4 border-t-2 border-white/10">
                      <div className="text-sm font-semibold text-gray-400 mb-3">Your Profit Per Plate</div>
                      <div className="text-3xl font-bold text-white">
                        ${(price - cost).toFixed(2)}
                      </div>
                      <div className="text-sm text-gray-400 mt-1">
                        {((((price - cost) / price) * 100)).toFixed(1)}% profit margin
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Target Prices */}
            {cost > 0 && (
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-4">💰 Price to Hit Target Food Cost %</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">28% (Excellent):</span>
                    <span className="text-xl font-bold text-[#10b981]">${idealPrice28.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">30% (Ideal):</span>
                    <span className="text-xl font-bold text-[#10b981]">${idealPrice30.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">32% (Good):</span>
                    <span className="text-xl font-bold text-[#fbbf24]">${idealPrice32.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">35% (Acceptable):</span>
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
            <h3 className="text-lg font-bold text-[#10b981] mb-3">What is Food Cost %?</h3>
            <p className="text-gray-300">
              Food cost percentage is the ratio of ingredient costs to menu price. Industry standard is 28-35% for most restaurants.
            </p>
          </div>

          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-bold text-[#10b981] mb-3">Why It Matters</h3>
            <p className="text-gray-300">
              Too high = losing money. Too low = overpricing and losing customers. The sweet spot maximizes profit while staying competitive.
            </p>
          </div>

          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-bold text-[#10b981] mb-3">How to Improve It</h3>
            <p className="text-gray-300">
              Negotiate with suppliers, reduce waste, adjust portions, engineer your menu, or increase prices strategically.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 backdrop-blur-xl bg-gradient-to-br from-[#10b981]/20 to-[#34d399]/20 border-2 border-[#10b981] rounded-3xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Want Automatic <span className="text-[#10b981]">Food Cost Tracking</span>?</h2>
          <p className="text-lg text-gray-300 mb-6">
            OwnerClone calculates food costs automatically from invoices and recipes. No more manual calculations.
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
    </div>
  )
}
