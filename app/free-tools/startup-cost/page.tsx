'use client'

import { useState } from 'react'
import Link from 'next/link'

interface CostInputs {
  seats: number
  locationType: 'shopping-center' | 'downtown' | 'standalone' | 'food-hall'
  conceptType: 'fast-casual' | 'casual-dining' | 'fine-dining' | 'quick-service'
  hasBar: boolean
  renovationLevel: 'minimal' | 'moderate' | 'extensive' | 'ground-up'
}

export default function StartupCostCalculator() {
  const [inputs, setInputs] = useState<CostInputs>({
    seats: 60,
    locationType: 'shopping-center',
    conceptType: 'casual-dining',
    hasBar: false,
    renovationLevel: 'moderate',
  })

  const [showResults, setShowResults] = useState(false)

  // Cost calculation logic based on industry benchmarks
  const calculateCosts = () => {
    const { seats, locationType, conceptType, hasBar, renovationLevel } = inputs

    // Base cost per seat by concept type
    const baseCostPerSeat = {
      'quick-service': 1500,
      'fast-casual': 2500,
      'casual-dining': 3500,
      'fine-dining': 6000,
    }[conceptType]

    // Location multipliers
    const locationMultiplier = {
      'shopping-center': 0.9,
      'downtown': 1.2,
      'standalone': 1.0,
      'food-hall': 0.7,
    }[locationType]

    // Renovation multipliers
    const renovationMultiplier = {
      'minimal': 0.6,
      'moderate': 1.0,
      'extensive': 1.4,
      'ground-up': 2.0,
    }[renovationLevel]

    // Kitchen equipment (30-35% of total)
    const kitchenEquipment = Math.round(seats * baseCostPerSeat * 0.33 * renovationMultiplier)

    // Build-out/Renovation (35-40% of total)
    const buildOut = Math.round(seats * baseCostPerSeat * 0.37 * renovationMultiplier * locationMultiplier)

    // Furniture & Fixtures (10-15% of total)
    const furnitureFixtures = Math.round(seats * baseCostPerSeat * 0.12)

    // POS & Technology (3-5% of total)
    const posSystem = Math.round(seats * baseCostPerSeat * 0.04)

    // Initial Inventory (2-3% of total)
    const initialInventory = Math.round(seats * baseCostPerSeat * 0.025)

    // Licenses & Permits (1-2% of total)
    const licenses = Math.round(seats * baseCostPerSeat * 0.015) + (hasBar ? 15000 : 0)

    // Marketing & Pre-opening (2-3% of total)
    const marketing = Math.round(seats * baseCostPerSeat * 0.025)

    // Insurance & Deposits (2-3% of total)
    const insurance = Math.round(seats * baseCostPerSeat * 0.025)

    // Professional Fees (2-3% of total)
    const professionalFees = Math.round(seats * baseCostPerSeat * 0.025)

    // Bar program additional costs
    const barProgram = hasBar ? Math.round(seats * 800) : 0

    // Working Capital (3-6 months operating expenses)
    const monthlyOperatingCost = Math.round(seats * 400)
    const workingCapital = monthlyOperatingCost * 3

    const totalCost =
      kitchenEquipment +
      buildOut +
      furnitureFixtures +
      posSystem +
      initialInventory +
      licenses +
      marketing +
      insurance +
      professionalFees +
      barProgram +
      workingCapital

    return {
      kitchenEquipment,
      buildOut,
      furnitureFixtures,
      posSystem,
      initialInventory,
      licenses,
      marketing,
      insurance,
      professionalFees,
      barProgram,
      workingCapital,
      totalCost,
      costPerSeat: Math.round(totalCost / seats),
    }
  }

  const costs = calculateCosts()

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const costBreakdown = [
    { label: 'Build-Out/Renovation', amount: costs.buildOut, color: 'bg-[#38bdf8]' },
    { label: 'Kitchen Equipment', amount: costs.kitchenEquipment, color: 'bg-[#a855f7]' },
    { label: 'Furniture & Fixtures', amount: costs.furnitureFixtures, color: 'bg-[#10b981]' },
    { label: 'Working Capital (3 months)', amount: costs.workingCapital, color: 'bg-[#fbbf24]' },
    { label: 'POS & Technology', amount: costs.posSystem, color: 'bg-[#ec4899]' },
    { label: 'Initial Inventory', amount: costs.initialInventory, color: 'bg-[#6366f1]' },
    { label: 'Licenses & Permits', amount: costs.licenses, color: 'bg-[#ef4444]' },
    { label: 'Marketing & Pre-opening', amount: costs.marketing, color: 'bg-[#fb923c]' },
    { label: 'Insurance & Deposits', amount: costs.insurance, color: 'bg-[#14b8a6]' },
    { label: 'Professional Fees', amount: costs.professionalFees, color: 'bg-[#06b6d4]' },
  ]

  if (costs.barProgram > 0) {
    costBreakdown.push({ label: 'Bar Program', amount: costs.barProgram, color: 'bg-[#f59e0b]' })
  }

  // Sort by amount descending
  costBreakdown.sort((a, b) => b.amount - a.amount)

  const maxAmount = Math.max(...costBreakdown.map((item) => item.amount))

  return (
    <div className="min-h-screen text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Startup Cost <span className="text-[#fb923c]">Calculator</span>
          </h1>
          <p className="text-xl text-gray-300">
            Get an accurate estimate of total costs to open your restaurant
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="relative py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Input Section */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-[0_0_50px_rgba(251,146,60,0.1)]">
              <h2 className="text-2xl font-bold mb-6">Your Restaurant Details</h2>
              
              {/* Number of Seats */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-300 mb-3">
                  Number of Seats: <span className="text-[#fb923c] text-2xl ml-2">{inputs.seats}</span>
                </label>
                <input
                  type="range"
                  min="20"
                  max="200"
                  step="10"
                  value={inputs.seats}
                  onChange={(e) => setInputs({ ...inputs, seats: parseInt(e.target.value) })}
                  className="w-full h-3 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#fb923c]"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>20 seats</span>
                  <span>200 seats</span>
                </div>
              </div>

              {/* Location Type */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-300 mb-3">Location Type</label>
                <select
                  value={inputs.locationType}
                  onChange={(e) => setInputs({ ...inputs, locationType: e.target.value as any })}
                  className="w-full backdrop-blur-xl bg-black/40 border-2 border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#fb923c] transition-colors"
                >
                  <option value="shopping-center">Shopping Center (Lower cost)</option>
                  <option value="standalone">Standalone Building (Average)</option>
                  <option value="downtown">Downtown/Urban (Higher cost)</option>
                  <option value="food-hall">Food Hall/Ghost Kitchen (Lowest cost)</option>
                </select>
              </div>

              {/* Concept Type */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-300 mb-3">Restaurant Concept</label>
                <select
                  value={inputs.conceptType}
                  onChange={(e) => setInputs({ ...inputs, conceptType: e.target.value as any })}
                  className="w-full backdrop-blur-xl bg-black/40 border-2 border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#fb923c] transition-colors"
                >
                  <option value="quick-service">Quick Service (QSR) - Lowest cost</option>
                  <option value="fast-casual">Fast Casual - Low-Medium cost</option>
                  <option value="casual-dining">Casual Dining - Medium cost</option>
                  <option value="fine-dining">Fine Dining - Highest cost</option>
                </select>
              </div>

              {/* Renovation Level */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-300 mb-3">Build-Out/Renovation Level</label>
                <select
                  value={inputs.renovationLevel}
                  onChange={(e) => setInputs({ ...inputs, renovationLevel: e.target.value as any })}
                  className="w-full backdrop-blur-xl bg-black/40 border-2 border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#fb923c] transition-colors"
                >
                  <option value="minimal">Minimal (Existing restaurant space)</option>
                  <option value="moderate">Moderate (Some renovation needed)</option>
                  <option value="extensive">Extensive (Major renovation)</option>
                  <option value="ground-up">Ground-Up (New construction)</option>
                </select>
              </div>

              {/* Bar Program */}
              <div className="mb-6">
                <label className="flex items-center space-x-3 cursor-pointer p-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-lg hover:border-[#fb923c]/50 transition-colors">
                  <input
                    type="checkbox"
                    checked={inputs.hasBar}
                    onChange={(e) => setInputs({ ...inputs, hasBar: e.target.checked })}
                    className="w-5 h-5 text-[#fb923c] bg-black/40 border-white/10 rounded focus:ring-[#fb923c]"
                  />
                  <div>
                    <span className="text-sm font-semibold">Include Full Bar Program (+{formatCurrency(Math.round(inputs.seats * 800))})</span>
                    <p className="text-xs text-gray-500 mt-1">
                      Includes liquor license, bar equipment, initial bar inventory
                    </p>
                  </div>
                </label>
              </div>

              <button
                onClick={() => setShowResults(true)}
                className="w-full bg-gradient-to-r from-[#fb923c] to-[#f97316] text-white font-bold py-4 rounded-lg hover:shadow-[0_0_30px_rgba(251,146,60,0.5)] transition-all duration-300"
              >
                Calculate Total Costs
              </button>
            </div>

            {/* Results Section */}
            <div className={`backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-[0_0_50px_rgba(251,146,60,0.1)] transition-all duration-500 ${showResults ? 'opacity-100' : 'opacity-50'}`}>
              <h2 className="text-2xl font-bold mb-6">Your Estimated Costs</h2>

              {/* Total Cost */}
              <div className="backdrop-blur-xl bg-gradient-to-r from-[#fb923c] to-[#f97316] rounded-xl p-6 mb-6">
                <div className="text-sm font-semibold text-orange-100 mb-1">Total Startup Cost</div>
                <div className="text-4xl font-black mb-2 text-white">{formatCurrency(costs.totalCost)}</div>
                <div className="text-sm text-orange-100">
                  {formatCurrency(costs.costPerSeat)} per seat
                </div>
              </div>

              {/* Industry Benchmark */}
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-300">Industry Benchmark</span>
                  {costs.costPerSeat >= 2000 && costs.costPerSeat <= 5000 ? (
                    <span className="text-[#10b981] text-sm">✓ On Target</span>
                  ) : costs.costPerSeat < 2000 ? (
                    <span className="text-[#fbbf24] text-sm">⚠ Low (verify quality)</span>
                  ) : (
                    <span className="text-[#fb923c] text-sm">⚠ High (review budget)</span>
                  )}
                </div>
                <p className="text-xs text-gray-500">
                  Typical range: $2,000 - $5,000 per seat depending on concept
                </p>
              </div>

              {/* Cost Breakdown */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold mb-4">Cost Breakdown</h3>
                {costBreakdown.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-300">{item.label}</span>
                      <span className="font-semibold text-white">{formatCurrency(item.amount)}</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div
                        className={`${item.color} h-2 rounded-full transition-all duration-500`}
                        style={{ width: `${(item.amount / maxAmount) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key Insights */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 shadow-[0_0_30px_rgba(251,146,60,0.1)]">
              <div className="text-3xl mb-3">💡</div>
              <h3 className="text-lg font-bold text-[#fb923c] mb-2">Budget Tip</h3>
              <p className="text-sm text-gray-300">Add 20-30% contingency buffer for unexpected costs. Most restaurants go over initial estimates.</p>
            </div>

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 shadow-[0_0_30px_rgba(251,146,60,0.1)]">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-lg font-bold text-[#fb923c] mb-2">Working Capital</h3>
              <p className="text-sm text-gray-300">We calculate 3 months of operating expenses. Many experts recommend 6 months for safety.</p>
            </div>

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 shadow-[0_0_30px_rgba(251,146,60,0.1)]">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-lg font-bold text-[#fb923c] mb-2">Next Steps</h3>
              <p className="text-sm text-gray-300">Use this estimate for your business plan. Lenders typically want detailed line-item budgets.</p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 backdrop-blur-xl bg-gradient-to-br from-[#fb923c]/20 to-[#f97316]/20 border-2 border-[#fb923c] rounded-3xl p-8 text-center shadow-[0_0_80px_rgba(251,146,60,0.15)]">
            <h2 className="text-2xl font-bold mb-4">Ready to Track These Costs <span className="text-[#fb923c]">Automatically</span>?</h2>
            <p className="text-lg text-gray-300 mb-6">
              OwnerClone automatically tracks all your startup expenses, ongoing costs, and profitability metrics in real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing" className="bg-[#fb923c] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#f97316] transition-colors">
                Join Early Access
              </Link>
              <Link href="/free-tools" className="border-2 border-[#fb923c] text-[#fb923c] px-8 py-3 rounded-lg font-bold hover:bg-[#fb923c]/10 transition-colors">
                Try Other Calculators
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
