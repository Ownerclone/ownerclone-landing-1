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
    if (percentage === 0) return { color: 'text-gray-500', bg: 'bg-[#1a1a1a]', border: 'border-[#2a2a2a]', message: 'Enter your numbers to see results' }
    if (percentage < 25) return { color: 'text-[#3b82f6]', bg: 'bg-[#3b82f6]/10', border: 'border-[#3b82f6]', message: 'Excellent! Very efficient labor management.' }
    if (percentage < 30) return { color: 'text-[#3b82f6]', bg: 'bg-[#3b82f6]/10', border: 'border-[#3b82f6]', message: 'Great! You are in the optimal range.' }
    if (percentage < 35) return { color: 'text-[#fbbf24]', bg: 'bg-[#fbbf24]/10', border: 'border-[#fbbf24]', message: 'Acceptable, but look for efficiency improvements.' }
    return { color: 'text-[#ef4444]', bg: 'bg-[#ef4444]/10', border: 'border-[#ef4444]', message: 'Too high! Your labor costs are hurting profitability.' }
  }

  const status = getStatus(laborCostPercentage)

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Animated Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#3b82f6] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#60a5fa] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1419] to-transparent pointer-events-none"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Labor Cost <span className="text-[#3b82f6]">Calculator</span>
          </h1>
          <p className="text-xl text-gray-300">
            Calculate your TRUE labor costs - wages, taxes on tips, benefits, and processing fees.
          </p>
        </div>
      </section>

      <section className="relative py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-gradient-to-br from-[#1e1e1e] via-[#2a2a2a] to-[#1e1e1e] border border-[#3a3a3a] rounded-2xl p-8">
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
                      className="w-full px-4 py-3 bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#3b82f6] focus:outline-none text-lg text-white"
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
                      className="w-full px-4 py-3 bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#3b82f6] focus:outline-none text-lg text-white"
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
                      className="w-full px-4 py-3 bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#3b82f6] focus:outline-none text-lg text-white"
                      placeholder="12"
                      step="0.1"
                    />
                    <p className="text-sm text-gray-500 mt-1">Typically 10-15% (FICA, federal, state unemployment)</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Benefits & Other Labor Costs ($)
                    </label>
                    <input
                      type="number"
                      value={benefits}
                      onChange={(e) => setBenefits(e.target.value)}
                      className="w-full px-4 py-3 bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#3b82f6] focus:outline-none text-lg text-white"
                      placeholder="50"
                    />
                    <p className="text-sm text-gray-500 mt-1">Health insurance, workers comp, PTO, bonuses, uniforms</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Payroll Processing Fees ($)
                    </label>
                    <input
                      type="number"
                      value={payrollProcessing}
                      onChange={(e) => setPayrollProcessing(e.target.value)}
                      className="w-full px-4 py-3 bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#3b82f6] focus:outline-none text-lg text-white"
                      placeholder="100"
                    />
                    <p className="text-sm text-gray-500 mt-1">ADP, Gusto, Paychex fees for this period</p>
                  </div>

                  <div className="pt-4 border-t-2 border-[#2a2a2a]">
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Total Sales ($)
                    </label>
                    <input
                      type="number"
                      value={totalSales}
                      onChange={(e) => setTotalSales(e.target.value)}
                      className="w-full px-4 py-3 bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#3b82f6] focus:outline-none text-lg text-white"
                      placeholder="20,000"
                    />
                    <p className="text-sm text-gray-500 mt-1">Total revenue for the same period</p>
                  </div>
                </div>

                {wages > 0 && (
                  <div className="mt-6 p-4 bg-[#3b82f6]/10 border border-[#3b82f6]/30 rounded-lg">
                    <div className="text-sm font-semibold text-gray-300 mb-3">What You Actually Pay:</div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Gross Wages:</span>
                        <span className="font-semibold text-white">${wages.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Tax on Wages ({payrollTaxRate}%):</span>
                        <span className="font-semibold text-white">${wagesTax.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                      </div>
                      {tipsAmount > 0 && (
                        <>
                          <div className="flex justify-between text-gray-500 italic">
                            <span>Tips (customers pay this):</span>
                            <span>${tipsAmount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Tax on Tips ({payrollTaxRate}%):</span>
                            <span className="font-semibold text-[#ef4444]">${tipsTax.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                          </div>
                        </>
                      )}
                      {benefitsCost > 0 && (
                        <div className="flex justify-between">
                          <span className="text-gray-400">Benefits & Other:</span>
                          <span className="font-semibold text-white">${benefitsCost.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                        </div>
                      )}
                      {processingFees > 0 && (
                        <div className="flex justify-between">
                          <span className="text-gray-400">Payroll Processing:</span>
                          <span className="font-semibold text-white">${processingFees.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                        </div>
                      )}
                      <div className="flex justify-between pt-2 border-t-2 border-[#3b82f6]/30">
                        <span className="text-white font-bold">Total Labor Cost:</span>
                        <span className="font-bold text-[#3b82f6]">${totalLabor.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                      </div>
                    </div>
                    {tipsAmount > 0 && (
                      <div className="mt-3 p-3 bg-[#fbbf24]/10 border border-[#fbbf24]/30 rounded">
                        <p className="text-xs text-gray-300">
                          <strong>Note:</strong> Tips don't come from your pocket, but you still pay ${tipsTax.toFixed(2)} in taxes on them!
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div>
              <div className={`${status.bg} border-2 ${status.border} rounded-2xl p-8 mb-6`}>
                <h2 className="text-2xl font-bold mb-6">Your Results</h2>
                
                <div className="space-y-6">
                  <div>
                    <div className="text-sm font-semibold text-gray-400 mb-1">True Labor Cost</div>
                    <div className="text-4xl font-bold text-white">
                      ${totalLabor.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>
                    <p className="text-sm text-gray-400 mt-2">
                      This is what labor ACTUALLY costs you out of pocket.
                    </p>
                  </div>

                  {wages > 0 && tipsAmount > 0 && (
                    <div className="p-4 bg-[#ef4444]/10 rounded-lg border border-[#ef4444]/30">
                      <div className="text-sm text-gray-400 mb-2">Hidden cost of tips:</div>
                      <div className="text-2xl font-bold text-[#ef4444]">
                        ${tipsTax.toFixed(2)}
                      </div>
                      <p className="text-sm text-gray-400 mt-1">
                        You pay this in taxes even though tips came from customers
                      </p>
                    </div>
                  )}

                  <div className="pt-6 border-t-4 border-[#3b82f6]">
                    <div className="text-sm font-semibold text-gray-400 mb-1">LABOR COST PERCENTAGE</div>
                    {laborCostPercentage > 0 ? (
                      <div className={`text-6xl font-bold ${status.color}`}>
                        {laborCostPercentage.toFixed(1)}%
                      </div>
                    ) : (
                      <div className="text-4xl font-bold text-gray-600">
                        --%
                      </div>
                    )}
                    {laborCostPercentage > 0 && totalSales && (
                      <p className="text-gray-300 mt-4">
                        For every $100 in sales, ${laborCostPercentage.toFixed(2)} goes to labor.
                      </p>
                    )}
                  </div>

                  {laborCostPercentage > 0 && (
                    <div className={`mt-6 p-4 rounded-lg ${status.bg} border-2 ${status.border}`}>
                      <div className={`font-bold ${status.color} mb-2`}>
                        {laborCostPercentage < 25 ? '✓ Excellent!' : laborCostPercentage < 30 ? '✓ Great!' : laborCostPercentage < 35 ? '⚠ Acceptable' : '⚠ Too High'}
                      </div>
                      <div className="text-gray-300">{status.message}</div>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#1e1e1e] via-[#2a2a2a] to-[#1e1e1e] border border-[#3a3a3a] rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-4">Target Labor Cost Ranges</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-[#3b82f6]/10 border border-[#3b82f6]/30 rounded">
                    <span className="font-semibold">Fast Casual:</span>
                    <span className="text-[#3b82f6] font-bold">25-30%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-[#3b82f6]/10 border border-[#3b82f6]/30 rounded">
                    <span className="font-semibold">Full Service:</span>
                    <span className="text-[#3b82f6] font-bold">30-35%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-[#fbbf24]/10 border border-[#fbbf24]/30 rounded">
                    <span className="font-semibold">Fine Dining:</span>
                    <span className="text-[#fbbf24] font-bold">30-40%</span>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-4">
                  Your target depends on service style, concept, and market positioning.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-br from-[#3b82f6]/20 to-[#60a5fa]/20 border border-[#3b82f6] rounded-3xl p-8 text-center backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4">Automate Your <span className="text-[#3b82f6]">Labor Tracking</span></h2>
            <p className="text-lg text-gray-300 mb-6">
              OwnerClone automatically tracks all labor costs including tip taxes, integrates with your POS, and shows real-time labor percentages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing" className="bg-[#3b82f6] text-black px-8 py-3 rounded-lg font-bold hover:bg-[#2563eb] transition">
                Join Early Access
              </Link>
              <Link href="/blog" className="border-2 border-[#3b82f6] text-[#3b82f6] px-8 py-3 rounded-lg font-bold hover:bg-[#3b82f6]/10 transition">
                Read Complete Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
