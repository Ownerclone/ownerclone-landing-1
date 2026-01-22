'use client'

import { useState } from 'react'

export default function PerPlatePricingCalculator() {
  const [ingredients, setIngredients] = useState([
    { id: 1, name: '', price: '', unit: 'lb', quantity: '' }
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
    setIngredients([...ingredients, { id: newId, name: '', price: '', unit: 'lb', quantity: '' }])
  }

  const removeIngredient = (id) => {
    if (ingredients.length > 1) {
      setIngredients(ingredients.filter(i => i.id !== id))
    }
  }

  const updateIngredient = (id, field, value) => {
    setIngredients(ingredients.map(ing => 
      ing.id === id ? { ...ing, [field]: value } : ing
    ))
  }

  const adjustPortion = (id, percentage) => {
    setIngredients(ingredients.map(ing => {
      if (ing.id === id && ing.quantity) {
        const currentQty = parseFloat(ing.quantity)
        const newQty = currentQty * (1 + percentage / 100)
        return { ...ing, quantity: newQty.toFixed(2) }
      }
      return ing
    }))
  }

  // Calculate cost per ingredient
  const calculateIngredientCost = (ing) => {
    const price = parseFloat(ing.price) || 0
    const quantity = parseFloat(ing.quantity) || 0
    
    if (price === 0 || quantity === 0) return 0

    // Convert price unit to grams
    const pricePerGram = price / conversions[ing.unit]
    
    // Convert quantity to grams
    const quantityInGrams = quantity * conversions[ing.unit]
    
    return pricePerGram * quantityInGrams
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
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          📊 Per Plate Pricing Calculator
        </h1>
        <p className="text-xl text-gray-600">
          Calculate ingredient costs and see how portion control impacts profitability
        </p>
      </div>

      {/* Main Calculator Card */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        
        {/* Ingredients Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Recipe Ingredients</h2>
            <button
              onClick={addIngredient}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold"
            >
              + Add Ingredient
            </button>
          </div>
          
          <div className="space-y-4">
            {ingredients.map((ing) => {
              const cost = calculateIngredientCost(ing)
              
              return (
                <div key={ing.id} className="border-2 border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                  <div className="grid grid-cols-12 gap-4 mb-3">
                    {/* Ingredient Name */}
                    <input
                      type="text"
                      placeholder="Ingredient name"
                      value={ing.name}
                      onChange={(e) => updateIngredient(ing.id, 'name', e.target.value)}
                      className="col-span-12 md:col-span-3 px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                    />
                    
                    {/* Price */}
                    <div className="col-span-6 md:col-span-2 relative">
                      <span className="absolute left-3 top-2.5 text-gray-500">$</span>
                      <input
                        type="number"
                        placeholder="Price"
                        value={ing.price}
                        onChange={(e) => updateIngredient(ing.id, 'price', e.target.value)}
                        className="w-full pl-7 pr-3 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                        step="0.01"
                      />
                    </div>
                    
                    {/* Unit */}
                    <select
                      value={ing.unit}
                      onChange={(e) => updateIngredient(ing.id, 'unit', e.target.value)}
                      className="col-span-6 md:col-span-2 px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                    >
                      <option value="lb">per lb</option>
                      <option value="oz">per oz</option>
                      <option value="kg">per kg</option>
                      <option value="g">per g</option>
                    </select>
                    
                    {/* Quantity */}
                    <input
                      type="number"
                      placeholder="Amount"
                      value={ing.quantity}
                      onChange={(e) => updateIngredient(ing.id, 'quantity', e.target.value)}
                      className="col-span-6 md:col-span-2 px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                      step="0.01"
                    />
                    
                    {/* Unit Display */}
                    <div className="col-span-6 md:col-span-2 flex items-center">
                      <span className="text-gray-600 text-sm">{ing.unit} on plate</span>
                    </div>
                    
                    {/* Delete Button */}
                    <div className="col-span-12 md:col-span-1 flex items-center justify-end">
                      {ingredients.length > 1 && (
                        <button
                          onClick={() => removeIngredient(ing.id)}
                          className="text-red-500 hover:text-red-700 text-2xl font-bold"
                        >
                          ×
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Portion Control & Cost Display */}
                  {ing.name && ing.price && ing.quantity && (
                    <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-gray-200">
                      <span className="text-sm font-semibold text-gray-700">Portion Control:</span>
                      <button
                        onClick={() => adjustPortion(ing.id, -20)}
                        className="px-3 py-1 bg-red-100 text-red-700 rounded text-sm font-semibold hover:bg-red-200 transition"
                      >
                        -20%
                      </button>
                      <button
                        onClick={() => adjustPortion(ing.id, -10)}
                        className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded text-sm font-semibold hover:bg-yellow-200 transition"
                      >
                        -10%
                      </button>
                      <button
                        onClick={() => adjustPortion(ing.id, 10)}
                        className="px-3 py-1 bg-green-100 text-green-700 rounded text-sm font-semibold hover:bg-green-200 transition"
                      >
                        +10%
                      </button>
                      <button
                        onClick={() => adjustPortion(ing.id, 20)}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm font-semibold hover:bg-blue-200 transition"
                      >
                        +20%
                      </button>
                      <div className="ml-auto">
                        <span className="text-sm text-gray-600">Cost: </span>
                        <span className="text-lg font-bold text-blue-600">${cost.toFixed(2)}</span>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Volume Input */}
        <div className="mb-8 p-4 bg-gray-50 rounded-lg">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            How many plates do you sell per week?
          </label>
          <input
            type="number"
            value={platesPerWeek}
            onChange={(e) => setPlatesPerWeek(e.target.value)}
            placeholder="100"
            className="w-full md:w-64 px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
          />
          <p className="text-sm text-gray-600 mt-1">Used to calculate annual savings from portion adjustments</p>
        </div>

        {/* Results Section */}
        {totalPlateCost > 0 && (
          <div className="border-t-2 border-gray-200 pt-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">💰 Plate Cost & Pricing</h3>
            
            {/* Total Plate Cost */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg mb-8">
              <div className="text-center">
                <p className="text-sm font-semibold text-gray-700 mb-2">TOTAL PLATE COST</p>
                <p className="text-5xl font-bold text-blue-600">${totalPlateCost.toFixed(2)}</p>
                <p className="text-sm text-gray-600 mt-2">Cost of all ingredients per plate</p>
              </div>
            </div>

            {/* Suggested Pricing Options */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {prices.map((option, index) => (
                <div 
                  key={index}
                  className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 transition-colors"
                >
                  <p className="text-sm font-semibold text-gray-600 mb-2">{option.label}</p>
                  <p className="text-3xl font-bold text-gray-900 mb-3">
                    ${option.price.toFixed(2)}
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Food Cost:</span>
                      <span className="font-semibold">{option.percent}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Profit/Plate:</span>
                      <span className="font-semibold text-green-600">
                        ${calculateProfit(option.price).toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Weekly Profit:</span>
                      <span className="font-semibold text-green-600">
                        ${(calculateProfit(option.price) * parseFloat(platesPerWeek || 0)).toFixed(0)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Custom Food Cost Target */}
            <div className="bg-purple-50 border-2 border-purple-200 p-6 rounded-lg mb-8">
              <h4 className="font-bold text-gray-900 mb-4">🎯 Custom Target Food Cost</h4>
              <div className="flex flex-col md:flex-row gap-4 items-end">
                <div className="flex-1">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Target Food Cost %
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={targetFoodCost}
                      onChange={(e) => setTargetFoodCost(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
                      min="0"
                      max="100"
                      step="0.5"
                    />
                    <span className="absolute right-4 top-3.5 text-gray-500">%</span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-600 mb-1">Suggested Menu Price</p>
                  <p className="text-4xl font-bold text-purple-600">${customPrice.toFixed(2)}</p>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-600 mb-1">Profit Per Plate</p>
                  <p className="text-4xl font-bold text-green-600">${calculateProfit(customPrice).toFixed(2)}</p>
                </div>
              </div>
            </div>

            {/* Ingredient Breakdown Table */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-4">📋 Ingredient Cost Breakdown</h4>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="text-left py-2 px-3 text-sm font-semibold text-gray-700">Ingredient</th>
                      <th className="text-right py-2 px-3 text-sm font-semibold text-gray-700">Portion</th>
                      <th className="text-right py-2 px-3 text-sm font-semibold text-gray-700">Cost</th>
                      <th className="text-right py-2 px-3 text-sm font-semibold text-gray-700">% of Plate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ingredients.filter(ing => ing.name && ing.price && ing.quantity).map((ing) => {
                      const cost = calculateIngredientCost(ing)
                      const percentage = (cost / totalPlateCost) * 100
                      
                      return (
                        <tr key={ing.id} className="border-b border-gray-200">
                          <td className="py-2 px-3 text-gray-900">{ing.name}</td>
                          <td className="py-2 px-3 text-right text-gray-700">
                            {parseFloat(ing.quantity).toFixed(2)} {ing.unit}
                          </td>
                          <td className="py-2 px-3 text-right font-semibold text-gray-900">
                            ${cost.toFixed(2)}
                          </td>
                          <td className="py-2 px-3 text-right text-gray-600">
                            {percentage.toFixed(1)}%
                          </td>
                        </tr>
                      )
                    })}
                    <tr className="border-t-2 border-gray-300 font-bold">
                      <td className="py-2 px-3 text-gray-900">TOTAL</td>
                      <td className="py-2 px-3"></td>
                      <td className="py-2 px-3 text-right text-blue-600">
                        ${totalPlateCost.toFixed(2)}
                      </td>
                      <td className="py-2 px-3 text-right text-gray-900">100%</td>
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
        <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            💡 The Power of Portion Control
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border-2 border-green-200">
              <p className="text-sm text-gray-600 mb-2">Reduce portions by 10%</p>
              <p className="text-3xl font-bold text-green-600 mb-2">
                ${(totalPlateCost * 0.1).toFixed(2)}
              </p>
              <p className="text-sm text-gray-700">saved per plate</p>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-lg font-bold text-green-700">
                  ${calculateAnnualSavings(totalPlateCost, totalPlateCost * 0.9).toFixed(0)}/year
                </p>
                <p className="text-xs text-gray-600">at {platesPerWeek} plates/week</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-green-200">
              <p className="text-sm text-gray-600 mb-2">Reduce portions by 15%</p>
              <p className="text-3xl font-bold text-green-600 mb-2">
                ${(totalPlateCost * 0.15).toFixed(2)}
              </p>
              <p className="text-sm text-gray-700">saved per plate</p>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-lg font-bold text-green-700">
                  ${calculateAnnualSavings(totalPlateCost, totalPlateCost * 0.85).toFixed(0)}/year
                </p>
                <p className="text-xs text-gray-600">at {platesPerWeek} plates/week</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-green-200">
              <p className="text-sm text-gray-600 mb-2">Reduce portions by 20%</p>
              <p className="text-3xl font-bold text-green-600 mb-2">
                ${(totalPlateCost * 0.2).toFixed(2)}
              </p>
              <p className="text-sm text-gray-700">saved per plate</p>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-lg font-bold text-green-700">
                  ${calculateAnnualSavings(totalPlateCost, totalPlateCost * 0.8).toFixed(0)}/year
                </p>
                <p className="text-xs text-gray-600">at {platesPerWeek} plates/week</p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 border-2 border-yellow-200 rounded-lg">
            <p className="text-sm text-gray-800">
              <strong>💡 Pro Tip:</strong> Small portion adjustments add up fast! Reducing just 1 oz of protein per plate 
              could save you thousands annually without customers noticing. Use the portion control buttons above to test different scenarios.
            </p>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg p-8 text-center text-white">
        <h3 className="text-2xl font-bold mb-4">Want Automated Recipe Costing?</h3>
        <p className="text-lg mb-6 text-blue-100">
          OwnerClone automatically calculates plate costs from your invoices and alerts you when prices change
        </p>
        <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors">
          Start Free Trial →
        </button>
      </div>
    </div>
  )
}
