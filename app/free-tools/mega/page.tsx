'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  UtensilsCrossed, 
  Users, 
  PieChart, 
  Target, 
  Lightbulb, 
  TrendingUp,
  DollarSign,
  CreditCard,
  Calendar,
  Music,
  Megaphone,
  ChevronDown,
  Plus,
  ArrowLeft,
  Rocket
} from 'lucide-react'

export default function MegaCalculator() {
  // ============================================
  // SALES & REVENUE STATE
  // ============================================
  const [weeklySales, setWeeklySales] = useState('')
  const [ppa, setPpa] = useState('') // Per Person Average (not avg check)

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
  const [tipPercent, setTipPercent] = useState('20') // Now a percentage, not dollar amount
  const [payrollTaxRate, setPayrollTaxRate] = useState('11') // Default 11%
  const [benefits, setBenefits] = useState('')
  const [payrollProcessing, setPayrollProcessing] = useState('')

  // ============================================
  // FIXED COSTS STATE (Monthly)
  // ============================================
  const [rent, setRent] = useState('')
  const [utilities, setUtilities] = useState('')
  const [insurance, setInsurance] = useState('')
  const [loanPayments, setLoanPayments] = useState('')
  const [ccPayments, setCcPayments] = useState('')
  const [ccFeePercent, setCcFeePercent] = useState('2.9')
  const [ccSalesPercent, setCcSalesPercent] = useState('80') // % of sales on credit cards
  const [otherFixed, setOtherFixed] = useState('')

  // ============================================
  // VARIABLE COSTS STATE (Weekly)
  // ============================================
  const [entertainment, setEntertainment] = useState('')
  const [trivia, setTrivia] = useState('')
  const [linens, setLinens] = useState('')
  const [advertising, setAdvertising] = useState('')

  // ============================================
  // PERIODIC COSTS STATE
  // ============================================
  const [greaseTrap, setGreaseTrap] = useState('') // Quarterly
  const [hoodCleaning, setHoodCleaning] = useState('') // Quarterly
  const [alcoholLicense, setAlcoholLicense] = useState('') // Yearly

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
  const conversions: Record<string, number> = {
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

  const calculatePricePerUnit = (ing: typeof ingredients[0]) => {
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

  const calculateIngredientCost = (ing: typeof ingredients[0]) => {
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
  
  // Sales - Using PPA (Per Person Average) and Covers
  const sales = parseFloat(weeklySales) || 0
  const perPersonAvg = parseFloat(ppa) || 0
  const weeklyCovers = perPersonAvg > 0 ? Math.round(sales / perPersonAvg) : 0 // Covers = individual people

  // Food Cost
  const totalPlateCost = quickMode 
    ? (parseFloat(quickPlateCost) || 0)
    : ingredients.reduce((sum, ing) => sum + calculateIngredientCost(ing), 0)
  
  const currentMenuPrice = parseFloat(menuPrice) || 0
  const foodCostPercent = currentMenuPrice > 0 ? (totalPlateCost / currentMenuPrice) * 100 : 0
  
  const suggestedPrice28 = totalPlateCost > 0 ? totalPlateCost / 0.28 : 0
  const suggestedPrice30 = totalPlateCost > 0 ? totalPlateCost / 0.30 : 0
  const suggestedPrice32 = totalPlateCost > 0 ? totalPlateCost / 0.32 : 0

  // Labor Cost - Tips now calculated from percentage
  const wages = parseFloat(grossWages) || 0
  const tipPercentValue = parseFloat(tipPercent) || 0
  const tipsAmount = sales > 0 ? sales * (tipPercentValue / 100) : 0 // Calculate tips from sales
  const taxRate = parseFloat(payrollTaxRate) / 100
  const wagesTax = wages * taxRate
  const tipsTax = tipsAmount * taxRate // Tax on tips, not tips themselves
  const benefitsCost = parseFloat(benefits) || 0
  const processingFees = parseFloat(payrollProcessing) || 0
  const totalLaborCost = wages + wagesTax + tipsTax + benefitsCost + processingFees
  const laborCostPercent = sales > 0 ? (totalLaborCost / sales) * 100 : 0

  // Prime Cost (Food % + Labor %)
  const estimatedFoodCostPercent = foodCostPercent > 0 ? foodCostPercent : 30
  const primeCostPercent = estimatedFoodCostPercent + laborCostPercent
  
  // Fixed Costs (Monthly) - Expanded
  const monthlySales = sales * 4.33
  const ccSales = monthlySales * ((parseFloat(ccSalesPercent) || 80) / 100)
  const ccProcessingFees = ccSales * ((parseFloat(ccFeePercent) || 2.9) / 100)
  
  // Prorate periodic costs
  const quarterlyToMonthly = ((parseFloat(greaseTrap) || 0) + (parseFloat(hoodCleaning) || 0)) / 3
  const yearlyToMonthly = (parseFloat(alcoholLicense) || 0) / 12
  
  const totalMonthlyFixedCosts = 
    (parseFloat(rent) || 0) + 
    (parseFloat(utilities) || 0) + 
    (parseFloat(insurance) || 0) + 
    (parseFloat(loanPayments) || 0) +
    (parseFloat(ccPayments) || 0) +
    ccProcessingFees +
    (parseFloat(otherFixed) || 0) +
    quarterlyToMonthly +
    yearlyToMonthly

  // Variable Costs (Weekly → Monthly)
  const weeklyVariableCosts = 
    (parseFloat(entertainment) || 0) +
    (parseFloat(trivia) || 0) +
    (parseFloat(linens) || 0) +
    (parseFloat(advertising) || 0)
  const monthlyVariableCosts = weeklyVariableCosts * 4.33

  // Total Operating Costs (excluding COGS and Labor which are in Prime Cost)
  const totalMonthlyOperatingCosts = totalMonthlyFixedCosts + monthlyVariableCosts
  const totalWeeklyOperatingCosts = totalMonthlyOperatingCosts / 4.33

  // Break-Even Calculation
  const contributionMarginPercent = 100 - primeCostPercent
  const breakEvenMonthly = contributionMarginPercent > 0 
    ? (totalMonthlyOperatingCosts / (contributionMarginPercent / 100)) 
    : 0
  const breakEvenWeekly = breakEvenMonthly / 4.33
  const coversToBreakEvenWeekly = perPersonAvg > 0 ? Math.ceil(breakEvenWeekly / perPersonAvg) : 0

  // Profit Calculation
  const monthlyRevenue = sales * 4.33
  const monthlyCOGS = monthlyRevenue * (estimatedFoodCostPercent / 100)
  const monthlyLabor = totalLaborCost * 4.33
  const monthlyProfit = monthlyRevenue - monthlyCOGS - monthlyLabor - totalMonthlyOperatingCosts
  const weeklyProfit = monthlyProfit / 4.33
  const annualProfit = monthlyProfit * 12

  // ============================================
  // WHAT-IF SCENARIOS
  // ============================================
  
  // Food Cost % Point Reduction (e.g., 30% → 28% = 2 points)
  const [foodCostPointReduction, setFoodCostPointReduction] = useState('2')
  const foodPointReductionValue = parseFloat(foodCostPointReduction) || 0
  const foodCostPointSavingsWeekly = sales * (foodPointReductionValue / 100)
  const foodCostPointSavingsMonthly = foodCostPointSavingsWeekly * 4.33
  const foodCostPointSavingsYearly = foodCostPointSavingsMonthly * 12

  // Food Spend % Reduction (e.g., 2% off your $3000 spend)
  const [foodSpendReduction, setFoodSpendReduction] = useState('10')
  const foodSpendReductionValue = parseFloat(foodSpendReduction) || 0
  const currentWeeklyFoodSpend = sales * (estimatedFoodCostPercent / 100)
  const foodSpendSavingsWeekly = currentWeeklyFoodSpend * (foodSpendReductionValue / 100)
  const foodSpendSavingsMonthly = foodSpendSavingsWeekly * 4.33
  const foodSpendSavingsYearly = foodSpendSavingsMonthly * 12

  // Price Increase
  const [priceIncreasePercent, setPriceIncreasePercent] = useState('5')
  const priceIncreaseValue = parseFloat(priceIncreasePercent) || 0
  const priceIncreaseSavingsWeekly = sales * (priceIncreaseValue / 100)
  const priceIncreaseSavingsMonthly = priceIncreaseSavingsWeekly * 4.33
  const priceIncreaseSavingsYearly = priceIncreaseSavingsMonthly * 12

  // Labor Reduction
  const [laborReductionPercent, setLaborReductionPercent] = useState('2')
  const laborReductionValue = parseFloat(laborReductionPercent) || 0
  const laborSavingsWeekly = totalLaborCost * (laborReductionValue / 100)
  const laborSavingsMonthly = laborSavingsWeekly * 4.33
  const laborSavingsYearly = laborSavingsMonthly * 12

  // ============================================
  // STATUS HELPERS
  // ============================================
  const getFoodCostStatus = (pct: number) => {
    if (pct === 0) return { color: 'text-gray-500', label: '—' }
    if (pct < 28) return { color: 'text-[#10b981]', label: '✓ Excellent' }
    if (pct < 32) return { color: 'text-[#10b981]', label: '✓ Good' }
    if (pct < 35) return { color: 'text-[#fbbf24]', label: '⚠ High' }
    return { color: 'text-[#ef4444]', label: '✗ Critical' }
  }

  const getLaborCostStatus = (pct: number) => {
    if (pct === 0) return { color: 'text-gray-500', label: '—' }
    if (pct < 25) return { color: 'text-[#10b981]', label: '✓ Excellent' }
    if (pct < 30) return { color: 'text-[#10b981]', label: '✓ Good' }
    if (pct < 35) return { color: 'text-[#fbbf24]', label: '⚠ High' }
    return { color: 'text-[#ef4444]', label: '✗ Critical' }
  }

  const getPrimeCostStatus = (pct: number) => {
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
            <ArrowLeft className="w-5 h-5" />
            Back to Free Tools
          </Link>
          
          <div className="backdrop-blur-xl bg-gradient-to-r from-[#f59e0b]/10 to-[#fbbf24]/10 border border-[#f59e0b]/30 rounded-2xl p-8 shadow-[0_0_50px_rgba(245,158,11,0.15)]">
            <div className="flex items-center gap-3 mb-4">
              <Rocket className="w-10 h-10 text-[#f59e0b]" />
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
          <div className="backdrop-blur-xl bg-black/80 border border-white/20 rounded-2xl p-6 mb-8 sticky top-20 z-10 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-center">
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
                <p className="text-xs text-gray-400 mb-1">Break-Even/wk</p>
                <p className="text-2xl font-bold text-[#06b6d4]">
                  {breakEvenWeekly > 0 ? `$${Math.round(breakEvenWeekly).toLocaleString()}` : '—'}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1">Weekly Profit</p>
                <p className={`text-2xl font-bold ${weeklyProfit >= 0 ? 'text-[#10b981]' : 'text-[#ef4444]'}`}>
                  {sales > 0 ? `$${Math.round(weeklyProfit).toLocaleString()}` : '—'}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1">Monthly Profit</p>
                <p className={`text-2xl font-bold ${monthlyProfit >= 0 ? 'text-[#10b981]' : 'text-[#ef4444]'}`}>
                  {sales > 0 ? `$${Math.round(monthlyProfit).toLocaleString()}` : '—'}
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
                <TrendingUp className="w-6 h-6 text-[#f59e0b]" />
                <h2 className="text-xl font-bold">Sales & Revenue</h2>
              </div>
              <ChevronDown className={`w-6 h-6 transition-transform ${expandedSections.sales ? 'rotate-180' : ''}`} />
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
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Per Person Average - PPA ($)</label>
                    <input
                      type="number"
                      value={ppa}
                      onChange={(e) => setPpa(e.target.value)}
                      placeholder="25"
                      className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#f59e0b] focus:outline-none text-white transition-colors"
                    />
                    <p className="text-xs text-gray-500 mt-1">Average spend per person (not per check/table)</p>
                  </div>
                  <div className="flex items-end">
                    <div className="w-full p-4 bg-[#f59e0b]/10 border border-[#f59e0b]/30 rounded-lg text-center">
                      <p className="text-xs text-gray-400">Weekly Covers</p>
                      <p className="text-2xl font-bold text-[#f59e0b]">{weeklyCovers > 0 ? weeklyCovers.toLocaleString() : '—'}</p>
                      <p className="text-xs text-gray-500">people through the door</p>
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
                <UtensilsCrossed className="w-6 h-6 text-[#10b981]" />
                <h2 className="text-xl font-bold">Per Plate Food Costing</h2>
                {foodCostPercent > 0 && (
                  <span className={`ml-2 px-3 py-1 rounded-full text-sm font-bold ${foodStatus.color} bg-black/30`}>
                    {foodCostPercent.toFixed(1)}% {foodStatus.label}
                  </span>
                )}
              </div>
              <ChevronDown className={`w-6 h-6 transition-transform ${expandedSections.food ? 'rotate-180' : ''}`} />
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
                        <Plus className="w-5 h-5" />
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
                <Users className="w-6 h-6 text-[#06b6d4]" />
                <h2 className="text-xl font-bold">Labor Cost</h2>
                {laborCostPercent > 0 && (
                  <span className={`ml-2 px-3 py-1 rounded-full text-sm font-bold ${laborStatus.color} bg-black/30`}>
                    {laborCostPercent.toFixed(1)}% {laborStatus.label}
                  </span>
                )}
              </div>
              <ChevronDown className={`w-6 h-6 transition-transform ${expandedSections.labor ? 'rotate-180' : ''}`} />
            </button>
            
            {expandedSections.labor && (
              <div className="px-6 pb-6 border-t border-white/10">
                <div className="grid md:grid-cols-3 gap-4 pt-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Gross Wages (Weekly $)</label>
                    <input
                      type="number"
                      value={grossWages}
                      onChange={(e) => setGrossWages(e.target.value)}
                      placeholder="5,000"
                      className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#06b6d4] focus:outline-none text-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Average Tip % on Sales</label>
                    <div className="relative">
                      <input
                        type="number"
                        value={tipPercent}
                        onChange={(e) => setTipPercent(e.target.value)}
                        placeholder="20"
                        className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#06b6d4] focus:outline-none text-white transition-colors"
                      />
                      <span className="absolute right-4 top-3.5 text-gray-500">%</span>
                    </div>
                    {sales > 0 && tipsAmount > 0 && (
                      <p className="text-xs text-[#06b6d4] mt-1">{tipPercent}% = ${tipsAmount.toLocaleString(undefined, {maximumFractionDigits: 0})}/week in tips</p>
                    )}
                    <p className="text-xs text-gray-500 mt-1">You pay tax on tips, not tips themselves</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Payroll Tax Rate (%)</label>
                    <div className="relative">
                      <input
                        type="number"
                        value={payrollTaxRate}
                        onChange={(e) => setPayrollTaxRate(e.target.value)}
                        placeholder="11"
                        className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#06b6d4] focus:outline-none text-white transition-colors"
                      />
                      <span className="absolute right-4 top-3.5 text-gray-500">%</span>
                    </div>
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
                      <p className="text-xs text-gray-400">Total Labor Cost (Weekly)</p>
                      <p className="text-2xl font-bold text-[#06b6d4]">${totalLaborCost.toLocaleString(undefined, {maximumFractionDigits: 0})}</p>
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
                <PieChart className="w-6 h-6 text-[#a855f7]" />
                <h2 className="text-xl font-bold">Prime Cost</h2>
                {primeCostPercent > 0 && (
                  <span className={`ml-2 px-3 py-1 rounded-full text-sm font-bold ${primeStatus.color} bg-black/30`}>
                    {primeCostPercent.toFixed(1)}% {primeStatus.label}
                  </span>
                )}
              </div>
              <ChevronDown className={`w-6 h-6 transition-transform ${expandedSections.prime ? 'rotate-180' : ''}`} />
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
                        {primeCostPercent > 0 && primeCostPercent < 60 
                          ? <span className="text-[#10b981]"> You&apos;re {(60 - primeCostPercent).toFixed(1)}% under target! 🎉</span>
                          : primeCostPercent >= 60 
                            ? <span className="text-[#ef4444]"> You&apos;re {(primeCostPercent - 60).toFixed(1)}% over target ⚠️</span>
                            : <span className="text-gray-500"> Enter data above</span>
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
                <Target className="w-6 h-6 text-[#f59e0b]" />
                <h2 className="text-xl font-bold">Break-Even & Profit</h2>
              </div>
              <ChevronDown className={`w-6 h-6 transition-transform ${expandedSections.breakeven ? 'rotate-180' : ''}`} />
            </button>
            
            {expandedSections.breakeven && (
              <div className="px-6 pb-6 border-t border-white/10">
                
                {/* Fixed Monthly Costs */}
                <div className="pt-6 mb-6">
                  <h3 className="text-lg font-semibold text-gray-300 mb-4 flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-[#f59e0b]" />
                    Fixed Costs (Monthly)
                  </h3>
                  <div className="grid md:grid-cols-4 gap-4">
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
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Loan Payments ($)</label>
                      <input
                        type="number"
                        value={loanPayments}
                        onChange={(e) => setLoanPayments(e.target.value)}
                        placeholder="2,000"
                        className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#f59e0b] focus:outline-none text-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">CC Debt Payments ($)</label>
                      <input
                        type="number"
                        value={ccPayments}
                        onChange={(e) => setCcPayments(e.target.value)}
                        placeholder="500"
                        className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#f59e0b] focus:outline-none text-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">CC Processing Fee (%)</label>
                      <div className="relative">
                        <input
                          type="number"
                          value={ccFeePercent}
                          onChange={(e) => setCcFeePercent(e.target.value)}
                          placeholder="2.9"
                          step="0.1"
                          className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#f59e0b] focus:outline-none text-white transition-colors"
                        />
                        <span className="absolute right-4 top-3.5 text-gray-500">%</span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">% Sales on CC</label>
                      <div className="relative">
                        <input
                          type="number"
                          value={ccSalesPercent}
                          onChange={(e) => setCcSalesPercent(e.target.value)}
                          placeholder="80"
                          className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#f59e0b] focus:outline-none text-white transition-colors"
                        />
                        <span className="absolute right-4 top-3.5 text-gray-500">%</span>
                      </div>
                      {ccProcessingFees > 0 && (
                        <p className="text-xs text-[#f59e0b] mt-1">= ${ccProcessingFees.toLocaleString(undefined, {maximumFractionDigits: 0})}/mo in CC fees</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Other Fixed ($)</label>
                      <input
                        type="number"
                        value={otherFixed}
                        onChange={(e) => setOtherFixed(e.target.value)}
                        placeholder="500"
                        className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#f59e0b] focus:outline-none text-white transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Variable Weekly Costs */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-300 mb-4 flex items-center gap-2">
                    <Music className="w-5 h-5 text-[#f59e0b]" />
                    Variable Costs (Weekly)
                  </h3>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Entertainment ($)</label>
                      <input
                        type="number"
                        value={entertainment}
                        onChange={(e) => setEntertainment(e.target.value)}
                        placeholder="300"
                        className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#f59e0b] focus:outline-none text-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Trivia ($)</label>
                      <input
                        type="number"
                        value={trivia}
                        onChange={(e) => setTrivia(e.target.value)}
                        placeholder="150"
                        className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#f59e0b] focus:outline-none text-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Linens ($)</label>
                      <input
                        type="number"
                        value={linens}
                        onChange={(e) => setLinens(e.target.value)}
                        placeholder="200"
                        className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#f59e0b] focus:outline-none text-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Advertising ($)</label>
                      <input
                        type="number"
                        value={advertising}
                        onChange={(e) => setAdvertising(e.target.value)}
                        placeholder="250"
                        className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#f59e0b] focus:outline-none text-white transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Periodic Costs */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-300 mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-[#f59e0b]" />
                    Periodic Costs
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Grease Trap (Quarterly $)</label>
                      <input
                        type="number"
                        value={greaseTrap}
                        onChange={(e) => setGreaseTrap(e.target.value)}
                        placeholder="400"
                        className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#f59e0b] focus:outline-none text-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Hood Cleaning (Quarterly $)</label>
                      <input
                        type="number"
                        value={hoodCleaning}
                        onChange={(e) => setHoodCleaning(e.target.value)}
                        placeholder="600"
                        className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#f59e0b] focus:outline-none text-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Alcohol License (Yearly $)</label>
                      <input
                        type="number"
                        value={alcoholLicense}
                        onChange={(e) => setAlcoholLicense(e.target.value)}
                        placeholder="1,200"
                        className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#f59e0b] focus:outline-none text-white transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Break-Even Results */}
                  <div className="p-6 bg-black/20 rounded-lg">
                    <h4 className="text-lg font-bold text-[#f59e0b] mb-4">Break-Even</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Monthly Operating Costs:</span>
                        <span className="font-bold">${Math.round(totalMonthlyOperatingCosts).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Break-Even (Monthly):</span>
                        <span className="font-bold text-white">${Math.round(breakEvenMonthly).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Break-Even (Weekly):</span>
                        <span className="font-bold text-white">${Math.round(breakEvenWeekly).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between border-t border-white/10 pt-3">
                        <span className="text-gray-400">Covers/Week to Break Even:</span>
                        <span className="font-bold text-[#f59e0b]">{coversToBreakEvenWeekly > 0 ? coversToBreakEvenWeekly.toLocaleString() : '—'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Profit Results */}
                  <div className="p-6 bg-black/20 rounded-lg">
                    <h4 className="text-lg font-bold text-[#10b981] mb-4">Profit</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Weekly Profit:</span>
                        <span className={`font-bold ${weeklyProfit >= 0 ? 'text-[#10b981]' : 'text-[#ef4444]'}`}>
                          ${Math.round(weeklyProfit).toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Monthly Profit:</span>
                        <span className={`font-bold ${monthlyProfit >= 0 ? 'text-[#10b981]' : 'text-[#ef4444]'}`}>
                          ${Math.round(monthlyProfit).toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between border-t border-white/10 pt-3">
                        <span className="text-gray-400">Annual Profit:</span>
                        <span className={`font-bold text-xl ${annualProfit >= 0 ? 'text-[#10b981]' : 'text-[#ef4444]'}`}>
                          ${Math.round(annualProfit).toLocaleString()}
                        </span>
                      </div>
                    </div>
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
                <Lightbulb className="w-6 h-6 text-[#fbbf24]" />
                <h2 className="text-xl font-bold">What-If Scenarios</h2>
              </div>
              <ChevronDown className={`w-6 h-6 transition-transform ${expandedSections.whatif ? 'rotate-180' : ''}`} />
            </button>
            
            {expandedSections.whatif && (
              <div className="px-6 pb-6 border-t border-white/10">
                
                {/* Food Cost Scenarios - TWO OPTIONS */}
                <div className="pt-6 mb-8">
                  <h3 className="text-lg font-semibold text-gray-300 mb-4">Food Cost Savings</h3>
                  
                  <div className="p-4 mb-4 bg-[#f59e0b]/10 border border-[#f59e0b]/30 rounded-lg">
                    <p className="text-sm text-gray-300">
                      <strong>⚠️ Important:</strong> When vendors like MarketMan or Genius promise &ldquo;10% savings,&rdquo; they mean 10% off your <em>spend</em> — NOT reducing your food cost percentage by 10 points.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Option 1: Reduce Food Cost % Points */}
                    <div className="p-4 bg-black/20 rounded-lg">
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Reduce Food Cost % by ___ points
                      </label>
                      <p className="text-xs text-gray-500 mb-3">Example: 30% → 28% = 2 points</p>
                      <div className="flex gap-2 mb-4">
                        <input
                          type="number"
                          value={foodCostPointReduction}
                          onChange={(e) => setFoodCostPointReduction(e.target.value)}
                          placeholder="2"
                          className="w-24 px-4 py-2 bg-black/40 border border-white/10 rounded-lg focus:border-[#10b981] focus:outline-none text-white"
                        />
                        <span className="py-2 text-gray-400">points</span>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-400">Weekly: <span className="text-[#10b981] font-bold">+${Math.round(foodCostPointSavingsWeekly).toLocaleString()}</span></p>
                        <p className="text-sm text-gray-400">Monthly: <span className="text-[#10b981] font-bold">+${Math.round(foodCostPointSavingsMonthly).toLocaleString()}</span></p>
                        <p className="text-sm text-gray-400">Yearly: <span className="text-[#10b981] font-bold">+${Math.round(foodCostPointSavingsYearly).toLocaleString()}</span></p>
                      </div>
                    </div>

                    {/* Option 2: Reduce Food Spend % */}
                    <div className="p-4 bg-black/20 rounded-lg">
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Reduce Food Spend by ___%
                      </label>
                      <p className="text-xs text-gray-500 mb-3">What vendors actually promise (e.g., 10% off your ${Math.round(currentWeeklyFoodSpend).toLocaleString()}/wk spend)</p>
                      <div className="flex gap-2 mb-4">
                        <input
                          type="number"
                          value={foodSpendReduction}
                          onChange={(e) => setFoodSpendReduction(e.target.value)}
                          placeholder="10"
                          className="w-24 px-4 py-2 bg-black/40 border border-white/10 rounded-lg focus:border-[#10b981] focus:outline-none text-white"
                        />
                        <span className="py-2 text-gray-400">%</span>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-400">Weekly: <span className="text-[#10b981] font-bold">+${Math.round(foodSpendSavingsWeekly).toLocaleString()}</span></p>
                        <p className="text-sm text-gray-400">Monthly: <span className="text-[#10b981] font-bold">+${Math.round(foodSpendSavingsMonthly).toLocaleString()}</span></p>
                        <p className="text-sm text-gray-400">Yearly: <span className="text-[#10b981] font-bold">+${Math.round(foodSpendSavingsYearly).toLocaleString()}</span></p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Other Scenarios */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {/* Price Increase */}
                  <div className="p-4 bg-black/20 rounded-lg">
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Raise Prices by ___%
                    </label>
                    <div className="flex gap-2 mb-4">
                      <input
                        type="number"
                        value={priceIncreasePercent}
                        onChange={(e) => setPriceIncreasePercent(e.target.value)}
                        placeholder="5"
                        className="w-24 px-4 py-2 bg-black/40 border border-white/10 rounded-lg focus:border-[#10b981] focus:outline-none text-white"
                      />
                      <span className="py-2 text-gray-400">%</span>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-gray-400">Weekly: <span className="text-[#10b981] font-bold">+${Math.round(priceIncreaseSavingsWeekly).toLocaleString()}</span></p>
                      <p className="text-sm text-gray-400">Monthly: <span className="text-[#10b981] font-bold">+${Math.round(priceIncreaseSavingsMonthly).toLocaleString()}</span></p>
                      <p className="text-sm text-gray-400">Yearly: <span className="text-[#10b981] font-bold">+${Math.round(priceIncreaseSavingsYearly).toLocaleString()}</span></p>
                    </div>
                  </div>

                  {/* Labor Reduction */}
                  <div className="p-4 bg-black/20 rounded-lg">
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Reduce Labor by ___%
                    </label>
                    <div className="flex gap-2 mb-4">
                      <input
                        type="number"
                        value={laborReductionPercent}
                        onChange={(e) => setLaborReductionPercent(e.target.value)}
                        placeholder="2"
                        className="w-24 px-4 py-2 bg-black/40 border border-white/10 rounded-lg focus:border-[#10b981] focus:outline-none text-white"
                      />
                      <span className="py-2 text-gray-400">%</span>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-gray-400">Weekly: <span className="text-[#10b981] font-bold">+${Math.round(laborSavingsWeekly).toLocaleString()}</span></p>
                      <p className="text-sm text-gray-400">Monthly: <span className="text-[#10b981] font-bold">+${Math.round(laborSavingsMonthly).toLocaleString()}</span></p>
                      <p className="text-sm text-gray-400">Yearly: <span className="text-[#10b981] font-bold">+${Math.round(laborSavingsYearly).toLocaleString()}</span></p>
                    </div>
                  </div>
                </div>

                {/* Smart Suggestions */}
                <div className="p-6 bg-gradient-to-r from-[#10b981]/10 to-[#06b6d4]/10 border border-[#10b981]/30 rounded-lg">
                  <h4 className="text-lg font-bold text-[#10b981] mb-4 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5" />
                    Smart Cost-Cutting Ideas
                  </h4>
                  <div className="space-y-3">
                    {parseFloat(entertainment) > 0 && (
                      <div className="flex items-start gap-3 p-3 bg-black/20 rounded-lg">
                        <span className="text-[#10b981]">💡</span>
                        <div>
                          <p className="text-sm text-white">Move entertainment to every other week</p>
                          <p className="text-xs text-gray-400">Save ${Math.round((parseFloat(entertainment) || 0) * 2.17).toLocaleString()}/month</p>
                        </div>
                      </div>
                    )}
                    {parseFloat(trivia) > 0 && (
                      <div className="flex items-start gap-3 p-3 bg-black/20 rounded-lg">
                        <span className="text-[#10b981]">💡</span>
                        <div>
                          <p className="text-sm text-white">Host trivia every other week instead of weekly</p>
                          <p className="text-xs text-gray-400">Save ${Math.round((parseFloat(trivia) || 0) * 2.17).toLocaleString()}/month</p>
                        </div>
                      </div>
                    )}
                    {parseFloat(advertising) > 0 && (
                      <div className="flex items-start gap-3 p-3 bg-black/20 rounded-lg">
                        <span className="text-[#10b981]">💡</span>
                        <div>
                          <p className="text-sm text-white">Cut paid ads — focus on free social media posts</p>
                          <p className="text-xs text-gray-400">Save ${Math.round((parseFloat(advertising) || 0) * 4.33).toLocaleString()}/month</p>
                        </div>
                      </div>
                    )}
                    <div className="flex items-start gap-3 p-3 bg-black/20 rounded-lg">
                      <Megaphone className="w-5 h-5 text-[#06b6d4] mt-0.5" />
                      <div>
                        <p className="text-sm text-white">Send email campaigns to bring back customers — FREE</p>
                        <p className="text-xs text-gray-400">Built into OwnerClone. No extra cost.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-[#f59e0b]/10 rounded-lg border border-[#f59e0b]/30">
                      <Rocket className="w-5 h-5 text-[#f59e0b] mt-0.5" />
                      <div>
                        <p className="text-sm text-white font-semibold">All these marketing tools are built into OwnerClone</p>
                        <p className="text-xs text-gray-400">Email campaigns, social scheduling, customer engagement — stop paying for separate tools.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ==================== CTA ==================== */}
          <div className="backdrop-blur-xl bg-gradient-to-r from-[#f59e0b]/20 to-[#fbbf24]/20 border-2 border-[#f59e0b] rounded-3xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Want This <span className="text-[#f59e0b]">Automated Daily</span>?</h2>
            <p className="text-lg text-gray-300 mb-6">
              OwnerClone connects to your POS and calculates all of this automatically — food cost, labor, prime cost, and profit — updated in real-time.
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
