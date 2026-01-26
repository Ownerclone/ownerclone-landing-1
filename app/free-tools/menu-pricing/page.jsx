'use client'

import { useState } from 'react'
import { ArrowLeft, DollarSign, Percent, TrendingUp, AlertCircle } from 'lucide-react'
import Link from 'next/link'

export default function MenuPricingCalculator() {
  const [inputs, setInputs] = useState({
    foodCost: '',
    targetFoodCostPercent: '30',
    laborCost: '',
    overheadCost: ''
  })

  const calculateMargins = () => {
    const foodCost = parseFloat(inputs.foodCost) || 0
    const targetPercent = parseFloat(inputs.targetFoodCostPercent) || 30
    const laborCost = parseFloat(inputs.laborCost) || 0
    const overheadCost = parseFloat(inputs.overheadCost) || 0

    // Basic pricing calculation
    const basePrice = foodCost / (targetPercent / 100)
    
    // Full cost pricing (includes labor and overhead)
    const totalCost = foodCost + laborCost + overheadCost
    const fullCostPrice = totalCost / (targetPercent / 100)
    
    // Different margin strategies
    const grossProfit = basePrice - foodCost
    const contributionMargin = basePrice - totalCost
    const markupPercent = ((basePrice - foodCost) / foodCost) * 100

    return {
      basePrice: basePrice.toFixed(2),
      fullCostPrice: fullCostPrice.toFixed(2),
      grossProfit: grossProfit.toFixed(2),
      contributionMargin: contributionMargin.toFixed(2),
      markupPercent: markupPercent.toFixed(1),
      actualFoodCostPercent: ((foodCost / basePrice) * 100).toFixed(1)
    }
  }

  const results = calculateMargins()

  const getPriceRecommendation = () => {
    const markup = parseFloat(results.markupPercent)
    if (markup < 100) return { text: 'Low margin - consider increasing price', color: 'text-red-400' }
    if (markup < 200) return { text: 'Moderate margin - industry standard', color: 'text-yellow-400' }
    return { text: 'Strong margin - competitive pricing', color: 'text-green-400' }
  }

  const recommendation = getPriceRecommendation()

  return (
    <div className="min-h-screen relative">
 
  <div className="relative z-10 container mx-auto px-4 pt-24 pb-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/free-tools" 
            className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-100 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Free Tools
          </Link>
          
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 backdrop-blur-xl bg-purple-500/20 border border-purple-300/30 rounded-xl">
                <DollarSign className="w-8 h-8 text-purple-300" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">Menu Pricing Calculator</h1>
                <p className="text-purple-200 mt-1">Calculate optimal menu prices based on costs and target margins</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Input Section */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <Percent className="w-5 h-5 text-purple-400" />
              Cost Inputs
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-purple-200 mb-2">
                  Food Cost per Dish ($)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={inputs.foodCost}
                  onChange={(e) => setInputs({ ...inputs, foodCost: e.target.value })}
                  className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
                  placeholder="8.50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-purple-200 mb-2">
                  Target Food Cost % (Industry standard: 28-35%)
                </label>
                <input
                  type="number"
                  step="1"
                  value={inputs.targetFoodCostPercent}
                  onChange={(e) => setInputs({ ...inputs, targetFoodCostPercent: e.target.value })}
                  className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
                  placeholder="30"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-purple-200 mb-2">
                  Labor Cost per Dish ($) <span className="text-purple-400 text-xs">(Optional)</span>
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={inputs.laborCost}
                  onChange={(e) => setInputs({ ...inputs, laborCost: e.target.value })}
                  className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
                  placeholder="2.50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-purple-200 mb-2">
                  Overhead Cost per Dish ($) <span className="text-purple-400 text-xs">(Optional)</span>
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={inputs.overheadCost}
                  onChange={(e) => setInputs({ ...inputs, overheadCost: e.target.value })}
                  className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
                  placeholder="1.25"
                />
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {/* Recommended Price */}
            <div className="backdrop-blur-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-300/30 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-white">Recommended Menu Price</h3>
                <TrendingUp className="w-5 h-5 text-purple-300" />
              </div>
              <div className="text-5xl font-bold text-white mb-2">
                ${results.basePrice}
              </div>
              <p className="text-purple-200 text-sm">
                Based on {inputs.targetFoodCostPercent}% target food cost
              </p>
            </div>

            {/* Full Cost Price */}
            {(inputs.laborCost || inputs.overheadCost) && (
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="flex justify-between items-center">
                  <span className="text-purple-200">Full Cost Price:</span>
                  <span className="text-2xl font-bold text-white">${results.fullCostPrice}</span>
                </div>
                <p className="text-xs text-purple-300 mt-1">Includes food, labor & overhead costs</p>
              </div>
            )}

            {/* Margin Metrics */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Margin Analysis</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-purple-200">Gross Profit:</span>
                  <span className="text-xl font-bold text-green-400">${results.grossProfit}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-purple-200">Markup Percentage:</span>
                  <span className="text-xl font-bold text-purple-300">{results.markupPercent}%</span>
                </div>

                {(inputs.laborCost || inputs.overheadCost) && (
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-purple-200">Contribution Margin:</span>
                    <span className="text-xl font-bold text-blue-400">${results.contributionMargin}</span>
                  </div>
                )}

                <div className="flex justify-between items-center py-2">
                  <span className="text-purple-200">Actual Food Cost %:</span>
                  <span className="text-xl font-bold text-white">{results.actualFoodCostPercent}%</span>
                </div>
              </div>
            </div>

            {/* Recommendation */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className={`font-semibold ${recommendation.color}`}>
                    {recommendation.text}
                  </p>
                  <p className="text-sm text-purple-300 mt-1">
                    Industry standard markup is 200-300% (2-3x food cost)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Strategies Info */}
        <div className="mt-8 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Pricing Strategy Guide</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="backdrop-blur-xl bg-purple-500/10 border border-purple-300/20 rounded-xl p-4">
              <h4 className="font-semibold text-purple-300 mb-2">Cost-Plus Pricing</h4>
              <p className="text-sm text-purple-200">
                Add a fixed markup percentage to your food cost. Simple and ensures profitability.
              </p>
            </div>
            <div className="backdrop-blur-xl bg-indigo-500/10 border border-indigo-300/20 rounded-xl p-4">
              <h4 className="font-semibold text-indigo-300 mb-2">Competitive Pricing</h4>
              <p className="text-sm text-indigo-200">
                Price based on market rates and competitor analysis while maintaining margins.
              </p>
            </div>
            <div className="backdrop-blur-xl bg-pink-500/10 border border-pink-300/20 rounded-xl p-4">
              <h4 className="font-semibold text-pink-300 mb-2">Value-Based Pricing</h4>
              <p className="text-sm text-pink-200">
                Price based on perceived value and customer willingness to pay.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-8 backdrop-blur-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-300/30 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Want Automated Menu Engineering?</h3>
          <p className="text-purple-200 mb-6 max-w-2xl mx-auto">
            OwnerClone automatically analyzes your entire menu, identifies your stars and dogs, and recommends optimal pricing strategies based on real sales data.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-purple-500/25"
          >
            See OwnerClone Demo
            <TrendingUp className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
