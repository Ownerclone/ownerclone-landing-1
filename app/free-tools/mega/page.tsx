'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  UtensilsCrossed, Users, PieChart, Target, Lightbulb, TrendingUp,
  DollarSign, CreditCard, Calendar, Music, ChevronDown, Plus, ArrowLeft, 
  Rocket, Smartphone, AlertTriangle, Info 
} from 'lucide-react'

export default function MegaCalculator() {
  // Sales & Revenue
  const [weeklySales, setWeeklySales] = useState('')
  const [ppa, setPpa] = useState('')
  
  // Food Costing
  const [dishName, setDishName] = useState('')
  const [menuPrice, setMenuPrice] = useState('')
  const [quickMode, setQuickMode] = useState(true)
  const [quickFoodCostPercent, setQuickFoodCostPercent] = useState('')
  const [ingredients, setIngredients] = useState([
    { id: 1, name: '', soldBy: 'weight', dozenPerCase: '', caseQuantity: '', casePrice: '', plateAmount: '', plateUnit: 'oz' }
  ])
  
  // Labor
  const [grossWages, setGrossWages] = useState('')
  const [tipPercent, setTipPercent] = useState('20')
  const [payrollTaxRate, setPayrollTaxRate] = useState('11')
  const [benefits, setBenefits] = useState('')
  const [payrollProcessing, setPayrollProcessing] = useState('')
  
  // Fixed Costs (Monthly)
  const [rent, setRent] = useState('')
  const [utilities, setUtilities] = useState('')
  const [insurance, setInsurance] = useState('')
  const [loanPayments, setLoanPayments] = useState('')
  const [ccPayments, setCcPayments] = useState('')
  const [ccFeePercent, setCcFeePercent] = useState('2.9')
  const [ccSalesPercent, setCcSalesPercent] = useState('80')
  const [posSystem, setPosSystem] = useState('')
  
  // Variable Costs (Weekly)
  const [entertainment, setEntertainment] = useState('')
  const [trivia, setTrivia] = useState('')
  const [linens, setLinens] = useState('')
  const [advertising, setAdvertising] = useState('')
  
  // Periodic Costs
  const [greaseTrap, setGreaseTrap] = useState('')
  const [hoodCleaning, setHoodCleaning] = useState('')
  const [alcoholLicense, setAlcoholLicense] = useState('')
  
  // Third Party
  const [thirdPartySales, setThirdPartySales] = useState('')
  const [thirdPartyFeePercent, setThirdPartyFeePercent] = useState('30')
  const [thirdPartyPriceIncrease, setThirdPartyPriceIncrease] = useState('20')
  const [thirdPartyPromoPercent, setThirdPartyPromoPercent] = useState('15')
  const [thirdPartyLaborImpact, setThirdPartyLaborImpact] = useState('15')
  const [selectedLaborScenario, setSelectedLaborScenario] = useState<'best' | 'estimate' | 'worst'>('estimate')
  const [websiteMarkupPercent, setWebsiteMarkupPercent] = useState('0')
  const [indyMarkupPercent, setIndyMarkupPercent] = useState('0')
  
  // What-If
  const [whatIfFoodCostPercentReduction, setWhatIfFoodCostPercentReduction] = useState('')
  const [whatIfFoodSpendReduction, setWhatIfFoodSpendReduction] = useState('')
  const [activeWhatIfInput, setActiveWhatIfInput] = useState<string | null>(null)
  const [priceIncreasePercent, setPriceIncreasePercent] = useState('')
  const [laborReductionPercent, setLaborReductionPercent] = useState('')
  const [coversIncreasePercent, setCoversIncreasePercent] = useState('')
  
  // Section Toggle
  const [expandedSections, setExpandedSections] = useState({
    sales: true, food: true, labor: true, prime: true, breakeven: true, thirdparty: true, whatif: true
  })
  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }))
  }
  
  const conversions: Record<string, number> = { g: 1, kg: 1000, oz: 28.3495, lb: 453.592 }

  const addIngredient = () => {
    const newId = Math.max(...ingredients.map(i => i.id), 0) + 1
    setIngredients([...ingredients, { 
      id: newId, name: '', soldBy: 'weight', dozenPerCase: '', 
      caseQuantity: '', casePrice: '', plateAmount: '', plateUnit: 'oz' 
    }])
  }
  
  const removeIngredient = (id: number) => { 
    if (ingredients.length > 1) setIngredients(ingredients.filter(i => i.id !== id)) 
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

  const calculatePricePerUnit = (ing: typeof ingredients[0]) => {
    const casePrice = parseFloat(ing.casePrice) || 0
    const caseQty = parseFloat(ing.caseQuantity) || 0
    const dozenPerCase = parseFloat(ing.dozenPerCase) || 0
    if (casePrice === 0) return null
    if (ing.soldBy === 'each') return { value: casePrice, unit: 'each' }
    if (ing.soldBy === 'dozen' && dozenPerCase > 0) {
      return { value: casePrice / (dozenPerCase * 12), unit: 'each', totalItems: dozenPerCase * 12 }
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
      const multiplier = ing.plateUnit === '1/2 each' ? 0.5 : ing.plateUnit === '1/4 each' ? 0.25 : 1
      return priceInfo.value * plateAmount * multiplier
    }
    if ('perGram' in priceInfo && priceInfo.perGram) {
      return priceInfo.perGram * plateAmount * (conversions[ing.plateUnit] || 1)
    }
    return 0
  }

  const getFoodCostStatus = (pct: number) => {
    if (pct === 0) return { color: 'text-gray-500', label: '-' }
    if (pct < 28) return { color: 'text-[#10b981]', label: 'Excellent' }
    if (pct < 32) return { color: 'text-[#10b981]', label: 'Good' }
    if (pct < 35) return { color: 'text-[#fbbf24]', label: '!  High' }
    return { color: 'text-[#ef4444]', label: 'X Critical' }
  }
  
  const getLaborCostStatus = (pct: number) => {
    if (pct === 0) return { color: 'text-gray-500', label: '-' }
    if (pct < 25) return { color: 'text-[#10b981]', label: 'Excellent' }
    if (pct < 30) return { color: 'text-[#10b981]', label: 'Good' }
    if (pct < 35) return { color: 'text-[#fbbf24]', label: '!  High' }
    return { color: 'text-[#ef4444]', label: 'X Critical' }
  }
  
  const getPrimeCostStatus = (pct: number) => {
    if (pct === 0) return { color: 'text-gray-500', label: '-' }
    if (pct < 55) return { color: 'text-[#10b981]', label: 'Excellent' }
    if (pct < 60) return { color: 'text-[#10b981]', label: 'Good' }
    if (pct < 65) return { color: 'text-[#fbbf24]', label: '!  High' }
    return { color: 'text-[#ef4444]', label: 'X Critical' }
  }
  
  const getLaborImpactDescription = (pct: number) => {
    if (pct === 0) return "Built for takeout - barely notice it"
    if (pct <= 15) return "Some extra hustle, manageable"
    if (pct <= 30) return "Moderate impact on kitchen flow"
    if (pct <= 50) return "Significant disruption"
    return "Major strain on operations"
  }

  const clearWhatIf = () => { 
    setWhatIfFoodCostPercentReduction('')
    setWhatIfFoodSpendReduction('')
    setPriceIncreasePercent('')
    setLaborReductionPercent('')
    setCoversIncreasePercent('')
    setActiveWhatIfInput(null)
  }

// CORE CALCULATIONS
  const sales = parseFloat(weeklySales) || 0
  const perPersonAvg = parseFloat(ppa) || 0
  const weeklyCovers = perPersonAvg > 0 ? Math.round(sales / perPersonAvg) : 0
  const thirdPartySalesWeekly = parseFloat(thirdPartySales) || 0
  const inHouseSalesWeekly = sales - thirdPartySalesWeekly
  
  // Food Cost
  const currentMenuPrice = parseFloat(menuPrice) || 0
  const quickFoodCostPct = parseFloat(quickFoodCostPercent) || 0
  const quickPlateCostDollar = quickMode && currentMenuPrice > 0 ? currentMenuPrice * (quickFoodCostPct / 100) : 0
  const fullModePlateCost = ingredients.reduce((sum, ing) => sum + calculateIngredientCost(ing), 0)
  const totalPlateCost = quickMode ? quickPlateCostDollar : fullModePlateCost
  const foodCostPercent = quickMode ? quickFoodCostPct : (currentMenuPrice > 0 ? (totalPlateCost / currentMenuPrice) * 100 : 0)
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
  const totalMonthlyFixedCosts = (parseFloat(rent) || 0) + (parseFloat(utilities) || 0) + 
    (parseFloat(insurance) || 0) + (parseFloat(loanPayments) || 0) + (parseFloat(ccPayments) || 0) + 
    ccProcessingFees + (parseFloat(posSystem) || 0) + quarterlyToMonthly + yearlyToMonthly
  
  // Variable Costs
  const weeklyVariableCosts = (parseFloat(entertainment) || 0) + (parseFloat(trivia) || 0) + 
    (parseFloat(linens) || 0) + (parseFloat(advertising) || 0)
  const monthlyVariableCosts = weeklyVariableCosts * 4.33
  
  // Third Party Calculations
  const tpFeePercent = parseFloat(thirdPartyFeePercent) || 30
  const tpPriceIncreasePercent = parseFloat(thirdPartyPriceIncrease) || 20
  const tpPromoPercent = parseFloat(thirdPartyPromoPercent) || 15
  const tpLaborImpactPercent = parseFloat(thirdPartyLaborImpact) || 15
  const ccFeeRateTP = (parseFloat(ccFeePercent) || 2.9) / 100
  
  // Rates as decimals
  const tpFeeRate = tpFeePercent / 100
  const tpMarkupRate = tpPriceIncreasePercent / 100
  const tpPromoRate = tpPromoPercent / 100
  const tpLaborRate = tpLaborImpactPercent / 100
  const foodCostRate = estimatedFoodCostPercent / 100
  
  // Labor scenarios (as multiplier of full labor %)
  const ddBestLaborPercent = 0
  const ddEstimateLaborPercent = laborCostPercent * tpLaborRate
  const ddWorstLaborPercent = laborCostPercent
  
  // Selected labor % based on scenario
  const ddSelectedLaborPercent = selectedLaborScenario === 'best' ? ddBestLaborPercent
    : selectedLaborScenario === 'worst' ? ddWorstLaborPercent : ddEstimateLaborPercent
  
  // Legacy variables for compatibility
  const tpFeesWeekly = thirdPartySalesWeekly * tpFeeRate
  const tpMarkupRecoveryWeekly = thirdPartySalesWeekly * (tpPriceIncreasePercent / (100 + tpPriceIncreasePercent))
  const tpPromoCostWeekly = thirdPartySalesWeekly * tpPromoRate
  const tpFoodCostWeekly = thirdPartySalesWeekly * foodCostRate
  const tpLaborCostWeekly = thirdPartySalesWeekly * (laborCostPercent / 100) * tpLaborRate
  const tpNetCostWeekly = tpFeesWeekly - tpMarkupRecoveryWeekly + tpPromoCostWeekly
  const tpProfitWeekly = thirdPartySalesWeekly - tpFoodCostWeekly - tpLaborCostWeekly - tpNetCostWeekly
  const tpProfitMarginPercent = thirdPartySalesWeekly > 0 ? (tpProfitWeekly / thirdPartySalesWeekly) * 100 : 0
  const tpProfitBestCase = thirdPartySalesWeekly - tpFoodCostWeekly - tpNetCostWeekly
  const tpProfitWorstCase = thirdPartySalesWeekly - tpFoodCostWeekly - (thirdPartySalesWeekly * (laborCostPercent / 100)) - tpNetCostWeekly
  const tpMarginBestCase = thirdPartySalesWeekly > 0 ? (tpProfitBestCase / thirdPartySalesWeekly) * 100 : 0
  const tpMarginWorstCase = thirdPartySalesWeekly > 0 ? (tpProfitWorstCase / thirdPartySalesWeekly) * 100 : 0
  const tpNetCostMonthly = tpNetCostWeekly * 4.33
  
  // Operating Costs & Break-Even
  const totalMonthlyOperatingCosts = totalMonthlyFixedCosts + monthlyVariableCosts + tpNetCostMonthly
  const contributionMarginPercent = 100 - primeCostPercent
  const breakEvenMonthly = contributionMarginPercent > 0 ? (totalMonthlyOperatingCosts / (contributionMarginPercent / 100)) : 0
  const breakEvenWeekly = breakEvenMonthly / 4.33
  const coversToBreakEvenWeekly = perPersonAvg > 0 ? Math.ceil(breakEvenWeekly / perPersonAvg) : 0
  const overheadPercent = sales > 0 ? (totalMonthlyOperatingCosts / monthlySales) * 100 : 10
  
  // Profit
  const monthlyRevenue = sales * 4.33
  const monthlyCOGS = monthlyRevenue * (estimatedFoodCostPercent / 100)
  const monthlyLabor = totalLaborCost * 4.33
  const monthlyProfit = monthlyRevenue - monthlyCOGS - monthlyLabor - totalMonthlyOperatingCosts
  const weeklyProfit = monthlyProfit / 4.33
  const annualProfit = monthlyProfit * 12
  
  // Profit Margins
  const inHouseProfitMarginPercent = inHouseSalesWeekly > 0 
    ? ((inHouseSalesWeekly - (inHouseSalesWeekly * estimatedFoodCostPercent / 100) - 
       (totalLaborCost * inHouseSalesWeekly / (sales || 1)) - 
       ((totalMonthlyOperatingCosts / 4.33) * inHouseSalesWeekly / (sales || 1))) / inHouseSalesWeekly) * 100 
    : 0
  const blendedProfitMarginPercent = sales > 0 ? (weeklyProfit / sales) * 100 : 0
  const marginDropPercent = inHouseProfitMarginPercent - blendedProfitMarginPercent
  
  // What-If Calculations
  const currentWeeklyFoodSpend = sales * (estimatedFoodCostPercent / 100)
  const whatIfFoodPctReduction = parseFloat(whatIfFoodCostPercentReduction) || 0
  const whatIfFoodSpendDollarReduction = parseFloat(whatIfFoodSpendReduction) || 0
  const whatIfPriceIncrease = parseFloat(priceIncreasePercent) || 0
  const whatIfLaborReduction = parseFloat(laborReductionPercent) || 0
  const whatIfCoversIncrease = parseFloat(coversIncreasePercent) || 0
  const newWeeklyCovers = weeklyCovers > 0 ? Math.round(weeklyCovers * (1 + whatIfCoversIncrease / 100)) : 0
  const extraCovers = newWeeklyCovers - weeklyCovers
  const extraRevenueFromCovers = extraCovers * perPersonAvg
  const coversProfitWeekly = extraRevenueFromCovers * (inHouseProfitMarginPercent / 100)
  const hasActiveWhatIf = whatIfFoodPctReduction > 0 || whatIfFoodSpendDollarReduction > 0 || 
    whatIfPriceIncrease > 0 || whatIfLaborReduction > 0 || whatIfCoversIncrease > 0
  const linkedFoodSpendFromPercent = sales > 0 ? sales * (whatIfFoodPctReduction / 100) : 0
  const linkedFoodPercentFromSpend = currentWeeklyFoodSpend > 0 
    ? (whatIfFoodSpendDollarReduction / currentWeeklyFoodSpend) * 100 : 0

  // What-If useEffects
  useEffect(() => {
    if (activeWhatIfInput === 'percent' && whatIfFoodPctReduction > 0 && sales > 0) {
      setWhatIfFoodSpendReduction((sales * (whatIfFoodPctReduction / 100)).toFixed(0))
    }
  }, [whatIfFoodPctReduction, activeWhatIfInput, sales])

  useEffect(() => {
    if (activeWhatIfInput === 'dollar' && whatIfFoodSpendDollarReduction > 0 && currentWeeklyFoodSpend > 0) {
      setWhatIfFoodCostPercentReduction(((whatIfFoodSpendDollarReduction / currentWeeklyFoodSpend) * 100).toFixed(1))
    }
  }, [whatIfFoodSpendDollarReduction, activeWhatIfInput, currentWeeklyFoodSpend])

  // What-If Savings
  const effectiveFoodSavingsWeekly = whatIfFoodPctReduction > 0 ? linkedFoodSpendFromPercent : whatIfFoodSpendDollarReduction
  const priceIncreaseSavingsWeekly = sales * (whatIfPriceIncrease / 100)
  const laborSavingsWeekly = totalLaborCost * (whatIfLaborReduction / 100)
  const grandTotalSavingsWeekly = effectiveFoodSavingsWeekly + priceIncreaseSavingsWeekly + laborSavingsWeekly + coversProfitWeekly
  const grandTotalSavingsMonthly = grandTotalSavingsWeekly * 4.33
  const grandTotalSavingsYearly = grandTotalSavingsWeekly * 52
  
  // What-If Adjusted Metrics
  const foodPercentReductionForCalc = whatIfFoodPctReduction > 0 
    ? whatIfFoodPctReduction 
    : (currentWeeklyFoodSpend > 0 && whatIfFoodSpendDollarReduction > 0 ? (whatIfFoodSpendDollarReduction / sales) * 100 : 0)
  const whatIfAdjustedFoodCostPercent = estimatedFoodCostPercent - foodPercentReductionForCalc
  const whatIfAdjustedLaborCostPercent = laborCostPercent * (1 - whatIfLaborReduction / 100)
  const whatIfAdjustedPrimeCostPercent = whatIfAdjustedFoodCostPercent + whatIfAdjustedLaborCostPercent
  const whatIfAdjustedWeeklyProfit = weeklyProfit + grandTotalSavingsWeekly
  const whatIfContributionMarginPercent = 100 - whatIfAdjustedPrimeCostPercent
  const whatIfBreakEvenMonthly = whatIfContributionMarginPercent > 0 
    ? (totalMonthlyOperatingCosts / (whatIfContributionMarginPercent / 100)) : 0
  const whatIfBreakEvenWeekly = whatIfBreakEvenMonthly / 4.33
  
  // Display Values (switch based on what-if)
  const displayFoodCostPercent = hasActiveWhatIf ? whatIfAdjustedFoodCostPercent : estimatedFoodCostPercent
  const displayLaborCostPercent = hasActiveWhatIf ? whatIfAdjustedLaborCostPercent : laborCostPercent
  const displayPrimeCostPercent = hasActiveWhatIf ? whatIfAdjustedPrimeCostPercent : primeCostPercent
  const displayBreakEvenWeekly = hasActiveWhatIf ? whatIfBreakEvenWeekly : breakEvenWeekly
  const displayWeeklyProfit = hasActiveWhatIf ? whatIfAdjustedWeeklyProfit : weeklyProfit
  
  // Status Objects
  const foodStatus = getFoodCostStatus(displayFoodCostPercent)
  const laborStatus = getLaborCostStatus(displayLaborCostPercent)
  const primeStatus = getPrimeCostStatus(displayPrimeCostPercent)

  return (
    <div className="min-h-screen text-white">
      <style jsx global>{`
        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
        input[type="number"] { -moz-appearance: textfield; appearance: textfield; }
      `}</style>

      {/* HEADER */}
      <section className="relative pt-24 pb-8 px-4">
        <div className="max-w-6xl mx-auto">
          <Link href="/free-tools" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-5 h-5" />Back to Free Tools
          </Link>
          <div className="backdrop-blur-xl bg-gradient-to-r from-[#f59e0b]/10 to-[#fbbf24]/10 border border-[#f59e0b]/30 rounded-2xl p-8 shadow-[0_0_50px_rgba(245,158,11,0.15)]">
            <div className="flex items-center gap-3 mb-4">
              <Rocket className="w-10 h-10 text-[#f59e0b]" />
              <h1 className="text-4xl md:text-5xl font-black">MEGA <span className="text-[#f59e0b]">Calculator</span></h1>
            </div>
            <p className="text-xl text-gray-300">See how Food Cost, Labor, Prime Cost, Break-Even and Pricing all work together in real-time</p>
          </div>
        </div>
      </section>

      <section className="relative pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* STICKY DASHBOARD */}
          <div className="backdrop-blur-xl bg-black/80 border border-white/20 rounded-2xl p-4 md:p-6 mb-8 sticky top-16 z-10 shadow-2xl">
            {hasActiveWhatIf && (
              <div className="mb-3 px-3 py-1.5 bg-[#f59e0b]/20 border border-[#f59e0b]/50 rounded-lg text-center">
                <span className="text-[#f59e0b] font-semibold text-xs md:text-sm">✨ What-If Mode Active - Showing projected numbers</span>
              </div>
            )}
            <div className="grid grid-cols-4 md:grid-cols-8 gap-2 md:gap-4 text-center">
              <div>
                <p className="text-[10px] md:text-xs text-gray-400 mb-0.5 md:mb-1">Food Cost</p>
                <p className={`text-base md:text-xl font-bold ${foodStatus.color}`}>
                  {displayFoodCostPercent !== 0 ? `${displayFoodCostPercent.toFixed(1)}%` : '-'}
                </p>
                {hasActiveWhatIf && foodPercentReductionForCalc > 0 && (
                  <p className="text-[10px] md:text-xs text-[#10b981]">-{foodPercentReductionForCalc.toFixed(1)}%</p>
                )}
              </div>
              <div>
                <p className="text-[10px] md:text-xs text-gray-400 mb-0.5 md:mb-1">Labor Cost</p>
                <p className={`text-base md:text-xl font-bold ${laborStatus.color}`}>
                  {displayLaborCostPercent > 0 ? `${displayLaborCostPercent.toFixed(1)}%` : '-'}
                </p>
                {hasActiveWhatIf && whatIfLaborReduction > 0 && (
                  <p className="text-[10px] md:text-xs text-[#10b981]">-{whatIfLaborReduction}%</p>
                )}
              </div>
              <div>
                <p className="text-[10px] md:text-xs text-gray-400 mb-0.5 md:mb-1">Prime Cost</p>
                <p className={`text-base md:text-xl font-bold ${primeStatus.color}`}>
                  {displayPrimeCostPercent > 0 ? `${displayPrimeCostPercent.toFixed(1)}%` : '-'}
                </p>
              </div>
              <div className="border-l border-white/10 pl-2">
                <p className="text-[10px] md:text-xs text-gray-400 mb-0.5 md:mb-1">Break-Even/wk</p>
                <p className="text-base md:text-xl font-bold text-[#06b6d4]">
                  {displayBreakEvenWeekly > 0 ? `$${Math.round(displayBreakEvenWeekly).toLocaleString()}` : '-'}
                </p>
                {hasActiveWhatIf && breakEvenWeekly > 0 && whatIfBreakEvenWeekly < breakEvenWeekly && (
                  <p className="text-[10px] md:text-xs text-[#10b981]">-${Math.round(breakEvenWeekly - whatIfBreakEvenWeekly).toLocaleString()}</p>
                )}
              </div>
              <div className="border-l border-white/10 pl-2">
                <p className="text-[10px] md:text-xs text-[#10b981] mb-0.5 md:mb-1">In-House</p>
                <p className={`text-base md:text-xl font-bold ${inHouseProfitMarginPercent >= 10 ? 'text-[#10b981]' : inHouseProfitMarginPercent >= 5 ? 'text-[#fbbf24]' : 'text-[#ef4444]'}`}>
                  {sales > 0 && inHouseSalesWeekly > 0 ? `${inHouseProfitMarginPercent.toFixed(1)}%` : '-'}
                </p>
              </div>
              <div className="border-l border-white/10 pl-2">
                <p className="text-[10px] md:text-xs text-gray-400 mb-0.5 md:mb-1">Delivery</p>
                {thirdPartySalesWeekly > 0 ? (
                  <div className="space-y-0">
                    {(() => {
                      // Calculate delivery margins for each channel
                      const ddLabor = ddSelectedLaborPercent
                      const ddOverhead = overheadPercent * (ddLabor > 0 && laborCostPercent > 0 ? ddLabor / laborCostPercent : 0)
                      const ddMargin = -tpFeePercent + tpPriceIncreasePercent - tpPromoPercent - ddLabor - ddOverhead - estimatedFoodCostPercent
                      
                      const webMarkup = parseFloat(websiteMarkupPercent) || 0
                      const webMargin = webMarkup - (ccFeeRateTP * 100) - laborCostPercent - overheadPercent - estimatedFoodCostPercent
                      
                      const indyMarkup = parseFloat(indyMarkupPercent) || 0
                      const indyMargin = indyMarkup - laborCostPercent - overheadPercent - estimatedFoodCostPercent
                      
                      return (
                        <>
                          <p className={`text-[10px] md:text-xs font-bold ${ddMargin >= 0 ? 'text-[#fbbf24]' : 'text-[#ef4444]'}`}>
                            DD: {ddMargin.toFixed(0)}%
                          </p>
                          <p className={`text-[10px] md:text-xs font-bold ${webMargin >= 0 ? 'text-[#10b981]' : 'text-[#ef4444]'}`}>
                            Web: {webMargin.toFixed(0)}%
                          </p>
                          <p className={`text-[10px] md:text-xs font-bold ${indyMargin >= 0 ? 'text-[#06b6d4]' : 'text-[#ef4444]'}`}>
                            Indy: {indyMargin.toFixed(0)}%
                          </p>
                        </>
                      )
                    })()}
                  </div>
                ) : (
                  <p className="text-base md:text-xl font-bold text-gray-500">-</p>
                )}
              </div>
              <div className="border-l border-white/10 pl-2">
                <p className="text-[10px] md:text-xs text-gray-400 mb-0.5 md:mb-1">Blended</p>
                {(() => {
                  // Calculate blended margin: (in-house sales × in-house margin + 3P sales × best 3P margin) / total sales
                  let blendedMargin = inHouseProfitMarginPercent
                  
                  if (thirdPartySalesWeekly > 0 && sales > 0) {
                    // Get best 3P margin
                    const ddLabor = ddSelectedLaborPercent
                    const ddOverhead = overheadPercent * (ddLabor > 0 && laborCostPercent > 0 ? ddLabor / laborCostPercent : 0)
                    const ddMargin = -tpFeePercent + tpPriceIncreasePercent - tpPromoPercent - ddLabor - ddOverhead - estimatedFoodCostPercent
                    
                    const webMarkup = parseFloat(websiteMarkupPercent) || 0
                    const webMargin = webMarkup - (ccFeeRateTP * 100) - laborCostPercent - overheadPercent - estimatedFoodCostPercent
                    
                    const indyMarkup = parseFloat(indyMarkupPercent) || 0
                    const indyMargin = indyMarkup - laborCostPercent - overheadPercent - estimatedFoodCostPercent
                    
                    const bestDeliveryMargin = Math.max(ddMargin, webMargin, indyMargin)
                    
                    // Weighted average
                    const inHouseWeight = inHouseSalesWeekly / sales
                    const deliveryWeight = thirdPartySalesWeekly / sales
                    blendedMargin = (inHouseProfitMarginPercent * inHouseWeight) + (bestDeliveryMargin * deliveryWeight)
                  }
                  
                  return (
                    <p className={`text-base md:text-xl font-bold ${blendedMargin >= 10 ? 'text-[#10b981]' : blendedMargin >= 5 ? 'text-[#fbbf24]' : 'text-[#ef4444]'}`}>
                      {sales > 0 ? `${blendedMargin.toFixed(1)}%` : '-'}
                    </p>
                  )
                })()}
                {thirdPartySalesWeekly > 0 && marginDropPercent > 0.5 && (
                  <p className="text-[10px] md:text-xs text-gray-500">vs best 3P</p>
                )}
              </div>
              <div className="border-l border-white/10 pl-2">
                <p className="text-[10px] md:text-xs text-gray-400 mb-0.5 md:mb-1">Weekly Profit</p>
                <p className={`text-base md:text-xl font-bold ${displayWeeklyProfit >= 0 ? 'text-[#10b981]' : 'text-[#ef4444]'}`}>
                  {sales > 0 ? `$${Math.round(displayWeeklyProfit).toLocaleString()}` : '-'}
                </p>
                {hasActiveWhatIf && grandTotalSavingsWeekly > 0 && (
                  <p className="text-[10px] md:text-xs text-[#10b981]">+${Math.round(grandTotalSavingsWeekly).toLocaleString()}</p>
                )}
              </div>
            </div>
          </div>

          {/* SALES & REVENUE */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl mb-6 overflow-hidden">
            <button onClick={() => toggleSection('sales')} className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-[#f59e0b]" />
                <h2 className="text-xl font-bold">Sales and Revenue</h2>
              </div>
              <ChevronDown className={`w-6 h-6 transition-transform ${expandedSections.sales ? 'rotate-180' : ''}`} />
            </button>
            {expandedSections.sales && (
              <div className="px-6 pb-6 border-t border-white/10">
                <div className="grid md:grid-cols-3 gap-4 pt-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Weekly Sales ($)</label>
                    <input type="number" value={weeklySales} onChange={(e) => setWeeklySales(e.target.value)} placeholder="20000" 
                      className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#f59e0b] focus:outline-none text-white transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Per Person Average ($)</label>
                    <input type="number" value={ppa} onChange={(e) => setPpa(e.target.value)} placeholder="25" 
                      className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#f59e0b] focus:outline-none text-white transition-colors" />
                    <p className="text-xs text-gray-500 mt-1">Average spend per person</p>
                  </div>
                  <div className="flex items-end">
                    <div className="w-full p-4 bg-[#f59e0b]/10 border border-[#f59e0b]/30 rounded-lg text-center">
                      <p className="text-xs text-gray-400">Weekly Covers</p>
                      <p className="text-2xl font-bold text-[#f59e0b]">{weeklyCovers > 0 ? weeklyCovers.toLocaleString() : '-'}</p>
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
                {/* Mode Toggle */}
                <div className="flex items-center gap-4 pt-6 mb-6">
                  <span className="text-sm text-gray-400">Mode:</span>
                  <button onClick={() => setQuickMode(true)} 
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${quickMode ? 'bg-[#10b981] text-white' : 'bg-white/10 text-gray-400 hover:bg-white/20'}`}>
                    Quick (Known %)
                  </button>
                  <button onClick={() => setQuickMode(false)} 
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${!quickMode ? 'bg-[#10b981] text-white' : 'bg-white/10 text-gray-400 hover:bg-white/20'}`}>
                    Full (Build Recipe)
                  </button>
                </div>
                
                {/* Dish Name & Menu Price */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Dish Name</label>
                    <input type="text" value={dishName} onChange={(e) => setDishName(e.target.value)} placeholder="Buffalo Wings" 
                      className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#10b981] focus:outline-none text-white transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Menu Price ($)</label>
                    <input type="number" value={menuPrice} onChange={(e) => setMenuPrice(e.target.value)} placeholder="14.99" 
                      className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#10b981] focus:outline-none text-white transition-colors" />
                  </div>
                </div>

                {quickMode ? (
                  /* QUICK MODE */
                  <div className="mb-6">
                    <div className="p-4 bg-[#10b981]/10 border border-[#10b981]/30 rounded-lg mb-4">
                      <p className="text-sm text-gray-300"><strong>Quick Mode:</strong> Enter your known food cost percentage and we will calculate the plate cost in dollars.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">Known Food Cost %</label>
                        <div className="relative">
                          <input type="number" value={quickFoodCostPercent} onChange={(e) => setQuickFoodCostPercent(e.target.value)} placeholder="28" 
                            className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#10b981] focus:outline-none text-white transition-colors" />
                          <span className="absolute right-4 top-3.5 text-gray-500">%</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Industry target: 28-32%</p>
                      </div>
                      <div className="flex items-end">
                        <div className="w-full p-4 bg-[#10b981]/20 border-2 border-[#10b981] rounded-lg text-center">
                          <p className="text-xs text-gray-400 mb-1">Calculated Plate Cost</p>
                          <p className="text-3xl font-bold text-[#10b981]">
                            {quickPlateCostDollar > 0 ? `$${quickPlateCostDollar.toFixed(2)}` : '-'}
                          </p>
                          {currentMenuPrice > 0 && quickFoodCostPct > 0 && (
                            <p className="text-xs text-gray-400 mt-1">{quickFoodCostPct}% of ${currentMenuPrice}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* FULL MODE - Build Recipe */
                  <div className="mb-6">
                    <div className="mb-4 p-4 bg-[#10b981]/10 border border-[#10b981]/30 rounded-lg">
                      <p className="text-sm text-gray-300"><strong>How to use:</strong> Enter how you buy each ingredient, we auto-calculate the price per unit, then enter how much goes on the plate.</p>
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
                                  <option value="each">Each</option>
                                  <option value="dozen">Dozen</option>
                                  <option value="case">Case</option>
                                  <option value="weight">Weight (lb)</option>
                                </select>
                              </div>
                              {ing.soldBy === 'dozen' && (
                                <div>
                                  <label className="block text-xs text-gray-400 mb-1">Doz/Case</label>
                                  <input type="number" value={ing.dozenPerCase} onChange={(e) => updateIngredient(ing.id, 'dozenPerCase', e.target.value)} placeholder="30" 
                                    className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-lg focus:border-[#10b981] focus:outline-none text-white text-sm" />
                                </div>
                              )}
                              {ing.soldBy === 'case' && (
                                <div>
                                  <label className="block text-xs text-gray-400 mb-1">Items/Case</label>
                                  <input type="number" value={ing.caseQuantity} onChange={(e) => updateIngredient(ing.id, 'caseQuantity', e.target.value)} placeholder="263" 
                                    className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-lg focus:border-[#10b981] focus:outline-none text-white text-sm" />
                                </div>
                              )}
                              {ing.soldBy === 'weight' && (
                                <div>
                                  <label className="block text-xs text-gray-400 mb-1">Case (lb)</label>
                                  <input type="number" value={ing.caseQuantity} onChange={(e) => updateIngredient(ing.id, 'caseQuantity', e.target.value)} placeholder="40" 
                                    className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-lg focus:border-[#10b981] focus:outline-none text-white text-sm" />
                                </div>
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
                                ) : (
                                  <div className="w-full p-2 bg-white/5 border border-white/10 rounded-lg text-center">
                                    <p className="text-xs text-gray-500">-</p>
                                  </div>
                                )}
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
                                  <button onClick={() => removeIngredient(ing.id)} className="text-red-400 hover:text-red-300 text-xs">
                                    Remove
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        )
                      })}
                      <button onClick={addIngredient} 
                        className="w-full py-3 border-2 border-dashed border-[#10b981]/50 rounded-lg text-[#10b981] hover:bg-[#10b981]/10 transition-colors flex items-center justify-center gap-2">
                        <Plus className="w-5 h-5" />Add Ingredient
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

          {/* LABOR COST */}
          <div className="backdrop-blur-xl bg-white/5 border border-[#06b6d4]/30 rounded-2xl mb-6 overflow-hidden">
            <button onClick={() => toggleSection('labor')} className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors">
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
                    <input type="number" value={grossWages} onChange={(e) => setGrossWages(e.target.value)} placeholder="5000" 
                      className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#06b6d4] focus:outline-none text-white transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Average Tip % on Sales</label>
                    <div className="relative">
                      <input type="number" value={tipPercent} onChange={(e) => setTipPercent(e.target.value)} placeholder="20" 
                        className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#06b6d4] focus:outline-none text-white transition-colors" />
                      <span className="absolute right-4 top-3.5 text-gray-500">%</span>
                    </div>
                    {sales > 0 && tipsAmount > 0 && (
                      <p className="text-xs text-[#06b6d4] mt-1">{tipPercent}% = ${tipsAmount.toLocaleString(undefined, {maximumFractionDigits: 0})}/week</p>
                    )}
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
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Benefits and Other ($)</label>
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
                {primeCostPercent > 0 && (
                  <span className={`ml-2 px-3 py-1 rounded-full text-sm font-bold ${primeStatus.color} bg-black/30`}>
                    {primeCostPercent.toFixed(1)}% {primeStatus.label}
                  </span>
                )}
              </div>
              <ChevronDown className={`w-6 h-6 transition-transform ${expandedSections.prime ? 'rotate-180' : ''}`} />
            </button>
            {expandedSections.prime && (
              <div className="px-6 pb-6 border-t border-white/10 pt-6">
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
                      Target: <span className="text-[#10b981] font-semibold">under 60%</span> | 
                      {primeCostPercent > 0 && primeCostPercent < 60 ? (
                        <span className="text-[#10b981]"> You are {(60 - primeCostPercent).toFixed(1)}% under target!</span>
                      ) : primeCostPercent >= 60 ? (
                        <span className="text-[#ef4444]"> You are {(primeCostPercent - 60).toFixed(1)}% over target</span>
                      ) : (
                        <span className="text-gray-500"> Enter data above</span>
                      )}
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
                <h2 className="text-xl font-bold">Break-Even and Profit</h2>
              </div>
              <ChevronDown className={`w-6 h-6 transition-transform ${expandedSections.breakeven ? 'rotate-180' : ''}`} />
            </button>
            {expandedSections.breakeven && (
              <div className="px-6 pb-6 border-t border-white/10">
                {/* Fixed Costs (Monthly) */}
                <div className="pt-6 mb-6">
                  <h3 className="text-lg font-semibold text-gray-300 mb-4 flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-[#f59e0b]" />Fixed Costs (Monthly)
                  </h3>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Rent ($)</label>
                      <input type="number" value={rent} onChange={(e) => setRent(e.target.value)} placeholder="5000" 
                        className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#f59e0b] focus:outline-none text-white transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Utilities ($)</label>
                      <input type="number" value={utilities} onChange={(e) => setUtilities(e.target.value)} placeholder="1500" 
                        className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#f59e0b] focus:outline-none text-white transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Insurance ($)</label>
                      <input type="number" value={insurance} onChange={(e) => setInsurance(e.target.value)} placeholder="800" 
                        className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#f59e0b] focus:outline-none text-white transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Loan Payments ($)</label>
                      <input type="number" value={loanPayments} onChange={(e) => setLoanPayments(e.target.value)} placeholder="2000" 
                        className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#f59e0b] focus:outline-none text-white transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">CC Debt Payments ($)</label>
                      <input type="number" value={ccPayments} onChange={(e) => setCcPayments(e.target.value)} placeholder="500" 
                        className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#f59e0b] focus:outline-none text-white transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">CC Processing Fee (%)</label>
                      <div className="relative">
                        <input type="number" value={ccFeePercent} onChange={(e) => setCcFeePercent(e.target.value)} placeholder="2.9" step="0.1" 
                          className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#f59e0b] focus:outline-none text-white transition-colors" />
                        <span className="absolute right-4 top-3.5 text-gray-500">%</span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">% Sales on CC</label>
                      <div className="relative">
                        <input type="number" value={ccSalesPercent} onChange={(e) => setCcSalesPercent(e.target.value)} placeholder="80" 
                          className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#f59e0b] focus:outline-none text-white transition-colors" />
                        <span className="absolute right-4 top-3.5 text-gray-500">%</span>
                      </div>
                      {ccProcessingFees > 0 && (
                        <p className="text-xs text-[#f59e0b] mt-1">= ${ccProcessingFees.toLocaleString(undefined, {maximumFractionDigits: 0})}/mo in CC fees</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">POS System ($)</label>
                      <input type="number" value={posSystem} onChange={(e) => setPosSystem(e.target.value)} placeholder="200" 
                        className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#f59e0b] focus:outline-none text-white transition-colors" />
                    </div>
                  </div>
                </div>

                {/* Variable Costs (Weekly) */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-300 mb-4 flex items-center gap-2">
                    <Music className="w-5 h-5 text-[#f59e0b]" />Variable Costs (Weekly)
                  </h3>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Entertainment ($)</label>
                      <input type="number" value={entertainment} onChange={(e) => setEntertainment(e.target.value)} placeholder="300" 
                        className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#f59e0b] focus:outline-none text-white transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Trivia ($)</label>
                      <input type="number" value={trivia} onChange={(e) => setTrivia(e.target.value)} placeholder="150" 
                        className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#f59e0b] focus:outline-none text-white transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Linens ($)</label>
                      <input type="number" value={linens} onChange={(e) => setLinens(e.target.value)} placeholder="200" 
                        className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#f59e0b] focus:outline-none text-white transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Advertising ($)</label>
                      <input type="number" value={advertising} onChange={(e) => setAdvertising(e.target.value)} placeholder="250" 
                        className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#f59e0b] focus:outline-none text-white transition-colors" />
                    </div>
                  </div>
                </div>

                {/* Periodic Costs */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-300 mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-[#f59e0b]" />Periodic Costs
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Grease Trap (Quarterly $)</label>
                      <input type="number" value={greaseTrap} onChange={(e) => setGreaseTrap(e.target.value)} placeholder="400" 
                        className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#f59e0b] focus:outline-none text-white transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Hood Cleaning (Quarterly $)</label>
                      <input type="number" value={hoodCleaning} onChange={(e) => setHoodCleaning(e.target.value)} placeholder="600" 
                        className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#f59e0b] focus:outline-none text-white transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Alcohol License (Yearly $)</label>
                      <input type="number" value={alcoholLicense} onChange={(e) => setAlcoholLicense(e.target.value)} placeholder="1200" 
                        className="w-full px-4 py-3 bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#f59e0b] focus:outline-none text-white transition-colors" />
                    </div>
                  </div>
                </div>

                {/* Results Grid */}
                <div className="grid md:grid-cols-2 gap-6">
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
                        <span className="font-bold text-[#f59e0b]">{coversToBreakEvenWeekly > 0 ? coversToBreakEvenWeekly.toLocaleString() : '-'}</span>
                      </div>
                    </div>
                  </div>
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
                {/* Intro Message */}
                <div className="mt-6 p-4 bg-[#ef4444]/30 border border-[#ef4444]/50 rounded-lg">
                  <p className="text-sm text-white flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-[#fbbf24] flex-shrink-0 mt-0.5" />
                    <span><strong>Third party apps want you to believe their fees replace your labor costs.</strong> They don't. Someone still preps, cooks, bags, and hands off every order. Select your labor reality below and see the truth.</span>
                  </p>
                </div>

                {/* Input Fields */}
                <div className="grid md:grid-cols-4 gap-4 mt-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Third Party Sales (Weekly $)</label>
                    <input type="number" value={thirdPartySales} onChange={(e) => setThirdPartySales(e.target.value)} placeholder="2000" 
                      className="w-full px-4 py-3 bg-black/50 border-2 border-[#ef4444]/30 rounded-lg focus:border-[#ef4444] focus:outline-none text-white transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Third Party Fee (%)</label>
                    <div className="relative">
                      <input type="number" value={thirdPartyFeePercent} onChange={(e) => setThirdPartyFeePercent(e.target.value)} placeholder="30" 
                        className="w-full px-4 py-3 bg-black/50 border-2 border-[#ef4444]/30 rounded-lg focus:border-[#ef4444] focus:outline-none text-white transition-colors" />
                      <span className="absolute right-4 top-3.5 text-gray-500">%</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">DoorDash/UberEats typically 15-30%</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Your Price Increase (%)</label>
                    <div className="relative">
                      <input type="number" value={thirdPartyPriceIncrease} onChange={(e) => setThirdPartyPriceIncrease(e.target.value)} placeholder="20" 
                        className="w-full px-4 py-3 bg-black/50 border-2 border-[#ef4444]/30 rounded-lg focus:border-[#ef4444] focus:outline-none text-white transition-colors" />
                      <span className="absolute right-4 top-3.5 text-gray-500">%</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">How much you mark up delivery prices</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Promo/Deal Cost (%)</label>
                    <div className="relative">
                      <input type="number" value={thirdPartyPromoPercent} onChange={(e) => setThirdPartyPromoPercent(e.target.value)} placeholder="15" 
                        className="w-full px-4 py-3 bg-black/50 border-2 border-[#ef4444]/30 rounded-lg focus:border-[#ef4444] focus:outline-none text-white transition-colors" />
                      <span className="absolute right-4 top-3.5 text-gray-500">%</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">BOGO, $5 off, free delivery costs</p>
                  </div>
                </div>

                {/* Labor Impact Slider */}
                {thirdPartySalesWeekly > 0 && (
                  <div className="mt-6 p-4 bg-black/50 border border-white/10 rounded-lg">
                    <div className="flex items-center gap-2 mb-3">
                      <Info className="w-5 h-5 text-[#06b6d4]" />
                      <label className="text-sm font-semibold text-gray-300">How much does delivery impact your labor? (for "Your Estimate")</label>
                    </div>
                    <p className="text-xs text-gray-500 mb-4">
                      Adjust the slider, then click one of the three scenarios below to see it reflected in the comparison table.
                    </p>
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-gray-500 w-20">No impact</span>
                      <input 
                        type="range" 
                        min="0" 
                        max="100" 
                        value={thirdPartyLaborImpact} 
                        onChange={(e) => setThirdPartyLaborImpact(e.target.value)}
                        className="flex-1 h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#06b6d4]"
                      />
                      <span className="text-xs text-gray-500 w-20 text-right">Full labor</span>
                    </div>
                    <div className="mt-2 text-center">
                      <span className="text-[#06b6d4] font-bold text-lg">{thirdPartyLaborImpact}%</span>
                      <span className="text-gray-500 text-sm ml-2">= {(laborCostPercent * tpLaborRate).toFixed(1)}% of sales in labor</span>
                    </div>
                  </div>
                )}

                {/* Clickable Scenario Selector */}
                {thirdPartySalesWeekly > 0 && (
                  <div className="mt-6">
                    <p className="text-sm text-gray-400 mb-3 text-center">Click a scenario to update DoorDash/UberEats numbers:</p>
                    <div className="grid md:grid-cols-3 gap-4">
                      {/* Best Case */}
                      <button 
                        onClick={() => setSelectedLaborScenario('best')}
                        className={`p-4 rounded-lg text-center transition-all ${
                          selectedLaborScenario === 'best' 
                            ? 'bg-[#10b981]/40 border-2 border-[#10b981] ring-2 ring-[#10b981]/50' 
                            : 'bg-black/50 border border-[#10b981]/30 hover:bg-[#10b981]/20'
                        }`}
                      >
                        <p className="text-xs text-gray-400 mb-1">Best Case</p>
                        <p className="text-lg font-bold text-[#10b981]">0% Labor</p>
                        <p className="text-sm text-gray-500">Delivery fits existing staff</p>
                        {selectedLaborScenario === 'best' && <p className="text-xs text-[#10b981] mt-2 font-bold">âœ“ SELECTED</p>}
                      </button>
                      
                      {/* User's Estimate */}
                      <button 
                        onClick={() => setSelectedLaborScenario('estimate')}
                        className={`p-4 rounded-lg text-center transition-all ${
                          selectedLaborScenario === 'estimate' 
                            ? 'bg-[#06b6d4]/40 border-2 border-[#06b6d4] ring-2 ring-[#06b6d4]/50' 
                            : 'bg-black/50 border border-[#06b6d4]/30 hover:bg-[#06b6d4]/20'
                        }`}
                      >
                        <p className="text-xs text-gray-400 mb-1">Your Estimate</p>
                        <p className="text-lg font-bold text-[#06b6d4]">{(laborCostPercent * tpLaborRate).toFixed(1)}% Labor</p>
                        <p className="text-sm text-gray-500">{thirdPartyLaborImpact}% of your {laborCostPercent.toFixed(1)}%</p>
                        {selectedLaborScenario === 'estimate' && <p className="text-xs text-[#06b6d4] mt-2 font-bold">âœ“ SELECTED</p>}
                      </button>
                      
                      {/* Worst Case */}
                      <button 
                        onClick={() => setSelectedLaborScenario('worst')}
                        className={`p-4 rounded-lg text-center transition-all ${
                          selectedLaborScenario === 'worst' 
                            ? 'bg-[#ef4444]/40 border-2 border-[#ef4444] ring-2 ring-[#ef4444]/50' 
                            : 'bg-black/50 border border-[#ef4444]/30 hover:bg-[#ef4444]/20'
                        }`}
                      >
                        <p className="text-xs text-gray-400 mb-1">Worst Case</p>
                        <p className="text-lg font-bold text-[#ef4444]">{laborCostPercent.toFixed(1)}% Labor</p>
                        <p className="text-sm text-gray-500">Fully burdened with labor</p>
                        {selectedLaborScenario === 'worst' && <p className="text-xs text-[#ef4444] mt-2 font-bold">âœ“ SELECTED</p>}
                      </button>
                    </div>
                  </div>
                )}

                {/* Channel Comparison Table */}
                {thirdPartySalesWeekly > 0 && (
                  <div className="mt-8">
                    <h3 className="text-lg font-bold text-white mb-4 text-center">Channel Comparison on ${thirdPartySalesWeekly.toLocaleString()}/week</h3>
                    
                    {/* Comparison Grid */}
                    <div className="grid md:grid-cols-3 gap-4">
                      
                      {/* DoorDash/UberEats Column */}
                      {(() => {
                        const ddLabor = ddSelectedLaborPercent
                        const ddOverhead = overheadPercent * (ddLabor > 0 && laborCostPercent > 0 ? ddLabor / laborCostPercent : 0)
                        const ddNetImpact = -tpFeePercent + tpPriceIncreasePercent - tpPromoPercent - ddLabor - ddOverhead - estimatedFoodCostPercent
                        
                        // Per $25 order calculations
                        const orderBase = 25
                        const ddDeliveryFee = 7
                        const ddMarkupDollars = orderBase * tpMarkupRate
                        const ddCustomerTotal = orderBase + ddDeliveryFee + ddMarkupDollars
                        const ddYouKeepPerOrder = orderBase * (1 + ddNetImpact / 100)
                        const ddProfitMargin = (ddYouKeepPerOrder / orderBase) * 100
                        
                        // Weekly calculations (based on per-order math)
                        const numOrders = thirdPartySalesWeekly / orderBase
                        const ddYouKeepWeekly = ddYouKeepPerOrder * numOrders
                        
                        return (
                          <div className="p-5 bg-black/80 border-2 border-[#ef4444]/50 rounded-xl">
                            <h4 className="text-lg font-bold text-[#ef4444] mb-4 text-center">DoorDash / UberEats</h4>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span className="text-gray-400">Commission:</span>
                                <span className="text-[#ef4444]">-{tpFeePercent}% <span className="text-gray-500">(-${Math.round(thirdPartySalesWeekly * tpFeeRate).toLocaleString()})</span></span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">Your Markup:</span>
                                <span className="text-[#10b981]">+{tpPriceIncreasePercent}% <span className="text-gray-500">(+${Math.round(thirdPartySalesWeekly * tpMarkupRate).toLocaleString()})</span></span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">Promo Costs:</span>
                                <span className="text-[#ef4444]">-{tpPromoPercent}% <span className="text-gray-500">(-${Math.round(thirdPartySalesWeekly * tpPromoRate).toLocaleString()})</span></span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">Labor Impact:</span>
                                <span className="text-[#ef4444]">-{ddLabor.toFixed(1)}% <span className="text-gray-500">(-${Math.round(thirdPartySalesWeekly * ddLabor / 100).toLocaleString()})</span></span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">Food Cost:</span>
                                <span className="text-[#ef4444]">-{estimatedFoodCostPercent.toFixed(1)}% <span className="text-gray-500">(-${Math.round(thirdPartySalesWeekly * estimatedFoodCostPercent / 100).toLocaleString()})</span></span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">Overhead:</span>
                                <span className="text-[#ef4444]">-{ddOverhead.toFixed(1)}% <span className="text-gray-500">(-${Math.round(thirdPartySalesWeekly * ddOverhead / 100).toLocaleString()})</span></span>
                              </div>
                              <div className="flex justify-between border-t border-white/10 pt-2 mt-2">
                                <span className="text-gray-300 font-semibold">Net Impact:</span>
                                <span className={`font-bold ${ddNetImpact >= 0 ? 'text-[#10b981]' : 'text-[#ef4444]'}`}>
                                  {ddNetImpact >= 0 ? '+' : ''}{ddNetImpact.toFixed(1)}%
                                </span>
                              </div>
                              
                              {/* Customer pays breakdown */}
                              <div className="border-t border-white/10 pt-3 mt-3">
                                <p className="text-gray-300 font-semibold mb-2">On a $25 order, customer pays:</p>
                                <div className="flex justify-between">
                                  <span className="text-gray-400">$25 order</span>
                                  <span className="text-[#10b981]">${orderBase.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-400">$7 delivery</span>
                                  <span className="text-[#10b981]">${ddDeliveryFee.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-400">+{tpPriceIncreasePercent}% markup</span>
                                  <span className="text-[#10b981]">${ddMarkupDollars.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between border-t border-white/10 pt-2 mt-2">
                                  <span className="text-gray-300 font-semibold">Customer Total:</span>
                                  <span className="text-white font-bold">${ddCustomerTotal.toFixed(2)}</span>
                                </div>
                              </div>
                              
                              {/* You keep per order */}
                              <div className="flex justify-between items-center pt-2">
                                <span className="text-gray-300 font-bold">YOU KEEP (per order):</span>
                                <span className={`text-xl font-bold ${ddYouKeepPerOrder >= 0 ? 'text-[#fbbf24]' : 'text-[#ef4444]'}`}>
                                  ${ddYouKeepPerOrder.toFixed(2)}
                                </span>
                              </div>
                              
                              {/* Profit margin */}
                              <div className="flex justify-between items-center">
                                <span className="text-gray-400">Profit Margin:</span>
                                <span className={`font-bold ${ddProfitMargin >= 0 ? 'text-[#fbbf24]' : 'text-[#ef4444]'}`}>
                                  {ddProfitMargin.toFixed(1)}%
                                </span>
                              </div>
                              
                              {/* Warning if losing money */}
                              {ddYouKeepPerOrder < 0 && (
                                <p className="text-xs text-[#ef4444] mt-2 p-2 bg-[#ef4444]/20 rounded font-bold">You are losing money on every Third Party Order. Make changes immediately!</p>
                              )}
                              
                              {/* Weekly totals */}
                              <div className="border-t border-white/10 pt-3 mt-3">
                                <p className="text-gray-300 font-semibold mb-2">WEEKLY TOTALS on ${thirdPartySalesWeekly.toLocaleString()}/week:</p>
                                <div className="flex justify-between items-center">
                                  <span className="text-gray-300 font-bold">You Keep:</span>
                                  <span className={`text-xl font-bold ${ddYouKeepWeekly >= 0 ? 'text-[#fbbf24]' : 'text-[#ef4444]'}`}>
                                    ${Math.round(ddYouKeepWeekly).toLocaleString()}
                                  </span>
                                </div>
                              </div>
                              
                              {/* Scenario-specific message */}
                              <div className="mt-3 p-2 rounded text-xs">
                                {selectedLaborScenario === 'best' && (
                                  <p className="text-[#fbbf24]">🦄 <strong>The fairy tale scenario.</strong> DoorDash wants you to believe this, but someone still preps, cooks, packs, and hands off every order. This almost never happens in reality.</p>
                                )}
                                {selectedLaborScenario === 'estimate' && parseFloat(thirdPartyLaborImpact) < 25 && (
                                  <p className="text-[#fbbf24]">🦄 <strong>Still a fairy tale.</strong> At {thirdPartyLaborImpact}% labor, you're assuming delivery orders almost run themselves. Be honest with yourself — move that slider up.</p>
                                )}
                                {selectedLaborScenario === 'estimate' && parseFloat(thirdPartyLaborImpact) >= 25 && parseFloat(thirdPartyLaborImpact) < 50 && (
                                  <p className="text-[#fbbf24]">⚠️ <strong>Optimistic estimate.</strong> At {thirdPartyLaborImpact}% labor, you're betting delivery barely impacts your kitchen. Most operators find the real number is higher.</p>
                                )}
                                {selectedLaborScenario === 'estimate' && parseFloat(thirdPartyLaborImpact) >= 50 && (
                                  <p className="text-[#06b6d4]">📊 <strong>Realistic estimate.</strong> At {thirdPartyLaborImpact}% labor, you're accounting for real kitchen impact. This is where most operators land.</p>
                                )}
                                {selectedLaborScenario === 'worst' && (
                                  <p className="text-[#ef4444]">💀 <strong>The ugly truth</strong> when delivery rushes hit during peak hours and you're adding staff or paying overtime to keep up.</p>
                                )}
                              </div>
                            </div>
                          </div>
                        )
                      })()}
                      
                      {/* Your Website Column */}
                      {(() => {
                        const webMarkup = parseFloat(websiteMarkupPercent) || 0
                        const webMarkupRate = webMarkup / 100
                        const webCCFeePercent = ccFeeRateTP * 100
                        const webLabor = laborCostPercent
                        const webOverhead = overheadPercent
                        const webNetImpact = webMarkup - webCCFeePercent - webLabor - webOverhead - estimatedFoodCostPercent
                        
                        // Per $25 order calculations
                        const orderBase = 25
                        const webDeliveryFee = 7
                        const webMarkupDollars = orderBase * webMarkupRate
                        const webCustomerTotal = orderBase + webDeliveryFee + webMarkupDollars
                        const webYouKeepPerOrder = orderBase * (1 + webNetImpact / 100)
                        const webProfitMargin = (webYouKeepPerOrder / orderBase) * 100
                        
                        // Weekly calculations (based on per-order math)
                        const numOrders = thirdPartySalesWeekly / orderBase
                        const webYouKeepWeekly = webYouKeepPerOrder * numOrders
                        
                        return (
                          <div className="p-5 bg-black/80 border-2 border-[#10b981]/50 rounded-xl">
                            <h4 className="text-lg font-bold text-[#10b981] mb-4 text-center">Your Website</h4>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span className="text-gray-400">Commission:</span>
                                <span className="text-[#10b981]">0% <span className="text-gray-500">($0)</span></span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-gray-400">Markup:</span>
                                <div className="flex items-center gap-1">
                                  <span className="text-[#10b981]">+</span>
                                  <input 
                                    type="number" 
                                    value={websiteMarkupPercent} 
                                    onChange={(e) => setWebsiteMarkupPercent(e.target.value)}
                                    className="w-12 px-1 py-0.5 bg-transparent border-b border-[#10b981]/50 focus:border-[#10b981] focus:outline-none text-[#10b981] text-right font-bold"
                                  />
                                  <span className="text-[#10b981]">%</span>
                                  <span className="text-gray-500 ml-1">(+${Math.round(thirdPartySalesWeekly * webMarkupRate).toLocaleString()})</span>
                                </div>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">Promo Costs:</span>
                                <span className="text-gray-400">0% <span className="text-gray-500">($0)</span></span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">CC Fees:</span>
                                <span className="text-[#ef4444]">-{webCCFeePercent.toFixed(1)}% <span className="text-gray-500">(-${Math.round(thirdPartySalesWeekly * ccFeeRateTP).toLocaleString()})</span></span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">Labor:</span>
                                <span className="text-[#ef4444]">-{webLabor.toFixed(1)}% <span className="text-gray-500">(-${Math.round(thirdPartySalesWeekly * webLabor / 100).toLocaleString()})</span></span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">Food Cost:</span>
                                <span className="text-[#ef4444]">-{estimatedFoodCostPercent.toFixed(1)}% <span className="text-gray-500">(-${Math.round(thirdPartySalesWeekly * estimatedFoodCostPercent / 100).toLocaleString()})</span></span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">Overhead:</span>
                                <span className="text-[#ef4444]">-{webOverhead.toFixed(1)}% <span className="text-gray-500">(-${Math.round(thirdPartySalesWeekly * webOverhead / 100).toLocaleString()})</span></span>
                              </div>
                              <div className="flex justify-between border-t border-white/10 pt-2 mt-2">
                                <span className="text-gray-300 font-semibold">Net Impact:</span>
                                <span className={`font-bold ${webNetImpact >= 0 ? 'text-[#10b981]' : 'text-[#ef4444]'}`}>
                                  {webNetImpact >= 0 ? '+' : ''}{webNetImpact.toFixed(1)}%
                                </span>
                              </div>
                              
                              {/* Customer pays breakdown */}
                              <div className="border-t border-white/10 pt-3 mt-3">
                                <p className="text-gray-300 font-semibold mb-2">On a $25 order, customer pays:</p>
                                <div className="flex justify-between">
                                  <span className="text-gray-400">$25 order</span>
                                  <span className="text-[#10b981]">${orderBase.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-400">$7 delivery</span>
                                  <span className="text-[#10b981]">${webDeliveryFee.toFixed(2)}</span>
                                </div>
                                {webMarkup > 0 && (
                                  <div className="flex justify-between">
                                    <span className="text-gray-400">+{webMarkup}% markup</span>
                                    <span className="text-[#10b981]">${webMarkupDollars.toFixed(2)}</span>
                                  </div>
                                )}
                                <div className="flex justify-between border-t border-white/10 pt-2 mt-2">
                                  <span className="text-gray-300 font-semibold">Customer Total:</span>
                                  <span className="text-white font-bold">${webCustomerTotal.toFixed(2)}</span>
                                </div>
                              </div>
                              
                              {/* You keep per order */}
                              <div className="flex justify-between items-center pt-2">
                                <span className="text-gray-300 font-bold">YOU KEEP (per order):</span>
                                <span className={`text-xl font-bold ${webYouKeepPerOrder >= 0 ? 'text-[#10b981]' : 'text-[#ef4444]'}`}>
                                  ${webYouKeepPerOrder.toFixed(2)}
                                </span>
                              </div>
                              
                              {/* Profit margin */}
                              <div className="flex justify-between items-center">
                                <span className="text-gray-400">Profit Margin:</span>
                                <span className={`font-bold ${webProfitMargin >= 0 ? 'text-[#10b981]' : 'text-[#ef4444]'}`}>
                                  {webProfitMargin.toFixed(1)}%
                                </span>
                              </div>
                              
                              {/* Weekly totals */}
                              <div className="border-t border-white/10 pt-3 mt-3">
                                <p className="text-gray-300 font-semibold mb-2">WEEKLY TOTALS on ${thirdPartySalesWeekly.toLocaleString()}/week:</p>
                                <div className="flex justify-between items-center">
                                  <span className="text-gray-300 font-bold">You Keep:</span>
                                  <span className={`text-xl font-bold ${webYouKeepWeekly >= 0 ? 'text-[#10b981]' : 'text-[#ef4444]'}`}>
                                    ${Math.round(webYouKeepWeekly).toLocaleString()}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })()}
                      
                      {/* Indy Eats Column */}
                      {(() => {
                        const indyMarkup = parseFloat(indyMarkupPercent) || 0
                        const indyMarkupRate = indyMarkup / 100
                        const indyLabor = laborCostPercent
                        const indyOverhead = overheadPercent
                        const indyNetImpact = indyMarkup - indyLabor - indyOverhead - estimatedFoodCostPercent
                        
                        // Per $25 order calculations
                        const orderBase = 25
                        const indyDeliveryFee = 6
                        const indyItemFee = 2 * 0.20  // 2 items at $0.20 each
                        const indyCCFee = orderBase * ccFeeRateTP  // CC fee customer pays
                        const indyMarkupDollars = orderBase * indyMarkupRate
                        const indyCustomerTotal = orderBase + indyDeliveryFee + indyItemFee + indyCCFee + indyMarkupDollars
                        const indyYouKeepPerOrder = orderBase * (1 + indyNetImpact / 100)
                        const indyProfitMargin = (indyYouKeepPerOrder / orderBase) * 100
                        
                        // Weekly calculations (based on per-order math)
                        const numOrders = thirdPartySalesWeekly / orderBase
                        const indyYouKeepWeekly = indyYouKeepPerOrder * numOrders
                        
                        return (
                          <div className="p-5 bg-black/80 border-2 border-[#06b6d4]/50 rounded-xl">
                            <h4 className="text-lg font-bold text-[#06b6d4] mb-4 text-center">Indy Eats</h4>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span className="text-gray-400">Commission:</span>
                                <span className="text-[#10b981]">0% <span className="text-gray-500">($0)</span></span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-gray-400">Markup:</span>
                                <div className="flex items-center gap-1">
                                  <span className="text-[#06b6d4]">+</span>
                                  <input 
                                    type="number" 
                                    value={indyMarkupPercent} 
                                    onChange={(e) => setIndyMarkupPercent(e.target.value)}
                                    className="w-12 px-1 py-0.5 bg-transparent border-b border-[#06b6d4]/50 focus:border-[#06b6d4] focus:outline-none text-[#06b6d4] text-right font-bold"
                                  />
                                  <span className="text-[#06b6d4]">%</span>
                                  <span className="text-gray-500 ml-1">(+${Math.round(thirdPartySalesWeekly * indyMarkupRate).toLocaleString()})</span>
                                </div>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">Promo Costs:</span>
                                <span className="text-gray-400">0% <span className="text-gray-500">($0)</span></span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">Per-Item Fee:</span>
                                <span className="text-[#10b981]">$0 <span className="text-gray-500">(Customer pays)</span></span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">CC Fees:</span>
                                <span className="text-[#10b981]">$0 <span className="text-gray-500">(Customer pays)</span></span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">Labor:</span>
                                <span className="text-[#ef4444]">-{indyLabor.toFixed(1)}% <span className="text-gray-500">(-${Math.round(thirdPartySalesWeekly * indyLabor / 100).toLocaleString()})</span></span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">Food Cost:</span>
                                <span className="text-[#ef4444]">-{estimatedFoodCostPercent.toFixed(1)}% <span className="text-gray-500">(-${Math.round(thirdPartySalesWeekly * estimatedFoodCostPercent / 100).toLocaleString()})</span></span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">Overhead:</span>
                                <span className="text-[#ef4444]">-{indyOverhead.toFixed(1)}% <span className="text-gray-500">(-${Math.round(thirdPartySalesWeekly * indyOverhead / 100).toLocaleString()})</span></span>
                              </div>
                              <div className="flex justify-between border-t border-white/10 pt-2 mt-2">
                                <span className="text-gray-300 font-semibold">Net Impact:</span>
                                <span className={`font-bold ${indyNetImpact >= 0 ? 'text-[#10b981]' : 'text-[#ef4444]'}`}>
                                  {indyNetImpact >= 0 ? '+' : ''}{indyNetImpact.toFixed(1)}%
                                </span>
                              </div>
                              
                              {/* Customer pays breakdown */}
                              <div className="border-t border-white/10 pt-3 mt-3">
                                <p className="text-gray-300 font-semibold mb-2">On a $25 order, customer pays:</p>
                                <div className="flex justify-between">
                                  <span className="text-gray-400">$25 order</span>
                                  <span className="text-[#10b981]">${orderBase.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-400">$6 delivery</span>
                                  <span className="text-[#10b981]">${indyDeliveryFee.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-400">$0.20/item fee (2 items)</span>
                                  <span className="text-[#10b981]">${indyItemFee.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-400">CC fee ({(ccFeeRateTP * 100).toFixed(1)}%)</span>
                                  <span className="text-[#10b981]">${indyCCFee.toFixed(2)}</span>
                                </div>
                                {indyMarkup > 0 && (
                                  <div className="flex justify-between">
                                    <span className="text-gray-400">+{indyMarkup}% markup</span>
                                    <span className="text-[#06b6d4]">${indyMarkupDollars.toFixed(2)}</span>
                                  </div>
                                )}
                                <div className="flex justify-between border-t border-white/10 pt-2 mt-2">
                                  <span className="text-gray-300 font-semibold">Customer Total:</span>
                                  <span className="text-white font-bold">${indyCustomerTotal.toFixed(2)}</span>
                                </div>
                              </div>
                              
                              {/* You keep per order */}
                              <div className="flex justify-between items-center pt-2">
                                <span className="text-gray-300 font-bold">YOU KEEP (per order):</span>
                                <span className={`text-xl font-bold ${indyYouKeepPerOrder >= 0 ? 'text-[#06b6d4]' : 'text-[#ef4444]'}`}>
                                  ${indyYouKeepPerOrder.toFixed(2)}
                                </span>
                              </div>
                              
                              {/* Profit margin */}
                              <div className="flex justify-between items-center">
                                <span className="text-gray-400">Profit Margin:</span>
                                <span className={`font-bold ${indyProfitMargin >= 0 ? 'text-[#06b6d4]' : 'text-[#ef4444]'}`}>
                                  {indyProfitMargin.toFixed(1)}%
                                </span>
                              </div>
                              
                              {/* Weekly totals */}
                              <div className="border-t border-white/10 pt-3 mt-3">
                                <p className="text-gray-300 font-semibold mb-2">WEEKLY TOTALS on ${thirdPartySalesWeekly.toLocaleString()}/week:</p>
                                <div className="flex justify-between items-center">
                                  <span className="text-gray-300 font-bold">You Keep:</span>
                                  <span className={`text-xl font-bold ${indyYouKeepWeekly >= 0 ? 'text-[#06b6d4]' : 'text-[#ef4444]'}`}>
                                    ${Math.round(indyYouKeepWeekly).toLocaleString()}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })()}
                      
                      
                    </div>
                    
                   {/* Bottom Coaching Box - Full Width */}
                    {(() => {
                      // DoorDash calculations (using selected scenario)
                      const ddLabor = ddSelectedLaborPercent
                      const ddOverhead = overheadPercent * (ddLabor > 0 && laborCostPercent > 0 ? ddLabor / laborCostPercent : 0)
                      const ddNetImpact = -tpFeePercent + tpPriceIncreasePercent - tpPromoPercent - ddLabor - ddOverhead - estimatedFoodCostPercent
                      const orderBase = 25
                      const ddYouKeepPerOrder = orderBase * (1 + ddNetImpact / 100)
                      
                      // Website calculations (with markup)
                      const webMarkup = parseFloat(websiteMarkupPercent) || 0
                      const webNetImpact = webMarkup - (ccFeeRateTP * 100) - laborCostPercent - overheadPercent - estimatedFoodCostPercent
                      const webYouKeepPerOrder = orderBase * (1 + webNetImpact / 100)
                      
                      // Indy Eats calculations (with markup)
                      const indyMarkup = parseFloat(indyMarkupPercent) || 0
                      const indyNetImpact = indyMarkup - laborCostPercent - overheadPercent - estimatedFoodCostPercent
                      const indyYouKeepPerOrder = orderBase * (1 + indyNetImpact / 100)
                      
                      // Weekly differences
                      const numOrders = thirdPartySalesWeekly / orderBase
                      const ddWeekly = ddYouKeepPerOrder * numOrders
                      const webWeekly = webYouKeepPerOrder * numOrders
                      const indyWeekly = indyYouKeepPerOrder * numOrders
                      
                      const webVsDd = webWeekly - ddWeekly
                      const indyVsDd = indyWeekly - ddWeekly
                      const bestAltWeekly = Math.max(webWeekly, indyWeekly)
                      const bestAltVsDd = bestAltWeekly - ddWeekly
                      
                      // Check if markup makes delivery more profitable than dine-in
                      const hasMarkup = webMarkup > 0 || indyMarkup > 0
                      const bestMarkupMargin = Math.max(webNetImpact, indyNetImpact)
                      const deliveryBeatsDineIn = bestMarkupMargin > inHouseProfitMarginPercent
                      
                      // Check if labor scenario is unrealistically low
                      const effectiveLaborPercent = selectedLaborScenario === 'best' ? 0 
                        : selectedLaborScenario === 'worst' ? 100 
                        : parseFloat(thirdPartyLaborImpact) || 0
                      const isUnrealisticScenario = effectiveLaborPercent < 50
                      
                      return (
                        <div className="mt-6 p-6 bg-gradient-to-r from-[#f59e0b]/20 to-[#10b981]/20 border-2 border-[#f59e0b] rounded-xl">
                          <h4 className="text-xl font-bold text-[#f59e0b] mb-4 flex items-center gap-2">
                            🎯 Here's Your Play
                          </h4>
                          
                          <div className="space-y-4 text-sm">
                            {isUnrealisticScenario ? (
                              <>
                                <div className="p-4 bg-[#fbbf24]/20 border border-[#fbbf24] rounded-lg">
                                  <p className="text-[#fbbf24] font-bold mb-2">⚠️ Warning: You're viewing an optimistic scenario</p>
                                  <p className="text-gray-300">
                                    At {effectiveLaborPercent}% labor impact, these DoorDash numbers assume delivery orders barely touch your kitchen costs. 
                                    Most operators find this isn't reality. <strong>Move the labor slider above 50%</strong> to see more realistic numbers.
                                  </p>
                                </div>
                                
                                <div className="p-4 bg-[#10b981]/10 border border-[#10b981]/30 rounded-lg">
                                  <p className="text-[#10b981] font-bold mb-2">💡 Here's a better question to ask yourself:</p>
                                  <p className="text-gray-300">
                                    You're marking up DoorDash prices by <span className="text-[#fbbf24] font-bold">{tpPriceIncreasePercent}%</span>. 
                                    What if you added that same <span className="text-[#10b981] font-bold">{tpPriceIncreasePercent}%</span> markup to your own website and Indy Eats orders?
                                  </p>
                                  <p className="text-gray-400 mt-2 text-xs">
                                    Try it — type <span className="text-[#10b981] font-bold">{tpPriceIncreasePercent}</span> in the markup fields on the Website and Indy Eats cards above and watch what happens to your margins.
                                  </p>
                                </div>
                              </>
                            ) : (
                              <>
                                <p className="text-gray-300">
                                  Third party apps like DoorDash take a massive cut — you're keeping just{' '}
                                  <span className={`font-bold ${ddYouKeepPerOrder >= 0 ? 'text-[#fbbf24]' : 'text-[#ef4444]'}`}>
                                    ${ddYouKeepPerOrder.toFixed(2)}/order
                                  </span>. 
                                  But look at your other options:
                                </p>
                                
                                <div className="grid md:grid-cols-2 gap-4">
                                  <div className="p-3 bg-black/30 rounded-lg">
                                    <p className="text-[#10b981] font-bold">Your Website keeps ${webYouKeepPerOrder.toFixed(2)}/order</p>
                                    <p className="text-gray-400 text-xs">That's <span className="text-[#10b981] font-bold">${Math.round(webVsDd).toLocaleString()}/week</span> more than DoorDash</p>
                                  </div>
                                  <div className="p-3 bg-black/30 rounded-lg">
                                    <p className="text-[#06b6d4] font-bold">Indy Eats keeps ${indyYouKeepPerOrder.toFixed(2)}/order</p>
                                    <p className="text-gray-400 text-xs">That's <span className="text-[#06b6d4] font-bold">${Math.round(indyVsDd).toLocaleString()}/week</span> more than DoorDash</p>
                                  </div>
                                </div>
                                
                                <div className="p-4 bg-[#10b981]/10 border border-[#10b981]/30 rounded-lg">
                                  <p className="text-[#10b981] font-bold mb-2">💡 Pro Move: Add a markup to your own ordering channels!</p>
                                  <p className="text-gray-300">
                                    You're already marking up DoorDash by {tpPriceIncreasePercent}%. Customers expect to pay more for delivery. 
                                    Try adding 10-15% to Your Website and Indy Eats using the markup fields above.
                                  </p>
                                  {hasMarkup && deliveryBeatsDineIn && (
                                    <p className="text-[#10b981] font-bold mt-2">
                                      🔥 LOOK AT THAT! With your markup, delivery orders are now <span className="underline">MORE profitable than dine-in</span> — no table to bus, no server to tip out, no refills!
                                    </p>
                                  )}
                                  {hasMarkup && !deliveryBeatsDineIn && (
                                    <p className="text-[#fbbf24] mt-2">
                                      You're getting closer! Try increasing your markup a bit more to make delivery MORE profitable than dine-in ({inHouseProfitMarginPercent.toFixed(1)}% margin).
                                    </p>
                                  )}
                                </div>
                                
                                <div className="text-center pt-2 border-t border-white/10">
                                  <p className="text-gray-400">
                                    The math is clear: choosing the right channels puts{' '}
                                    <span className="text-[#10b981] font-bold text-lg">${Math.round(bestAltVsDd).toLocaleString()}/week</span> more in your pocket.
                                  </p>
                                  <p className="text-[#10b981] font-bold text-xl mt-1">
                                    That's ${Math.round(bestAltVsDd * 52).toLocaleString()}/year!
                                  </p>
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      )
                    })()}
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
                {hasActiveWhatIf && (
                  <span className="ml-2 px-3 py-1 rounded-full text-sm font-bold text-[#10b981] bg-[#10b981]/20">Active</span>
                )}
              </div>
              <ChevronDown className={`w-6 h-6 transition-transform ${expandedSections.whatif ? 'rotate-180' : ''}`} />
            </button>
            {expandedSections.whatif && (
              <div className="px-6 pb-6 border-t border-white/10">
                <div className="pt-6 mb-6">
                  {/* Intro */}
                  <div className="p-4 mb-6 bg-[#f59e0b]/10 border border-[#f59e0b]/30 rounded-lg">
                    <p className="text-sm text-gray-300">
                      <strong>How it works:</strong> Enter values below and watch the top dashboard update in real-time with your projected numbers.
                    </p>
                  </div>
                  
                  {/* Food Cost Reduction - Dual Input */}
                  <div className="p-6 bg-black/20 rounded-lg border-2 border-[#10b981]/30 mb-6">
                    <h4 className="text-lg font-bold text-[#10b981] mb-4">Reduce Food Cost</h4>
                    <p className="text-sm text-gray-400 mb-4">
                      Enter either value - the other will auto-calculate. Current weekly food spend:{' '}
                      <strong className="text-white">${Math.round(currentWeeklyFoodSpend).toLocaleString()}</strong>{' '}
                      ({estimatedFoodCostPercent.toFixed(1)}% of ${sales.toLocaleString()})
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">Reduce Food Cost by ___% of sales</label>
                        <p className="text-xs text-gray-500 mb-3">Example: Reduce from 30% to 28% = enter 2</p>
                        <div className="flex gap-2">
                          <input 
                            type="number" 
                            value={whatIfFoodCostPercentReduction} 
                            onChange={(e) => { setActiveWhatIfInput('percent'); setWhatIfFoodCostPercentReduction(e.target.value) }} 
                            onFocus={() => setActiveWhatIfInput('percent')} 
                            placeholder="2" 
                            className="w-24 px-4 py-2 bg-black/40 border border-white/10 rounded-lg focus:border-[#10b981] focus:outline-none text-white" 
                          />
                          <span className="py-2 text-gray-400">% points</span>
                        </div>
                        {whatIfFoodPctReduction > 0 && (
                          <div className="mt-3 p-3 bg-[#10b981]/10 rounded-lg">
                            <p className="text-sm text-gray-300">
                              Weekly savings: <strong className="text-[#10b981]">+${Math.round(linkedFoodSpendFromPercent).toLocaleString()}</strong>
                            </p>
                            <p className="text-sm text-gray-300">
                              Yearly savings: <strong className="text-[#10b981]">+${Math.round(linkedFoodSpendFromPercent * 52).toLocaleString()}</strong>
                            </p>
                          </div>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">OR Reduce Food Spend by $___/week</label>
                        <p className="text-xs text-gray-500 mb-3">Direct dollar savings on food purchases</p>
                        <div className="flex gap-2">
                          <span className="py-2 text-gray-400">$</span>
                          <input 
                            type="number" 
                            value={whatIfFoodSpendReduction} 
                            onChange={(e) => { setActiveWhatIfInput('dollar'); setWhatIfFoodSpendReduction(e.target.value) }} 
                            onFocus={() => setActiveWhatIfInput('dollar')} 
                            placeholder="500" 
                            className="w-28 px-4 py-2 bg-black/40 border border-white/10 rounded-lg focus:border-[#10b981] focus:outline-none text-white" 
                          />
                          <span className="py-2 text-gray-400">/week</span>
                        </div>
                        {whatIfFoodSpendDollarReduction > 0 && currentWeeklyFoodSpend > 0 && (
                          <div className="mt-3 p-3 bg-[#10b981]/10 rounded-lg">
                            <p className="text-sm text-gray-300">
                              That is <strong className="text-[#10b981]">{linkedFoodPercentFromSpend.toFixed(1)}%</strong> of your food spend
                            </p>
                            <p className="text-sm text-gray-300">
                              Yearly savings: <strong className="text-[#10b981]">+${Math.round(whatIfFoodSpendDollarReduction * 52).toLocaleString()}</strong>
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-[#fbbf24]/10 border border-[#fbbf24]/30 rounded-lg">
                      <p className="text-xs text-gray-300">
                        <strong className="text-[#fbbf24]">Vendor Promises:</strong> When vendors promise 10% savings they mean 10% off your spend - NOT reducing your food cost percentage by 10 points. A 10% spend reduction on ${Math.round(currentWeeklyFoodSpend).toLocaleString()}/week = ${Math.round(currentWeeklyFoodSpend * 0.1).toLocaleString()}/week saved.
                      </p>
                    </div>
                  </div>

                  {/* Price, Labor, Covers - 3 Column Grid */}
                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Raise Prices */}
                    <div className="p-4 bg-black/20 rounded-lg border border-white/10">
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Raise Prices by ___%</label>
                      <p className="text-xs text-gray-500 mb-3">Menu price increase across the board</p>
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
                      {whatIfPriceIncrease > 0 && (
                        <div className="space-y-1 text-sm">
                          <p className="text-gray-400">
                            Weekly: <span className="text-[#10b981] font-bold">+${Math.round(priceIncreaseSavingsWeekly).toLocaleString()}</span>
                          </p>
                          <p className="text-gray-400">
                            Yearly: <span className="text-[#10b981] font-bold">+${Math.round(priceIncreaseSavingsWeekly * 52).toLocaleString()}</span>
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Reduce Labor */}
                    <div className="p-4 bg-black/20 rounded-lg border border-white/10">
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Reduce Labor by ___%</label>
                      <p className="text-xs text-gray-500 mb-3">Scheduling efficiency, cross-training</p>
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
                      {whatIfLaborReduction > 0 && (
                        <div className="space-y-1 text-sm">
                          <p className="text-gray-400">
                            Weekly: <span className="text-[#10b981] font-bold">+${Math.round(laborSavingsWeekly).toLocaleString()}</span>
                          </p>
                          <p className="text-gray-400">
                            Yearly: <span className="text-[#10b981] font-bold">+${Math.round(laborSavingsWeekly * 52).toLocaleString()}</span>
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Increase Covers */}
                    <div className="p-4 bg-black/20 rounded-lg border border-white/10">
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Increase Covers by ___%</label>
                      <p className="text-xs text-gray-500 mb-3">More butts in seats via marketing</p>
                      <div className="flex gap-2 mb-4">
                        <input 
                          type="number" 
                          value={coversIncreasePercent} 
                          onChange={(e) => setCoversIncreasePercent(e.target.value)} 
                          placeholder="10" 
                          className="w-24 px-4 py-2 bg-black/40 border border-white/10 rounded-lg focus:border-[#10b981] focus:outline-none text-white" 
                        />
                        <span className="py-2 text-gray-400">%</span>
                      </div>
                      {whatIfCoversIncrease > 0 && weeklyCovers > 0 && (
                        <div className="space-y-1 text-sm">
                          <p className="text-gray-400">
                            Covers: {weeklyCovers.toLocaleString()} {'->'} <span className="text-[#10b981] font-bold">{newWeeklyCovers.toLocaleString()}</span>
                            <span className="text-gray-500"> (+{extraCovers})</span>
                          </p>
                          <p className="text-gray-400">
                            Extra revenue: <span className="text-white">${Math.round(extraRevenueFromCovers).toLocaleString()}/wk</span>
                          </p>
                          <p className="text-gray-400">
                            Extra profit: <span className="text-[#10b981] font-bold">+${Math.round(coversProfitWeekly).toLocaleString()}/wk</span>
                          </p>
                          <p className="text-xs text-gray-500">at {inHouseProfitMarginPercent.toFixed(1)}% margin</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Grand Total Impact */}
                  {sales > 0 && hasActiveWhatIf && (
                    <div className="mt-6 p-6 bg-gradient-to-r from-[#10b981]/20 to-[#06b6d4]/20 border-2 border-[#10b981] rounded-xl">
                      <h4 className="text-xl font-bold text-[#10b981] mb-4 text-center">TOTAL PROJECTED IMPACT</h4>
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
                      <p className="text-center text-sm text-gray-400 mt-4">
                        New projected weekly profit: <strong className="text-[#10b981]">${Math.round(whatIfAdjustedWeeklyProfit).toLocaleString()}</strong> (was ${Math.round(weeklyProfit).toLocaleString()})
                      </p>
                    </div>
                  )}

                  {/* Clear Button */}
                  {hasActiveWhatIf && (
                    <div className="mt-4 text-center">
                      <button 
                        onClick={clearWhatIf}
                        className="px-6 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-gray-300 text-sm transition-colors"
                      >
                        Clear All What-If Values
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* CTA */}
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
