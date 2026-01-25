'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function LaborCostCalculator() {
  const [grossWages, setGrossWages] = useState('')
  const [tips, setTips] = useState('')
  const [payrollTaxRate, setPayrollTaxRate] = useState('12')
  const [benefits, setBenefits] = useState('')
  const [payrollProcessing, setPayrollProcessing] = useState('')
  const [totalSales, setTotalSales] = useState('')

  const wages = parseFloat(grossWages || '0')
  const tipsAmount = parseFloat(tips || '0')
  const taxRate = parseFloat(payrollTaxRate) / 100
  const wagesTax = wages * taxRate
  const tipsTax = tipsAmount * taxRate
  const benefitsCost = parseFloat(benefits || '0')
  const processingFees = parseFloat(payrollProcessing || '0')
  
  // Total labor = wages + tax on wages + tax on tips (NOT the tips themselves) + benefits + processing
  const totalLabor = wages + wagesTax + tipsTax + benefitsCost + processingFees

  const laborCostPercentage = totalSales && totalLabor
    ? (totalLabor / parseFloat(totalSales)) * 100
    : 0

  const getStatus = (percentage: number) => {
    if (percentage === 0) return { color: 'text-gray-500', bg: 'backdrop-blur-xl bg-white/5', border: 'border-white/10', message: 'Enter your numbers above' }
    if (percentage < 25) return { color: 'text-[#10b981]', bg: 'backdrop-blur-xl bg-[#10b981]/10', border: 'border-[#10b981]', message: 'Excellent! Very efficient labor management.' }
    if (percentage < 30) return { color: 'text-[#10b981]', bg: 'backdrop-blur-xl bg-[#10b981]/10', border: 'border-[#10b981]', message: 'Great! You\'re in the optimal range.' }
    if (percentage < 35) return { color: 'text-[#fbbf24]', bg: 'backdrop-blur-xl bg-[#fbbf24]/10', border: 'border-[#fbbf24]', message: 'Acceptable, but look for efficiency improvements.' }
    return { color: 'text-[#ef4444]', bg: 'backdrop-blur-xl bg-[#ef4444]/10', border: 'border-[#ef4444]', message: 'Too high! Your labor costs are hurting profitability.' }
  }

  const status = getStatus(laborCostPercentage)

  return (
    <div className="min-h-screen text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Labor Cost <span className="text-[#06b6d4]">Calculator</span>
          </h1>
          <p className="text-xl text-gray-300">
            Calculate your TRUE labor costs - wages, taxes on tips, benefits, and processing fees.
          </p>
        </div>
      </section>

      <section className="relative py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Calculator Input */}
            <div>
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-[0_0_50px_rgba(6,182,212,0.1)]">
                <h2 className="text-2xl font-bold mb-6">Enter Your Numbers</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Gross Wages ($)
                    </label>
                    <input
                      type="number"
                      value={grossWages}
                      onChange={(e) => setGrossWages(e.target.value)}
                      className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#06b6d4] focus:outline-none text-lg text-white transition-colors"
                      placeholder="8,500"
                    />
                    <p className="text-sm text-gray-500 mt-1">Total wages before taxes</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Employee Tips ($)
                    </label>
                    <input
                      type="number"
                      value={tips}
                      onChange={(e) => setTips(e.target.value)}
                      className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#06b6d4] focus:outline-none text-lg text-white transition-colors"
                      placeholder="2,200"
                    />
                    <p className="text-sm text-gray-500 mt-1">You pay payroll tax on tips too!</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Payroll Tax Rate (%)
                    </label>
                    <input
                      type="number"
                      value={payrollTaxRate}
                      onChange={(e) => setPayrollTaxRate(e.target.value)}
                      className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#06b6d4] focus:outline-none text-lg text-white transition-colors"
                      placeholder="12"
                    />
                    <p className="text-sm text-gray-500 mt-1">Usually 12-15% (FICA + unemployment)</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Benefits ($)
                    </label>
                    <input
                      type="number"
                      value={benefits}
                      onChange={(e) => setBenefits(e.target.value)}
                      className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#06b6d4] focus:outline-none text-lg text-white transition-colors"
                      placeholder="450"
                    />
                    <p className="text-sm text-gray-500 mt-1">Health insurance, 401k contributions, etc.</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Payroll Processing Fees ($)
                    </label>
                    <input
                      type="number"
                      value={payrollProcessing}
                      onChange={(e) => setPayrollProcessing(e.target.value)}
                      className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#06b6d4] focus:outline-none text-lg text-white transition-colors"
                      placeholder="150"
                    />
                    <p className="text-sm text-gray-500 mt-1">Gusto, ADP, Paychex fees</p>
                  </div>

                  <div className="pt-4 border-t-2 border-white/10">
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Total Sales ($)
                    </label>
                    <input
                      type="number"
                      value={totalSales}
                      onChange={(e) => setTotalSales(e.target.value)}
                      className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#06b6d4] focus:outline-none text-lg text-white transition-colors"
                      placeholder="32,000"
                    />
                    <p className="text-sm text-gray-500 mt-1">Total revenue for the same period</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div>
              <div className={`${status.bg} border-2 ${status.border} rounded-2xl p-8 mb-6`}>
                <h2 className="text-2xl font-bold mb-4">Your Results</h2>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm font-semibold text-gray-400 mb-1">Gross Wages</div>
                      <div className="text-2xl font-bold text-white">
                        ${wages.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-400 mb-1">Employee Tips</div>
                      <div className="text-2xl font-bold text-white">
                        ${tipsAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </div>
                    </div>
                  </div>

                  <div className="backdrop-blur-xl bg-black/20 border border-white/10 rounded-lg p-4 space-y-2">
                    <h3 className="text-lg font-bold text-[#06b6d4] mb-3">What You Actually Pay</h3>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Tax on Wages</span>
                      <span className="font-semibold">${wagesTax.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Tax on Tips</span>
                      <span className="font-semibold">${tipsTax.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Benefits</span>
                      <span className="font-semibold">${benefitsCost.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Processing Fees</span>
                      <span className="font-semibold">${processingFees.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                    </div>
                  </div>

                  <div className="pt-6 border-t-4 border-[#06b6d4]">
                    <div className="text-sm font-semibold text-gray-400 mb-1">TOTAL LABOR COST</div>
                    <div className="text-5xl font-bold text-white">
                      ${totalLabor.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>
                    {laborCostPercentage > 0 && (
                      <div className={`text-3xl font-bold ${status.color} mt-2`}>
                        {laborCostPercentage.toFixed(1)}%
                      </div>
                    )}
                  </div>

                  {laborCostPercentage > 0 && (
                    <div className={`mt-4 p-4 rounded-lg ${status.bg} border-2 ${status.border}`}>
                      <div className={`font-bold ${status.color} mb-2`}>
                        {laborCostPercentage < 25 ? '✓ Excellent!' : laborCostPercentage < 30 ? '✓ Great!' : laborCostPercentage < 35 ? '⚠ Caution' : '⚠ Alert!'}
                      </div>
                      <div className="text-gray-300">{status.message}</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Understanding Your Results */}
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-3">Understanding Your Results</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start">
                    <span className="text-[#10b981] font-bold mr-2">Below 25%:</span>
                    <span className="text-gray-300">Exceptional efficiency - very well managed!</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#10b981] font-bold mr-2">25-30%:</span>
                    <span className="text-gray-300">Optimal range - industry standard for most concepts</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#fbbf24] font-bold mr-2">30-35%:</span>
                    <span className="text-gray-300">Acceptable but tight - watch for increases</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#ef4444] font-bold mr-2">Above 35%:</span>
                    <span className="text-gray-300">Too high - you need to optimize scheduling or pricing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Educational Content */}
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#06b6d4] mb-3">The Hidden Costs</h3>
              <p className="text-gray-300">
                Most restaurant owners forget to include payroll taxes on TIPS. If your staff makes $2,000 in tips and you pay 12% payroll tax, that's $240 you're paying out of pocket.
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#06b6d4] mb-3">Don't Forget Processing</h3>
              <p className="text-gray-300">
                Payroll processing fees (Gusto, ADP, Paychex) typically run $100-300/month. Over a year, that's $1,200-3,600 that many owners don't include in labor calculations.
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#06b6d4] mb-3">Industry Benchmarks</h3>
              <p className="text-gray-300">
                Quick service should be 25-30%, casual dining 30-35%, fine dining can run 35-40%. Labor + food cost (prime cost) should NEVER exceed 65%.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 backdrop-blur-xl bg-gradient-to-br from-[#06b6d4]/20 to-[#0891b2]/20 border-2 border-[#06b6d4] rounded-3xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Want Automatic <span className="text-[#06b6d4]">Labor Tracking</span>?</h2>
            <p className="text-lg text-gray-300 mb-6">
              OwnerClone integrates with your payroll system to automatically track labor costs in real-time. No more manual calculations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing" className="bg-[#06b6d4] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#0891b2] transition-colors">
                Join Early Access
              </Link>
              <Link href="/blog" className="border-2 border-[#06b6d4] text-[#06b6d4] px-8 py-3 rounded-lg font-bold hover:bg-[#06b6d4]/10 transition-colors">
                Read Complete Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
