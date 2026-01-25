'use client'

import { useState } from 'react'
import { ArrowLeft, DollarSign, TrendingUp, TrendingDown, AlertCircle, Calculator } from 'lucide-react'
import Link from 'next/link'

export default function PrimeCostCalculator() {
  const [inputs, setInputs] = useState({
    totalSales: '',
    foodCost: '',
    beverageCost: '',
    laborCost: '',
    benefits: ''
  })

  const calculatePrimeCost = () => {
    const sales = parseFloat(inputs.totalSales) || 0
    const food = parseFloat(inputs.foodCost) || 0
    const beverage = parseFloat(inputs.beverageCost) || 0
    const labor = parseFloat(inputs.laborCost) || 0
    const benefits = parseFloat(inputs.benefits) || 0

    const totalCOGS = food + beverage
    const totalLabor = labor + benefits
    const primeCost = totalCOGS + totalLabor
    
    const primeCostPercent = sales > 0 ? (primeCost / sales) * 100 : 0
    const cogsPercent = sales > 0 ? (totalCOGS / sales) * 100 : 0
    const laborPercent = sales > 0 ? (totalLabor / sales) * 100 : 0

    return {
      totalCOGS: totalCOGS.toFixed(2),
      totalLabor: totalLabor.toFixed(2),
      primeCost: primeCost.toFixed(2),
      primeCostPercent: primeCostPercent.toFixed(1),
      cogsPercent: cogsPercent.toFixed(1),
      laborPercent: laborPercent.toFixed(1),
      sales: sales.toFixed(2)
    }
  }

  const results = calculatePrimeCost()

  const getPrimeCostStatus = () => {
    const percent = parseFloat(results.primeCostPercent)
    if (percent === 0) return { text: 'Enter your costs to calculate', color: 'text-gray-400', icon: Calculator }
    if (percent < 60) return { text: 'Excellent - Well controlled costs', color: 'text-green-400', icon: TrendingUp }
    if (percent < 65) return { text: 'Good - Industry standard', color: 'text-blue-400', icon: TrendingUp }
    if (percent < 70) return { text: 'Warning - Costs running high', color: 'text-yellow-400', icon: AlertCircle }
    return { text: 'Critical - Immediate action needed', color: 'text-red-400', icon: TrendingDown }
  }

  const status = getPrimeCostStatus()
  const StatusIcon = status.icon

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-slate-900 to-cyan-900">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/free-tools" 
            className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-100 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Free Tools
          </Link>
          
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 backdrop-blur-xl bg-blue-500/20 border border-blue-300/30 rounded-xl">
                <DollarSign className="w-8 h-8 text-blue-300" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">Prime Cost Calculator</h1>
                <p className="text-blue-200 mt-1">Calculate your most important restaurant profitability metric</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Input Section */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-white mb-6">Enter Your Costs</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-blue-200 mb-2">
                  Total Sales ($)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={inputs.totalSales}
                  onChange={(e) => setInputs({ ...inputs, totalSales: e.target.value })}
                  className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                  placeholder="50000"
                />
              </div>

              <div className="pt-4 border-t border-white/10">
                <h3 className="text-sm font-semibold text-blue-300 mb-3">Cost of Goods Sold (COGS)</h3>
                
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-blue-200 mb-2">
                      Food Cost ($)
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      value={inputs.foodCost}
                      onChange={(e) => setInputs({ ...inputs, foodCost: e.target.value })}
                      className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                      placeholder="15000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-blue-200 mb-2">
                      Beverage Cost ($)
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      value={inputs.beverageCost}
                      onChange={(e) => setInputs({ ...inputs, beverageCost: e.target.value })}
                      className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                      placeholder="3000"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <h3 className="text-sm font-semibold text-blue-300 mb-3">Labor Costs</h3>
                
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-blue-200 mb-2">
                      Total Labor Cost ($)
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      value={inputs.laborCost}
                      onChange={(e) => setInputs({ ...inputs, laborCost: e.target.value })}
                      className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                      placeholder="12000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-blue-200 mb-2">
                      Benefits & Taxes ($)
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      value={inputs.benefits}
                      onChange={(e) => setInputs({ ...inputs, benefits: e.target.value })}
                      className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                      placeholder="2000"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {/* Prime Cost Result */}
            <div className="backdrop-blur-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-300/30 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-white">Prime Cost</h3>
                <StatusIcon className="w-5 h-5 text-blue-300" />
              </div>
              <div className="text-5xl font-bold text-white mb-1">
                {results.primeCostPercent}%
              </div>
              <div className="text-2xl text-blue-200 mb-3">
                ${results.primeCost}
              </div>
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${status.color} bg-white/10`}>
                <StatusIcon className="w-4 h-4" />
                {status.text}
              </div>
            </div>

            {/* Component Breakdown */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Cost Breakdown</h3>
              
              <div className="space-y-4">
                <div className="backdrop-blur-xl bg-blue-500/10 border border-blue-300/20 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-blue-200">COGS (Food + Beverage)</span>
                    <span className="text-xl font-bold text-white">{results.cogsPercent}%</span>
                  </div>
                  <div className="text-right text-blue-300 text-sm">
                    ${results.totalCOGS}
                  </div>
                </div>

                <div className="backdrop-blur-xl bg-cyan-500/10 border border-cyan-300/20 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-cyan-200">Labor (Wages + Benefits)</span>
                    <span className="text-xl font-bold text-white">{results.laborPercent}%</span>
                  </div>
                  <div className="text-right text-cyan-300 text-sm">
                    ${results.totalLabor}
                  </div>
                </div>
              </div>
            </div>

            {/* Industry Benchmarks */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Industry Benchmarks</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-blue-200">Excellent Prime Cost:</span>
                  <span className="text-green-400 font-bold">&lt; 60%</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-blue-200">Good Prime Cost:</span>
                  <span className="text-blue-400 font-bold">60-65%</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-blue-200">Warning Zone:</span>
                  <span className="text-yellow-400 font-bold">65-70%</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-blue-200">Critical:</span>
                  <span className="text-red-400 font-bold">&gt; 70%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Educational Content */}
        <div className="mt-8 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Why Prime Cost Matters</h3>
          <div className="grid md:grid-cols-2 gap-6 text-blue-200">
            <div>
              <h4 className="font-semibold text-blue-300 mb-2">What is Prime Cost?</h4>
              <p className="text-sm">
                Prime Cost is the sum of your Cost of Goods Sold (COGS) and total labor costs. It's the most important metric for restaurant profitability because these are your two largest controllable expenses.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-300 mb-2">How to Improve It</h4>
              <ul className="text-sm space-y-1 list-disc list-inside">
                <li>Negotiate better supplier prices</li>
                <li>Reduce food waste through better inventory management</li>
                <li>Optimize labor scheduling based on demand</li>
                <li>Increase menu prices strategically</li>
                <li>Engineer your menu to promote high-margin items</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-8 backdrop-blur-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-300/30 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Track Prime Cost Automatically</h3>
          <p className="text-blue-200 mb-6 max-w-2xl mx-auto">
            OwnerClone automatically calculates your prime cost daily by integrating with your POS and supplier invoices, alerting you immediately when costs spike.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-blue-500/25"
          >
            See OwnerClone Demo
            <TrendingUp className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
