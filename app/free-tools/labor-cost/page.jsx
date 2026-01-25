'use client'

import { useState } from 'react'
import { ArrowLeft, Users, DollarSign, TrendingUp, TrendingDown, AlertCircle } from 'lucide-react'
import Link from 'next/link'

export default function LaborCostCalculator() {
  const [inputs, setInputs] = useState({
    totalSales: '',
    totalLabor: '',
    hourlyWage: '',
    hoursWorked: '',
    employeeCount: ''
  })

  const totalSales = parseFloat(inputs.totalSales) || 0
  const totalLabor = parseFloat(inputs.totalLabor) || 0
  const laborPercentage = totalSales > 0 
    ? (totalLabor / totalSales) * 100
    : 0

  const getStatus = (percentage) => {
    if (percentage === 0) return { color: 'text-gray-500', bg: 'backdrop-blur-xl bg-white/5', border: 'border-white/10', message: 'Enter your numbers above' }
    if (percentage < 25) return { color: 'text-[#10b981]', bg: 'backdrop-blur-xl bg-[#10b981]/10', border: 'border-[#10b981]', message: 'Excellent! Very efficient labor management.' }
    if (percentage < 30) return { color: 'text-[#10b981]', bg: 'backdrop-blur-xl bg-[#10b981]/10', border: 'border-[#10b981]', message: 'Great! You\'re in the optimal range.' }
    if (percentage < 35) return { color: 'text-[#eab308]', bg: 'backdrop-blur-xl bg-[#eab308]/10', border: 'border-[#eab308]', message: 'Good, but there\'s room for improvement.' }
    if (percentage < 40) return { color: 'text-[#f97316]', bg: 'backdrop-blur-xl bg-[#f97316]/10', border: 'border-[#f97316]', message: 'Warning: Labor costs are running high.' }
    return { color: 'text-[#ef4444]', bg: 'backdrop-blur-xl bg-[#ef4444]/10', border: 'border-[#ef4444]', message: 'Critical: Immediate action needed!' }
  }

  const status = getStatus(laborPercentage)

  // Quick calculator
  const quickCalcLabor = (parseFloat(inputs.hourlyWage) || 0) * (parseFloat(inputs.hoursWorked) || 0) * (parseFloat(inputs.employeeCount) || 1)

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-slate-900 to-purple-900">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/free-tools" 
            className="inline-flex items-center gap-2 text-indigo-300 hover:text-indigo-100 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Free Tools
          </Link>
          
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 backdrop-blur-xl bg-indigo-500/20 border border-indigo-300/30 rounded-xl">
                <Users className="w-8 h-8 text-indigo-300" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">Labor Cost Calculator</h1>
                <p className="text-indigo-200 mt-1">Calculate your labor cost percentage and optimize staffing</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Input Section */}
          <div className="space-y-6">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-indigo-400" />
                Labor Cost Percentage
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-indigo-200 mb-2">
                    Total Sales ($)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={inputs.totalSales}
                    onChange={(e) => setInputs({ ...inputs, totalSales: e.target.value })}
                    className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all"
                    placeholder="50000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-indigo-200 mb-2">
                    Total Labor Cost ($)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={inputs.totalLabor}
                    onChange={(e) => setInputs({ ...inputs, totalLabor: e.target.value })}
                    className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all"
                    placeholder="15000"
                  />
                  <p className="text-xs text-indigo-300 mt-1">Include wages, taxes, benefits, and workers comp</p>
                </div>
              </div>
            </div>

            {/* Quick Calculator */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-400" />
                Quick Labor Calculator
              </h3>

              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-indigo-200 mb-1">
                      Hourly Wage ($)
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      value={inputs.hourlyWage}
                      onChange={(e) => setInputs({ ...inputs, hourlyWage: e.target.value })}
                      className="w-full px-3 py-2 backdrop-blur-xl bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-sm"
                      placeholder="15.00"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-indigo-200 mb-1">
                      Hours Worked
                    </label>
                    <input
                      type="number"
                      step="0.5"
                      value={inputs.hoursWorked}
                      onChange={(e) => setInputs({ ...inputs, hoursWorked: e.target.value })}
                      className="w-full px-3 py-2 backdrop-blur-xl bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-sm"
                      placeholder="160"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-indigo-200 mb-1">
                    Number of Employees
                  </label>
                  <input
                    type="number"
                    value={inputs.employeeCount}
                    onChange={(e) => setInputs({ ...inputs, employeeCount: e.target.value })}
                    className="w-full px-3 py-2 backdrop-blur-xl bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-sm"
                    placeholder="10"
                  />
                </div>

                {quickCalcLabor > 0 && (
                  <div className="backdrop-blur-xl bg-purple-500/10 border border-purple-300/20 rounded-lg p-3 mt-3">
                    <div className="text-xs text-purple-200 mb-1">Estimated Labor Cost:</div>
                    <div className="text-2xl font-bold text-white">${quickCalcLabor.toFixed(2)}</div>
                    <button
                      onClick={() => setInputs({ ...inputs, totalLabor: quickCalcLabor.toFixed(2) })}
                      className="mt-2 text-xs text-purple-300 hover:text-purple-100 underline transition-colors"
                    >
                      Use this amount above
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {/* Labor Percentage Result */}
            <div className={`${status.bg} border ${status.border} rounded-2xl p-6`}>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-white">Labor Cost %</h3>
                {laborPercentage < 30 ? (
                  <TrendingDown className="w-5 h-5 text-green-400" />
                ) : laborPercentage > 35 ? (
                  <TrendingUp className="w-5 h-5 text-red-400" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-yellow-400" />
                )}
              </div>
              
              <div className={`text-6xl font-bold ${status.color} mb-3`}>
                {laborPercentage.toFixed(1)}%
              </div>
              
              <div className="backdrop-blur-xl bg-black/20 border border-white/10 rounded-lg p-3 mb-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-indigo-200 text-sm">Total Sales:</span>
                  <span className="text-white font-semibold">${totalSales.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-indigo-200 text-sm">Total Labor:</span>
                  <span className="text-white font-semibold">${totalLabor.toLocaleString()}</span>
                </div>
              </div>

              <div className={`${status.color} text-sm font-medium`}>
                {status.message}
              </div>
            </div>

            {/* Industry Benchmarks */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Industry Benchmarks</h3>
              
              <div className="space-y-3">
                <div className="backdrop-blur-xl bg-green-500/10 border border-green-300/20 rounded-lg p-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-green-400 font-semibold text-sm">Excellent</div>
                      <div className="text-green-200 text-xs">Quick Service / Fast Casual</div>
                    </div>
                    <div className="text-green-400 font-bold text-xl">25-30%</div>
                  </div>
                </div>

                <div className="backdrop-blur-xl bg-yellow-500/10 border border-yellow-300/20 rounded-lg p-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-yellow-400 font-semibold text-sm">Good</div>
                      <div className="text-yellow-200 text-xs">Casual Dining</div>
                    </div>
                    <div className="text-yellow-400 font-bold text-xl">30-35%</div>
                  </div>
                </div>

                <div className="backdrop-blur-xl bg-orange-500/10 border border-orange-300/20 rounded-lg p-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-orange-400 font-semibold text-sm">Acceptable</div>
                      <div className="text-orange-200 text-xs">Fine Dining / Full Service</div>
                    </div>
                    <div className="text-orange-400 font-bold text-xl">35-40%</div>
                  </div>
                </div>
              </div>

              <div className="mt-4 backdrop-blur-xl bg-indigo-500/10 border border-indigo-300/20 rounded-lg p-3">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-indigo-200">
                    Labor costs above 40% are typically unsustainable and require immediate attention through scheduling optimization or menu price adjustments.
                  </p>
                </div>
              </div>
            </div>

            {/* Tips to Reduce Labor Cost */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Ways to Optimize Labor</h3>
              
              <ul className="space-y-2 text-sm text-indigo-200">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400">•</span>
                  <span>Schedule based on historical sales data and demand forecasting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400">•</span>
                  <span>Cross-train employees to increase flexibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400">•</span>
                  <span>Use technology to automate repetitive tasks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400">•</span>
                  <span>Reduce employee turnover through better management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400">•</span>
                  <span>Monitor overtime closely and schedule appropriately</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-8 backdrop-blur-xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-300/30 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Optimize Labor Automatically</h3>
          <p className="text-indigo-200 mb-6 max-w-2xl mx-auto">
            OwnerClone uses AI to analyze your sales patterns and automatically suggest optimal staffing schedules, helping you maintain the perfect labor cost percentage.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-indigo-500/25"
          >
            See OwnerClone Demo
            <TrendingUp className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
