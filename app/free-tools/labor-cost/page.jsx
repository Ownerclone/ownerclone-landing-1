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

  const getStatus = (percentage) => {
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
                      Gross Wages Paid ($)
                    </label>
                    <input
                      type="number"
                      value={grossWages}
                      onChange={(e) => setGrossWages(e.target.value)}
                      className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#06b6d4] focus:outline-none text-lg text-white transition-colors"
                      placeholder="5,000"
                    />
                    <p className="text-sm text-gray-500 mt-1">Total wages you paid employees (not including tips)</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Tips Earned by Staff ($)
                    </label>
                    <input
                      type="number"
                      value={tips}
                      onChange={(e) => setTips(e.target.value)}
                      className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#06b6d4] focus:outline-none text-lg text-white transition-colors"
                      placeholder="2,000"
                    />
                    <p className="text-sm text-gray-500 mt-1">Tips staff received (you pay taxes on this, not the tips themselves)</p>
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
                    <p className="text-sm text-gray-500 mt-1">Employer portion (FICA + state taxes, typically 10-15%)</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Benefits & Other ($)
                    </label>
                    <input
                      type="number"
                      value={benefits}
                      onChange={(e) => setBenefits(e.target.value)}
                      className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#06b6d4] focus:outline-none text-lg text-white transition-colors"
                      placeholder="500"
                    />
                    <p className="text-sm text-gray-500 mt-1">Health insurance, workers comp, etc.</p>
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
                      placeholder="100"
                    />
                    <p className="text-sm text-gray-500 mt-1">ADP, Gusto, Paychex monthly fees</p>
                  </div>

                  <div className="pt-6 border-t border-white/10">
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Total Sales ($)
                    </label>
                    <input
                      type="number"
                      value={totalSales}
                      onChange={(e) => setTotalSales(e.target.value)}
                      className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#06b6d4] focus:outline-none text-lg text-white transition-colors"
                      placeholder="20,000"
                    />
                    <p className="text-sm text-gray-500 mt-1">Total revenue for the same period</p>
                  </div>
                </div>
              </div>

              {/* Cost Breakdown Card */}
              {wages > 0 && (
                <div className="mt-6 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-lg font-bold mb-4 text-[#06b6d4]">Cost Breakdown</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Gross Wages</span>
                      <span className="font-semibold">${wages.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Tax on Wages ({payrollTaxRate}%)</span>
                      <span className="font-semibold">${wagesTax.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                    </div>
                    {tipsAmount > 0 && (
                      <>
                        <div className="flex justify-between text-gray-500">
                          <span className="text-gray-500 italic">Tips Earned (not your cost)</span>
                          <span className="italic">${tipsAmount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Tax on Tips ({payrollTaxRate}%)</span>
                          <span className="font-semibold text-[#ef4444]">${tipsTax.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                        </div>
                      </>
                    )}
                    {benefitsCost > 0 && (
                      <div className="flex justify-between">
                        <span className="text-gray-400">Benefits & Other</span>
                        <span className="font-semibold">${benefitsCost.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                      </div>
                    )}
                    {processingFees > 0 && (
                      <div className="flex justify-between">
                        <span className="text-gray-400">Payroll Processing</span>
                        <span className="font-semibold">${processingFees.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                      </div>
                    )}
                    <div className="flex justify-between pt-3 border-t border-[#06b6d4]">
                      <span className="text-white font-bold">Total Labor Cost</span>
                      <span className="font-bold text-[#06b6d4]">${totalLabor.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                    </div>
                  </div>
                  {tipsAmount > 0 && (
                    <div className="mt-4 p-3 bg-[#fbbf24]/10 border border-[#fbbf24]/30 rounded-lg">
                      <p className="text-xs text-gray-300">
                        <strong className="text-[#fbbf24]">Note:</strong> Tips (${tipsAmount.toLocaleString()}) don't come from your pocket, but you still pay <span className="text-[#ef4444] font-semibold">${tipsTax.toFixed(2)}</span> in taxes on them!
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Results Panel */}
            <div>
              <div className={`${status.bg} border-2 ${status.border} rounded-2xl p-8 mb-6`}>
                <h2 className="text-2xl font-bold mb-6">Your Results</h2>
                
                <div className="space-y-6">
                  {/* Breakdown Summary */}
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Gross Wages</span>
                      <span className="font-semibold">${wages.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                    </div>
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
                      <p className="text-gray-300 text-sm">{status.message}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Industry Benchmarks */}
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-4">Industry Benchmarks</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Full Service Restaurant</span>
                      <span className="text-[#06b6d4] font-semibold">30-35%</span>
                    </div>
                    <div className="h-2 bg-[#2a2a2a] rounded-full overflow-hidden">
                      <div className="h-full bg-[#06b6d4] rounded-full" style={{ width: '32%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Quick Service</span>
                      <span className="text-[#06b6d4] font-semibold">25-30%</span>
                    </div>
                    <div className="h-2 bg-[#2a2a2a] rounded-full overflow-hidden">
                      <div className="h-full bg-[#06b6d4] rounded-full" style={{ width: '27%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Fine Dining</span>
                      <span className="text-[#06b6d4] font-semibold">35-40%</span>
                    </div>
                    <div className="h-2 bg-[#2a2a2a] rounded-full overflow-hidden">
                      <div className="h-full bg-[#06b6d4] rounded-full" style={{ width: '37%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Formula Explanation */}
              <div className="mt-6 backdrop-blur-xl bg-[#06b6d4]/10 border border-[#06b6d4]/30 rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-3 text-[#06b6d4]">The TRUE Labor Cost Formula</h3>
                <div className="bg-black/30 rounded-lg p-4 font-mono text-sm">
                  <p className="text-gray-300">Total Labor Cost =</p>
                  <p className="text-white ml-4">Gross Wages</p>
                  <p className="text-white ml-4">+ (Wages × Tax Rate)</p>
                  <p className="text-[#ef4444] ml-4">+ (Tips × Tax Rate) ← You pay this!</p>
                  <p className="text-white ml-4">+ Benefits & Other</p>
                  <p className="text-white ml-4">+ Payroll Processing</p>
                </div>
                <p className="text-sm text-gray-400 mt-3">
                  Tips don't come from your pocket, but the payroll taxes on tips do! This formula shows what labor <em>actually</em> costs you.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 backdrop-blur-xl bg-gradient-to-br from-[#06b6d4]/20 to-[#0891b2]/20 border-2 border-[#06b6d4] rounded-3xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Automate Your <span className="text-[#06b6d4]">Labor Tracking</span></h2>
            <p className="text-lg text-gray-300 mb-6">
              OwnerClone automatically tracks labor costs including tips, integrates with your POS time clock, and shows you real-time labor percentages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing" className="bg-[#06b6d4] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#0891b2] transition-colors">
                Join Early Access
              </Link>
              <Link href="/#features" className="border-2 border-[#06b6d4] text-[#06b6d4] px-8 py-3 rounded-lg font-bold hover:bg-[#06b6d4]/10 transition-colors">
                See Features
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
