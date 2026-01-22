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
    { label: 'Build-Out/Renovation', amount: costs.buildOut, color: 'bg-blue-500' },
    { label: 'Kitchen Equipment', amount: costs.kitchenEquipment, color: 'bg-purple-500' },
    { label: 'Furniture & Fixtures', amount: costs.furnitureFixtures, color: 'bg-green-500' },
    { label: 'Working Capital (3 months)', amount: costs.workingCapital, color: 'bg-yellow-500' },
    { label: 'POS & Technology', amount: costs.posSystem, color: 'bg-pink-500' },
    { label: 'Initial Inventory', amount: costs.initialInventory, color: 'bg-indigo-500' },
    { label: 'Licenses & Permits', amount: costs.licenses, color: 'bg-red-500' },
    { label: 'Marketing & Pre-opening', amount: costs.marketing, color: 'bg-orange-500' },
    { label: 'Insurance & Deposits', amount: costs.insurance, color: 'bg-teal-500' },
    { label: 'Professional Fees', amount: costs.professionalFees, color: 'bg-cyan-500' },
  ]

  if (costs.barProgram > 0) {
    costBreakdown.push({ label: 'Bar Program', amount: costs.barProgram, color: 'bg-amber-500' })
  }

  // Sort by amount descending
  costBreakdown.sort((a, b) => b.amount - a.amount)

  const maxAmount = Math.max(...costBreakdown.map((item) => item.amount))

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="bg-gray-900/95 backdrop-blur-lg shadow-lg py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <svg viewBox="0 0 100 60" className="w-10 h-10">
                <circle cx="20" cy="30" r="18" fill="none" stroke="#1E9FF2" strokeWidth="4"/>
                <path d="M 60 12 A 18 18 0 1 1 60 48" fill="none" stroke="#1E9FF2" strokeWidth="4" strokeLinecap="round"/>
              </svg>
              <span className="text-xl font-bold">OwnerClone</span>
            </Link>
            <Link href="/free-tools" className="text-blue-400 hover:text-blue-300 font-semibold">
              ← Back to Free Tools
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-b from-gray-950 to-gray-900 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-5xl mb-4">💰</div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Restaurant Startup Cost Calculator
          </h1>
          <p className="text-xl text-gray-300">
            Get an accurate estimate of total costs to open your restaurant
          </p>
        </div>
      </div>

      {/* Calculator */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Input Section */}
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold mb-6">Your Restaurant Details</h2>
            
            {/* Number of Seats */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-3">
                Number of Seats: <span className="text-blue-400 text-2xl ml-2">{inputs.seats}</span>
              </label>
              <input
                type="range"
                min="20"
                max="200"
                step="10"
                value={inputs.seats}
                onChange={(e) => setInputs({ ...inputs, seats: parseInt(e.target.value) })}
                className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>20 seats</span>
                <span>200 seats</span>
              </div>
            </div>

            {/* Location Type */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-3">Location Type</label>
              <select
                value={inputs.locationType}
                onChange={(e) => setInputs({ ...inputs, locationType: e.target.value as any })}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="shopping-center">Shopping Center (Lower cost)</option>
                <option value="standalone">Standalone Building (Average)</option>
                <option value="downtown">Downtown/Urban (Higher cost)</option>
                <option value="food-hall">Food Hall/Ghost Kitchen (Lowest cost)</option>
              </select>
            </div>

            {/* Concept Type */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-3">Restaurant Concept</label>
              <select
                value={inputs.conceptType}
                onChange={(e) => setInputs({ ...inputs, conceptType: e.target.value as any })}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="quick-service">Quick Service (QSR) - Lowest cost</option>
                <option value="fast-casual">Fast Casual - Low-Medium cost</option>
                <option value="casual-dining">Casual Dining - Medium cost</option>
                <option value="fine-dining">Fine Dining - Highest cost</option>
              </select>
            </div>

            {/* Renovation Level */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-3">Build-Out/Renovation Level</label>
              <select
                value={inputs.renovationLevel}
                onChange={(e) => setInputs({ ...inputs, renovationLevel: e.target.value as any })}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="minimal">Minimal (Existing restaurant space)</option>
                <option value="moderate">Moderate (Some renovation needed)</option>
                <option value="extensive">Extensive (Major renovation)</option>
                <option value="ground-up">Ground-Up (New construction)</option>
              </select>
            </div>

            {/* Bar Program */}
            <div className="mb-6">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={inputs.hasBar}
                  onChange={(e) => setInputs({ ...inputs, hasBar: e.target.checked })}
                  className="w-5 h-5 text-blue-500 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
                />
                <span className="text-sm font-semibold">Include Full Bar Program (+{formatCurrency(Math.round(inputs.seats * 800))})</span>
              </label>
              <p className="text-xs text-gray-400 mt-2 ml-8">
                Includes liquor license, bar equipment, initial bar inventory
              </p>
            </div>

            <button
              onClick={() => setShowResults(true)}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-4 rounded-lg hover:shadow-xl transition-all duration-300"
            >
              Calculate Total Costs
            </button>
          </div>

          {/* Results Section */}
          <div className={`bg-gray-800 rounded-2xl p-8 border border-gray-700 transition-all duration-500 ${showResults ? 'opacity-100' : 'opacity-50'}`}>
            <h2 className="text-2xl font-bold mb-6">Your Estimated Costs</h2>

            {/* Total Cost */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 mb-6">
              <div className="text-sm font-semibold text-blue-100 mb-1">Total Startup Cost</div>
              <div className="text-4xl font-black mb-2">{formatCurrency(costs.totalCost)}</div>
              <div className="text-sm text-blue-100">
                {formatCurrency(costs.costPerSeat)} per seat
              </div>
            </div>

            {/* Industry Benchmark */}
            <div className="bg-gray-700 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold">Industry Benchmark</span>
                {costs.costPerSeat >= 2000 && costs.costPerSeat <= 5000 ? (
                  <span className="text-green-400 text-sm">✓ On Target</span>
                ) : costs.costPerSeat < 2000 ? (
                  <span className="text-yellow-400 text-sm">⚠ Low (verify quality)</span>
                ) : (
                  <span className="text-orange-400 text-sm">⚠ High (review budget)</span>
                )}
              </div>
              <p className="text-xs text-gray-400">
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
                    <span className="font-semibold">{formatCurrency(item.amount)}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
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
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="text-3xl mb-3">💡</div>
            <h3 className="text-lg font-bold mb-2">Budget Tip</h3>
            <p className="text-sm text-gray-400">
              Add 20-30% contingency buffer for unexpected costs. Most restaurants go over initial estimates.
            </p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="text-lg font-bold mb-2">Working Capital</h3>
            <p className="text-sm text-gray-400">
              We calculate 3 months of operating expenses. Many experts recommend 6 months for safety.
            </p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="text-lg font-bold mb-2">Next Steps</h3>
            <p className="text-sm text-gray-400">
              Use this estimate for your business plan. Lenders typically want detailed line-item budgets.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Track These Costs Automatically?</h3>
          <p className="text-blue-100 mb-6">
            OwnerClone automatically tracks all your startup expenses, ongoing costs, and profitability metrics in real-time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:shadow-xl transition">
              Join Early Access
            </Link>
            <Link href="/free-tools" className="border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition">
              Try Other Calculators
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
