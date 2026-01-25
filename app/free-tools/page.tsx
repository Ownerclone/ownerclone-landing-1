'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ThirdPartyFeesCalculator() {
  const [platform, setPlatform] = useState<'doordash' | 'ubereats' | 'grubhub'>('doordash')
  const [avgOrderValue, setAvgOrderValue] = useState('')
  const [monthlyOrders, setMonthlyOrders] = useState('')
  const [currentMargin, setCurrentMargin] = useState('15')

  // Platform commission rates (these are typical - can vary by market/contract)
  const platformRates = {
    doordash: { commission: 30, marketing: 3, total: 33 },
    ubereats: { commission: 30, marketing: 5, total: 35 },
    grubhub: { commission: 25, marketing: 5, total: 30 }
  }

  const rate = platformRates[platform]
  const orderValue = parseFloat(avgOrderValue) || 0
  const orders = parseFloat(monthlyOrders) || 0
  const margin = parseFloat(currentMargin) || 0

  // Calculate actual costs
  const monthlyRevenue = orderValue * orders
  const yearlyRevenue = monthlyRevenue * 12
  
  const commissionCost = monthlyRevenue * (rate.commission / 100)
  const marketingCost = monthlyRevenue * (rate.marketing / 100)
  const totalMonthlyCost = monthlyRevenue * (rate.total / 100)
  const totalYearlyCost = totalMonthlyCost * 12

  // Profitability analysis
  const grossProfit = monthlyRevenue * (margin / 100)
  const netProfitAfterFees = grossProfit - totalMonthlyCost
  const netMargin = monthlyRevenue > 0 ? (netProfitAfterFees / monthlyRevenue) * 100 : 0
  
  const isLosing = netProfitAfterFees < 0

  // Direct ordering comparison
  const directOrderingCost = monthlyRevenue * 0.03 // 3% for credit card processing + website
  const monthlySavings = totalMonthlyCost - directOrderingCost
  const yearlySavings = monthlySavings * 12

  // ROI for building direct ordering
  const directOrderingSetup = 500 // One-time website cost
  const monthsToROI = directOrderingSetup / monthlySavings

  const getMarginStatus = () => {
    if (netMargin < 0) return { 
      color: 'text-[#ef4444]', 
      bg: 'backdrop-blur-xl bg-[#ef4444]/10', 
      border: 'border-[#ef4444]',
      message: 'You are LOSING MONEY on third-party orders!' 
    }
    if (netMargin < 5) return { 
      color: 'text-[#fbbf24]', 
      bg: 'backdrop-blur-xl bg-[#fbbf24]/10', 
      border: 'border-[#fbbf24]',
      message: 'Extremely thin margins - barely breaking even' 
    }
    if (netMargin < 10) return { 
      color: 'text-[#38bdf8]', 
      bg: 'backdrop-blur-xl bg-[#38bdf8]/10', 
      border: 'border-[#38bdf8]',
      message: 'Acceptable but could be much better with direct ordering' 
    }
    return { 
      color: 'text-[#10b981]', 
      bg: 'backdrop-blur-xl bg-[#10b981]/10', 
      border: 'border-[#10b981]',
      message: 'Good margins - you negotiated well or have high-margin items' 
    }
  }

  const status = getMarginStatus()

  return (
    <div className="min-h-screen text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Third Party <span className="text-[#ef4444]">True Cost</span> Calculator
          </h1>
          <p className="text-xl text-gray-300">
            See the REAL cost of DoorDash, Uber Eats, and GrubHub
          </p>
        </div>
      </section>

      <section className="relative py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Input Section */}
            <div>
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-[0_0_50px_rgba(239,68,68,0.1)]">
                <h2 className="text-2xl font-bold mb-6">Your Numbers</h2>

                {/* Platform Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-300 mb-3">Platform</label>
                  <div className="grid grid-cols-3 gap-3">
                    <button
                      onClick={() => setPlatform('doordash')}
                      className={`py-3 px-4 rounded-lg font-semibold transition-all ${
                        platform === 'doordash'
                          ? 'bg-[#ef4444] text-white'
                          : 'backdrop-blur-xl bg-black/40 border border-white/10 text-gray-300 hover:border-[#ef4444]/50'
                      }`}
                    >
                      DoorDash
                    </button>
                    <button
                      onClick={() => setPlatform('ubereats')}
                      className={`py-3 px-4 rounded-lg font-semibold transition-all ${
                        platform === 'ubereats'
                          ? 'bg-[#ef4444] text-white'
                          : 'backdrop-blur-xl bg-black/40 border border-white/10 text-gray-300 hover:border-[#ef4444]/50'
                      }`}
                    >
                      Uber Eats
                    </button>
                    <button
                      onClick={() => setPlatform('grubhub')}
                      className={`py-3 px-4 rounded-lg font-semibold transition-all ${
                        platform === 'grubhub'
                          ? 'bg-[#ef4444] text-white'
                          : 'backdrop-blur-xl bg-black/40 border border-white/10 text-gray-300 hover:border-[#ef4444]/50'
                      }`}
                    >
                      GrubHub
                    </button>
                  </div>
                </div>

                {/* Average Order Value */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Average Order Value
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-3.5 text-gray-500">$</span>
                    <input
                      type="number"
                      value={avgOrderValue}
                      onChange={(e) => setAvgOrderValue(e.target.value)}
                      placeholder="35.00"
                      className="w-full pl-8 pr-4 py-3 backdrop-blur-xl bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#ef4444] focus:outline-none text-white transition-colors"
                      step="0.01"
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Before fees and delivery charges</p>
                </div>

                {/* Monthly Orders */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Orders Per Month
                  </label>
                  <input
                    type="number"
                    value={monthlyOrders}
                    onChange={(e) => setMonthlyOrders(e.target.value)}
                    placeholder="300"
                    className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#ef4444] focus:outline-none text-white transition-colors"
                  />
                  <p className="text-sm text-gray-500 mt-1">Check your platform dashboard</p>
                </div>

                {/* Current Margin */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Your Profit Margin (%)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={currentMargin}
                      onChange={(e) => setCurrentMargin(e.target.value)}
                      placeholder="15"
                      className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#ef4444] focus:outline-none text-white transition-colors"
                      min="0"
                      max="100"
                      step="0.5"
                    />
                    <span className="absolute right-4 top-3.5 text-gray-500">%</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Before platform fees (typically 10-20%)</p>
                </div>

                {/* Platform Fee Breakdown */}
                <div className="backdrop-blur-xl bg-black/20 border border-white/10 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-gray-300 mb-3">
                    {platform === 'doordash' ? 'DoorDash' : platform === 'ubereats' ? 'Uber Eats' : 'GrubHub'} Fee Breakdown
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Commission:</span>
                      <span className="font-semibold text-white">{rate.commission}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Marketing Fee:</span>
                      <span className="font-semibold text-white">{rate.marketing}%</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-white/10">
                      <span className="text-gray-300 font-semibold">Total Fee:</span>
                      <span className="font-bold text-[#ef4444]">{rate.total}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div>
              {monthlyRevenue > 0 && (
                <div className="space-y-6">
                  {/* Revenue Overview */}
                  <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
                    <h2 className="text-2xl font-bold mb-4">Revenue Overview</h2>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Monthly Revenue</div>
                        <div className="text-3xl font-bold text-white">
                          ${monthlyRevenue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Annual Revenue</div>
                        <div className="text-2xl font-bold text-gray-300">
                          ${yearlyRevenue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Platform Costs */}
                  <div className="backdrop-blur-xl bg-[#ef4444]/10 border-2 border-[#ef4444] rounded-2xl p-6">
                    <h2 className="text-2xl font-bold mb-4 text-white">What You're Paying</h2>
                    <div className="space-y-4">
                      <div className="backdrop-blur-xl bg-black/20 border border-white/10 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Commission ({rate.commission}%)</div>
                        <div className="text-2xl font-bold text-white">
                          ${commissionCost.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}/mo
                        </div>
                      </div>
                      <div className="backdrop-blur-xl bg-black/20 border border-white/10 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Marketing Fee ({rate.marketing}%)</div>
                        <div className="text-2xl font-bold text-white">
                          ${marketingCost.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}/mo
                        </div>
                      </div>
                      <div className="pt-4 border-t-4 border-[#ef4444]">
                        <div className="text-sm text-gray-400 mb-1">TOTAL FEES</div>
                        <div className="text-4xl font-bold text-[#ef4444]">
                          ${totalMonthlyCost.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}/mo
                        </div>
                        <div className="text-xl font-bold text-gray-400 mt-2">
                          ${totalYearlyCost.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}/year
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Profitability Analysis */}
                  <div className={`${status.bg} border-2 ${status.border} rounded-2xl p-6`}>
                    <h2 className="text-2xl font-bold mb-4 text-white">Your Real Profit</h2>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Gross Profit (before fees)</div>
                        <div className="text-2xl font-bold text-white">
                          ${grossProfit.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </div>
                        <div className="text-sm text-gray-400">{margin}% margin</div>
                      </div>
                      <div className="pt-4 border-t-2 border-white/10">
                        <div className="text-sm text-gray-400 mb-1">Net Profit (after fees)</div>
                        <div className={`text-4xl font-bold ${status.color}`}>
                          ${netProfitAfterFees.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </div>
                        <div className={`text-xl font-bold ${status.color} mt-2`}>
                          {netMargin.toFixed(1)}% net margin
                        </div>
                      </div>
                      <div className={`mt-4 p-4 rounded-lg ${status.bg} border-2 ${status.border}`}>
                        <div className={`font-bold ${status.color} mb-2`}>
                          {isLosing ? '⚠️ WARNING!' : netMargin < 5 ? '⚠️ Caution' : netMargin < 10 ? '📊 Moderate' : '✓ Good'}
                        </div>
                        <div className="text-gray-300">{status.message}</div>
                      </div>
                    </div>
                  </div>

                  {/* Direct Ordering Comparison */}
                  <div className="backdrop-blur-xl bg-[#10b981]/10 border-2 border-[#10b981] rounded-2xl p-6">
                    <h2 className="text-2xl font-bold mb-4 text-white">Direct Ordering Alternative</h2>
                    <div className="space-y-4">
                      <div className="backdrop-blur-xl bg-black/20 border border-white/10 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Direct Ordering Cost (3% processing)</div>
                        <div className="text-2xl font-bold text-white">
                          ${directOrderingCost.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}/mo
                        </div>
                      </div>
                      <div className="backdrop-blur-xl bg-[#10b981]/20 border-2 border-[#10b981] rounded-lg p-4">
                        <div className="text-sm text-gray-300 mb-1">YOU WOULD SAVE</div>
                        <div className="text-4xl font-bold text-[#10b981]">
                          ${monthlySavings.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}/mo
                        </div>
                        <div className="text-xl font-bold text-[#10b981] mt-2">
                          ${yearlySavings.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}/year
                        </div>
                      </div>
                      <div className="backdrop-blur-xl bg-black/20 border border-white/10 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-2">ROI Timeline</div>
                        <p className="text-gray-300 text-sm">
                          <strong>Setup cost:</strong> ~${directOrderingSetup.toLocaleString()} (one-time)<br />
                          <strong>Pays for itself in:</strong> {monthsToROI.toFixed(1)} months<br />
                          <strong>Year 1 net savings:</strong> ${(yearlySavings - directOrderingSetup).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Educational Content */}
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#ef4444] mb-3">The Hidden Math</h3>
              <p className="text-gray-300">
                If you have 15% margins before fees, and pay 30% in fees, you're actually LOSING 15% on every order. You need 50%+ margins to stay profitable on third-party platforms.
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#ef4444] mb-3">Volume Trap</h3>
              <p className="text-gray-300">
                "But we get so many orders!" More volume at a loss just means losing money faster. If you're losing $5 per order, 1,000 orders = -$5,000/month.
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#ef4444] mb-3">The Solution</h3>
              <p className="text-gray-300">
                Direct ordering through your own website costs 3-5% (just credit card fees) vs 30-35% for third-party. The ROI is immediate and massive.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 backdrop-blur-xl bg-gradient-to-br from-[#ef4444]/20 to-[#dc2626]/20 border-2 border-[#ef4444] rounded-3xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Keep More of <span className="text-[#ef4444]">Your Money</span>?</h2>
            <p className="text-lg text-gray-300 mb-6">
              OwnerClone automatically tracks third-party fees and helps you build a direct ordering strategy that actually works.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing" className="bg-[#ef4444] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#dc2626] transition-colors">
                Join Early Access
              </Link>
              <Link href="/free-tools" className="border-2 border-[#ef4444] text-[#ef4444] px-8 py-3 rounded-lg font-bold hover:bg-[#ef4444]/10 transition-colors">
                Try Other Calculators
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
