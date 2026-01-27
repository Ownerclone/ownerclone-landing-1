'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function MegaCalculator() {
  // ============================================
  // SALES & REVENUE STATE
  // ============================================
  const [weeklySales, setWeeklySales] = useState('')
  const [avgCheck, setAvgCheck] = useState('')

  // ============================================
  // PER PLATE FOOD COSTING STATE (Full Featured)
  // ============================================
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
  const [platesPerWeek, setPlatesPerWeek] = useState('100')

  // ============================================
  // LABOR COST STATE
  // ============================================
  const [grossWages, setGrossWages] = useState('')
  const [tips, setTips] = useState('')
  const [payrollTaxRate, setPayrollTaxRate] = useState('12')
  const [benefits, setBenefits] = useState('')
  const [payrollProcessing, setPayrollProcessing] = useState('')

  // ============================================
  // FIXED COSTS STATE (for Break-Even)
  // ============================================
  const [rent, setRent] = useState('')
  const [utilities, setUtilities] = useState('')
  const [insurance, setInsurance] = useState('')
  const [otherFixed, setOtherFixed] = useState('')

  // ============================================
  // SECTION COLLAPSE STATE
  // ============================================
  const [expandedSections, setExpandedSections] = useState({
    sales: true,
    food: true,
    labor: true,
    prime: true,
    breakeven: true,
    whatif: true
  })

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }))
  }

  // ============================================
  // CONVERSION RATES
  // ============================================
  const conversions = {
    g: 1,
    kg: 1000,
    oz: 28.3495,
    lb: 453.592
  }

  // ============================================
  // INGREDIENT FUNCTIONS
  // ============================================
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
        if (field === 'soldBy') {
          updated.dozenPerCase = ''
          updated.caseQuantity = ''
          updated.casePrice = ''
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

  const calculatePricePerUnit = (ing) => {
    const casePrice = parseFloat(ing.casePrice) || 0
    const caseQty = parseFloat(ing.caseQuantity) || 0
    const dozenPerCase = parseFloat(ing.dozenPerCase) || 0
    
    if (casePrice === 0) return null

    if (ing.soldBy === 'each') {
      return { value: casePrice, unit: 'each' }
    }
    
    if (ing.soldBy === 'dozen') {
      if (dozenPerCase > 0) {
        const totalItems = dozenPerCase * 12
        const pricePerEach = casePrice / totalItems
        return { value: pricePerEach, unit: 'each', totalItems }
      }
      return null
    }
    
    if (ing.soldBy === 'case' && caseQty > 0) {
      const pricePerEach = casePrice / caseQty
      return { value: pricePerEach, unit: 'each' }
    }
    
    if (ing.soldBy === 'weight' && caseQty > 0) {
      const pricePerLb = casePrice / caseQty
      const pricePerOz = pricePerLb / 16
      const pricePerGram = pricePerLb / 453.592
      return { value: pricePerLb, unit: 'lb', perOz: pricePerOz, perGram: pricePerGram }
    }
    
    return null
  }

  const calculateIngredientCost = (ing) => {
    const plateAmount = parseFloat(ing.plateAmount) || 0
    if (plateAmount === 0) return 0

    const priceInfo = calculatePricePerUnit(ing)
    if (!priceInfo) return 0

    if (ing.plateUnit === 'each' || ing.plateUnit === '1/2 each' || ing.plateUnit === '1/4 each') {
      let multiplier = 1
      if (ing.plateUnit === '1/2 each') multiplier = 0.5
      if (ing.plateUnit === '1/4 each') multiplier = 0.25
      return priceInfo.value * plateAmount * multiplier
    }

    if (priceInfo.perGram) {
      const gramsOnPlate = plateAmount * conversions[ing.plateUnit]
      return priceInfo.perGram * gramsOnPlate
    }

    return 0
  }

  // ============================================
  // CALCULATIONS
  // ============================================
  
  // Sales
  const sales = parseFloat(weeklySales) || 0
  const check = parseFloat(avgCheck) || 0
  const weeklyCovers = check > 0 ? Math.round(sales / check) : 0

  // Food Cost
  const totalPlateCost = quickMode 
    ? (parseFloat(quickPlateCost) || 0)
    : ingredients.reduce((sum, ing) => sum + calculateIngredientCost(ing), 0)
  
  const currentMenuPrice = parseFloat(menuPrice) || 0
  const foodCostPercent = currentMenuPrice > 0 ? (totalPlateCost / currentMenuPrice) * 100 : 0
  
  const suggestedPrice28 = totalPlateCost > 0 ? totalPlateCost / 0.28 : 0
  const suggestedPrice30 = totalPlateCost > 0 ? totalPlateCost / 0.30 : 0
  const suggestedPrice32 = totalPlateCost > 0 ? totalPlateCost / 0.32 : 0

  // Labor Cost (TRUE formula - taxes on tips, not tips themselves)
  const wages = parseFloat(grossWages) || 0
  const tipsAmount = parseFloat(tips) || 0
  const taxRate = parseFloat(payrollTaxRate) / 100
  const wagesTax = wages * taxRate
  const tipsTax = tipsAmount * taxRate
  const benefitsCost = parseFloat(benefits) || 0
  const processingFees = parseFloat(payrollProcessing) || 0
  const totalLaborCost = wages + wagesTax + tipsTax + benefitsCost + processingFees
  const laborCostPercent = sales > 0 ? (totalLaborCost / sales) * 100 : 0

  // Prime Cost (Food % + Labor %)
  // For prime cost, we need overall food cost %, not just one dish
  // We'll estimate: if they entered a dish, assume similar food cost across menu
  const estimatedFoodCostPercent = foodCostPercent > 0 ? foodCostPercent : 30
  const primeCostPercent = estimatedFoodCostPercent + laborCostPercent
  
  // Fixed Costs & Break-Even
  const totalFixedCosts = (parseFloat(rent) || 0) + (parseFloat(utilities) || 0) + 
                          (parseFloat(insurance) || 0) + (parseFloat(otherFixed) || 0)
  const monthlyFixedCosts = totalFixedCosts
  const contributionMarginPercent = 100 - primeCostPercent
  const breakEvenSales = contributionMarginPercent > 0 ? (monthlyFixedCosts / (contributionMarginPercent / 100)) : 0
  const breakEvenDaily = breakEvenSales / 30

  // Profit
  const monthlyRevenue = sales * 4.33 // weeks per month
  const monthlyCOGS = monthlyRevenue * (estimatedFoodCostPercent / 100)
  const monthlyLabor = totalLaborCost * 4.33
  const monthlyProfit = monthlyRevenue - monthlyCOGS - monthlyLabor - monthlyFixedCosts
  const annualProfit = monthlyProfit * 12

  // What-If Scenarios
  const foodCostReduction2 = sales > 0 ? (sales * 0.02) * 4.33 : 0
  const priceIncrease5 = sales > 0 ? (sales * 0.05) * 4.33 : 0
  const laborReduction2 = totalLaborCost > 0 ? (totalLaborCost * 0.02) * 4.33 : 0

  // ============================================
  // STATUS HELPERS
  // ============================================
  const getFoodCostStatus = (pct) => {
    if (pct === 0) return { color: 'text-gray-500', label: '—' }
    if (pct < 28) return { color: 'text-[#10b981]', label: '✓ Excellent' }
    if (pct < 32) return { color: 'text-[#10b981]', label: '✓ Good' }
    if (pct < 35) return { color: 'text-[#fbbf24]', label: '⚠ High' }
    return { color: 'text-[#ef4444]', label: '✗ Critical' }
  }

  const getLaborCostStatus = (pct) => {
    if (pct === 0) return { color: 'text-gray-500', label: '—' }
    if (pct < 25) return { color: 'text-[#10b981]', label: '✓ Excellent' }
    if (pct < 30) return { color: 'text-[#10b981]', label: '✓ Good' }
    if (pct < 35) return { color: 'text-[#fbbf24]', label: '⚠ High' }
    return { color: 'text-[#ef4444]', label: '✗ Critical' }
  }

  const getPrimeCostStatus = (pct) => {
    if (pct === 0) return { color: 'text-gray-500', label: '—' }
    if (pct < 55) return { color: 'text-[#10b981]', label: '✓ Excellent' }
    if (pct < 60) return { color: 'text-[#10b981]', label: '✓ Good' }
    if (pct < 65) return { color: 'text-[#fbbf24]', label: '⚠ High' }
    return { color: 'text-[#ef4444]', label: '✗ Critical' }
  }

  const foodStatus = getFoodCostStatus(foodCostPercent)
  const laborStatus = getLaborCostStatus(laborCostPercent)
  const primeStatus = getPrimeCostStatus(primeCostPercent)

  // ============================================
  // RENDER
  // ============================================
  return (
    <div className="min-h-screen text-white">
      {/* Header */}
      <section className="relative pt-24 pb-8 px-4">
        <div className="max-w-6xl mx-auto">
          <Link href="/free-tools" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Free Tools
          </Link>
          
          <div className="backdrop-blur-xl bg-gradient-to-r from-[#f59e0b]/10 to-[#fbbf24]/10 border border-[#f59e0b]/30 rounded-2xl p-8 shadow-[0_0_50px_rgba(245,158,11,0.15)]">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🚀</span>
              <h1 className="text-4xl md:text-5xl font-black">
                MEGA <span className="text-[#f59e0b]">Calculator</span>
              </h1>
            </div>
            <p className="text-xl text-gray-300">
              See how Food Cost, Labor, Prime Cost, Break-Even & Pricing all work together in real-time
            </p>
          </div>
        </div>
      </section>

      <section className="relative pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* ==================== LIVE SUMMARY DASHBOARD ==================== */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 sticky top-4 z-10">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
              <div>
                <p className="text-xs text-gray-400 mb-1">Food Cost</p>
                <p className={`text-2xl font-bold ${foodStatus.color}`}>
                  {foodCostPercent > 0 ? `${foodCostPercent.toFixed(1)}%` : '—'}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1">Labor Cost</p>
                <p className={`text-2xl font-bold ${laborStatus.color}`}>
                  {laborCostPercent > 0 ? `${laborCostPercent.toFixed(1)}%` : '—'}
                </p>
              </div>
              <div className="border-l border-r border-white/10 px-4">
                <p className="text-xs text-gray-400 mb-1">Prime Cost</p>
                <p className={`text-2xl font-bold ${primeStatus.color}`}>
                  {primeCostPercent > 0 ? `${primeCostPercent.toFixed(1)}%` : '—'}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1">Break-Even</p>
                <p className="text-2xl font-bold text-[#06b6d4]">
                  {breakEvenSales > 0 ? `$${Math.round(breakEvenSales).toLocaleString()}` : '—'}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1">Monthly Profit</p>
                <p className={`text-2xl font-bold ${monthlyProfit >= 0 ? 'text-[#10b981]' : 'text-[#ef4444]'}`}>
                  {monthlyProfit !== 0 ? `$${Math.round(monthlyProfit).toLocaleString()}` : '—'}
                </p>
              </div>
            </div>
          </div>

          {/* ==================== SALES & REVENUE ==================== */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl mb-6 overflow-hidden">
            <button 
              onClick={() => toggleSection('sales')}
              className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">📊</span>
                <h2 className="text-xl font-bold">Sales & Revenue</h2>
              </div>
              <svg className={`w-6 h-6 transition-transform ${expandedSections.sales ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {expandedSections.sales && (
              <div className="px-6 pb-6 border-t border-white/10">
                <div className="grid md:grid-cols-3 gap-4 pt-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Weekly Sales ($)</label>
                    <input
                      type="number"
                      value={weeklySales}
                      onChange={(e) => setWeeklySales(e.target.value)}
                      placeholder="20,000"
                      className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#f59e0b] focus:outline-none text-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Average Check ($)</label>
                    <input
                      type="number"
                      value={avgCheck}
                      onChange={(e) => setAvgCheck(e.target.value)}
                      placeholder="45"
                      className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#f59e0b] focus:outline-none text-white transition-colors"
                    />
                  </div>
                  <div className="flex items-end">
                    <div className="w-full p-4 bg-[#f59e0b]/10 border border-[#f59e0b]/30 rounded-lg text-center">
                      <p className="text-xs text-gray-400">Weekly Covers</p>
                      <p className="text-2xl font-bold text-[#f59e0b]">{weeklyCovers > 0 ? weeklyCovers.toLocaleString() : '—'}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ==================== PER PLATE FOOD COSTING ==================== */}
          <div className="backdrop-blur-xl bg-white/5 border border-[#10b981]/30 rounded-2xl mb-6 overflow-hidden">
            <button 
              onClick={() => toggleSection('food')}
              className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">🍽️</span>
                <h2 className="text-xl font-bold">Per Plate Food Costing</h2>
                {foodCostPercent > 0 && (
                  <span className={`ml-2 px-3 py-1 rounded-full text-sm font-bold ${foodStatus.color} bg-black/30`}>
                    {foodCostPercent.toFixed(1)}% {foodStatus.label}
                  </span>
                )}
              </div>
              <svg className={`w-6 h-6 transition-transform ${expandedSections.food ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {expandedSections.food && (
              <div className="px-6 pb-6 border-t border-white/10">
                {/* Quick Mode Toggle */}
                <div className="flex items-center gap-4 pt-6 mb-6">
                  <span className="text-sm text-gray-400">Mode:</span>
                  <button
                    onClick={() => setQuickMode(false)}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${!quickMode ? 'bg-[#10b981] text-white' : 'bg-white/10 text-gray-400 hover:bg-white/20'}`}
                  >
                    Full (Build Recipe)
                  </button>
                  <button
                    onClick={() => setQuickMode(true)}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${quickMode ? 'bg-[#10b981] text-white' : 'bg-white/10 text-gray-400 hover:bg-white/20'}`}
                  >
                    Quick (Known Cost)
                  </button>
                </div>

                {/* Dish Name & Menu Price */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Dish Name</label>
                    <input
                      type="text"
                      value={dishName}
                      onChange={(e) => setDishName(e.target.value)}
                      placeholder="e.g., Buffalo Wings"
                      className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#10b981] focus:outline-none text-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Current Menu Price ($)</label>
                    <input
                      type="number"
                      value={menuPrice}
                      onChange={(e) => setMenuPrice(e.target.value)}
                      placeholder="14.99"
                      className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#10b981] focus:outline-none text-white transition-colors"
                    />
                  </div>
                </div>

                {quickMode ? (
                  /* Quick Mode - Just enter known cost */
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Known Plate Cost ($)</label>
                    <input
                      type="number"
                      value={quickPlateCost}
                      onChange={(e) => setQuickPlateCost(e.target.value)}
                      placeholder="4.50"
                      className="w-full md:w-1/2 px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#10b981] focus:outline-none text-white transition-colors"
                    />
                  </div>
                ) : (
                  /* Full Mode - Build Recipe */
                  <div className="mb-6">
                    <div className="mb-4 p-4 bg-[#10b981]/10 border border-[#10b981]/30 rounded-lg">
                      <p className="text-sm text-gray-300">
                        <strong>How to use:</strong> Enter how you <em>buy</em> each ingredient → we auto-calculate the price per unit → then enter how much goes on the plate.
                      </p>
                    </div>

                    <div className="space-y-4">
                      {ingredients.map((ing) => {
                        const cost = calculateIngredientCost(ing)
                        const priceInfo = calculatePricePerUnit(ing)
                        
                        return (
                          <div key={ing.id} className="border border-white/10 rounded-lg p-4 bg-black/20">
                            <div className="grid md:grid-cols-6 gap-3">
                              {/* Ingredient Name */}
                              <div className="md:col-span-2">
                                <label className="block text-xs text-gray-400 mb-1">Ingredient</label>
                                <input
                                  type="text"
                                  value={ing.name}
                                  onChange={(e) => updateIngredient(ing.id, 'name', e.target.value)}
                                  placeholder="Chicken Wings"
                                  className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-lg focus:border-[#10b981] focus:outline-none text-white text-sm"
                                />
                              </div>

                              {/* Sold By */}
                              <div>
                                <label className="block text-xs text-gray-400 mb-1">Sold By</label>
                                <select
                                  value={ing.soldBy}
                                  onChange={(e) => updateIngredient(ing.id, 'soldBy', e.target.value)}
                                  className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-lg focus:border-[#10b981] focus:outline-none text-white text-sm"
                                >
                                  <option value="each">Each</option>
                                  <option value="dozen">Dozen</option>
                                  <option value="case">Case</option>
                                  <option value="weight">Weight (lb)</option>
                                </select>
                              </div>

                              {/* Conditional Fields */}
                              {ing.soldBy === 'dozen' && (
                                <div>
                                  <label className="block text-xs text-gray-400 mb-1">Doz/Case</label>
                                  <input
                                    type="number"
                                    value={ing.dozenPerCase}
                                    onChange={(e) => updateIngredient(ing.id, 'dozenPerCase', e.target.value)}
                                    placeholder="30"
                                    className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-lg focus:border-[#10b981] focus:outline-none text-white text-sm"
                                  />
                                </div>
                              )}
                              {ing.soldBy === 'case' && (
                                <div>
                                  <label className="block text-xs text-gray-400 mb-1">Items/Case</label>
                                  <input
                                    type="number"
                                    value={ing.caseQuantity}
                                    onChange={(e) => updateIngredient(ing.id, 'caseQuantity', e.target.value)}
                                    placeholder="263"
                                    className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-lg focus:border-[#10b981] focus:outline-none text-white text-sm"
                                  />
                                </div>
                              )}
                              {ing.soldBy === 'weight' && (
                                <div>
                                  <label className="block text-xs text-gray-400 mb-1">Case (lb)</label>
                                  <input
                                    type="number"
                                    value={ing.caseQuantity}
                                    onChange={(e) => updateIngredient(ing.id, 'caseQuantity', e.target.value)}
                                    placeholder="40"
                                    className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-lg focus:border-[#10b981] focus:outline-none text-white text-sm"
                                  />
                                </div>
                              )}
                              {ing.soldBy === 'each' && <div></div>}

                              {/* Case Price */}
                              <div>
                                <label className="block text-xs text-gray-400 mb-1">{ing.soldBy === 'each' ? 'Price/Each' : 'Case Price'}</label>
                                <input
                                  type="number"
                                  value={ing.casePrice}
                                  onChange={(e) => updateIngredient(ing.id, 'casePrice', e.target.value)}
                                  placeholder="80.00"
                                  className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-lg focus:border-[#10b981] focus:outline-none text-white text-sm"
                                />
                              </div>

                              {/* Price Per Unit Display */}
                              <div className="flex items-end">
                                {priceInfo ? (
                                  <div className="w-full p-2 bg-[#10b981]/20 border border-[#10b981]/50 rounded-lg text-center">
                                    <p className="text-xs text-gray-400">${priceInfo.value.toFixed(3)}/{priceInfo.unit}</p>
                                  </div>
                                ) : (
                                  <div className="w-full p-2 bg-white/5 border border-white/10 rounded-lg text-center">
                                    <p className="text-xs text-gray-500">—</p>
                                  </div>
                                )}
                              </div>
                            </div>

                            {/* Plate Amount Row */}
                            <div className="grid md:grid-cols-6 gap-3 mt-3">
                              <div className="md:col-span-2"></div>
                              <div>
                                <label className="block text-xs text-gray-400 mb-1">On Plate</label>
                                <input
                                  type="number"
                                  value={ing.plateAmount}
                                  onChange={(e) => updateIngredient(ing.id, 'plateAmount', e.target.value)}
                                  placeholder="8"
                                  className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-lg focus:border-[#10b981] focus:outline-none text-white text-sm"
                                />
                              </div>
                              <div>
                                <label className="block text-xs text-gray-400 mb-1">Unit</label>
                                <select
                                  value={ing.plateUnit}
                                  onChange={(e) => updateIngredient(ing.id, 'plateUnit', e.target.value)}
                                  className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-lg focus:border-[#10b981] focus:outline-none text-white text-sm"
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
                                    </>
                                  )}
                                </select>
                              </div>
                              <div className="flex items-end">
                                {cost > 0 && (
                                  <div className="w-full p-2 bg-[#10b981]/20 border border-[#10b981]/50 rounded-lg text-center">
                                    <p className="text-sm font-bold text-[#10b981]">${cost.toFixed(2)}</p>
                                  </div>
                                )}
                              </div>
                              <div className="flex items-end">
                                {ingredients.length > 1 && (
                                  <button
                                    onClick={() => removeIngredient(ing.id)}
                                    className="text-red-400 hover:text-red-300 text-xs"
                                  >
                                    Remove
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        )
                      })}

                      <button
                        onClick={addIngredient}
                        className="w-full py-3 border-2 border-dashed border-[#10b981]/50 rounded-lg text-[#10b981] hover:bg-[#10b981]/10 transition-colors flex items-center justify-center gap-2"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        Add Ingredient
                      </button>
                    </div>
                  </div>
                )}

                {/* Food Cost Results */}
                {totalPlateCost > 0 && (
                  <div className="grid md:grid-cols-4 gap-4 p-4 bg-black/20 rounded-lg">
                    <div className="text-center">
                      <p className="text-xs text-gray-400">Plate Cost</p>
                      <p className="text-2xl font-bold text-[#10b981]">${totalPlateCost.toFixed(2)}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-400">Food Cost %</p>
                      <p className={`text-2xl font-bold ${foodStatus.color}`}>{foodCostPercent.toFixed(1)}%</p>
                    </div>
                    <div className="text-center border-l border-white/10">
                      <p className="text-xs text-gray-400">Price @ 30%</p>
                      <p className="text-2xl font-bold text-white">${suggestedPrice30.toFixed(2)}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-400">Price @ 28%</p>
                      <p className="text-2xl font-bold text-white">${suggestedPrice28.toFixed(2)}</p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* ==================== LABOR COST ==================== */}
          <div className="backdrop-blur-xl bg-white/5 border border-[#06b6d4]/30 rounded-2xl mb-6 overflow-hidden">
            <button 
              onClick={() => toggleSection('labor')}
              className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">👥</span>
                <h2 className="text-xl font-bold">Labor Cost</h2>
                {laborCostPercent > 0 && (
                  <span className={`ml-2 px-3 py-1 rounded-full text-sm font-bold ${laborStatus.color} bg-black/30`}>
                    {laborCostPercent.toFixed(1)}% {laborStatus.label}
                  </span>
                )}
              </div>
              <svg className={`w-6 h-6 transition-transform ${expandedSections.labor ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {expandedSections.labor && (
              <div className="px-6 pb-6 border-t border-white/10">
                <div className="grid md:grid-cols-3 gap-4 pt-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Gross Wages ($)</label>
                    <input
                      type="number"
                      value={grossWages}
                      onChange={(e) => setGrossWages(e.target.value)}
                      placeholder="5,000"
                      className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#06b6d4] focus:outline-none text-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Tips Earned ($)</label>
                    <input
                      type="number"
                      value={tips}
                      onChange={(e) => setTips(e.target.value)}
                      placeholder="2,000"
                      className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#06b6d4] focus:outline-none text-white transition-colors"
                    />
                    <p className="text-xs text-gray-500 mt-1">You pay tax on tips, not tips themselves</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Payroll Tax Rate (%)</label>
                    <input
                      type="number"
                      value={payrollTaxRate}
                      onChange={(e) => setPayrollTaxRate(e.target.value)}
                      placeholder="12"
                      className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#06b6d4] focus:outline-none text-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Benefits & Other ($)</label>
                    <input
                      type="number"
                      value={benefits}
                      onChange={(e) => setBenefits(e.target.value)}
                      placeholder="500"
                      className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#06b6d4] focus:outline-none text-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Payroll Processing ($)</label>
                    <input
                      type="number"
                      value={payrollProcessing}
                      onChange={(e) => setPayrollProcessing(e.target.value)}
                      placeholder="100"
                      className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#06b6d4] focus:outline-none text-white transition-colors"
                    />
                  </div>
                  <div className="flex items-end">
                    <div className="w-full p-4 bg-[#06b6d4]/10 border border-[#06b6d4]/30 rounded-lg text-center">
                      <p className="text-xs text-gray-400">Total Labor Cost</p>
                      <p className="text-2xl font-bold text-[#06b6d4]">${totalLaborCost.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ==================== PRIME COST ==================== */}
          <div className="backdrop-blur-xl bg-white/5 border border-[#a855f7]/30 rounded-2xl mb-6 overflow-hidden">
            <button 
              onClick={() => toggleSection('prime')}
              className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎯</span>
                <h2 className="text-xl font-bold">Prime Cost</h2>
                {primeCostPercent > 0 && (
                  <span className={`ml-2 px-3 py-1 rounded-full text-sm font-bold ${primeStatus.color} bg-black/30`}>
                    {primeCostPercent.toFixed(1)}% {primeStatus.label}
                  </span>
                )}
              </div>
              <svg className={`w-6 h-6 transition-transform ${expandedSections.prime ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {expandedSections.prime && (
              <div className="px-6 pb-6 border-t border-white/10">
                <div className="pt-6">
                  <div className="p-6 bg-black/20 rounded-lg">
                    <div className="flex items-center justify-center gap-4 text-center flex-wrap">
                      <div>
                        <p className="text-sm text-gray-400">Food Cost</p>
                        <p className={`text-3xl font-bold ${foodStatus.color}`}>{estimatedFoodCostPercent.toFixed(1)}%</p>
                      </div>
                      <span className="text-3xl text-gray-500">+</span>
                      <div>
                        <p className="text-sm text-gray-400">Labor Cost</p>
                        <p className={`text-3xl font-bold ${laborStatus.color}`}>{laborCostPercent.toFixed(1)}%</p>
                      </div>
                      <span className="text-3xl text-gray-500">=</span>
                      <div>
                        <p className="text-sm text-gray-400">Prime Cost</p>
                        <p className={`text-4xl font-bold ${primeStatus.color}`}>{primeCostPercent.toFixed(1)}%</p>
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <p className="text-sm text-gray-400">
                        Target: <span className="text-[#10b981] font-semibold">&lt;60%</span> | 
                        {primeCostPercent < 60 
                          ? <span className="text-[#10b981]"> You're {(60 - primeCostPercent).toFixed(1)}% under target! 🎉</span>
                          : <span className="text-[#ef4444]"> You're {(primeCostPercent - 60).toFixed(1)}% over target ⚠️</span>
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ==================== BREAK-EVEN & PROFIT ==================== */}
          <div className="backdrop-blur-xl bg-white/5 border border-[#f59e0b]/30 rounded-2xl mb-6 overflow-hidden">
            <button 
              onClick={() => toggleSection('breakeven')}
              className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">📈</span>
                <h2 className="text-xl font-bold">Break-Even & Profit</h2>
              </div>
              <svg className={`w-6 h-6 transition-transform ${expandedSections.breakeven ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {expandedSections.breakeven && (
              <div className="px-6 pb-6 border-t border-white/10">
                <div className="grid md:grid-cols-4 gap-4 pt-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Rent ($)</label>
                    <input
                      type="number"
                      value={rent}
                      onChange={(e) => setRent(e.target.value)}
                      placeholder="5,000"
                      className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#f59e0b] focus:outline-none text-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Utilities ($)</label>
                    <input
                      type="number"
                      value={utilities}
                      onChange={(e) => setUtilities(e.target.value)}
                      placeholder="1,500"
                      className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#f59e0b] focus:outline-none text-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Insurance ($)</label>
                    <input
                      type="number"
                      value={insurance}
                      onChange={(e) => setInsurance(e.target.value)}
                      placeholder="800"
                      className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#f59e0b] focus:outline-none text-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Other Fixed ($)</label>
                    <input
                      type="number"
                      value={otherFixed}
                      onChange={(e) => setOtherFixed(e.target.value)}
                      placeholder="700"
                      className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#f59e0b] focus:outline-none text-white transition-colors"
                    />
                  </div>
                </div>

                {/* Results */}
                <div className="grid md:grid-cols-4 gap-4 p-6 bg-black/20 rounded-lg">
                  <div className="text-center">
                    <p className="text-xs text-gray-400">Monthly Fixed Costs</p>
                    <p className="text-2xl font-bold text-[#f59e0b]">${totalFixedCosts.toLocaleString()}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-400">Break-Even (Monthly)</p>
                    <p className="text-2xl font-bold text-white">${Math.round(breakEvenSales).toLocaleString()}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-400">Monthly Profit</p>
                    <p className={`text-2xl font-bold ${monthlyProfit >= 0 ? 'text-[#10b981]' : 'text-[#ef4444]'}`}>
                      ${Math.round(monthlyProfit).toLocaleString()}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-400">Annual Profit</p>
                    <p className={`text-2xl font-bold ${annualProfit >= 0 ? 'text-[#10b981]' : 'text-[#ef4444]'}`}>
                      ${Math.round(annualProfit).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ==================== WHAT-IF SCENARIOS ==================== */}
          <div className="backdrop-blur-xl bg-gradient-to-r from-[#f59e0b]/10 to-[#10b981]/10 border border-[#f59e0b]/30 rounded-2xl mb-6 overflow-hidden">
            <button 
              onClick={() => toggleSection('whatif')}
              className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">💡</span>
                <h2 className="text-xl font-bold">What-If Scenarios</h2>
              </div>
              <svg className={`w-6 h-6 transition-transform ${expandedSections.whatif ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {expandedSections.whatif && (
              <div className="px-6 pb-6 border-t border-white/10">
                <div className="grid md:grid-cols-3 gap-6 pt-6">
                  <div className="p-4 bg-black/20 rounded-lg text-center">
                    <p className="text-sm text-gray-400 mb-2">If you reduce food cost by 2%...</p>
                    <p className="text-2xl font-bold text-[#10b981]">+${Math.round(foodCostReduction2).toLocaleString()}/mo</p>
                    <p className="text-xs text-gray-500 mt-1">in additional profit</p>
                  </div>
                  <div className="p-4 bg-black/20 rounded-lg text-center">
                    <p className="text-sm text-gray-400 mb-2">If you raise prices by 5%...</p>
                    <p className="text-2xl font-bold text-[#10b981]">+${Math.round(priceIncrease5).toLocaleString()}/mo</p>
                    <p className="text-xs text-gray-500 mt-1">in additional revenue</p>
                  </div>
                  <div className="p-4 bg-black/20 rounded-lg text-center">
                    <p className="text-sm text-gray-400 mb-2">If you reduce labor by 2%...</p>
                    <p className="text-2xl font-bold text-[#10b981]">+${Math.round(laborReduction2).toLocaleString()}/mo</p>
                    <p className="text-xs text-gray-500 mt-1">in labor savings</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ==================== CTA ==================== */}
          <div className="backdrop-blur-xl bg-gradient-to-r from-[#f59e0b]/20 to-[#fbbf24]/20 border-2 border-[#f59e0b] rounded-3xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Want This <span className="text-[#f59e0b]">Automated Daily</span>?</h2>
            <p className="text-lg text-gray-300 mb-6">
              OwnerClone connects to your POS and calculates all of this automatically - food cost, labor, prime cost, and profit - updated in real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing" className="bg-[#f59e0b] text-black px-8 py-3 rounded-lg font-bold hover:bg-[#fbbf24] transition-colors">
                Join Early Access
              </Link>
              <Link href="/demo" className="border-2 border-[#f59e0b] text-[#f59e0b] px-8 py-3 rounded-lg font-bold hover:bg-[#f59e0b]/10 transition-colors">
                See Demo
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
