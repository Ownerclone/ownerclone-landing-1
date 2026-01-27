'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function PerPlateFoodCostingCalculator() {
  const [dishName, setDishName] = useState('')
  const [menuPrice, setMenuPrice] = useState('')
  const [quickMode, setQuickMode] = useState(false)
  const [quickPlateCost, setQuickPlateCost] = useState('')
  const [ingredients, setIngredients] = useState([
    { 
      id: 1, 
      name: '', 
      soldBy: 'weight',
      dozenPerCase: '',
      caseQuantity: '',
      casePrice: '',
      plateAmount: '',
      plateUnit: 'oz'
    }
  ])
  const [targetFoodCost, setTargetFoodCost] = useState('30')
  const [platesPerWeek, setPlatesPerWeek] = useState('100')

  const conversions: Record<string, number> = { g: 1, kg: 1000, oz: 28.3495, lb: 453.592 }

  const addIngredient = () => {
    const newId = Math.max(...ingredients.map(i => i.id), 0) + 1
    setIngredients([...ingredients, { 
      id: newId, name: '', soldBy: 'weight', dozenPerCase: '', caseQuantity: '', casePrice: '', plateAmount: '', plateUnit: 'oz'
    }])
  }

  const removeIngredient = (id: number) => {
    if (ingredients.length > 1) {
      setIngredients(ingredients.filter(i => i.id !== id))
    }
  }

  const updateIngredient = (id: number, field: string, value: string) => {
    setIngredients(ingredients.map(ing => {
      if (ing.id === id) {
        const updated = { ...ing, [field]: value }
        if (field === 'soldBy') {
          updated.dozenPerCase = ''
          updated.caseQuantity = ''
          updated.casePrice = ''
          updated.plateUnit = (value === 'each' || value === 'dozen' || value === 'case') ? 'each' : 'oz'
        }
        return updated
      }
      return ing
    }))
  }

  const adjustPortion = (id: number, percentage: number) => {
    setIngredients(ingredients.map(ing => {
      if (ing.id === id && ing.plateAmount) {
        const currentQty = parseFloat(ing.plateAmount)
        const newQty = currentQty * (1 + percentage / 100)
        return { ...ing, plateAmount: newQty.toFixed(2) }
      }
      return ing
    }))
  }

  const calculatePricePerUnit = (ing: any) => {
    const casePrice = parseFloat(ing.casePrice) || 0
    const caseQty = parseFloat(ing.caseQuantity) || 0
    const dozenPerCase = parseFloat(ing.dozenPerCase) || 0
    if (casePrice === 0) return null

    if (ing.soldBy === 'each') return { value: casePrice, unit: 'each' }
    if (ing.soldBy === 'dozen' && dozenPerCase > 0) {
      const totalItems = dozenPerCase * 12
      return { value: casePrice / totalItems, unit: 'each', totalItems }
    }
    if (ing.soldBy === 'case' && caseQty > 0) return { value: casePrice / caseQty, unit: 'each' }
    if (ing.soldBy === 'weight' && caseQty > 0) {
      const pricePerLb = casePrice / caseQty
      return { value: pricePerLb, unit: 'lb', perOz: pricePerLb / 16, perGram: pricePerLb / 453.592 }
    }
    return null
  }

  const calculateIngredientCost = (ing: any) => {
    const plateAmount = parseFloat(ing.plateAmount) || 0
    if (plateAmount === 0) return 0
    const priceInfo = calculatePricePerUnit(ing)
    if (!priceInfo) return 0

    if (ing.plateUnit === 'each' || ing.plateUnit === '1/2 each' || ing.plateUnit === '1/4 each') {
      let multiplier = ing.plateUnit === '1/2 each' ? 0.5 : ing.plateUnit === '1/4 each' ? 0.25 : 1
      return priceInfo.value * plateAmount * multiplier
    }
    if (priceInfo.perGram) {
      return priceInfo.perGram * plateAmount * conversions[ing.plateUnit]
    }
    return 0
  }

  const totalPlateCost = quickMode ? (parseFloat(quickPlateCost) || 0) : ingredients.reduce((sum, ing) => sum + calculateIngredientCost(ing), 0)
  const currentMenuPrice = parseFloat(menuPrice) || 0
  const foodCostPercent = currentMenuPrice > 0 ? (totalPlateCost / currentMenuPrice) * 100 : 0
  const getSuggestedPrice = (pct) => totalPlateCost > 0 ? totalPlateCost / (pct / 100) : 0
  const prices = [
    { label: '28% Food Cost', percent: 28, price: getSuggestedPrice(28) },
    { label: '30% Food Cost', percent: 30, price: getSuggestedPrice(30) },
    { label: '32% Food Cost', percent: 32, price: getSuggestedPrice(32) }
  ]
  const customPrice = getSuggestedPrice(parseFloat(targetFoodCost) || 30)
  const calculateProfit = (price) => price - totalPlateCost
  const platesWeek = parseFloat(platesPerWeek) || 0

  const getFoodCostStatus = (pct: number) => {
    if (pct === 0) return { color: 'text-gray-500', bg: 'backdrop-blur-xl bg-white/5', border: 'border-white/10', message: 'Enter your numbers above' }
    if (pct < 28) return { color: 'text-[#10b981]', bg: 'backdrop-blur-xl bg-[#10b981]/10', border: 'border-[#10b981]', message: 'Excellent! Maximizing profit.' }
    if (pct < 32) return { color: 'text-[#10b981]', bg: 'backdrop-blur-xl bg-[#10b981]/10', border: 'border-[#10b981]', message: 'Great! Ideal range.' }
    if (pct < 35) return { color: 'text-[#fbbf24]', bg: 'backdrop-blur-xl bg-[#fbbf24]/10', border: 'border-[#fbbf24]', message: 'Acceptable, consider adjustments.' }
    if (pct < 40) return { color: 'text-[#fb923c]', bg: 'backdrop-blur-xl bg-[#fb923c]/10', border: 'border-[#fb923c]', message: 'High - review pricing or portions.' }
    return { color: 'text-[#ef4444]', bg: 'backdrop-blur-xl bg-[#ef4444]/10', border: 'border-[#ef4444]', message: 'Critical! Losing money.' }
  }
  const status = getFoodCostStatus(foodCostPercent)

  return (
    <div className="min-h-screen text-white">
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-8 max-w-4xl">
        <Link href="/free-tools" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Free Tools
        </Link>

        <div className="mb-8">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-[0_0_50px_rgba(16,185,129,0.1)]">
            <h1 className="text-4xl md:text-5xl font-black mb-4">Per Plate <span className="text-[#10b981]">Food Costing</span></h1>
            <p className="text-xl text-gray-300">Calculate exact ingredient costs per plate and optimize your menu pricing</p>
          </div>
        </div>

        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-[0_0_50px_rgba(16,185,129,0.1)]">
          <div className="flex items-center gap-4 mb-8 p-4 bg-black/20 rounded-lg">
            <span className="text-sm text-gray-400 font-semibold">Mode:</span>
            <button onClick={() => setQuickMode(false)} className={`px-5 py-2 rounded-lg text-sm font-semibold transition-colors ${!quickMode ? 'bg-[#10b981] text-white' : 'bg-white/10 text-gray-400 hover:bg-white/20'}`}>
              🍽️ Full Recipe Builder
            </button>
            <button onClick={() => setQuickMode(true)} className={`px-5 py-2 rounded-lg text-sm font-semibold transition-colors ${quickMode ? 'bg-[#10b981] text-white' : 'bg-white/10 text-gray-400 hover:bg-white/20'}`}>
              ⚡ Quick Check
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-lg font-bold mb-2">Dish Name</label>
              <input type="text" placeholder="e.g., Buffalo Wings" value={dishName} onChange={(e) => setDishName(e.target.value)}
                className="w-full px-4 py-3 bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#10b981] focus:outline-none text-white text-lg transition-colors" />
            </div>
            <div>
              <label className="block text-lg font-bold mb-2">Current Menu Price ($)</label>
              <input type="number" placeholder="14.99" value={menuPrice} onChange={(e) => setMenuPrice(e.target.value)}
                className="w-full px-4 py-3 bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#10b981] focus:outline-none text-white text-lg transition-colors" />
            </div>
          </div>

          {quickMode ? (
            <div className="mb-8">
              <div className="p-4 bg-[#10b981]/10 border border-[#10b981]/30 rounded-lg mb-6">
                <p className="text-sm text-gray-300"><strong>Quick Check Mode:</strong> Enter your known plate cost to instantly see food cost % and pricing.</p>
              </div>
              <label className="block text-lg font-bold mb-2">Known Plate Cost ($)</label>
              <input type="number" step="0.01" placeholder="4.50" value={quickPlateCost} onChange={(e) => setQuickPlateCost(e.target.value)}
                className="w-full md:w-1/2 px-4 py-3 bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#10b981] focus:outline-none text-white text-lg transition-colors" />
            </div>
          ) : (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Recipe Ingredients</h2>
              <div className="mb-6 p-4 bg-[#10b981]/10 border border-[#10b981]/30 rounded-lg">
                <p className="text-sm text-gray-300"><strong>How to use:</strong> Enter how you buy each ingredient → we auto-calculate price per unit → enter how much goes on plate.</p>
              </div>
              
              <div className="space-y-6">
                {ingredients.map((ing) => {
                  const cost = calculateIngredientCost(ing)
                  const priceInfo = calculatePricePerUnit(ing)
                  return (
                    <div key={ing.id} className="border-2 border-[#2a2a2a] rounded-lg p-6 hover:border-[#10b981]/50 transition-colors bg-[#0a0a0a]/50">
                      <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-300 mb-2">Ingredient Name</label>
                        <input type="text" placeholder="e.g., Chicken Wings" value={ing.name} onChange={(e) => updateIngredient(ing.id, 'name', e.target.value)}
                          className="w-full px-4 py-3 bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#10b981] focus:outline-none text-white text-lg transition-colors" />
                      </div>

                      <div className="grid md:grid-cols-4 gap-4 mb-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-300 mb-2">Sold By</label>
                          <select value={ing.soldBy} onChange={(e) => updateIngredient(ing.id, 'soldBy', e.target.value)}
                            className="w-full px-4 py-3 bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#10b981] focus:outline-none text-white transition-colors">
                            <option value="each">Each</option>
                            <option value="dozen">Dozen</option>
                            <option value="case">Case</option>
                            <option value="weight">Weight (lb)</option>
                          </select>
                        </div>

                        {ing.soldBy === 'dozen' && (
                          <div>
                            <label className="block text-sm font-semibold text-gray-300 mb-2">Dozen/Case</label>
                            <input type="number" placeholder="30" value={ing.dozenPerCase} onChange={(e) => updateIngredient(ing.id, 'dozenPerCase', e.target.value)}
                              className="w-full px-4 py-3 bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#10b981] focus:outline-none text-white transition-colors" />
                          </div>
                        )}
                        {ing.soldBy === 'case' && (
                          <div>
                            <label className="block text-sm font-semibold text-gray-300 mb-2">Items/Case</label>
                            <input type="number" placeholder="24" value={ing.caseQuantity} onChange={(e) => updateIngredient(ing.id, 'caseQuantity', e.target.value)}
                              className="w-full px-4 py-3 bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#10b981] focus:outline-none text-white transition-colors" />
                          </div>
                        )}
                        {ing.soldBy === 'weight' && (
                          <div>
                            <label className="block text-sm font-semibold text-gray-300 mb-2">Case Weight (lb)</label>
                            <input type="number" placeholder="40" value={ing.caseQuantity} onChange={(e) => updateIngredient(ing.id, 'caseQuantity', e.target.value)}
                              className="w-full px-4 py-3 bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#10b981] focus:outline-none text-white transition-colors" />
                          </div>
                        )}
                        {ing.soldBy === 'each' && <div></div>}

                        <div>
                          <label className="block text-sm font-semibold text-gray-300 mb-2">{ing.soldBy === 'each' ? 'Price/Each' : 'Case Price'}</label>
                          <div className="relative">
                            <span className="absolute left-3 top-3 text-gray-500">$</span>
                            <input type="number" step="0.01" placeholder={ing.soldBy === 'each' ? '1.50' : '80.00'} value={ing.casePrice}
                              onChange={(e) => updateIngredient(ing.id, 'casePrice', e.target.value)}
                              className="w-full pl-8 pr-4 py-3 bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#10b981] focus:outline-none text-white transition-colors" />
                          </div>
                        </div>

                        {priceInfo && (
                          <div className="flex items-end">
                            <div className="w-full p-3 bg-[#10b981]/20 border border-[#10b981]/50 rounded-lg text-center">
                              <p className="text-xs text-gray-400">Price/{priceInfo.unit}</p>
                              <p className="text-lg font-bold text-[#10b981]">${priceInfo.value.toFixed(4)}</p>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="grid md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-300 mb-2">Amount on Plate</label>
                          <input type="number" step="0.25" placeholder="6" value={ing.plateAmount}
                            onChange={(e) => updateIngredient(ing.id, 'plateAmount', e.target.value)}
                            className="w-full px-4 py-3 bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#10b981] focus:outline-none text-white transition-colors" />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-300 mb-2">Unit</label>
                          <select value={ing.plateUnit} onChange={(e) => updateIngredient(ing.id, 'plateUnit', e.target.value)}
                            className="w-full px-4 py-3 bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#10b981] focus:outline-none text-white transition-colors">
                            {(ing.soldBy === 'each' || ing.soldBy === 'dozen' || ing.soldBy === 'case') ? (
                              <><option value="each">each</option><option value="1/2 each">1/2 each</option><option value="1/4 each">1/4 each</option></>
                            ) : (
                              <><option value="oz">oz</option><option value="g">g</option><option value="lb">lb</option><option value="kg">kg</option></>
                            )}
                          </select>
                        </div>
                        {cost > 0 && (
                          <div className="flex items-end">
                            <div className="w-full p-3 bg-[#10b981]/20 border border-[#10b981]/50 rounded-lg text-center">
                              <p className="text-xs text-gray-400">Cost</p>
                              <p className="text-lg font-bold text-[#10b981]">${cost.toFixed(2)}</p>
                            </div>
                          </div>
                        )}
                      </div>

                      {ing.plateAmount && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="text-sm text-gray-400 mr-2 self-center">Portion:</span>
                          <button onClick={() => adjustPortion(ing.id, -20)} className="px-3 py-1 bg-red-900/50 text-red-400 rounded-lg hover:bg-red-900 transition-colors text-sm">-20%</button>
                          <button onClick={() => adjustPortion(ing.id, -10)} className="px-3 py-1 bg-red-900/30 text-red-400 rounded-lg hover:bg-red-900/50 transition-colors text-sm">-10%</button>
                          <button onClick={() => adjustPortion(ing.id, 10)} className="px-3 py-1 bg-green-900/30 text-green-400 rounded-lg hover:bg-green-900/50 transition-colors text-sm">+10%</button>
                          <button onClick={() => adjustPortion(ing.id, 20)} className="px-3 py-1 bg-green-900/50 text-green-400 rounded-lg hover:bg-green-900 transition-colors text-sm">+20%</button>
                        </div>
                      )}

                      {ingredients.length > 1 && (
                        <button onClick={() => removeIngredient(ing.id)} className="text-red-400 hover:text-red-300 text-sm flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                          Remove
                        </button>
                      )}
                    </div>
                  )
                })}

                <button onClick={addIngredient}
                  className="w-full py-4 border-2 border-dashed border-[#10b981]/50 rounded-lg text-[#10b981] hover:bg-[#10b981]/10 transition-colors flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Add Another Ingredient
                </button>
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6 mb-8 p-6 bg-[#0a0a0a]/50 rounded-lg border border-[#2a2a2a]">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Target Food Cost %</label>
              <div className="relative">
                <input type="number" value={targetFoodCost} onChange={(e) => setTargetFoodCost(e.target.value)} placeholder="30"
                  className="w-full px-4 py-3 bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#10b981] focus:outline-none text-white transition-colors" />
                <span className="absolute right-4 top-3 text-gray-500">%</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Plates Sold Per Week</label>
              <input type="number" value={platesPerWeek} onChange={(e) => setPlatesPerWeek(e.target.value)} placeholder="100"
                className="w-full px-4 py-3 bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#10b981] focus:outline-none text-white transition-colors" />
            </div>
          </div>

          {totalPlateCost > 0 && (
            <div className="border-t-2 border-[#2a2a2a] pt-8">
              <h3 className="text-2xl font-bold mb-6">💰 {dishName ? `${dishName} - ` : ''}Results</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-r from-[#10b981]/20 to-[#059669]/20 p-6 rounded-lg border border-[#10b981]/30 text-center">
                  <p className="text-sm font-semibold text-gray-300 mb-2">TOTAL PLATE COST</p>
                  <p className="text-5xl font-bold text-[#10b981]">${totalPlateCost.toFixed(2)}</p>
                </div>
                {foodCostPercent > 0 && (
                  <div className={`p-6 rounded-lg border-2 text-center ${status.bg} ${status.border}`}>
                    <p className="text-sm font-semibold text-gray-300 mb-2">FOOD COST %</p>
                    <p className={`text-5xl font-bold ${status.color}`}>{foodCostPercent.toFixed(1)}%</p>
                    <p className={`text-sm mt-2 ${status.color}`}>{status.message}</p>
                  </div>
                )}
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {prices.map((option, index) => (
                  <div key={index} className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-lg p-6 hover:border-[#10b981]/50 transition-colors">
                    <p className="text-sm font-semibold text-gray-400 mb-2">{option.label}</p>
                    <p className="text-3xl font-bold text-white mb-3">${option.price.toFixed(2)}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Profit/plate:</span>
                        <span className="font-semibold text-[#10b981]">${calculateProfit(option.price).toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Weekly:</span>
                        <span className="font-semibold text-[#10b981]">${(calculateProfit(option.price) * platesWeek).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="backdrop-blur-xl bg-white/5 border border-[#10b981]/30 rounded-lg p-6 mb-8">
                <h4 className="text-lg font-bold mb-4">Your Target: {targetFoodCost}% Food Cost</h4>
                <div className="grid md:grid-cols-4 gap-4 text-center">
                  <div>
                    <p className="text-sm text-gray-400">Suggested Price</p>
                    <p className="text-2xl font-bold text-[#10b981]">${customPrice.toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Profit/Plate</p>
                    <p className="text-2xl font-bold text-[#10b981]">${calculateProfit(customPrice).toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Weekly</p>
                    <p className="text-2xl font-bold text-[#10b981]">${(calculateProfit(customPrice) * platesWeek).toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Annual</p>
                    <p className="text-2xl font-bold text-[#10b981]">${(calculateProfit(customPrice) * platesWeek * 52).toFixed(0)}</p>
                  </div>
                </div>
              </div>

              {!quickMode && (
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-lg p-6 mb-8">
                  <h4 className="text-lg font-bold mb-4">Ingredient Breakdown</h4>
                  <div className="space-y-3">
                    {ingredients.filter(ing => calculateIngredientCost(ing) > 0).map(ing => {
                      const cost = calculateIngredientCost(ing)
                      const percentage = (cost / totalPlateCost) * 100
                      return (
                        <div key={ing.id} className="flex items-center gap-4">
                          <div className="flex-1">
                            <div className="flex justify-between mb-1">
                              <span className="font-medium">{ing.name || 'Unnamed'}</span>
                              <span className="text-[#10b981]">${cost.toFixed(2)} ({percentage.toFixed(1)}%)</span>
                            </div>
                            <div className="h-2 bg-[#2a2a2a] rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-[#10b981] to-[#059669] rounded-full" style={{ width: `${percentage}%` }} />
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}

              <div className="backdrop-blur-xl bg-[#f59e0b]/10 border border-[#f59e0b]/30 rounded-lg p-6 mb-8">
                <h4 className="text-lg font-bold mb-2 text-[#f59e0b]">💡 Portion Control Power</h4>
                <p className="text-gray-300">
                  Reduce portions by 10% and your plate cost drops to <strong className="text-[#10b981]">${(totalPlateCost * 0.9).toFixed(2)}</strong>. 
                  That saves <strong className="text-[#10b981]">${(totalPlateCost * 0.1).toFixed(2)}</strong> per plate!
                </p>
                <p className="text-gray-300 mt-2">
                  At {platesPerWeek} plates/week = <strong className="text-[#10b981]">${((totalPlateCost * 0.1) * platesWeek * 52).toFixed(0)}</strong> saved annually.
                </p>
              </div>
            </div>
          )}

          <div className="bg-gradient-to-r from-[#10b981] to-[#059669] rounded-xl shadow-lg p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Want Automated Recipe Costing?</h3>
            <p className="text-lg mb-6 text-white/80">OwnerClone calculates plate costs from your invoices and alerts you when prices change</p>
            <Link href="/demo" className="inline-block bg-white text-[#059669] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
              Start Free Trial →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
