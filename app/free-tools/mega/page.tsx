'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  UtensilsCrossed, Users, PieChart, Target, Lightbulb, TrendingUp,
  DollarSign, CreditCard, Calendar, Music, Megaphone, ChevronDown,
  Plus, ArrowLeft, Rocket, Smartphone, AlertTriangle, ExternalLink
} from 'lucide-react'

export default function MegaCalculator() {
  // ============================================
  // SALES & REVENUE STATE
  // ============================================
  const [weeklySales, setWeeklySales] = useState('')
  const [ppa, setPpa] = useState('')

  // ============================================
  // PER PLATE FOOD COSTING STATE
  // ============================================
  const [dishName, setDishName] = useState('')
  const [menuPrice, setMenuPrice] = useState('')
  const [quickMode, setQuickMode] = useState(false)
  const [quickPlateCost, setQuickPlateCost] = useState('')
  const [ingredients, setIngredients] = useState([
    { id: 1, name: '', soldBy: 'weight', dozenPerCase: '', caseQuantity: '', casePrice: '', plateAmount: '', plateUnit: 'oz' }
  ])

  // ============================================
  // LABOR COST STATE
  // ============================================
  const [grossWages, setGrossWages] = useState('')
  const [tipPercent, setTipPercent] = useState('20')
  const [payrollTaxRate, setPayrollTaxRate] = useState('11')
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
  const [ccSalesPercent, setCcSalesPercent] = useState('80')
  const [posSystem, setPosSystem] = useState('')

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
  const [greaseTrap, setGreaseTrap] = useState('')
  const [hoodCleaning, setHoodCleaning] = useState('')
  const [alcoholLicense, setAlcoholLicense] = useState('')

  // ============================================
  // THIRD PARTY STATE
  // ============================================
  const [thirdPartySales, setThirdPartySales] = useState('')
  const [thirdPartyFeePercent, setThirdPartyFeePercent] = useState('30')
  const [thirdPartyPriceIncrease, setThirdPartyPriceIncrease] = useState('20')
  const [thirdPartyPromoPercent, setThirdPartyPromoPercent] = useState('15')

  // ============================================
  // WHAT-IF SCENARIO STATE
  // ============================================
  const [foodCostPointReduction, setFoodCostPointReduction] = useState('2')
  const [foodSpendReduction, setFoodSpendReduction] = useState('10')
  const [priceIncreasePercent, setPriceIncreasePercent] = useState('5')
  const [laborReductionPercent, setLaborReductionPercent] = useState('2')

  // ============================================
  // SECTION COLLAPSE STATE
  // ============================================
  const [expandedSections, setExpandedSections] = useState({
    sales: true, food: true, labor: true, prime: true, breakeven: true, thirdparty: true, whatif: true
  })

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }))
  }

  // ============================================
  // CONVERSION RATES & HELPERS
  // ============================================
  const conversions: Record<string, number> = { g: 1, kg: 1000, oz: 28.3495, lb: 453.592 }

  const addIngredient = () => {
    const newId = Math.max(...ingredients.map(i => i.id), 0) + 1
    setIngredients([...ingredients, { id: newId, name: '', soldBy: 'weight', dozenPerCase: '', caseQuantity: '', casePrice: '', plateAmount: '', plateUnit: 'oz' }])
  }

  const removeIngredient = (id: number) => {
    if (ingredients.length > 1) setIngredients(ingredients.filter(i => i.id !== id))
  }

  const updateIngredient = (id: number, field: string, value: string) => {
    setIngredients(ingredients.map(ing => {
      if (ing.id === id) {
        const updated = { ...ing, [field]: value }
        if (field === 'soldBy') {
          updated.dozenPerCase = ''; updated.caseQuantity = ''; updated.casePrice = ''
          updated.plateUnit = (value === 'each' || value === 'dozen' || value === 'case') ? 'each' : 'oz'
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

  const calculateIngredientCost = (ing: typeof ingredients[0]) => {
    const plateAmount = parseFloat(ing.plateAmount) || 0
    if (plateAmount === 0) return 0
    const priceInfo = calculatePricePerUnit(ing)
    if (!priceInfo) return 0
    if (ing.plateUnit === 'each' || ing.plateUnit === '1/2 each' || ing.plateUnit === '1/4 each') {
      let multiplier = ing.plateUnit === '1/2 each' ? 0.5 : ing.plateUnit === '1/4 each' ? 0.25 : 1
      return priceInfo.value * plateAmount * multiplier
    }
    if (priceInfo.perGram) return priceInfo.perGram * plateAmount * conversions[ing.plateUnit]
    return 0
  }

  // ============================================
  // MAIN CALCULATIONS
  // ============================================
  const sales = parseFloat(weeklySales) || 0
  const perPersonAvg = parseFloat(ppa) || 0
  const weeklyCovers = perPersonAvg > 0 ? Math.round(sales / perPersonAvg) : 0
  const thirdPartySalesWeekly = parseFloat(thirdPartySales) || 0
  const inHouseSalesWeekly = sales - thirdPartySalesWeekly

  // Food Cost
  const totalPlateCost = quickMode ? (parseFloat(quickPlateCost) || 0) : ingredients.reduce((sum, ing) => sum + calculateIngredientCost(ing), 0)
  const currentMenuPrice = parseFloat(menuPrice) || 0
  const foodCostPercent = currentMenuPrice > 0 ? (totalPlateCost / currentMenuPrice) * 100 : 0
  const suggestedPrice28 = totalPlateCost > 0 ? totalPlateCost / 0.28 : 0
  const suggestedPrice30 = totalPlateCost > 0 ? totalPlateCost / 0.30 : 0

  // Labor Cost
  const wages = parseFloat(grossWages) || 0
  const tipPercentValue = parseFloat(tipPercent) || 0
  const tipsAmount = sales > 0 ? sales * (tipPercentValue / 100) : 0
  const taxRate = parseFloat(payrollTaxRate) / 100
  const wagesTax = wages * taxRate
  const tipsTax = tipsAmount * taxRate
  const benefitsCost = parseFloat(benefits) || 0
  const processingFees = parseFloat(payrollProcessing) || 0
  const totalLaborCost = wages + wagesTax + tipsTax + benefitsCost + processingFees
  const laborCostPercent = sales > 0 ? (totalLaborCost / sales) * 100 : 0

  // Prime Cost
  const estimatedFoodCostPercent = foodCostPercent > 0 ? foodCostPercent : 30
  const primeCostPercent = estimatedFoodCostPercent + laborCostPercent

  // Fixed Costs
  const monthlySales = sales * 4.33
  const ccSales = monthlySales * ((parseFloat(ccSalesPercent) || 80) / 100)
  const ccProcessingFees = ccSales * ((parseFloat(ccFeePercent) || 2.9) / 100)
  const quarterlyToMonthly = ((parseFloat(greaseTrap) || 0) + (parseFloat(hoodCleaning) || 0)) / 3
  const yearlyToMonthly = (parseFloat(alcoholLicense) || 0) / 12
  
  const totalMonthlyFixedCosts = (parseFloat(rent) || 0) + (parseFloat(utilities) || 0) + (parseFloat(insurance) || 0) + 
    (parseFloat(loanPayments) || 0) + (parseFloat(ccPayments) || 0) + ccProcessingFees + (parseFloat(posSystem) || 0) + quarterlyToMonthly + yearlyToMonthly

  // Variable Costs
  const weeklyVariableCosts = (parseFloat(entertainment) || 0) + (parseFloat(trivia) || 0) + (parseFloat(linens) || 0) + (parseFloat(advertising) || 0)
  const monthlyVariableCosts = weeklyVariableCosts * 4.33

  // Third Party Calculations
  const tpFeePercent = parseFloat(thirdPartyFeePercent) || 30
  const tpPriceIncreasePercent = parseFloat(thirdPartyPriceIncrease) || 20
  const tpPromoPercent = parseFloat(thirdPartyPromoPercent) || 15
  const tpFeesWeekly = thirdPartySalesWeekly * (tpFeePercent / 100)
  const tpMarkupRecoveryWeekly = thirdPartySalesWeekly * (tpPriceIncreasePercent / (100 + tpPriceIncreasePercent))
  const tpPromoCostWeekly = thirdPartySalesWeekly * (tpPromoPercent / 100)
  const tpNetCostWeekly = tpFeesWeekly - tpMarkupRecoveryWeekly + tpPromoCostWeekly
  const tpNetCostMonthly = tpNetCostWeekly * 4.33
  const tpNetCostYearly = tpNetCostMonthly * 12
  const tpFoodCostWeekly = thirdPartySalesWeekly * (estimatedFoodCostPercent / 100)
  const tpProfitWeekly = thirdPartySalesWeekly - tpFoodCostWeekly - tpNetCostWeekly
  const tpProfitMarginPercent = thirdPartySalesWeekly > 0 ? (tpProfitWeekly / thirdPartySalesWeekly) * 100 : 0

  // Total Operating Costs
  const totalMonthlyOperatingCosts = totalMonthlyFixedCosts + monthlyVariableCosts + tpNetCostMonthly

  // Break-Even
  const contributionMarginPercent = 100 - primeCostPercent
  const breakEvenMonthly = contributionMarginPercent > 0 ? (totalMonthlyOperatingCosts / (contributionMarginPercent / 100)) : 0
  const breakEvenWeekly = breakEvenMonthly / 4.33
  const coversToBreakEvenWeekly = perPersonAvg > 0 ? Math.ceil(breakEvenWeekly / perPersonAvg) : 0

  // Profit
  const monthlyRevenue = sales * 4.33
  const monthlyCOGS = monthlyRevenue * (estimatedFoodCostPercent / 100)
  const monthlyLabor = totalLaborCost * 4.33
  const monthlyProfit = monthlyRevenue - monthlyCOGS - monthlyLabor - totalMonthlyOperatingCosts
  const weeklyProfit = monthlyProfit / 4.33
  const annualProfit = monthlyProfit * 12

  // Profit Margins
  const inHouseProfitMarginPercent = inHouseSalesWeekly > 0 ? ((inHouseSalesWeekly - (inHouseSalesWeekly * estimatedFoodCostPercent / 100) - (totalLaborCost * inHouseSalesWeekly / (sales || 1)) - ((totalMonthlyOperatingCosts / 4.33) * inHouseSalesWeekly / (sales || 1))) / inHouseSalesWeekly) * 100 : 0
  const blendedProfitMarginPercent = sales > 0 ? (weeklyProfit / sales) * 100 : 0
  const marginDropPercent = inHouseProfitMarginPercent - blendedProfitMarginPercent

  // What-If Calculations
  const foodPointReductionValue = parseFloat(foodCostPointReduction) || 0
  const foodCostPointSavingsWeekly = sales * (foodPointReductionValue / 100)
  const foodCostPointSavingsYearly = foodCostPointSavingsWeekly * 4.33 * 12

  const foodSpendReductionValue = parseFloat(foodSpendReduction) || 0
  const currentWeeklyFoodSpend = sales * (estimatedFoodCostPercent / 100)
  const foodSpendSavingsWeekly = currentWeeklyFoodSpend * (foodSpendReductionValue / 100)
  const foodSpendSavingsYearly = foodSpendSavingsWeekly * 4.33 * 12

  const priceIncreaseValue = parseFloat(priceIncreasePercent) || 0
  const priceIncreaseSavingsWeekly = sales * (priceIncreaseValue / 100)
  const priceIncreaseSavingsYearly = priceIncreaseSavingsWeekly * 4.33 * 12

  const laborReductionValue = parseFloat(laborReductionPercent) || 0
  const laborSavingsWeekly = totalLaborCost * (laborReductionValue / 100)
  const laborSavingsYearly = laborSavingsWeekly * 4.33 * 12

  // GRAND TOTAL SAVINGS
  const grandTotalSavingsWeekly = foodCostPointSavingsWeekly + priceIncreaseSavingsWeekly + laborSavingsWeekly
  const grandTotalSavingsMonthly = grandTotalSavingsWeekly * 4.33
  const grandTotalSavingsYearly = grandTotalSavingsWeekly * 52

  // Status Helpers
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
              <h1 className="text-4xl md:text-5xl font-black">MEGA <span className="text-[#f59e0b]">Calculator</span></h1>
            </div>
            <p className="text-xl text-gray-300">See how Food Cost, Labor, Prime Cost, Break-Even & Pricing all work together in real-time</p>
          </div>
        </div>
      </section>

      <section className="relative pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* LIVE SUMMARY DASHBOARD */}
          <div className="backdrop-blur-xl bg-black/80 border border-white/20 rounded-2xl p-6 mb-8 sticky top-20 z-10 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-7 gap-4 text-center">
              <div>
                <p className="text-xs text-gray-400 mb-1">Food Cost</p>
                <p className={`text-xl font-bold ${foodStatus.color}`}>{foodCostPercent > 0 ? `${foodCostPercent.toFixed(1)}%` : '—'}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1">Labor Cost</p>
                <p className={`text-xl font-bold ${laborStatus.color}`}>{laborCostPercent > 0 ? `${laborCostPercent.toFixed(1)}%` : '—'}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1">Prime Cost</p>
                <p className={`text-xl font-bold ${primeStatus.color}`}>{primeCostPercent > 0 ? `${primeCostPercent.toFixed(1)}%` : '—'}</p>
              </div>
              <div className="border-l border-r border-white/10 px-2">
                <p className="text-xs text-gray-400 mb-1">Break-Even/wk</p>
                <p className="text-xl font-bold text-[#06b6d4]">{breakEvenWeekly > 0 ? `$${Math.round(breakEvenWeekly).toLocaleString()}` : '—'}</p>
              </div>
              <div>
                <p className="text-xs text-green-400 mb-1">In-House Margin</p>
                <p className={`text-xl font-bold ${inHouseProfitMarginPercent >= 10 ? 'text-[#10b981]' : inHouseProfitMarginPercent >= 5 ? 'text-[#fbbf24]' : 'text-[#ef4444]'}`}>
                  {sales > 0 && inHouseSalesWeekly > 0 ? `${inHouseProfitMarginPercent.toFixed(1)}%` : '—'}
                </p>
              </div>
              <div>
                <p className="text-xs text-red-400 mb-1">Blended Margin</p>
                <p className={`text-xl font-bold ${blendedProfitMarginPercent >= 10 ? 'text-[#10b981]' : blendedProfitMarginPercent >= 5 ? 'text-[#fbbf24]' : 'text-[#ef4444]'}`}>
                  {sales > 0 ? `${blendedProfitMarginPercent.toFixed(1)}%` : '—'}
                </p>
                {marginDropPercent > 0.5 && <p className="text-xs text-red-400">↓ {marginDropPercent.toFixed(1)}%</p>}
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1">Weekly Profit</p>
                <p className={`text-xl font-bold ${weeklyProfit >= 0 ? 'text-[#10b981]' : 'text-[#ef4444]'}`}>
                  {sales > 0 ? `$${Math.round(weeklyProfit).toLocaleString()}` : '—'}
                </p>
              </div>
            </div>
          </div>

          {/* SALES & REVENUE */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl mb-6 overflow-hidden">
            <button onClick={() => toggleSection('sales')} className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors">
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
                    <input type="number" value={weeklySales} onChange={(e) => setWeeklySales(e.target.value)} placeholder="20,000"
                      className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#f59e0b] focus:outline-none text-white transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Per Person Average - PPA ($)</label>
                    <input type="number" value={ppa} onChange={(e) => setPpa(e.target.value)} placeholder="25"
                      className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#f59e0b] focus:outline-none text-white transition-colors" />
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

          {/* PER PLATE FOOD COSTING */}
          <div className="backdrop-blur-xl bg-white/5 border border-[#10b981]/30 rounded-2xl mb-6 overflow-hidden">
            <button onClick={() => toggleSection('food')} className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors">
              <div className="flex items-center gap-3">
                <UtensilsCrossed className="w-6 h-6 text-[#10b981]" />
                <h2 className="text-xl font-bold">Per Plate Food Costing</h2>
                {foodCostPercent > 0 && <span className={`ml-2 px-3 py-1 rounded-full text-sm font-bold ${foodStatus.color} bg-black/30`}>{foodCostPercent.toFixed(1)}% {foodStatus.label}</span>}
              </div>
              <ChevronDown className={`w-6 h-6 transition-transform ${expandedSections.food ? 'rotate-180' : ''}`} />
            </button>
            {expandedSections.food && (
              <div className="px-6 pb-6 border-t border-white/10">
                <div className="flex items-center gap-4 pt-6 mb-6">
                  <span className="text-sm text-gray-400">Mode:</span>
                  <button onClick={() => setQuickMode(false)} className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${!quickMode ? 'bg-[#10b981] text-white' : 'bg-white/10 text-gray-400 hover:bg-white/20'}`}>Full (Build Recipe)</button>
                  <button onClick={() => setQuickMode(true)} className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${quickMode ? 'bg-[#10b981] text-white' : 'bg-white/10 text-gray-400 hover:bg-white/20'}`}>Quick (Known Cost)</button>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Dish Name</label>
                    <input type="text" value={dishName} onChange={(e) => setDishName(e.target.value)} placeholder="e.g., Buffalo Wings"
                      className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#10b981] focus:outline-none text-white transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Current Menu Price ($)</label>
                    <input type="number" value={menuPrice} onChange={(e) => setMenuPrice(e.target.value)} placeholder="14.99"
                      className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#10b981] focus:outline-none text-white transition-colors" />
                  </div>
                </div>
                {quickMode ? (
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Known Plate Cost ($)</label>
                    <input type="number" value={quickPlateCost} onChange={(e) => setQuickPlateCost(e.target.value)} placeholder="4.50"
                      className="w-full md:w-1/2 px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#10b981] focus:outline-none text-white transition-colors" />
                  </div>
                ) : (
                  <div className="mb-6">
                    <div className="mb-4 p-4 bg-[#10b981]/10 border border-[#10b981]/30 rounded-lg">
                      <p className="text-sm text-gray-300"><strong>How to use:</strong> Enter how you <em>buy</em> each ingredient → we auto-calculate the price per unit → then enter how much goes on the plate.</p>
                    </div>
                    <div className="space-y-4">
                      {ingredients.map((ing) => {
                        const cost = calculateIngredientCost(ing)
                        const priceInfo = calculatePricePerUnit(ing)
                        return (
                          <div key={ing.id} className="border border-white/10 rounded-lg p-4 bg-black/20">
                            <div className="grid md:grid-cols-6 gap-3">
                              <div className="md:col-span-2">
                                <label className="block text-xs text-gray-400 mb-1">Ingredient</label>
                                <input type="text" value={ing.name} onChange={(e) => updateIngredient(ing.id, 'name', e.target.value)} placeholder="Chicken Wings"
                                  className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-lg focus:border-[#10b981] focus:outline-none text-white text-sm" />
                              </div>
                              <div>
                                <label className="block text-xs text-gray-400 mb-1">Sold By</label>
                                <select value={ing.soldBy} onChange={(e) => updateIngredient(ing.id, 'soldBy', e.target.value)}
                                  className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-lg focus:border-[#10b981] focus:outline-none text-white text-sm">
                                  <option value="each">Each</option><option value="dozen">Dozen</option><option value="case">Case</option><option value="weight">Weight (lb)</option>
                                </select>
                              </div>
                              {ing.soldBy === 'dozen' && (
                                <div><label className="block text-xs text-gray-400 mb-1">Doz/Case</label>
                                  <input type="number" value={ing.dozenPerCase} onChange={(e) => updateIngredient(ing.id, 'dozenPerCase', e.target.value)} placeholder="30"
                                    className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-lg focus:border-[#10b981] focus:outline-none text-white text-sm" /></div>
                              )}
                              {ing.soldBy === 'case' && (
                                <div><label className="block text-xs text-gray-400 mb-1">Items/Case</label>
                                  <input type="number" value={ing.caseQuantity} onChange={(e) => updateIngredient(ing.id, 'caseQuantity', e.target.value)} placeholder="263"
                                    className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-lg focus:border-[#10b981] focus:outline-none text-white text-sm" /></div>
                              )}
                              {ing.soldBy === 'weight' && (
                                <div><label className="block text-xs text-gray-400 mb-1">Case (lb)</label>
                                  <input type="number" value={ing.caseQuantity} onChange={(e) => updateIngredient(ing.id, 'caseQuantity', e.target.value)} placeholder="40"
                                    className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-lg focus:border-[#10b981] focus:outline-none text-white text-sm" /></div>
                              )}
                              {ing.soldBy === 'each' && <div></div>}
                              <div>
                                <label className="block text-xs text-gray-400 mb-1">{ing.soldBy === 'each' ? 'Price/Each' : 'Case Price'}</label>
                                <input type="number" value={ing.casePrice} onChange={(e) => updateIngredient(ing.id, 'casePrice', e.target.value)} placeholder="80.00"
                                  className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-lg focus:border-[#10b981] focus:outline-none text-white text-sm" />
                              </div>
                              <div className="flex items-end">
                                {priceInfo ? (
                                  <div className="w-full p-2 bg-[#10b981]/20 border border-[#10b981]/50 rounded-lg text-center">
                                    <p className="text-xs text-gray-400">${priceInfo.value.toFixed(3)}/{priceInfo.unit}</p>
                                  </div>
                                ) : <div className="w-full p-2 bg-white/5 border border-white/10 rounded-lg text-center"><p className="text-xs text-gray-500">—</p></div>}
                              </div>
                            </div>
                            <div className="grid md:grid-cols-6 gap-3 mt-3">
                              <div className="md:col-span-2"></div>
                              <div>
                                <label className="block text-xs text-gray-400 mb-1">On Plate</label>
                                <input type="number" value={ing.plateAmount} onChange={(e) => updateIngredient(ing.id, 'plateAmount', e.target.value)} placeholder="8"
                                  className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-lg focus:border-[#10b981] focus:outline-none text-white text-sm" />
                              </div>
                              <div>
                                <label className="block text-xs text-gray-400 mb-1">Unit</label>
                                <select value={ing.plateUnit} onChange={(e) => updateIngredient(ing.id, 'plateUnit', e.target.value)}
                                  className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-lg focus:border-[#10b981] focus:outline-none text-white text-sm">
                                  {(ing.soldBy === 'each' || ing.soldBy === 'dozen' || ing.soldBy === 'case') ? (
                                    <><option value="each">each</option><option value="1/2 each">1/2 each</option><option value="1/4 each">1/4 each</option></>
                                  ) : (<><option value="oz">oz</option><option value="g">g</option><option value="lb">lb</option></>)}
                                </select>
                              </div>
                              <div className="flex items-end">{cost > 0 && <div className="w-full p-2 bg-[#10b981]/20 border border-[#10b981]/50 rounded-lg text-center"><p className="text-sm font-bold text-[#10b981]">${cost.toFixed(2)}</p></div>}</div>
                              <div className="flex items-end">{ingredients.length > 1 && <button onClick={() => removeIngredient(ing.id)} className="text-red-400 hover:text-red-300 text-xs">Remove</button>}</div>
                            </div>
                          </div>
                        )
                      })}
                      <button onClick={addIngredient} className="w-full py-3 border-2 border-dashed border-[#10b981]/50 rounded-lg text-[#10b981] hover:bg-[#10b981]/10 transition-colors flex items-center justify-center gap-2">
                        <Plus className="w-5 h-5" />Add Ingredient
                      </button>
                    </div>
                  </div>
                )}
                {totalPlateCost > 0 && (
                  <div className="grid md:grid-cols-4 gap-4 p-4 bg-black/20 rounded-lg">
                    <div className="text-center"><p className="text-xs text-gray-400">Plate Cost</p><p className="text-2xl font-bold text-[#10b981]">${totalPlateCost.toFixed(2)}</p></div>
                    <div className="text-center"><p className="text-xs text-gray-400">Food Cost %</p><p className={`text-2xl font-bold ${foodStatus.color}`}>{foodCostPercent.toFixed(1)}%</p></div>
                    <div className="text-center border-l border-white/10"><p className="text-xs text-gray-400">Price @ 30%</p><p className="text-2xl font-bold text-white">${suggestedPrice30.toFixed(2)}</p></div>
                    <div className="text-center"><p className="text-xs text-gray-400">Price @ 28%</p><p className="text-2xl font-bold text-white">${suggestedPrice28.toFixed(2)}</p></div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* LABOR COST */}
          <div className="backdrop-blur-xl bg-white/5 border border-[#06b6d4]/30 rounded-2xl mb-6 overflow-hidden">
            <button onClick={() => toggleSection('labor')} className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors">
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-[#06b6d4]" />
                <h2 className="text-xl font-bold">Labor Cost</h2>
                {laborCostPercent > 0 && <span className={`ml-2 px-3 py-1 rounded-full text-sm font-bold ${laborStatus.color} bg-black/30`}>{laborCostPercent.toFixed(1)}% {laborStatus.label}</span>}
              </div>
              <ChevronDown className={`w-6 h-6 transition-transform ${expandedSections.labor ? 'rotate-180' : ''}`} />
            </button>
            {expandedSections.labor && (
              <div className="px-6 pb-6 border-t border-white/10">
                <div className="grid md:grid-cols-3 gap-4 pt-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Gross Wages (Weekly $)</label>
                    <input type="number" value={grossWages} onChange={(e) => setGrossWages(e.target.value)} placeholder="5,000"
                      className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#06b6d4] focus:outline-none text-white transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Average Tip % on Sales</label>
                    <div className="relative">
                      <input type="number" value={tipPercent} onChange={(e) => setTipPercent(e.target.value)} placeholder="20"
                        className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#06b6d4] focus:outline-none text-white transition-colors" />
                      <span className="absolute right-4 top-3.5 text-gray-500">%</span>
                    </div>
                    {sales > 0 && tipsAmount > 0 && <p className="text-xs text-[#06b6d4] mt-1">{tipPercent}% = ${tipsAmount.toLocaleString(undefined, {maximumFractionDigits: 0})}/week in tips</p>}
                    <p className="text-xs text-gray-500 mt-1">You pay tax on tips, not tips themselves</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Payroll Tax Rate (%)</label>
                    <div className="relative">
                      <input type="number" value={payrollTaxRate} onChange={(e) => setPayrollTaxRate(e.target.value)} placeholder="11"
                        className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#06b6d4] focus:outline-none text-white transition-colors" />
                      <span className="absolute right-4 top-3.5 text-gray-500">%</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Benefits & Other ($)</label>
                    <input type="number" value={benefits} onChange={(e) => setBenefits(e.target.value)} placeholder="500"
                      className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#06b6d4] focus:outline-none text-white transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Payroll Processing ($)</label>
                    <input type="number" value={payrollProcessing} onChange={(e) => setPayrollProcessing(e.target.value)} placeholder="100"
                      className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#06b6d4] focus:outline-none text-white transition-colors" />
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

          {/* PRIME COST */}
          <div className="backdrop-blur-xl bg-white/5 border border-[#a855f7]/30 rounded-2xl mb-6 overflow-hidden">
            <button onClick={() => toggleSection('prime')} className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors">
              <div className="flex items-center gap-3">
                <PieChart className="w-6 h-6 text-[#a855f7]" />
                <h2 className="text-xl font-bold">Prime Cost</h2>
                {primeCostPercent > 0 && <span className={`ml-2 px-3 py-1 rounded-full text-sm font-bold ${primeStatus.color} bg-black/30`}>{primeCostPercent.toFixed(1)}% {primeStatus.label}</span>}
              </div>
              <ChevronDown className={`w-6 h-6 transition-transform ${expandedSections.prime ? 'rotate-180' : ''}`} />
            </button>
            {expandedSections.prime && (
              <div className="px-6 pb-6 border-t border-white/10 pt-6">
                <div className="p-6 bg-black/20 rounded-lg">
                  <div className="flex items-center justify-center gap-4 text-center flex-wrap">
                    <div><p className="text-sm text-gray-400">Food Cost</p><p className={`text-3xl font-bold ${foodStatus.color}`}>{estimatedFoodCostPercent.toFixed(1)}%</p></div>
                    <span className="text-3xl text-gray-500">+</span>
                    <div><p className="text-sm text-gray-400">Labor Cost</p><p className={`text-3xl font-bold ${laborStatus.color}`}>{laborCostPercent.toFixed(1)}%</p></div>
                    <span className="text-3xl text-gray-500">=</span>
                    <div><p className="text-sm text-gray-400">Prime Cost</p><p className={`text-4xl font-bold ${primeStatus.color}`}>{primeCostPercent.toFixed(1)}%</p></div>
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-sm text-gray-400">Target: <span className="text-[#10b981] font-semibold">&lt;60%</span> | 
                      {primeCostPercent > 0 && primeCostPercent < 60 ? <span className="text-[#10b981]"> You&apos;re {(60 - primeCostPercent).toFixed(1)}% under target! 🎉</span>
                        : primeCostPercent >= 60 ? <span className="text-[#ef4444]"> You&apos;re {(primeCostPercent - 60).toFixed(1)}% over target ⚠️</span>
                        : <span className="text-gray-500"> Enter data above</span>}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* BREAK-EVEN & PROFIT */}
          <div className="backdrop-blur-xl bg-white/5 border border-[#f59e0b]/30 rounded-2xl mb-6 overflow-hidden">
            <button onClick={() => toggleSection('breakeven')} className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors">
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
                  <h3 className="text-lg font-semibold text-gray-300 mb-4 flex items-center gap-2"><DollarSign className="w-5 h-5 text-[#f59e0b]" />Fixed Costs (Monthly)</h3>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div><label className="block text-sm font-semibold text-gray-300 mb-2">Rent ($)</label>
                      <input type="number" value={rent} onChange={(e) => setRent(e.target.value)} placeholder="5,000" className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#f59e0b] focus:outline-none text-white transition-colors" /></div>
                    <div><label className="block text-sm font-semibold text-gray-300 mb-2">Utilities ($)</label>
                      <input type="number" value={utilities} onChange={(e) => setUtilities(e.target.value)} placeholder="1,500" className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#f59e0b] focus:outline-none text-white transition-colors" /></div>
                    <div><label className="block text-sm font-semibold text-gray-300 mb-2">Insurance ($)</label>
                      <input type="number" value={insurance} onChange={(e) => setInsurance(e.target.value)} placeholder="800" className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#f59e0b] focus:outline-none text-white transition-colors" /></div>
                    <div><label className="block text-sm font-semibold text-gray-300 mb-2">Loan Payments ($)</label>
                      <input type="number" value={loanPayments} onChange={(e) => setLoanPayments(e.target.value)} placeholder="2,000" className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#f59e0b] focus:outline-none text-white transition-colors" /></div>
                    <div><label className="block text-sm font-semibold text-gray-300 mb-2">CC Debt Payments ($)</label>
                      <input type="number" value={ccPayments} onChange={(e) => setCcPayments(e.target.value)} placeholder="500" className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#f59e0b] focus:outline-none text-white transition-colors" /></div>
                    <div><label className="block text-sm font-semibold text-gray-300 mb-2">CC Processing Fee (%)</label>
                      <div className="relative"><input type="number" value={ccFeePercent} onChange={(e) => setCcFeePercent(e.target.value)} placeholder="2.9" step="0.1" className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#f59e0b] focus:outline-none text-white transition-colors" /><span className="absolute right-4 top-3.5 text-gray-500">%</span></div></div>
                    <div><label className="block text-sm font-semibold text-gray-300 mb-2">% Sales on CC</label>
                      <div className="relative"><input type="number" value={ccSalesPercent} onChange={(e) => setCcSalesPercent(e.target.value)} placeholder="80" className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#f59e0b] focus:outline-none text-white transition-colors" /><span className="absolute right-4 top-3.5 text-gray-500">%</span></div>
                      {ccProcessingFees > 0 && <p className="text-xs text-[#f59e0b] mt-1">= ${ccProcessingFees.toLocaleString(undefined, {maximumFractionDigits: 0})}/mo in CC fees</p>}</div>
                    <div><label className="block text-sm font-semibold text-gray-300 mb-2">POS System ($)</label>
                      <input type="number" value={posSystem} onChange={(e) => setPosSystem(e.target.value)} placeholder="200" className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#f59e0b] focus:outline-none text-white transition-colors" /></div>
                  </div>
                </div>
                {/* Variable Weekly Costs */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-300 mb-4 flex items-center gap-2"><Music className="w-5 h-5 text-[#f59e0b]" />Variable Costs (Weekly)</h3>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div><label className="block text-sm font-semibold text-gray-300 mb-2">Entertainment ($)</label>
                      <input type="number" value={entertainment} onChange={(e) => setEntertainment(e.target.value)} placeholder="300" className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#f59e0b] focus:outline-none text-white transition-colors" /></div>
                    <div><label className="block text-sm font-semibold text-gray-300 mb-2">Trivia ($)</label>
                      <input type="number" value={trivia} onChange={(e) => setTrivia(e.target.value)} placeholder="150" className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#f59e0b] focus:outline-none text-white transition-colors" /></div>
                    <div><label className="block text-sm font-semibold text-gray-300 mb-2">Linens ($)</label>
                      <input type="number" value={linens} onChange={(e) => setLinens(e.target.value)} placeholder="200" className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#f59e0b] focus:outline-none text-white transition-colors" /></div>
                    <div><label className="block text-sm font-semibold text-gray-300 mb-2">Advertising ($)</label>
                      <input type="number" value={advertising} onChange={(e) => setAdvertising(e.target.value)} placeholder="250" className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#f59e0b] focus:outline-none text-white transition-colors" /></div>
                  </div>
                </div>
                {/* Periodic Costs */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-300 mb-4 flex items-center gap-2"><Calendar className="w-5 h-5 text-[#f59e0b]" />Periodic Costs</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div><label className="block text-sm font-semibold text-gray-300 mb-2">Grease Trap (Quarterly $)</label>
                      <input type="number" value={greaseTrap} onChange={(e) => setGreaseTrap(e.target.value)} placeholder="400" className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#f59e0b] focus:outline-none text-white transition-colors" /></div>
                    <div><label className="block text-sm font-semibold text-gray-300 mb-2">Hood Cleaning (Quarterly $)</label>
                      <input type="number" value={hoodCleaning} onChange={(e) => setHoodCleaning(e.target.value)} placeholder="600" className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#f59e0b] focus:outline-none text-white transition-colors" /></div>
                    <div><label className="block text-sm font-semibold text-gray-300 mb-2">Alcohol License (Yearly $)</label>
                      <input type="number" value={alcoholLicense} onChange={(e) => setAlcoholLicense(e.target.value)} placeholder="1,200" className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#f59e0b] focus:outline-none text-white transition-colors" /></div>
                  </div>
                </div>
                {/* Results */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-black/20 rounded-lg">
                    <h4 className="text-lg font-bold text-[#f59e0b] mb-4">Break-Even</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between"><span className="text-gray-400">Monthly Operating Costs:</span><span className="font-bold">${Math.round(totalMonthlyOperatingCosts).toLocaleString()}</span></div>
                      <div className="flex justify-between"><span className="text-gray-400">Break-Even (Monthly):</span><span className="font-bold text-white">${Math.round(breakEvenMonthly).toLocaleString()}</span></div>
                      <div className="flex justify-between"><span className="text-gray-400">Break-Even (Weekly):</span><span className="font-bold text-white">${Math.round(breakEvenWeekly).toLocaleString()}</span></div>
                      <div className="flex justify-between border-t border-white/10 pt-3"><span className="text-gray-400">Covers/Week to Break Even:</span><span className="font-bold text-[#f59e0b]">{coversToBreakEvenWeekly > 0 ? coversToBreakEvenWeekly.toLocaleString() : '—'}</span></div>
                    </div>
                  </div>
                  <div className="p-6 bg-black/20 rounded-lg">
                    <h4 className="text-lg font-bold text-[#10b981] mb-4">Profit</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between"><span className="text-gray-400">Weekly Profit:</span><span className={`font-bold ${weeklyProfit >= 0 ? 'text-[#10b981]' : 'text-[#ef4444]'}`}>${Math.round(weeklyProfit).toLocaleString()}</span></div>
                      <div className="flex justify-between"><span className="text-gray-400">Monthly Profit:</span><span className={`font-bold ${monthlyProfit >= 0 ? 'text-[#10b981]' : 'text-[#ef4444]'}`}>${Math.round(monthlyProfit).toLocaleString()}</span></div>
                      <div className="flex justify-between border-t border-white/10 pt-3"><span className="text-gray-400">Annual Profit:</span><span className={`font-bold text-xl ${annualProfit >= 0 ? 'text-[#10b981]' : 'text-[#ef4444]'}`}>${Math.round(annualProfit).toLocaleString()}</span></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* THIRD PARTY REALITY CHECK */}
          <div className="backdrop-blur-xl bg-gradient-to-r from-[#ef4444]/10 to-[#f97316]/10 border-2 border-[#ef4444]/50 rounded-2xl mb-6 overflow-hidden">
            <button onClick={() => toggleSection('thirdparty')} className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors">
              <div className="flex items-center gap-3">
                <Smartphone className="w-6 h-6 text-[#ef4444]" />
                <h2 className="text-xl font-bold">Third Party Reality Check</h2>
                <AlertTriangle className="w-5 h-5 text-[#fbbf24]" />
              </div>
              <ChevronDown className={`w-6 h-6 transition-transform ${expandedSections.thirdparty ? 'rotate-180' : ''}`} />
            </button>
            {expandedSections.thirdparty && (
              <div className="px-6 pb-6 border-t border-white/10">
                <div className="mt-6 p-4 bg-[#ef4444]/20 border border-[#ef4444]/50 rounded-lg">
                  <p className="text-sm text-white flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-[#ef4444] flex-shrink-0 mt-0.5" />
                    <span><strong>The math they don&apos;t show you:</strong> Third party apps advertise &ldquo;more sales&rdquo; but hide the true cost. Let&apos;s break it down.</span>
                  </p>
                </div>
                <div className="grid md:grid-cols-4 gap-4 mt-6">
                  <div><label className="block text-sm font-semibold text-gray-300 mb-2">Third Party Sales (Weekly $)</label>
                    <input type="number" value={thirdPartySales} onChange={(e) => setThirdPartySales(e.target.value)} placeholder="2,000" className="w-full px-4 py-3 bg-black/40 border-2 border-[#ef4444]/30 rounded-lg focus:border-[#ef4444] focus:outline-none text-white transition-colors" /></div>
                  <div><label className="block text-sm font-semibold text-gray-300 mb-2">Third Party Fee (%)</label>
                    <div className="relative"><input type="number" value={thirdPartyFeePercent} onChange={(e) => setThirdPartyFeePercent(e.target.value)} placeholder="30" className="w-full px-4 py-3 bg-black/40 border-2 border-[#ef4444]/30 rounded-lg focus:border-[#ef4444] focus:outline-none text-white transition-colors" /><span className="absolute right-4 top-3.5 text-gray-500">%</span></div>
                    <p className="text-xs text-gray-500 mt-1">DoorDash/UberEats typically 15-30%</p></div>
                  <div><label className="block text-sm font-semibold text-gray-300 mb-2">Your Price Increase (%)</label>
                    <div className="relative"><input type="number" value={thirdPartyPriceIncrease} onChange={(e) => setThirdPartyPriceIncrease(e.target.value)} placeholder="20" className="w-full px-4 py-3 bg-black/40 border-2 border-[#ef4444]/30 rounded-lg focus:border-[#ef4444] focus:outline-none text-white transition-colors" /><span className="absolute right-4 top-3.5 text-gray-500">%</span></div>
                    <p className="text-xs text-gray-500 mt-1">How much you mark up delivery prices</p></div>
                  <div><label className="block text-sm font-semibold text-gray-300 mb-2">Promo/Deal Cost (%)</label>
                    <div className="relative"><input type="number" value={thirdPartyPromoPercent} onChange={(e) => setThirdPartyPromoPercent(e.target.value)} placeholder="15" className="w-full px-4 py-3 bg-black/40 border-2 border-[#ef4444]/30 rounded-lg focus:border-[#ef4444] focus:outline-none text-white transition-colors" /><span className="absolute right-4 top-3.5 text-gray-500">%</span></div>
                    <p className="text-xs text-gray-500 mt-1">BOGO, $5 off, free delivery costs</p></div>
                </div>
                {thirdPartySalesWeekly > 0 && (
                  <div className="mt-6 p-6 bg-black/30 rounded-lg border border-[#ef4444]/30">
                    <h4 className="text-lg font-bold text-[#ef4444] mb-4">The Real Math on ${thirdPartySalesWeekly.toLocaleString()}/week Third Party Sales</h4>
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between items-center"><span className="text-gray-400">Third Party Sales:</span><span className="font-bold text-white">${thirdPartySalesWeekly.toLocaleString()}</span></div>
                      <div className="flex justify-between items-center text-[#ef4444]"><span>Third Party Fee ({tpFeePercent}%):</span><span className="font-bold">-${Math.round(tpFeesWeekly).toLocaleString()}</span></div>
                      <div className="flex justify-between items-center text-[#10b981]"><span>Your Price Markup Recovery ({tpPriceIncreasePercent}%):</span><span className="font-bold">+${Math.round(tpMarkupRecoveryWeekly).toLocaleString()}</span></div>
                      <div className="flex justify-between items-center text-[#ef4444]"><span>Promo/Deal Costs ({tpPromoPercent}%):</span><span className="font-bold">-${Math.round(tpPromoCostWeekly).toLocaleString()}</span></div>
                      <div className="flex justify-between items-center text-[#ef4444]"><span>Food Cost ({estimatedFoodCostPercent.toFixed(0)}%):</span><span className="font-bold">-${Math.round(tpFoodCostWeekly).toLocaleString()}</span></div>
                      <div className="border-t border-white/20 pt-3 flex justify-between items-center">
                        <span className="text-white font-semibold">ACTUAL PROFIT FROM THIRD PARTY:</span>
                        <span className={`text-xl font-bold ${tpProfitWeekly >= 0 ? 'text-[#fbbf24]' : 'text-[#ef4444]'}`}>${Math.round(tpProfitWeekly).toLocaleString()}/week</span>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 mt-6">
                      <div className="p-4 bg-[#10b981]/10 border border-[#10b981]/30 rounded-lg text-center">
                        <p className="text-sm text-gray-400 mb-2">In-House Profit Margin</p>
                        <p className="text-3xl font-bold text-[#10b981]">{inHouseProfitMarginPercent.toFixed(1)}%</p>
                        <p className="text-xs text-gray-500 mt-1">What you keep from dine-in/pickup</p>
                      </div>
                      <div className="p-4 bg-[#ef4444]/10 border border-[#ef4444]/30 rounded-lg text-center">
                        <p className="text-sm text-gray-400 mb-2">Third Party Profit Margin</p>
                        <p className="text-3xl font-bold text-[#ef4444]">{tpProfitMarginPercent.toFixed(1)}%</p>
                        <p className="text-xs text-gray-500 mt-1">What you keep from DoorDash/UberEats</p>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-[#fbbf24]/10 border border-[#fbbf24]/50 rounded-lg">
                      <p className="text-center text-white">
                        <span className="text-[#fbbf24] font-bold text-lg">⚠️ Your ${thirdPartySalesWeekly.toLocaleString()} in third party &ldquo;sales&rdquo; only generates ${Math.round(tpProfitWeekly).toLocaleString()}/week profit</span><br />
                        <span className="text-gray-400 text-sm">That&apos;s a {tpProfitMarginPercent.toFixed(1)}% margin vs {inHouseProfitMarginPercent.toFixed(1)}% in-house</span>
                      </p>
                    </div>
                    <div className="mt-6 grid md:grid-cols-3 gap-4 text-center">
                      <div><p className="text-xs text-gray-400">Weekly Cost of Third Party</p><p className="text-xl font-bold text-[#ef4444]">${Math.round(tpNetCostWeekly).toLocaleString()}</p></div>
                      <div><p className="text-xs text-gray-400">Monthly Cost</p><p className="text-xl font-bold text-[#ef4444]">${Math.round(tpNetCostMonthly).toLocaleString()}</p></div>
                      <div><p className="text-xs text-gray-400">YEARLY Cost</p><p className="text-2xl font-bold text-[#ef4444]">${Math.round(tpNetCostYearly).toLocaleString()}</p></div>
                    </div>
                  </div>
                )}
                {thirdPartySalesWeekly > 0 && (
                  <div className="mt-6 p-6 bg-gradient-to-r from-[#10b981]/20 to-[#06b6d4]/20 border border-[#10b981]/50 rounded-lg">
                    <h4 className="text-lg font-bold text-[#10b981] mb-4 flex items-center gap-2"><Rocket className="w-5 h-5" />What If You Owned Your Delivery Channel?</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="p-4 bg-black/20 rounded-lg">
                        <h5 className="font-bold text-white mb-2 flex items-center gap-2"><ExternalLink className="w-4 h-4 text-[#06b6d4]" />IndyCater - Your Own Website</h5>
                        <p className="text-sm text-gray-400 mb-3">Customers order directly from YOUR branded site. No fees. Full margin.</p>
                        <div className="p-3 bg-[#10b981]/10 rounded border border-[#10b981]/30">
                          <p className="text-sm text-gray-300">Same ${thirdPartySalesWeekly.toLocaleString()}/wk via your website:</p>
                          <p className="text-xl font-bold text-[#10b981]">${Math.round(thirdPartySalesWeekly * (1 - estimatedFoodCostPercent/100) * 0.85).toLocaleString()}/week profit</p>
                          <p className="text-xs text-gray-500">vs ${Math.round(tpProfitWeekly).toLocaleString()}/wk on DoorDash</p>
                        </div>
                      </div>
                      <div className="p-4 bg-black/20 rounded-lg">
                        <h5 className="font-bold text-white mb-2 flex items-center gap-2"><Smartphone className="w-4 h-4 text-[#f59e0b]" />IndyEats - Lower Cost Delivery</h5>
                        <p className="text-sm text-gray-400 mb-3">Our delivery network at 10-15% vs 30%. Keep more of every order.</p>
                        <div className="p-3 bg-[#f59e0b]/10 rounded border border-[#f59e0b]/30">
                          <p className="text-sm text-gray-300">Same ${thirdPartySalesWeekly.toLocaleString()}/wk via IndyEats:</p>
                          <p className="text-xl font-bold text-[#f59e0b]">${Math.round(thirdPartySalesWeekly * (1 - estimatedFoodCostPercent/100 - 0.12)).toLocaleString()}/week profit</p>
                          <p className="text-xs text-gray-500">vs ${Math.round(tpProfitWeekly).toLocaleString()}/wk on DoorDash</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <p className="text-sm text-gray-400 mb-3">Stop giving away your profit. Take control of your delivery.</p>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link href="/features/indycater" className="bg-[#10b981] text-white px-6 py-2 rounded-lg font-bold hover:bg-[#0d9668] transition-colors text-sm">Learn About IndyCater →</Link>
                        <Link href="/features/indyeats" className="bg-[#f59e0b] text-black px-6 py-2 rounded-lg font-bold hover:bg-[#fbbf24] transition-colors text-sm">Learn About IndyEats →</Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* WHAT-IF SCENARIOS */}
          <div className="backdrop-blur-xl bg-gradient-to-r from-[#f59e0b]/10 to-[#10b981]/10 border border-[#f59e0b]/30 rounded-2xl mb-6 overflow-hidden">
            <button onClick={() => toggleSection('whatif')} className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors">
              <div className="flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-[#fbbf24]" />
                <h2 className="text-xl font-bold">What-If Scenarios</h2>
              </div>
              <ChevronDown className={`w-6 h-6 transition-transform ${expandedSections.whatif ? 'rotate-180' : ''}`} />
            </button>
            {expandedSections.whatif && (
              <div className="px-6 pb-6 border-t border-white/10">
                <div className="pt-6 mb-6">
                  <div className="p-4 mb-6 bg-[#f59e0b]/10 border border-[#f59e0b]/30 rounded-lg">
                    <p className="text-sm text-gray-300"><strong>⚠️ Important:</strong> When vendors like MarketMan or Genius promise &ldquo;10% savings,&rdquo; they mean 10% off your <em>spend</em> — NOT reducing your food cost percentage by 10 points.</p>
                  </div>
                  
                  {/* Scenario Cards */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {/* Food Cost % Point Reduction */}
                    <div className="p-4 bg-black/20 rounded-lg border border-white/10">
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Reduce Food Cost % by ___ points</label>
                      <p className="text-xs text-gray-500 mb-3">Example: 30% → 28% = 2 points</p>
                      <div className="flex gap-2 mb-4">
                        <input type="number" value={foodCostPointReduction} onChange={(e) => setFoodCostPointReduction(e.target.value)} placeholder="2" className="w-24 px-4 py-2 bg-black/40 border border-white/10 rounded-lg focus:border-[#10b981] focus:outline-none text-white" />
                        <span className="py-2 text-gray-400">points</span>
                      </div>
                      <div className="space-y-1 text-sm">
                        <p className="text-gray-400">Weekly: <span className="text-[#10b981] font-bold">+${Math.round(foodCostPointSavingsWeekly).toLocaleString()}</span></p>
                        <p className="text-gray-400">Yearly: <span className="text-[#10b981] font-bold">+${Math.round(foodCostPointSavingsYearly).toLocaleString()}</span></p>
                      </div>
                    </div>

                    {/* Food Spend % Reduction */}
                    <div className="p-4 bg-black/20 rounded-lg border border-white/10">
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Reduce Food Spend by ___%</label>
                      <p className="text-xs text-gray-500 mb-3">What vendors promise (10% off ${Math.round(currentWeeklyFoodSpend).toLocaleString()}/wk)</p>
                      <div className="flex gap-2 mb-4">
                        <input type="number" value={foodSpendReduction} onChange={(e) => setFoodSpendReduction(e.target.value)} placeholder="10" className="w-24 px-4 py-2 bg-black/40 border border-white/10 rounded-lg focus:border-[#10b981] focus:outline-none text-white" />
                        <span className="py-2 text-gray-400">%</span>
                      </div>
                      <div className="space-y-1 text-sm">
                        <p className="text-gray-400">Weekly: <span className="text-[#10b981] font-bold">+${Math.round(foodSpendSavingsWeekly).toLocaleString()}</span></p>
                        <p className="text-gray-400">Yearly: <span className="text-[#10b981] font-bold">+${Math.round(foodSpendSavingsYearly).toLocaleString()}</span></p>
                      </div>
                    </div>

                    {/* Price Increase */}
                    <div className="p-4 bg-black/20 rounded-lg border border-white/10">
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Raise Prices by ___%</label>
                      <p className="text-xs text-gray-500 mb-3">Menu price increase across the board</p>
                      <div className="flex gap-2 mb-4">
                        <input type="number" value={priceIncreasePercent} onChange={(e) => setPriceIncreasePercent(e.target.value)} placeholder="5" className="w-24 px-4 py-2 bg-black/40 border border-white/10 rounded-lg focus:border-[#10b981] focus:outline-none text-white" />
                        <span className="py-2 text-gray-400">%</span>
                      </div>
                      <div className="space-y-1 text-sm">
                        <p className="text-gray-400">Weekly: <span className="text-[#10b981] font-bold">+${Math.round(priceIncreaseSavingsWeekly).toLocaleString()}</span></p>
                        <p className="text-gray-400">Yearly: <span className="text-[#10b981] font-bold">+${Math.round(priceIncreaseSavingsYearly).toLocaleString()}</span></p>
                      </div>
                    </div>

                    {/* Labor Reduction */}
                    <div className="p-4 bg-black/20 rounded-lg border border-white/10">
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Reduce Labor by ___%</label>
                      <p className="text-xs text-gray-500 mb-3">Scheduling efficiency, cross-training</p>
                      <div className="flex gap-2 mb-4">
                        <input type="number" value={laborReductionPercent} onChange={(e) => setLaborReductionPercent(e.target.value)} placeholder="2" className="w-24 px-4 py-2 bg-black/40 border border-white/10 rounded-lg focus:border-[#10b981] focus:outline-none text-white" />
                        <span className="py-2 text-gray-400">%</span>
                      </div>
                      <div className="space-y-1 text-sm">
                        <p className="text-gray-400">Weekly: <span className="text-[#10b981] font-bold">+${Math.round(laborSavingsWeekly).toLocaleString()}</span></p>
                        <p className="text-gray-400">Yearly: <span className="text-[#10b981] font-bold">+${Math.round(laborSavingsYearly).toLocaleString()}</span></p>
                      </div>
                    </div>
                  </div>

                  {/* GRAND TOTAL SAVINGS */}
                  {sales > 0 && (
                    <div className="p-6 bg-gradient-to-r from-[#10b981]/20 to-[#06b6d4]/20 border-2 border-[#10b981] rounded-xl">
                      <h4 className="text-xl font-bold text-[#10b981] mb-4 text-center">💰 GRAND TOTAL POTENTIAL SAVINGS</h4>
                      <p className="text-sm text-gray-400 text-center mb-4">If you implement all the changes above:</p>
                      <div className="grid md:grid-cols-3 gap-4 text-center">
                        <div className="p-4 bg-black/30 rounded-lg">
                          <p className="text-sm text-gray-400">Weekly</p>
                          <p className="text-3xl font-bold text-[#10b981]">+${Math.round(grandTotalSavingsWeekly).toLocaleString()}</p>
                        </div>
                        <div className="p-4 bg-black/30 rounded-lg">
                          <p className="text-sm text-gray-400">Monthly</p>
                          <p className="text-3xl font-bold text-[#10b981]">+${Math.round(grandTotalSavingsMonthly).toLocaleString()}</p>
                        </div>
                        <div className="p-4 bg-black/30 rounded-lg border-2 border-[#10b981]">
                          <p className="text-sm text-gray-400">YEARLY</p>
                          <p className="text-4xl font-bold text-[#10b981]">+${Math.round(grandTotalSavingsYearly).toLocaleString()}</p>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 text-center mt-4">Based on: Food cost -{foodCostPointReduction} points + {priceIncreasePercent}% price increase + {laborReductionPercent}% labor reduction</p>
                    </div>
                  )}

                  {/* Smart Suggestions */}
                  <div className="mt-6 p-6 bg-black/20 border border-white/10 rounded-lg">
                    <h4 className="text-lg font-bold text-[#fbbf24] mb-4 flex items-center gap-2"><Lightbulb className="w-5 h-5" />Smart Cost-Cutting Ideas</h4>
                    <div className="space-y-3">
                      {parseFloat(entertainment) > 0 && (
                        <div className="flex items-start gap-3 p-3 bg-black/20 rounded-lg">
                          <span className="text-[#10b981]">💡</span>
                          <div><p className="text-sm text-white">Move entertainment to every other week</p><p className="text-xs text-gray-400">Save ${Math.round((parseFloat(entertainment) || 0) * 2.17).toLocaleString()}/month</p></div>
                        </div>
                      )}
                      {parseFloat(trivia) > 0 && (
                        <div className="flex items-start gap-3 p-3 bg-black/20 rounded-lg">
                          <span className="text-[#10b981]">💡</span>
                          <div><p className="text-sm text-white">Host trivia every other week instead of weekly</p><p className="text-xs text-gray-400">Save ${Math.round((parseFloat(trivia) || 0) * 2.17).toLocaleString()}/month</p></div>
                        </div>
                      )}
                      {parseFloat(advertising) > 0 && (
                        <div className="flex items-start gap-3 p-3 bg-black/20 rounded-lg">
                          <span className="text-[#10b981]">💡</span>
                          <div><p className="text-sm text-white">Cut paid ads — focus on free social media posts</p><p className="text-xs text-gray-400">Save ${Math.round((parseFloat(advertising) || 0) * 4.33).toLocaleString()}/month</p></div>
                        </div>
                      )}
                      <div className="flex items-start gap-3 p-3 bg-black/20 rounded-lg">
                        <Megaphone className="w-5 h-5 text-[#06b6d4] mt-0.5" />
                        <div><p className="text-sm text-white">Send email campaigns to bring back customers — FREE</p><p className="text-xs text-gray-400">Built into OwnerClone. No extra cost.</p></div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-[#f59e0b]/10 rounded-lg border border-[#f59e0b]/30">
                        <Rocket className="w-5 h-5 text-[#f59e0b] mt-0.5" />
                        <div><p className="text-sm text-white font-semibold">All these marketing tools are built into OwnerClone</p><p className="text-xs text-gray-400">Email campaigns, social scheduling, customer engagement — stop paying for separate tools.</p></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* CTA */}
          <div className="backdrop-blur-xl bg-gradient-to-r from-[#f59e0b]/20 to-[#fbbf24]/20 border-2 border-[#f59e0b] rounded-3xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Want This <span className="text-[#f59e0b]">Automated Daily</span>?</h2>
            <p className="text-lg text-gray-300 mb-6">OwnerClone connects to your POS and calculates all of this automatically — food cost, labor, prime cost, and profit — updated in real-time.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing" className="bg-[#f59e0b] text-black px-8 py-3 rounded-lg font-bold hover:bg-[#fbbf24] transition-colors">Join Early Access</Link>
              <Link href="/demo" className="border-2 border-[#f59e0b] text-[#f59e0b] px-8 py-3 rounded-lg font-bold hover:bg-[#f59e0b]/10 transition-colors">See Demo</Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
