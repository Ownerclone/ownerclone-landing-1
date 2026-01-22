'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function LaborCostCalculator() {
  const [grossWages, setGrossWages] = useState('')
  const [payrollTaxRate, setPayrollTaxRate] = useState('12')
  const [benefits, setBenefits] = useState('')
  const [totalSales, setTotalSales] = useState('')

  const wages = parseFloat(grossWages || '0')
  const payrollTax = wages * (parseFloat(payrollTaxRate) / 100)
  const benefitsCost = parseFloat(benefits || '0')
  const totalLabor = wages + payrollTax + benefitsCost

  const laborCostPercentage = totalSales && totalLabor
    ? (totalLabor / parseFloat(totalSales)) * 100
    : 0

  const getStatus = (percentage) => {
    if (percentage === 0) return { color: 'text-gray-500', bg: 'bg-gray-100', message: 'Enter your numbers to see results' }
    if (percentage < 25) return { color: 'text-green-600', bg: 'bg-green-50', message: 'Excellent! Very efficient labor management.' }
    if (percentage < 30) return { color: 'text-green-600', bg: 'bg-green-50', message: 'Great! You\'re in the optimal range.' }
    if (percentage < 35) return { color: 'text-yellow-600', bg: 'bg-yellow-50', message: 'Acceptable, but look for efficiency improvements.' }
    return { color: 'text-red-600', bg: 'bg-red-50', message: 'Too high! Your labor costs are hurting profitability.' }
  }

  const status = getStatus(laborCostPercentage)

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">Labor Cost Calculator</h1>
          <p className="text-xl text-blue-100">
            Calculate your true labor costs including wages, taxes, and benefits. Know your labor percentage.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-white border-2 border-gray-200 rounded-lg p-8 text-gray-900">
                <h2 className="text-2xl font-bold mb-6">Enter Your Numbers</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Gross Wages ($)
                    </label>
                    <input
                      type="number"
                      value={grossWages}
                      onChange={(e) => setGrossWages(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none text-lg text-gray-900"
                      placeholder="7,000"
                    />
                    <p className="text-sm text-gray-600 mt-1">Total wages paid before taxes</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Payroll Tax Rate (%)
                    </label>
                    <input
                      type="number"
                      value={payrollTaxRate}
                      onChange={(e) => setPayrollTaxRate(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none text-lg text-gray-900"
                      placeholder="12"
                    />
                    <p className="text-sm text-gray-600 mt-1">Typically 10-15% (FICA, federal, state unemployment)</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Benefits & Other Labor Costs ($)
                    </label>
                    <input
                      type="number"
                      value={benefits}
                      onChange={(e) => setBenefits(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none text-lg text-gray-900"
                      placeholder="800"
                    />
                    <p className="text-sm text-gray-600 mt-1">Health insurance, workers comp, PTO, bonuses, uniforms</p>
                  </div>

                  <div className="pt-4 border-t-2 border-gray-200">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Total Sales ($)
                    </label>
                    <input
                      type="number"
                      value={totalSales}
                      onChange={(e) => setTotalSales(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none text-lg text-gray-900"
                      placeholder="30,000"
                    />
                    <p className="text-sm text-gray-600 mt-1">Total revenue for the same period</p>
                  </div>
                </div>

                {wages > 0 && (
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <div className="text-sm font-semibold text-gray-700 mb-3">Cost Breakdown:</div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Gross Wages:</span>
                        <span className="font-semibold">${wages.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Payroll Taxes ({payrollTaxRate}%):</span>
                        <span className="font-semibold">${payrollTax.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Benefits & Other:</span>
                        <span className="font-semibold">${benefitsCost.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                      </div>
                      <div className="flex justify-between pt-2 border-t-2 border-blue-200">
                        <span className="text-gray-900 font-bold">Total Labor Cost:</span>
                        <span className="font-bold text-blue-600">${totalLabor.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div>
              <div className={`${status.bg} border-2 ${laborCostPercentage > 35 ? 'border-red-300' : laborCostPercentage > 30 ? 'border-yellow-300' : 'border-green-300'} rounded-lg p-8 mb-6`}>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Results</h2>
                
                <div className="space-y-6">
                  <div>
                    <div className="text-sm font-semibold text-gray-700 mb-1">True Labor Cost</div>
                    <div className="text-4xl font-bold text-gray-900">
                      ${totalLabor.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      This is your complete labor expense including all taxes and benefits.
                    </p>
                  </div>

                  {wages > 0 && (
                    <div className="p-4 bg-white rounded-lg border border-gray-200">
                      <div className="text-sm text-gray-600 mb-2">True hourly cost multiplier:</div>
                      <div className="text-2xl font-bold text-gray-900">
                        {((totalLabor / wages) * 100).toFixed(0)}% of gross wages
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        A $15/hr employee actually costs ${((15 * totalLabor) / wages).toFixed(2)}/hr
                      </p>
                    </div>
                  )}

                  <div className="pt-6 border-t-4 border-gray-900">
                    <div className="text-sm font-semibold text-gray-700 mb-1">LABOR COST PERCENTAGE</div>
                    {laborCostPercentage > 0 ? (
                      <div className={`text-6xl font-bold ${status.color}`}>
                        {laborCostPercentage.toFixed(1)}%
                      </div>
                    ) : (
                      <div className="text-4xl font-bold text-gray-400">
                        --%
                      </div>
                    )}
                    {laborCostPercentage > 0 && totalSales && (
                      <p className="text-gray-700 mt-4">
                        For every $100 in sales, ${laborCostPercentage.toFixed(2)} goes to labor.
                      </p>
                    )}
                  </div>

                  {laborCostPercentage > 0 && (
                    <div className={`mt-6 p-4 rounded-lg ${status.bg} border-2 ${laborCostPercentage > 35 ? 'border-red-300' : laborCostPercentage > 30 ? 'border-yellow-300' : 'border-green-300'}`}>
                      <div className={`font-bold ${status.color} mb-2`}>
                        {laborCostPercentage < 25 ? '✓ Excellent!' : laborCostPercentage < 30 ? '✓ Great!' : laborCostPercentage < 35 ? '⚠ Acceptable' : '⚠ Too High'}
                      </div>
                      <div className="text-gray-700">{status.message}</div>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 text-gray-900">
                <h3 className="text-lg font-bold mb-4">Target Labor Cost Ranges</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                    <span className="font-semibold text-gray-900">Fast Casual:</span>
                    <span className="text-green-600 font-bold">25-30%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                    <span className="font-semibold text-gray-900">Full Service:</span>
                    <span className="text-green-600 font-bold">30-35%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-yellow-50 rounded">
                    <span className="font-semibold text-gray-900">Fine Dining:</span>
                    <span className="text-yellow-600 font-bold">30-40%</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Your target depends on service style, concept, and market positioning.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Automate Your Labor Tracking</h2>
            <p className="text-lg text-blue-100 mb-6">
              OwnerClone automatically tracks labor costs, integrates with your POS time clock, and shows you real-time labor percentages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
                Joi
