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
        
        // Reset related fields when soldBy changes
        if (field === 'soldBy') {
          updated.dozenPerCase = ''
          updated.caseQuantity = ''
          updated.casePrice = ''
          // Update plateUnit options based on soldBy
          if (value === 'each' || value === 'dozen' || value === 'case') {
            updated.plateUnit = 'each'
          } else {
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

  // Calculate price per unit based on how ingredient is sold
  const calculatePricePerUnit = (ing) => {
    const casePrice = parseFloat(ing.casePrice) || 0
    const caseQty = parseFloat(ing.caseQuantity) || 0
    const dozenPerCase = parseFloat(ing.dozenPerCase) || 0
    
    if (casePrice === 0) return null

    if (ing.soldBy === 'each') {
      // Direct price per each
      return { value: casePrice, unit: 'each' }
    }
    
    if (ing.soldBy === 'dozen') {
      // Calculate price per each from dozen per case
      // e.g., 30 dozen/case × 12 = 360 items, $80/case = $0.22 each
      if (dozenPerCase > 0) {
        const totalItems = dozenPerCase * 12
        const pricePerEach = casePrice / totalItems
        return { 
          value: pricePerEach, 
          unit: 'each',
          totalItems: totalItems
        }
      }
      return null
    }
    
    if (ing.soldBy === 'case' && caseQty > 0) {
      // Case contains X items
      const pricePerEach = casePrice / caseQty
      return { value: pricePerEach, unit: 'each' }
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

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-8 max-w-4xl">
        
        {/* Back Link */}
        <Link href="/free-tools" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Free Tools
        </Link>

        {/* Header Card */}
        <div className="mb-8">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-[0_0_50px_rgba(56,189,248,0.1)]">
            <h1 className="text-4xl md:text-5xl font-black mb-4">
              Per Plate <span className="text-[#38bdf8]">Pricing</span> Calculator
            </h1>
            <p className="text-xl text-gray-300">
              Calculate exact ingredient costs per plate and see how portion control impacts your profitability
            </p>
          </div>
        </div>

        {/* Main Calculator Card */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-[0_0_50px_rgba(56,189,248,0.1)]">
          
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
                  <div key={ing.id} className="border-2 border-[#2a2a2a] rounded-lg p-6 hover:border-[#38bdf8]/50 transition-colors bg-[#0a0a0a]/50">
                    {/* Row 1: Ingredient Name */}
                    <div className="mb-4">
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Ingredient Name</label>
                      <input
                        type="text"
                        placeholder="e.g., Chicken Wings, Green Pepper, Chicken Breast"
                        value={ing.name}
                        onChange={(e) => updateIngredient(ing.id, 'name', e.target.value)}
                        className="w-full px-4 py-3 bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#38bdf8] focus:outline-none text-white text-lg transition-colors"
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
                            placeholder="30"
                            value={ing.dozenPerCase}
                            onChange={(e) => updateIngredient(ing.id, 'dozenPerCase', e.target.value)}
                            className="w-full px-4 py-3 bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#38bdf8] focus:outline-none text-white transition-colors"
                          />
                        </div>
                      )}

                      {/* Conditional: Items per Case */}
                      {ing.soldBy === 'case' && (
                        <div>
                          <label className="block text-sm font-semibold text-gray-300 mb-2">Items per Case</label>
                          <input
                            type="number"
                            placeholder="263"
                            value={ing.caseQuantity}
                            onChange={(e) => updateIngredient(ing.id, 'caseQuantity', e.target.value)}
                            className="w-full px-4 py-3 bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#38bdf8] focus:outline-none text-white transition-colors"
                          />
                        </div>
                      )}

                      {/* Conditional: Case Weight */}
                      {ing.soldBy === 'weight' && (
                        <div>
                          <label className="block text-sm font-semibold text-gray-300 mb-2">Case Weight (lb)</label>
                          <input
                            type="number"
                            placeholder="40"
                            value={ing.caseQuantity}
                            onChange={(e) => updateIngredient(ing.id, 'caseQuantity', e.target.value)}
                            className="w-full px-4 py-3 bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#38bdf8] focus:outline-none text-white transition-colors"
                          />
                        </div>
                      )}

                      {/* Price per each/case */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">
                          {ing.soldBy === 'each' ? 'Price per Each' : 'Price per Case'}
                        </label>
                        <div className="relative">
                          <span className="absolute left-3 top-3 text-gray-500">$</span>
                          <input
                            type="number"
                            step="0.01"
                            placeholder={ing.soldBy === 'each' ? '1.50' : '80.00'}
                            value={ing.casePrice}
                            onChange={(e) => updateIngredient(ing.id, 'casePrice', e.target.value)}
                            className="w-full pl-8 pr-4 py-3 bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#38bdf8] focus:outline-none text-white transition-colors"
                          />
                        </div>
                      </div>

                      {/* Auto-calculated price per unit */}
                      {priceInfo && (
                        <div className="flex items-end">
                          <div className="w-full p-3 bg-[#10b981]/20 border border-[#10b981]/50 rounded-lg text-center">
                            <p className="text-xs text-gray-400">Price per {priceInfo.unit}</p>
                            <p className="text-lg font-bold text-[#10b981]">${priceInfo.value.toFixed(4)}</p>
                            {priceInfo.totalItems && (
                              <p className="text-xs text-gray-400">({priceInfo.totalItems} total items)</p>
                            )}
                            {priceInfo.perOz && (
                              <p className="text-xs text-gray-400">${priceInfo.perOz.toFixed(4)}/oz</p>
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Row 3: Plate Amount */}
                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">Amount on Plate</label>
                        <input
                          type="number"
                          step="0.25"
                          placeholder="6"
                          value={ing.plateAmount}
                          onChange={(e) => updateIngredient(ing.id, 'plateAmount', e.target.value)}
                          className="w-full px-4 py-3 bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#38bdf8] focus:outline-none text-white transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">Unit</label>
                        <select
                          value={ing.plateUnit}
                          onChange={(e) => updateIngredient(ing.id, 'plateUnit', e.target.value)}
                          className="w-full px-4 py-3 bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#38bdf8] focus:outline-none text-white transition-colors"
                        >
                          {(ing.soldBy === 'each' || ing.soldBy === 'dozen' || ing.soldBy === 'case') ? (
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
                      <div className="flex items-end">
                        {cost > 0 && (
                          <div className="w-full p-3 bg-[#38bdf8]/20 border border-[#38bdf8]/50 rounded-lg text-center">
                            <p className="text-xs text-gray-400">Cost on Plate</p>
                            <p className="text-lg font-bold text-[#38bdf8]">${cost.toFixed(2)}</p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Portion Control Buttons */}
                    {ing.plateAmount && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-sm text-gray-400 mr-2 self-center">Portion Control:</span>
                        <button
                          onClick={() => adjustPortion(ing.id, -20)}
                          className="px-3 py-1 bg-red-900/50 text-red-400 rounded-lg hover:bg-red-900 transition-colors text-sm"
                        >
                          -20%
                        </button>
                        <button
                          onClick={() => adjustPortion(ing.id, -10)}
                          className="px-3 py-1 bg-red-900/30 text-red-400 rounded-lg hover:bg-red-900/50 transition-colors text-sm"
                        >
                          -10%
                        </button>
                        <button
                          onClick={() => adjustPortion(ing.id, 10)}
                          className="px-3 py-1 bg-green-900/30 text-green-400 rounded-lg hover:bg-green-900/50 transition-colors text-sm"
                        >
                          +10%
                        </button>
                        <button
                          onClick={() => adjustPortion(ing.id, 20)}
                          className="px-3 py-1 bg-green-900/50 text-green-400 rounded-lg hover:bg-green-900 transition-colors text-sm"
                        >
                          +20%
                        </button>
                      </div>
                    )}

                    {/* Remove Button */}
                    {ingredients.length > 1 && (
                      <button
                        onClick={() => removeIngredient(ing.id)}
                        className="text-red-400 hover:text-red-300 text-sm flex items-center gap-1"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        Remove Ingredient
                      </button>
                    )}
                  </div>
                )
              })}

              {/* Add Ingredient Button - AT BOTTOM */}
              <button
                onClick={addIngredient}
                className="w-full py-4 border-2 border-dashed border-[#38bdf8]/50 rounded-lg text-[#38bdf8] hover:bg-[#38bdf8]/10 transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add Another Ingredient
              </button>
            </div>
          </div>

          {/* Target Food Cost & Plates Per Week */}
          <div className="grid md:grid-cols-2 gap-6 mb-8 p-6 bg-[#0a0a0a]/50 rounded-lg border border-[#2a2a2a]">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Target Food Cost %</label>
              <div className="relative">
                <input
                  type="number"
                  value={targetFoodCost}
                  onChange={(e) => setTargetFoodCost(e.target.value)}
                  placeholder="30"
                  className="w-full px-4 py-3 bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#38bdf8] focus:outline-none text-white transition-colors"
                />
                <span className="absolute right-4 top-3 text-gray-500">%</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Standard range: 28-32%</p>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Plates Sold Per Week</label>
              <input
                type="number"
                value={platesPerWeek}
                onChange={(e) => setPlatesPerWeek(e.target.value)}
                placeholder="100"
                className="w-full px-4 py-3 bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#38bdf8] focus:outline-none text-white transition-colors"
              />
              <p className="text-xs text-gray-500 mt-1">Used to calculate annual savings</p>
            </div>
          </div>

          {/* Results Section */}
          {totalPlateCost > 0 && (
            <div className="border-t-2 border-[#2a2a2a] pt-8">
              <h3 className="text-2xl font-bold mb-6">
                💰 {dishName ? `${dishName} - ` : ''}Plate Cost & Pricing
              </h3>
              
              {/* Total Plate Cost */}
              <div className="bg-gradient-to-r from-[#38bdf8]/20 to-[#0ea5e9]/20 p-6 rounded-lg mb-8 border border-[#38bdf8]/30">
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
                    className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-lg p-6 hover:border-[#38bdf8]/50 transition-colors"
                  >
                    <p className="text-sm font-semibold text-gray-400 mb-2">{option.label}</p>
                    <p className="text-3xl font-bold text-white mb-3">
                      ${option.price.toFixed(2)}
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Food Cost:</span>
                        <span className="font-semibold">${totalPlateCost.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Profit per plate:</span>
                        <span className="font-semibold text-[#10b981]">${calculateProfit(option.price).toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Weekly profit:</span>
                        <span className="font-semibold text-[#10b981]">${(calculateProfit(option.price) * parseFloat(platesPerWeek || 0)).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Custom Target */}
              <div className="backdrop-blur-xl bg-white/5 border border-[#38bdf8]/30 rounded-lg p-6 mb-8">
                <h4 className="text-lg font-bold mb-4">Your Target: {targetFoodCost}% Food Cost</h4>
                <div className="grid md:grid-cols-4 gap-4 text-center">
                  <div>
                    <p className="text-sm text-gray-400">Suggested Price</p>
                    <p className="text-2xl font-bold text-[#38bdf8]">${customPrice.toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Profit per Plate</p>
                    <p className="text-2xl font-bold text-[#10b981]">${calculateProfit(customPrice).toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Weekly Profit</p>
                    <p className="text-2xl font-bold text-[#10b981]">${(calculateProfit(customPrice) * parseFloat(platesPerWeek || 0)).toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Annual Profit</p>
                    <p className="text-2xl font-bold text-[#10b981]">${(calculateProfit(customPrice) * parseFloat(platesPerWeek || 0) * 52).toFixed(0)}</p>
                  </div>
                </div>
              </div>

              {/* Ingredient Breakdown */}
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-lg p-6 mb-8">
                <h4 className="text-lg font-bold mb-4">Ingredient Cost Breakdown</h4>
                <div className="space-y-3">
                  {ingredients.filter(ing => calculateIngredientCost(ing) > 0).map(ing => {
                    const cost = calculateIngredientCost(ing)
                    const percentage = (cost / totalPlateCost) * 100
                    return (
                      <div key={ing.id} className="flex items-center gap-4">
                        <div className="flex-1">
                          <div className="flex justify-between mb-1">
                            <span className="font-medium">{ing.name || 'Unnamed'}</span>
                            <span className="text-[#38bdf8]">${cost.toFixed(2)} ({percentage.toFixed(1)}%)</span>
                          </div>
                          <div className="h-2 bg-[#2a2a2a] rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] rounded-full transition-all"
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Power of Portion Control */}
              <div className="backdrop-blur-xl bg-[#f59e0b]/10 border border-[#f59e0b]/30 rounded-lg p-6 mb-8">
                <h4 className="text-lg font-bold mb-2 text-[#f59e0b]">💡 The Power of Portion Control & Pricing</h4>
                <p className="text-gray-300">
                  Reduce portions or costs by just 10% and your plate cost drops to <strong className="text-[#10b981]">${(totalPlateCost * 0.9).toFixed(2)}</strong>. 
                  That's <strong className="text-[#10b981]">${(totalPlateCost * 0.1).toFixed(2)}</strong> saved per plate!
                </p>
                <p className="text-gray-300 mt-2">
                  At {platesPerWeek} plates/week, that's <strong className="text-[#10b981]">${((totalPlateCost * 0.1) * parseFloat(platesPerWeek || 0) * 52).toFixed(0)}</strong> saved annually.
                </p>
                <p className="text-sm text-gray-400 mt-3">
                  Reducing just 1 oz of protein per plate could save you thousands annually without customers noticing. 
                  Use the portion control buttons above to test different scenarios.
                </p>
              </div>
            </div>
          )}

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] rounded-xl shadow-lg p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Want Automated Recipe Costing?</h3>
            <p className="text-lg mb-6 text-white/80">
              OwnerClone automatically calculates plate costs from your invoices and alerts you when prices change
            </p>
            <Link 
              href="/demo"
              className="inline-block bg-white text-[#0ea5e9] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Start Free Trial →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
