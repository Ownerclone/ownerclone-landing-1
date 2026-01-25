'use client'

import { useState } from 'react'
import { ArrowLeft, DollarSign, TrendingDown, AlertTriangle, Calculator, Percent } from 'lucide-react'
import Link from 'next/link'

export default function ThirdPartyFeesCalculator() {
  const [inputs, setInputs] = useState({
    monthlyOrders: '',
    averageOrderValue: '',
    
    // Commission Rates
    uberEatsCommission: '30',
    doordashCommission: '30',
    grubhubCommission: '30',
    
    // Distribution (must add to 100)
    uberEatsPercent: '33',
    doordashPercent: '33',
    grubhubPercent: '34',
    
    // Other costs
    marketingFee: '3',
    deliveryFee: '0' // If restaurant pays delivery
  })

  const calculateCosts = () => {
    const orders = parseFloat(inputs.monthlyOrders) || 0
    const avgOrder = parseFloat(inputs.averageOrderValue) || 0
    
    const monthlyRevenue = orders * avgOrder
    
    // Distribution
    const uberPct = parseFloat(inputs.uberEatsPercent) || 0
    const doorPct = parseFloat(inputs.doordashPercent) || 0
    const grubPct = parseFloat(inputs.grubhubPercent) || 0
    
    // Commission rates
    const uberRate = parseFloat(inputs.uberEatsCommission) || 0
    const doorRate = parseFloat(inputs.doordashCommission) || 0
    const grubRate = parseFloat(inputs.grubhubCommission) || 0
    
    // Other fees
    const marketingRate = parseFloat(inputs.marketingFee) || 0
    const deliveryRate = parseFloat(inputs.deliveryFee) || 0
    
    // Calculate orders per platform
    const uberOrders = orders * (uberPct / 100)
    const doorOrders = orders * (doorPct / 100)
    const grubOrders = orders * (grubPct / 100)
    
    // Calculate revenue per platform
    const uberRevenue = uberOrders * avgOrder
    const doorRevenue = doorOrders * avgOrder
    const grubRevenue = grubOrders * avgOrder
    
    // Calculate commission costs
    const uberCommission = uberRevenue * (uberRate / 100)
    const doorCommission = doorRevenue * (doorRate / 100)
    const grubCommission = grubRevenue * (grubRate / 100)
    const totalCommission = uberCommission + doorCommission + grubCommission
    
    // Calculate other fees
    const marketingCost = monthlyRevenue * (marketingRate / 100)
    const deliveryCost = monthlyRevenue * (deliveryRate / 100)
    
    // Total costs
    const totalFees = totalCommission + marketingCost + deliveryCost
    const netRevenue = monthlyRevenue - totalFees
    
    // Percentages
    const effectiveCommissionRate = monthlyRevenue > 0 ? (totalFees / monthlyRevenue) * 100 : 0
    
    // Annual projections
    const annualRevenue = monthlyRevenue * 12
    const annualFees = totalFees * 12
    const annualNet = netRevenue * 12

    return {
      monthlyRevenue: monthlyRevenue.toFixed(2),
      totalFees: totalFees.toFixed(2),
      netRevenue: netRevenue.toFixed(2),
      effectiveRate: effectiveCommissionRate.toFixed(1),
      
      uberRevenue: uberRevenue.toFixed(2),
      doorRevenue: doorRevenue.toFixed(2),
      grubRevenue: grubRevenue.toFixed(2),
      
      uberCommission: uberCommission.toFixed(2),
      doorCommission: doorCommission.toFixed(2),
      grubCommission: grubCommission.toFixed(2),
      totalCommission: totalCommission.toFixed(2),
      
      marketingCost: marketingCost.toFixed(2),
      deliveryCost: deliveryCost.toFixed(2),
      
      annualRevenue: annualRevenue.toFixed(0),
      annualFees: annualFees.toFixed(0),
      annualNet: annualNet.toFixed(0)
    }
  }

  const results = calculateCosts()

  const getImpactStatus = () => {
    const rate = parseFloat(results.effectiveRate)
    if (rate === 0) return { text: 'Enter your data to calculate', color: 'text-gray-400', bg: 'bg-gray-500/10' }
    if (rate < 20) return { text: 'Low impact - Good deal', color: 'text-green-400', bg: 'bg-green-500/20' }
    if (rate < 30) return { text: 'Moderate impact - Industry standard', color: 'text-yellow-400', bg: 'bg-yellow-500/20' }
    if (rate < 35) return { text: 'High impact - Eating into margins', color: 'text-orange-400', bg: 'bg-orange-500/20' }
    return { text: 'Critical - Unsustainable fees', color: 'text-red-400', bg: 'bg-red-500/20' }
  }

  const status = getImpactStatus()

  return (
    <div className="min-h-screen relative">
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url(/bg-glow.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <div className="relative z-10 container mx-auto px-4 py-12 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/free-tools" 
            className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-100 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Free Tools
          </Link>
          
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-4">
              <div className="p-3 backdrop-blur-xl bg-purple-500/20 border border-purple-300/30 rounded-xl">
                <TrendingDown className="w-8 h-8 text-purple-300" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">Third Party Delivery Fees Calculator</h1>
                <p className="text-purple-200 mt-1">Calculate the true cost of DoorDash, Uber Eats & Grubhub</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Input Section */}
          <div className="space-y-6">
            {/* Order Volume */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-purple-400" />
                Order Volume
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-purple-200 mb-2">
                    Monthly Delivery Orders
                  </label>
                  <input
                    type="number"
                    value={inputs.monthlyOrders}
                    onChange={(e) => setInputs({ ...inputs, monthlyOrders: e.target.value })}
                    className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                    placeholder="500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-purple-200 mb-2">
                    Average Order Value ($)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={inputs.averageOrderValue}
                    onChange={(e) => setInputs({ ...inputs, averageOrderValue: e.target.value })}
                    className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                    placeholder="35.00"
                  />
                </div>
              </div>
            </div>

            {/* Platform Distribution */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Percent className="w-5 h-5 text-purple-400" />
                Platform Distribution (must total 100%)
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-medium text-purple-200">Uber Eats %</label>
                    <span className="text-purple-300 text-sm">{inputs.uberEatsPercent}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={inputs.uberEatsPercent}
                    onChange={(e) => setInputs({ ...inputs, uberEatsPercent: e.target.value })}
                    className="w-full"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-medium text-purple-200">DoorDash %</label>
                    <span className="text-purple-300 text-sm">{inputs.doordashPercent}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={inputs.doordashPercent}
                    onChange={(e) => setInputs({ ...inputs, doordashPercent: e.target.value })}
                    className="w-full"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-medium text-purple-200">Grubhub %</label>
                    <span className="text-purple-300 text-sm">{inputs.grubhubPercent}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={inputs.grubhubPercent}
                    onChange={(e) => setInputs({ ...inputs, grubhubPercent: e.target.value })}
                    className="w-full"
                  />
                </div>
                <div className="text-xs text-purple-300 bg-rose-500/10 border border-rose-300/20 rounded-lg p-2">
                  Total: {(parseFloat(inputs.uberEatsPercent) + parseFloat(inputs.doordashPercent) + parseFloat(inputs.grubhubPercent)).toFixed(0)}%
                </div>
              </div>
            </div>

            {/* Commission Rates */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-purple-400" />
                Commission Rates (%)
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-purple-200 mb-2">
                    Uber Eats Commission %
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={inputs.uberEatsCommission}
                    onChange={(e) => setInputs({ ...inputs, uberEatsCommission: e.target.value })}
                    className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-purple-200 mb-2">
                    DoorDash Commission %
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={inputs.doordashCommission}
                    onChange={(e) => setInputs({ ...inputs, doordashCommission: e.target.value })}
                    className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-purple-200 mb-2">
                    Grubhub Commission %
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={inputs.grubhubCommission}
                    onChange={(e) => setInputs({ ...inputs, grubhubCommission: e.target.value })}
                    className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  />
                </div>
              </div>
            </div>

            {/* Additional Fees */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Additional Fees (%)</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-purple-200 mb-2">
                    Marketing/Advertising Fees %
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={inputs.marketingFee}
                    onChange={(e) => setInputs({ ...inputs, marketingFee: e.target.value })}
                    className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-purple-200 mb-2">
                    Delivery Fee % (if you pay)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={inputs.deliveryFee}
                    onChange={(e) => setInputs({ ...inputs, deliveryFee: e.target.value })}
                    className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {/* Impact Summary */}
            <div className="backdrop-blur-xl bg-gradient-to-br from-purple-500/20 to-purple-500/20 border border-rose-300/30 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Fee Impact</h3>
              
              <div className="mb-6">
                <div className="text-sm text-purple-200 mb-1">Effective Commission Rate</div>
                <div className="text-5xl font-bold text-white mb-2">{results.effectiveRate}%</div>
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${status.color} ${status.bg}`}>
                  {status.text}
                </div>
              </div>

              <div className="space-y-3">
                <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-lg p-3">
                  <div className="text-purple-200 text-sm mb-1">Monthly Revenue</div>
                  <div className="text-2xl font-bold text-white">${parseFloat(results.monthlyRevenue).toLocaleString()}</div>
                </div>
                <div className="backdrop-blur-xl bg-red-500/20 border border-red-300/20 rounded-lg p-3">
                  <div className="text-purple-200 text-sm mb-1">Monthly Fees</div>
                  <div className="text-2xl font-bold text-red-400">-${parseFloat(results.totalFees).toLocaleString()}</div>
                </div>
                <div className="backdrop-blur-xl bg-green-500/20 border border-green-300/20 rounded-lg p-3">
                  <div className="text-purple-200 text-sm mb-1">Net Revenue</div>
                  <div className="text-2xl font-bold text-green-400">${parseFloat(results.netRevenue).toLocaleString()}</div>
                </div>
              </div>
            </div>

            {/* Platform Breakdown */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Platform Commission Breakdown</h3>
              
              <div className="space-y-3">
                <div className="backdrop-blur-xl bg-black/20 border border-white/10 rounded-lg p-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-purple-200 text-sm">Uber Eats</span>
                    <span className="text-white font-bold">${parseFloat(results.uberCommission).toLocaleString()}</span>
                  </div>
                  <div className="text-xs text-purple-300">
                    ${parseFloat(results.uberRevenue).toLocaleString()} × {inputs.uberEatsCommission}%
                  </div>
                </div>

                <div className="backdrop-blur-xl bg-black/20 border border-white/10 rounded-lg p-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-purple-200 text-sm">DoorDash</span>
                    <span className="text-white font-bold">${parseFloat(results.doorCommission).toLocaleString()}</span>
                  </div>
                  <div className="text-xs text-purple-300">
                    ${parseFloat(results.doorRevenue).toLocaleString()} × {inputs.doordashCommission}%
                  </div>
                </div>

                <div className="backdrop-blur-xl bg-black/20 border border-white/10 rounded-lg p-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-purple-200 text-sm">Grubhub</span>
                    <span className="text-white font-bold">${parseFloat(results.grubCommission).toLocaleString()}</span>
                  </div>
                  <div className="text-xs text-purple-300">
                    ${parseFloat(results.grubRevenue).toLocaleString()} × {inputs.grubhubPercent}%
                  </div>
                </div>

                {(parseFloat(results.marketingCost) > 0 || parseFloat(results.deliveryCost) > 0) && (
                  <>
                    <div className="border-t border-white/10 pt-3 mt-3">
                      {parseFloat(results.marketingCost) > 0 && (
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-purple-200 text-sm">Marketing Fees</span>
                          <span className="text-white font-bold">${parseFloat(results.marketingCost).toLocaleString()}</span>
                        </div>
                      )}
                      {parseFloat(results.deliveryCost) > 0 && (
                        <div className="flex justify-between items-center">
                          <span className="text-purple-200 text-sm">Delivery Fees</span>
                          <span className="text-white font-bold">${parseFloat(results.deliveryCost).toLocaleString()}</span>
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Annual Projection */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Annual Projection</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-purple-200">Annual Revenue:</span>
                  <span className="text-xl font-bold text-white">${parseFloat(results.annualRevenue).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-purple-200">Annual Fees:</span>
                  <span className="text-xl font-bold text-red-400">-${parseFloat(results.annualFees).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-purple-200 font-semibold">Annual Net:</span>
                  <span className="text-2xl font-bold text-green-400">${parseFloat(results.annualNet).toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Warning */}
            {parseFloat(results.effectiveRate) > 30 && (
              <div className="backdrop-blur-xl bg-red-500/10 border border-red-300/20 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-red-400 mb-1">High Fee Warning</p>
                    <p className="text-sm text-purple-200">
                      Fees above 30% significantly impact profitability. Consider negotiating rates, raising menu prices, or building your own delivery channel.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Strategies to Reduce Fees */}
        <div className="mt-8 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Strategies to Reduce Third Party Fees</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="backdrop-blur-xl bg-rose-500/10 border border-rose-300/20 rounded-xl p-4">
              <h4 className="font-semibold text-purple-300 mb-2">Direct Ordering</h4>
              <p className="text-sm text-purple-200">
                Build your own online ordering system to eliminate commission fees on direct orders.
              </p>
            </div>
            <div className="backdrop-blur-xl bg-pink-500/10 border border-pink-300/20 rounded-xl p-4">
              <h4 className="font-semibold text-pink-300 mb-2">Menu Price Adjustment</h4>
              <p className="text-sm text-pink-200">
                Increase delivery menu prices to offset commission costs while remaining competitive.
              </p>
            </div>
            <div className="backdrop-blur-xl bg-red-500/10 border border-red-300/20 rounded-xl p-4">
              <h4 className="font-semibold text-red-300 mb-2">Negotiate Rates</h4>
              <p className="text-sm text-red-200">
                High-volume restaurants can often negotiate lower commission rates with platforms.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-8 backdrop-blur-xl bg-gradient-to-r from-purple-500/20 to-purple-500/20 border border-rose-300/30 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Track Every Dollar with OwnerClone</h3>
          <p className="text-purple-200 mb-6 max-w-2xl mx-auto">
            OwnerClone automatically tracks third party fees, calculates true profitability per platform, and helps you optimize your delivery channel mix.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-purple-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-purple-500/25"
          >
            See OwnerClone Demo
            <TrendingDown className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
