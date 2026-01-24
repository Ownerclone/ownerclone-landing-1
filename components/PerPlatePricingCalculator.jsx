'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function PerPlatePricingCalculator() {
  const [dishName, setDishName] = useState('')
  const [ingredients, setIngredients] = useState([
    { 
      id: 1, 
      name: '', 
      soldBy: 'weight', // 'each', 'dozen', 'case', 'weight'
      dozenPerCase: '', // if soldBy is 'dozen'
      caseQuantity: '', // number of items in case OR weight of case
      casePrice: '',
      plateAmount: '',
      plateUnit: 'oz' // 'each', '1/2 each', '1/4 each', 'oz', 'g', 'lb', 'kg'
    }
  ])
  const [targetFoodCost, setTargetFoodCost] = useState('30')
  const [platesPerWeek, setPlatesPerWeek] = useState('100')

  // Conversion rates to grams
  const conversions = {
    g: 1,
    kg: 1000,
    oz: 28.3495,
    lb: 453.592
  }

  const addIngredient = () => {
    const newId = Math.max(...ingredients.map(i => i.id), 0) + 1
    setIngredients([...ingredients, { 
      id: newId, 
      name: '', 
      soldBy: 'weight',
      dozenPerCase: '',
      caseQuantity: '',
      casePrice: '',
      plateAmount: '',
      plateUnit: 'oz'
    }])
  }

  const removeIngredient = (id) => {
    if (ingredients.length > 1) {
      setIngredients(ingredients.filter(i => i.id !== id))
    }
  }

  const updateIngredient = (id, field, value) => {
    setIngredients(ingredients.map(ing => {
      if (ing.id === id) {
        const updated = { ...ing, [field]: value }
        
        // Auto-adjust plateUnit when soldBy changes
        if (field === 'soldBy') {
          if (value === 'each' || value === 'case' || value === 'dozen') {
            updated.plateUnit = 'each'
          } else if (value === 'weight') {
            updated.plateUnit = 'oz'
          }
        }
        
        return updated
      }
      return ing
    }))
  }

  const adjustPortion = (id, percentage) => {
    setIngredients(ingredients.map(ing => {
      if (ing.id === id && ing.plateAmount) {
        const currentQty = parseFloat(ing.plateAmount)
        const newQty = currentQty * (1 + percentage / 100)
        return { ...ing, plateAmount: newQty.toFixed(2) }
      }
      return ing
    }))
  }

  // Calculate price per unit (auto-populated field)
  const calculatePricePerUnit = (ing) => {
    const casePrice = parseFloat(ing.casePrice) || 0
    const caseQty = parseFloat(ing.caseQuantity) || 0
    const dozenPerCase = parseFloat(ing.dozenPerCase) || 0
    
    if (casePrice === 0) return null

    if (ing.soldBy === 'each') {
      return { value: casePrice, unit: 'each' }
    }

    if (ing.soldBy === 'dozen' && dozenPerCase > 0) {
      // Formula: (dozen per case × 12) ÷ case price = price per each
      const totalItems = dozenPerCase * 12
      const pricePerEach = casePrice / totalItems
      return { value: pricePerEach, unit: 'each', totalItems }
    }
    
    if (ing.soldBy === 'case' && caseQty > 0) {
      return { value: casePrice / caseQty, unit: 'each' }
    }
    
    if (ing.soldBy === 'weight' && caseQty > 0) {
      // Assume caseQuantity is in lb for weight
      const pricePerLb = casePrice / caseQty
      const pricePerOz = pricePerLb / 16
      const pricePerGram = pricePerLb / 453.592
      return { 
        value: pricePerLb, 
        unit: 'lb',
        perOz: pricePerOz,
        perGram: pricePerGram
      }
    }
    
    return null
  }

  // Calculate cost per ingredient
  const calculateIngredientCost = (ing) => {
    const plateAmount = parseFloat(ing.plateAmount) || 0
    if (plateAmount === 0) return 0

    const priceInfo = calculatePricePerUnit(ing)
    if (!priceInfo) return 0

    // Handle "each" based pricing (each, 1/2 each, 1/4 each)
    if (ing.plateUnit === 'each' || ing.plateUnit === '1/2 each' || ing.plateUnit === '1/4 each') {
      let multiplier = 1
      if (ing.plateUnit === '1/2 each') multiplier = 0.5
      if (ing.plateUnit === '1/4 each') multiplier = 0.25
      
      return priceInfo.value * plateAmount * multiplier
    }

    // Handle weight-based pricing
    if (priceInfo.perGram) {
      // Convert plate amount to grams
      const gramsOnPlate = plateAmount * conversions[ing.plateUnit]
      return priceInfo.perGram * gramsOnPlate
    }

    return 0
  }

  // Total plate cost
  const totalPlateCost = ingredients.reduce((sum, ing) => sum + calculateIngredientCost(ing), 0)

  // Suggested prices
  const getSuggestedPrice = (foodCostPercent) => {
    return totalPlateCost > 0 ? totalPlateCost / (foodCostPercent / 100) : 0
  }

  const prices = [
    { label: '28% Food Cost', percent: 28, price: getSuggestedPrice(28) },
    { label: '30% Food Cost', percent: 30, price: getSuggestedPrice(30) },
    { label: '32% Food Cost', percent: 32, price: getSuggestedPrice(32) }
  ]

  const customPrice = getSuggestedPrice(parseFloat(targetFoodCost) || 30)

  // Profit calculations
  const calculateProfit = (price) => price - totalPlateCost
  const calculateAnnualSavings = (originalCost, newCost) => {
    const savingsPerPlate = originalCost - newCost
    const weeksPerYear = 52
    return savingsPerPlate * parseFloat(platesPerWeek || 0) * weeksPerYear
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Animated Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#38bdf8] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#0ea5e9] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1419] to-transparent pointer-events-none"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Per Plate Pricing <span className="text-[#38bdf8]">Calculator</span>
          </h1>
          <p className="text-xl text-gray-300">
            Calculate ingredient costs and see how portion control impacts profitability
          </p>
        </div>
      </section>

      <section className="relative py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Calculator Card */}
          <div className="bg-[#0a0a0a]/40 backdrop-blur-xl border border-[#38bdf8]/20 rounded-2xl p-8 mb-8 shadow-[0_0_50px_rgba(56,189,248,0.1)]">
            
            {/* Dish Name */}
            <div className="mb-8">
              <label className="block text-lg font-bold mb-2">Dish Name</label>
              <input
                type="text"
                placeholder="e.g., Buffalo Wings, Grilled Salmon, Greek Salad"
                value={dishName}
                onChange={(e) => setDishName(e.target.value)}
                className="w-full px-4 py-3 bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#38bdf8] focus:outline-none text-white text-lg transition-colors"
              />
            </div>

            {/* Ingredients Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Recipe Ingredients</h2>

              {/* Instructions */}
              <div className="mb-6 p-4 bg-[#38bdf8]/10 border border-[#38bdf8]/30 rounded-lg">
                <p className="text-sm text-gray-300">
                  <strong>How to use:</strong> Enter how you <em>buy</em> each ingredient, and we'll auto-calculate the price per unit. 
                  Then enter how much you <em>use</em> on the plate.
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  <strong>Examples:</strong>
                </p>
                <ul className="text-sm text-gray-400 mt-1 ml-4 space-y-1">
                  <li>• Wings: Sold by <strong>dozen</strong>, 30 dozen/case, $80/case → Auto-calculates $0.22 each → Use 8 each</li>
                  <li>• Chicken: Sold by <strong>weight</strong>, 40 lb case, $159.60 → Use 6 oz on plate</li>
                  <li>• Pepper: Sold by <strong>each</strong>, $1.50 each → Use 1/4 each on plate</li>
                </ul>
              </div>
              
              <div className="space-y-6">
                {ingredients.map((ing) => {
                  const cost = calculateIngredientCost(ing)
                  const priceInfo = calculatePricePerUnit(ing)
                  
                  return (
                    <div key={ing.id} className="bg-[#0a0a0a]/60 border-2 border-[#2a2a2a] rounded-lg p-6 hover:border-[#38bdf8]/50 transition-colors">
                      {/* Row 1: Ingredient Name */}
                      <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-300 mb-2">Ingredient Name</label>
                        <input
                          type="text"
                          placeholder="e.g., Chicken Wings, Green Pepper, Chicken Breast"
                          value={ing.name}
                          onChange={(e) => updateIngredient(ing.id, 'name', e.target.value)}
                          className="w-full px-4 py-3 bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#38bdf8] focus:outline-none text-white transition-colors"
                        />
                      </div>

                      {/* Row 2: How is it sold? */}
                      <div className="grid md:grid-cols-4 gap-4 mb-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-300 mb-2">Sold By</label>
                          <select
                            value={ing.soldBy}
                            onChange={(e) => updateIngredient(ing.id, 'soldBy', e.target.value)}
                            className="w-full px-4 py-3 bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#38bdf8] focus:outline-none text-white transition-colors"
                          >
                            <option value="each">Each (single item)</option>
                            <option value="dozen">Dozen (eggs, wings)</option>
                            <option value="case">Case (multiple items)</option>
                            <option value="weight">Weight (lb/kg)</option>
                          </select>
                        </div>

                        {/* Conditional: Dozen per Case */}
                        {ing.soldBy === 'dozen' && (
                          <div>
                            <label className="block text-sm font-semibold text-gray-300 mb-2">Dozen per Case</label>
                            <input
                              type="number"
                              placeholder="e.g., 30, 15, 1"
                              value={ing.dozenPerCase}
                              onChange={(e) => updateIngredient(ing.id, 'dozenPerCase', e.target.value)}
                              className="w-full px-4 py-3 bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#38bdf8] focus:outline-none text-white transition-colors"
                              step="1"
                            />
                          </div>
                        )}

                        {/* Conditional: Items per Case */}
                        {ing.soldBy === 'case' && (
                          <div>
                            <label className="block text-sm font-semibold text-gray-300 mb-2">Items per Case</label>
                            <input
                              type="number"
                              placeholder="e.g., 263"
                              value={ing.caseQuantity}
                              onChange={(e) => updateIngredient(ing.id, 'caseQuantity', e.target.value)}
                              className="w-full px-4 py-3 bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#38bdf8] focus:outline-none text-white transition-colors"
                              step="1"
                            />
                          </div>
                        )}

                        {/* Conditional: Case Weight */}
                        {ing.soldBy === 'weight' && (
                          <div>
                            <label className="block text-sm font-semibold text-gray-300 mb-2">Case Weight (lb)</label>
                            <input
                              type="number"
                              placeholder="e.g., 40"
                              value={ing.caseQuantity}
                              onChange={(e) => updateIngredient(ing.id, 'caseQuantity', e.target.value)}
                              className="w-full px-4 py-3 bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#38bdf8] focus:outline-none text-white transition-colors"
                              step="0.1"
                            />
                          </div>
                        )}

                        {/* Price */}
                        <div className={ing.soldBy === 'each' ? 'md:col-span-3' : ''}>
                          <label className="block text-sm font-semibold text-gray-300 mb-2">
                            {ing.soldBy === 'each' ? 'Price per Each' : 'Price per Case'}
                          </label>
                          <div className="relative">
                            <span className="absolute left-4 top-3.5 text-gray-500">$</span>
                            <input
                              type="number"
                              placeholder="e.g., 80.00"
                              value={ing.casePrice}
                              onChange={(e) => updateIngredient(ing.id, 'casePrice', e.target.value)}
                              className="w-full pl-8 pr-4 py-3 bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#38bdf8] focus:outline-none text-white transition-colors"
                              step="0.01"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Auto-calculated Price Per Unit Display */}
                      {priceInfo && (
                        <div className="mb-4 p-3 bg-[#10b981]/10 border border-[#10b981]/30 rounded-lg">
                          <p className="text-sm font-semibold text-[#10b981]">
                            ✓ Auto-calculated: 
                            {ing.soldBy === 'weight' ? (
                              <>
                                <span className="ml-2">${priceInfo.value.toFixed(2)}/lb</span>
                                <span className="ml-2 text-gray-400">or ${priceInfo.perOz.toFixed(3)}/oz</span>
                                <span className="ml-2 text-gray-400">or ${priceInfo.perGram.toFixed(4)}/g</span>
                              </>
                            ) : ing.soldBy === 'dozen' ? (
                              <>
                                <span className="ml-2">${priceInfo.value.toFixed(3)} per {priceInfo.unit}</span>
                                <span className="ml-2 text-gray-400">({priceInfo.totalItems} items in case)</span>
                              </>
                            ) : (
                              <span className="ml-2">${priceInfo.value.toFixed(3)} per {priceInfo.unit}</span>
                            )}
                          </p>
                        </div>
                      )}

                      {/* Row 3: Amount on Plate */}
                      <div className="grid md:grid-cols-3 gap-4 mb-4">
                        <div className="md:col-span-2">
                          <label className="block text-sm font-semibold text-gray-300 mb-2">Amount on Plate</label>
                          <div className="flex gap-2">
                            <input
                              type="number"
                              placeholder="e.g., 8"
                              value={ing.plateAmount}
                              onChange={(e) => updateIngredient(ing.id, 'plateAmount', e.target.value)}
                              className="flex-1 px-4 py-3 bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#38bdf8] focus:outline-none text-white transition-colors"
                              step="0.01"
                            />
                            <select
                              value={ing.plateUnit}
                              onChange={(e) => updateIngredient(ing.id, 'plateUnit', e.target.value)}
                              className="px-4 py-3 bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#38bdf8] focus:outline-none text-white transition-colors"
                              disabled={ing.soldBy === 'each' || ing.soldBy === 'case' || ing.soldBy === 'dozen'}
                            >
                              {(ing.soldBy === 'each' || ing.soldBy === 'case' || ing.soldBy === 'dozen') ? (
                                <>
                                  <option value="each">each</option>
                                  <option value="1/2 each">1/2 each</option>
                                  <option value="1/4 each">1/4 each</option>
                                </>
                              ) : (
                                <>
                                  <option value="oz">oz</option>
                                  <option value="g">g</option>
                                  <option value="lb">lb</option>
                                  <option value="kg">kg</option>
                                </>
                              )}
                            </select>
                          </div>
                        </div>

                        {/* Delete Button */}
                        <div className="flex items-end justify-end">
                          {ingredients.length > 1 && (
                            <button
                              onClick={() => removeIngredient(ing.id)}
                              className="px-4 py-3 bg-[#ef4444]/20 text-[#ef4444] rounded-lg hover:bg-[#ef4444]/30 transition font-semibold border border-[#ef4444]/50"
                            >
                              Remove
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Portion Control & Cost Display */}
                      {ing.name && ing.casePrice && ing.plateAmount && (
                        <div className="pt-4 border-t border-[#2a2a2a]">
                          <div className="flex flex-wrap items-center gap-3">
                            <span className="text-sm font-semibold text-gray-300">Portion Control:</span>
                            <button
                              onClick={() => adjustPortion(ing.id, -20)}
                              className="px-3 py-1 bg-[#ef4444]/20 text-[#ef4444] rounded text-sm font-semibold hover:bg-[#ef4444]/30 transition border border-[#ef4444]/50"
                            >
                              -20%
                            </button>
                            <button
                              onClick={() => adjustPortion(ing.id, -10)}
                              className="px-3 py-1 bg-[#fbbf24]/20 text-[#fbbf24] rounded text-sm font-semibold hover:bg-[#fbbf24]/30 transition border border-[#fbbf24]/50"
                            >
                              -10%
                            </button>
                            <button
                              onClick={() => adjustPortion(ing.id, 10)}
                              className="px-3 py-1 bg-[#10b981]/20 text-[#10b981] rounded text-sm font-semibold hover:bg-[#10b981]/30 transition border border-[#10b981]/50"
                            >
                              +10%
                            </button>
                            <button
                              onClick={() => adjustPortion(ing.id, 20)}
                              className="px-3 py-1 bg-[#38bdf8]/20 text-[#38bdf8] rounded text-sm font-semibold hover:bg-[#38bdf8]/30 transition border border-[#38bdf8]/50"
                            >
                              +20%
                            </button>
                            <div className="ml-auto">
                              <span className="text-sm text-gray-400">Ingredient Cost: </span>
                              <span className="text-2xl font-bold text-[#38bdf8]">${cost.toFixed(3)}</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}

                {/* Add Ingredient Button */}
                <button
                  onClick={addIngredient}
                  className="w-full py-4 bg-[#38bdf8] text-white rounded-lg hover:bg-[#0ea5e9] transition-colors text-lg font-semibold"
                >
                  + Add Another Ingredient
                </button>
              </div>
            </div>

            {/* Volume Input */}
            <div className="mb-8 p-4 bg-[#0a0a0a]/60 border border-[#2a2a2a] rounded-lg">
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                How many plates do you sell per week?
              </label>
              <input
                type="number"
                value={platesPerWeek}
                onChange={(e) => setPlatesPerWeek(e.target.value)}
                placeholder="100"
                className="w-full md:w-64 px-4 py-3 bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#38bdf8] focus:outline-none text-white transition-colors"
              />
              <p className="text-sm text-gray-500 mt-1">Used to calculate annual savings from portion adjustments</p>
            </div>

            {/* Results Section */}
            {totalPlateCost > 0 && (
              <div className="border-t-2 border-[#2a2a2a] pt-8">
                <h3 className="text-2xl font-bold mb-6">
                  {dishName ? `${dishName} - ` : ''}Plate Cost & Pricing
                </h3>
                
                {/* Total Plate Cost */}
                <div className="bg-gradient-to-r from-[#38bdf8]/20 to-[#0ea5e9]/20 border-2 border-[#38bdf8] p-6 rounded-lg mb-8 backdrop-blur-xl">
                  <div className="text-center">
                    <p className="text-sm font-semibold text-gray-300 mb-2">TOTAL PLATE COST</p>
                    <p className="text-5xl font-bold text-[#38bdf8]">${totalPlateCost.toFixed(2)}</p>
                    <p className="text-sm text-gray-400 mt-2">Cost of all ingredients per plate</p>
                  </div>
                </div>

                {/* Suggested Pricing Options */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {prices.map((option, index) => (
                    <div 
                      key={index}
                      className="bg-[#0a0a0a]/60 backdrop-blur-xl border-2 border-[#2a2a2a] rounded-lg p-6 hover:border-[#38bdf8] transition-colors"
                    >
                      <p className="text-sm font-semibold text-gray-400 mb-2">{option.label}</p>
                      <p className="text-3xl font-bold text-white mb-3">
                        ${option.price.toFixed(2)}
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Food Cost:</span>
                          <span className="font-semibold text-white">{option.percent}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Profit/Plate:</span>
                          <span className="font-semibold text-[#10b981]">
                            ${calculateProfit(option.price).toFixed(2)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Weekly Profit:</span>
                          <span className="font-semibold text-[#10b981]">
                            ${(calculateProfit(option.price) * parseFloat(platesPerWeek || 0)).toFixed(0)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Custom Food Cost Target */}
                <div className="bg-[#a855f7]/10 backdrop-blur-xl border-2 border-[#a855f7] p-6 rounded-lg mb-8">
                  <h4 className="font-bold text-xl text-white mb-4">Custom Target Food Cost</h4>
                  <div className="flex flex-col md:flex-row gap-4 items-end">
                    <div className="flex-1">
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Target Food Cost %
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          value={targetFoodCost}
                          onChange={(e) => setTargetFoodCost(e.target.value)}
                          className="w-full px-4 py-3 bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#a855f7] focus:outline-none text-white transition-colors"
                          min="0"
                          max="100"
                          step="0.5"
                        />
                        <span className="absolute right-4 top-3.5 text-gray-500">%</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-400 mb-1">Suggested Menu Price</p>
                      <p className="text-4xl font-bold text-[#a855f7]">${customPrice.toFixed(2)}</p>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-400 mb-1">Profit Per Plate</p>
                      <p className="text-4xl font-bold text-[#10b981]">${calculateProfit(customPrice).toFixed(2)}</p>
                    </div>
                  </div>
                </div>

                {/* Ingredient Breakdown Table */}
                <div className="bg-[#0a0a0a]/60 backdrop-blur-xl border border-[#2a2a2a] p-6 rounded-lg">
                  <h4 className="font-bold text-xl mb-4">Ingredient Cost Breakdown</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b-2 border-[#2a2a2a]">
                          <th className="text-left py-2 px-3 text-sm font-semibold text-gray-300">Ingredient</th>
                          <th className="text-right py-2 px-3 text-sm font-semibold text-gray-300">Portion</th>
                          <th className="text-right py-2 px-3 text-sm font-semibold text-gray-300">Cost</th>
                          <th className="text-right py-2 px-3 text-sm font-semibold text-gray-300">% of Plate</th>
                        </tr>
                      </thead>
                      <tbody>
                        {ingredients.filter(ing => ing.name && ing.casePrice && ing.plateAmount).map((ing) => {
                          const cost = calculateIngredientCost(ing)
                          const percentage = (cost / totalPlateCost) * 100
                          
                          return (
                            <tr key={ing.id} className="border-b border-[#2a2a2a]">
                              <td className="py-2 px-3 text-white">{ing.name}</td>
                              <td className="py-2 px-3 text-right text-gray-300">
                                {parseFloat(ing.plateAmount).toFixed(2)} {ing.plateUnit}
                              </td>
                              <td className="py-2 px-3 text-right font-semibold text-white">
                                ${cost.toFixed(3)}
                              </td>
                              <td className="py-2 px-3 text-right text-gray-400">
                                {percentage.toFixed(1)}%
                              </td>
                            </tr>
                          )
                        })}
                        <tr className="border-t-2 border-[#38bdf8] font-bold">
                          <td className="py-2 px-3 text-white">TOTAL</td>
                          <td className="py-2 px-3"></td>
                          <td className="py-2 px-3 text-right text-[#38bdf8]">
                            ${totalPlateCost.toFixed(2)}
                          </td>
                          <td className="py-2 px-3 text-right text-white">100%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Annual Impact Calculator */}
          {totalPlateCost > 0 && platesPerWeek && (
            <div className="bg-gradient-to-r from-[#10b981]/20 to-[#059669]/20 border-2 border-[#10b981] rounded-2xl p-8 mb-8 backdrop-blur-xl shadow-[0_0_80px_rgba(16,185,129,0.15)]">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                The Power of Portion Control
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-[#0a0a0a]/60 backdrop-blur-xl p-6 rounded-lg border-2 border-[#10b981]">
                  <p className="text-sm text-gray-400 mb-2">Reduce portions by 10%</p>
                  <p className="text-3xl font-bold text-[#10b981] mb-2">
                    ${(totalPlateCost * 0.1).toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-300">saved per plate</p>
                  <div className="mt-4 pt-4 border-t border-[#2a2a2a]">
                    <p className="text-lg font-bold text-[#10b981]">
                      ${calculateAnnualSavings(totalPlateCost, totalPlateCost * 0.9).toFixed(0)}/year
                    </p>
                    <p className="text-xs text-gray-500">at {platesPerWeek} plates/week</p>
                  </div>
                </div>

                <div className="bg-[#0a0a0a]/60 backdrop-blur-xl p-6 rounded-lg border-2 border-[#10b981]">
                  <p className="text-sm text-gray-400 mb-2">Reduce portions by 15%</p>
                  <p className="text-3xl font-bold text-[#10b981] mb-2">
                    ${(totalPlateCost * 0.15).toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-300">saved per plate</p>
                  <div className="mt-4 pt-4 border-t border-[#2a2a2a]">
                    <p className="text-lg font-bold text-[#10b981]">
                      ${calculateAnnualSavings(totalPlateCost, totalPlateCost * 0.85).toFixed(0)}/year
                    </p>
                    <p className="text-xs text-gray-500">at {platesPerWeek} plates/week</p>
                  </div>
                </div>

                <div className="bg-[#0a0a0a]/60 backdrop-blur-xl p-6 rounded-lg border-2 border-[#10b981]">
                  <p className="text-sm text-gray-400 mb-2">Reduce portions by 20%</p>
                  <p className="text-3xl font-bold text-[#10b981] mb-2">
                    ${(totalPlateCost * 0.2).toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-300">saved per plate</p>
                  <div className="mt-4 pt-4 border-t border-[#2a2a2a]">
                    <p className="text-lg font-bold text-[#10b981]">
                      ${calculateAnnualSavings(totalPlateCost, totalPlateCost * 0.8).toFixed(0)}/year
                    </p>
                    <p className="text-xs text-gray-500">at {platesPerWeek} plates/week</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-[#fbbf24]/10 border-2 border-[#fbbf24] rounded-lg">
                <p className="text-sm text-gray-300">
                  <strong className="text-[#fbbf24]">💡 Pro Tip:</strong> Small portion adjustments add up fast! Reducing just 1 oz of protein per plate 
                  could save you thousands annually without customers noticing. Use the portion control buttons above to test different scenarios.
                </p>
              </div>
            </div>
          )}

          {/* CTA Section */}
          <div className="bg-[#0a0a0a]/40 backdrop-blur-xl border-2 border-[#38bdf8] rounded-3xl p-8 text-center shadow-[0_0_80px_rgba(56,189,248,0.15)]">
            <h2 className="text-2xl font-bold mb-4">Want Automated <span className="text-[#38bdf8]">Recipe Costing</span>?</h2>
            <p className="text-lg text-gray-300 mb-6">
              OwnerClone automatically calculates plate costs from your invoices and alerts you when prices change
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing" className="bg-[#38bdf8] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#0ea5e9] transition-colors">
                Join Early Access
              </Link>
              <Link href="/blog" className="border-2 border-[#38bdf8] text-[#38bdf8] px-8 py-3 rounded-lg font-bold hover:bg-[#38bdf8]/10 transition-colors">
                Read Complete Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
