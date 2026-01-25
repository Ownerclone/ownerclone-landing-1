'use client'

import { useState } from 'react'
import { ArrowLeft, Plus, Trash2, DollarSign, Percent, Calculator, AlertCircle } from 'lucide-react'
import Link from 'next/link'

export default function PerPlatePricingCalculator() {
  const [ingredients, setIngredients] = useState([
    { id: 1, name: '', quantity: '', unit: 'oz', cost: '' }
  ])
  
  const [pricing, setPricing] = useState({
    targetFoodCostPercent: '30',
    laborCostPercent: '10',
    overheadPercent: '5'
  })

  const addIngredient = () => {
    setIngredients([
      ...ingredients,
      { id: Date.now(), name: '', quantity: '', unit: 'oz', cost: '' }
    ])
  }

  const removeIngredient = (id) => {
    if (ingredients.length > 1) {
      setIngredients(ingredients.filter(ing => ing.id !== id))
    }
  }

  const updateIngredient = (id, field, value) => {
    setIngredients(ingredients.map(ing => 
      ing.id === id ? { ...ing, [field]: value } : ing
    ))
  }

  const calculateResults = () => {
    // Calculate total ingredient cost
    const totalIngredientCost = ingredients.reduce((sum, ing) => {
      const cost = parseFloat(ing.cost) || 0
      const quantity = parseFloat(ing.quantity) || 0
      return sum + (cost * quantity)
    }, 0)

    // Get percentages
    const targetFoodCost = parseFloat(pricing.targetFoodCostPercent) || 30
    const laborCost = parseFloat(pricing.laborCostPercent) || 10
    const overhead = parseFloat(pricing.overheadPercent) || 5

    // Calculate base price from food cost target
    const basePrice = totalIngredientCost / (targetFoodCost / 100)
    
    // Calculate labor and overhead costs in dollars
    const laborCostDollar = basePrice * (laborCost / 100)
    const overheadCostDollar = basePrice * (overhead / 100)
    
    // Calculate total cost and recommended price
    const totalCost = totalIngredientCost + laborCostDollar + overheadCostDollar
    const totalCostPercent = targetFoodCost + laborCost + overhead
    const recommendedPrice = totalCost / (totalCostPercent / 100)
    
    // Calculate profit margin
    const grossProfit = recommendedPrice - totalCost
    const profitMargin = ((grossProfit / recommendedPrice) * 100)

    return {
      ingredientCost: totalIngredientCost.toFixed(2),
      basePrice: basePrice.toFixed(2),
      laborCost: laborCostDollar.toFixed(2),
      overheadCost: overheadCostDollar.toFixed(2),
      totalCost: totalCost.toFixed(2),
      recommendedPrice: recommendedPrice.toFixed(2),
      grossProfit: grossProfit.toFixed(2),
      profitMargin: profitMargin.toFixed(1)
    }
  }

  const results = calculateResults()

  const getProfitabilityStatus = () => {
    const margin = parseFloat(results.profitMargin)
    if (margin < 50) return { text: 'Low profitability', color: 'text-red-400', bg: 'bg-red-500/20' }
    if (margin < 65) return { text: 'Moderate profitability', color: 'text-yellow-400', bg: 'bg-yellow-500/20' }
    return { text: 'Strong profitability', color: 'text-green-400', bg: 'bg-green-500/20' }
  }

  const status = getProfitabilityStatus()

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
            <ArrowLeft className="w-4 h-4" />
            Back to Free Tools
          </Link>
          
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 backdrop-blur-xl bg-emerald-500/20 border border-emerald-300/30 rounded-xl">
                <Calculator className="w-8 h-8 text-emerald-300" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">Per Plate Pricing Calculator</h1>
                <p className="text-emerald-200 mt-1">Calculate exact dish cost and optimal pricing from ingredients</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left Column - Ingredients */}
          <div className="space-y-6">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-emerald-400" />
                  Ingredient Costs
                </h2>
                <button
                  onClick={addIngredient}
                  className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Add Ingredient
                </button>
              </div>

              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                {ingredients.map((ingredient, index) => (
                  <div key={ingredient.id} className="backdrop-blur-xl bg-black/20 border border-white/10 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-emerald-300">Ingredient #{index + 1}</span>
                      {ingredients.length > 1 && (
                        <button
                          onClick={() => removeIngredient(ingredient.id)}
                          className="text-red-400 hover:text-red-300 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>

                    <div className="space-y-3">
                      <input
                        type="text"
                        value={ingredient.name}
                        onChange={(e) => updateIngredient(ingredient.id, 'name', e.target.value)}
                        placeholder="Ingredient name"
                        className="w-full px-3 py-2 backdrop-blur-xl bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-sm"
                      />

                      <div className="grid grid-cols-3 gap-2">
                        <input
                          type="number"
                          step="0.01"
                          value={ingredient.quantity}
                          onChange={(e) => updateIngredient(ingredient.id, 'quantity', e.target.value)}
                          placeholder="Qty"
                          className="px-3 py-2 backdrop-blur-xl bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-sm"
                        />

                        <select
                          value={ingredient.unit}
                          onChange={(e) => updateIngredient(ingredient.id, 'unit', e.target.value)}
                          className="px-3 py-2 backdrop-blur-xl bg-black/40 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-sm"
                        >
                          <option value="oz">oz</option>
                          <option value="lb">lb</option>
                          <option value="g">g</option>
                          <option value="kg">kg</option>
                          <option value="cup">cup</option>
                          <option value="tbsp">tbsp</option>
                          <option value="tsp">tsp</option>
                          <option value="each">each</option>
                        </select>

                        <input
                          type="number"
                          step="0.01"
                          value={ingredient.cost}
                          onChange={(e) => updateIngredient(ingredient.id, 'cost', e.target.value)}
                          placeholder="$/unit"
                          className="px-3 py-2 backdrop-blur-xl bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-sm"
                        />
                      </div>

                      {ingredient.quantity && ingredient.cost && (
                        <div className="text-right text-emerald-300 text-sm font-medium">
                          = ${((parseFloat(ingredient.quantity) || 0) * (parseFloat(ingredient.cost) || 0)).toFixed(2)}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Parameters */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Percent className="w-5 h-5 text-emerald-400" />
                Pricing Parameters
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-emerald-200 mb-2">
                    Target Food Cost % (Industry: 28-35%)
                  </label>
                  <input
                    type="number"
                    step="1"
                    value={pricing.targetFoodCostPercent}
                    onChange={(e) => setPricing({ ...pricing, targetFoodCostPercent: e.target.value })}
                    className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-emerald-200 mb-2">
                    Labor Cost % (Industry: 25-35%)
                  </label>
                  <input
                    type="number"
                    step="1"
                    value={pricing.laborCostPercent}
                    onChange={(e) => setPricing({ ...pricing, laborCostPercent: e.target.value })}
                    className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-emerald-200 mb-2">
                    Overhead % (Rent, utilities, etc.)
                  </label>
                  <input
                    type="number"
                    step="1"
                    value={pricing.overheadPercent}
                    onChange={(e) => setPricing({ ...pricing, overheadPercent: e.target.value })}
                    className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Results */}
          <div className="space-y-6">
            {/* Recommended Price */}
            <div className="backdrop-blur-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-300/30 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-white">Recommended Menu Price</h3>
                <Calculator className="w-5 h-5 text-emerald-300" />
              </div>
              <div className="text-5xl font-bold text-white mb-2">
                ${results.recommendedPrice}
              </div>
              <p className="text-emerald-200 text-sm">
                {results.profitMargin}% profit margin
              </p>
            </div>

            {/* Cost Breakdown */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Cost Breakdown</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-emerald-200">Ingredient Cost:</span>
                  <span className="text-xl font-bold text-white">${results.ingredientCost}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-emerald-200">Labor Cost ({pricing.laborCostPercent}%):</span>
                  <span className="text-xl font-bold text-white">${results.laborCost}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-emerald-200">Overhead ({pricing.overheadPercent}%):</span>
                  <span className="text-xl font-bold text-white">${results.overheadCost}</span>
                </div>

                <div className="flex justify-between items-center py-3 border-t-2 border-emerald-500/30 mt-2">
                  <span className="text-emerald-300 font-semibold">Total Cost:</span>
                  <span className="text-2xl font-bold text-emerald-400">${results.totalCost}</span>
                </div>
              </div>
            </div>

            {/* Profitability Analysis */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Profitability</h3>
              
              <div className={`backdrop-blur-xl ${status.bg} border border-white/10 rounded-xl p-4 mb-4`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-emerald-200">Gross Profit per Dish:</span>
                  <span className="text-2xl font-bold text-white">${results.grossProfit}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-emerald-200">Profit Margin:</span>
                  <span className={`text-xl font-bold ${status.color}`}>{results.profitMargin}%</span>
                </div>
              </div>

              <div className="flex items-start gap-3 backdrop-blur-xl bg-emerald-500/10 border border-emerald-300/20 rounded-xl p-4">
                <AlertCircle className={`w-5 h-5 ${status.color} flex-shrink-0 mt-0.5`} />
                <div>
                  <p className={`font-semibold ${status.color}`}>
                    {status.text}
                  </p>
                  <p className="text-sm text-emerald-300 mt-1">
                    Industry standard: 60-70% profit margin for sustainable operations
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="text-emerald-300 text-sm mb-1">Food Cost %</div>
                <div className="text-2xl font-bold text-white">{pricing.targetFoodCostPercent}%</div>
              </div>
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="text-emerald-300 text-sm mb-1">Total Ingredients</div>
                <div className="text-2xl font-bold text-white">{ingredients.length}</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-8 backdrop-blur-xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-300/30 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Automate Your Recipe Costing</h3>
          <p className="text-emerald-200 mb-6 max-w-2xl mx-auto">
            OwnerClone automatically tracks ingredient prices from your invoices and updates your recipe costs in real-time, so you always know your true food cost.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-emerald-500/25"
          >
            See OwnerClone Demo
            <Calculator className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
