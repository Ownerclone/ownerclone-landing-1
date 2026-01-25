'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function BreakEvenCalculator() {
  const [revenue, setRevenue] = useState('');
  const [fixedCosts, setFixedCosts] = useState({
    rent: '',
    insurance: '',
    utilities: '',
    salaries: '',
    other: ''
  });
  
  const [variableCosts, setVariableCosts] = useState({
    foodCost: '',
    labor: '',
    supplies: '',
    other: ''
  });
  
  const [avgCheckSize, setAvgCheckSize] = useState('');
  const [hoursOpen, setHoursOpen] = useState('');
  const [daysOpen, setDaysOpen] = useState('');

  const updateFixedCost = (key, value) => {
    setFixedCosts({ ...fixedCosts, [key]: value });
  };

  const updateVariableCost = (key, value) => {
    setVariableCosts({ ...variableCosts, [key]: value });
  };

  // Calculate totals
  const totalFixedCosts = Object.values(fixedCosts).reduce((sum, val) => sum + (parseFloat(val) || 0), 0);
  const totalVariableCostPercent = Object.values(variableCosts).reduce((sum, val) => sum + (parseFloat(val) || 0), 0);
  
  const checkSize = parseFloat(avgCheckSize) || 0;
  const hours = parseFloat(hoursOpen) || 0;
  const days = parseFloat(daysOpen) || 0;

  // Break-even calculations
  const contributionMargin = checkSize > 0 ? checkSize * (1 - totalVariableCostPercent / 100) : 0;
  const breakEvenRevenue = contributionMargin > 0 ? totalFixedCosts / (contributionMargin / checkSize) : 0;
  const breakEvenCustomers = contributionMargin > 0 ? totalFixedCosts / contributionMargin : 0;
  
  const customersPerDay = breakEvenCustomers / (days || 1);
  const customersPerHour = hours > 0 ? customersPerDay / hours : 0;

  // Profit scenarios
  const monthlyRevenue = parseFloat(revenue) || 0;
  const currentCustomers = checkSize > 0 ? monthlyRevenue / checkSize : 0;
  const currentProfit = monthlyRevenue - totalFixedCosts - (monthlyRevenue * totalVariableCostPercent / 100);

  const getAchievability = () => {
    if (customersPerHour === 0) return { label: '', color: '', bg: '', border: '' };
    if (customersPerHour < 5) return { label: 'Very Achievable', color: 'text-[#10b981]', bg: 'backdrop-blur-xl bg-[#10b981]/10', border: 'border-[#10b981]' };
    if (customersPerHour < 10) return { label: 'Achievable', color: 'text-[#38bdf8]', bg: 'backdrop-blur-xl bg-[#38bdf8]/10', border: 'border-[#38bdf8]' };
    if (customersPerHour < 15) return { label: 'Challenging', color: 'text-[#fbbf24]', bg: 'backdrop-blur-xl bg-[#fbbf24]/10', border: 'border-[#fbbf24]' };
    return { label: 'Very Difficult', color: 'text-[#ef4444]', bg: 'backdrop-blur-xl bg-[#ef4444]/10', border: 'border-[#ef4444]' };
  };

  const achievability = getAchievability();

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

      <div className="relative z-10 container mx-auto px-4 pt-24 pb-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/free-tools" 
            className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-100 transition-colors mb-4"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Free Tools
          </Link>
          
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-4">
              <div className="p-3 backdrop-blur-xl bg-cyan-500/20 border border-cyan-300/30 rounded-xl">
                <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">Break-Even Calculator</h1>
                <p className="text-cyan-200 mt-1">Calculate how much revenue you need to cover all costs</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Input Column */}
          <div>
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-white">Enter Your Numbers</h2>
              
              {/* Fixed Costs */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-cyan-300">Fixed Costs (Monthly)</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Rent</label>
                    <div className="relative">
                      <span className="absolute left-4 top-3.5 text-gray-500">$</span>
                      <input
                        type="number"
                        value={fixedCosts.rent}
                        onChange={(e) => updateFixedCost('rent', e.target.value)}
                        className="w-full pl-8 pr-4 py-3 backdrop-blur-xl bg-black/40 border-2 border-white/20 rounded-lg focus:border-cyan-500 focus:outline-none text-white"
                        placeholder="5000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Insurance</label>
                    <div className="relative">
                      <span className="absolute left-4 top-3.5 text-gray-500">$</span>
                      <input
                        type="number"
                        value={fixedCosts.insurance}
                        onChange={(e) => updateFixedCost('insurance', e.target.value)}
                        className="w-full pl-8 pr-4 py-3 backdrop-blur-xl bg-black/40 border-2 border-white/20 rounded-lg focus:border-cyan-500 focus:outline-none text-white"
                        placeholder="1000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Utilities</label>
                    <div className="relative">
                      <span className="absolute left-4 top-3.5 text-gray-500">$</span>
                      <input
                        type="number"
                        value={fixedCosts.utilities}
                        onChange={(e) => updateFixedCost('utilities', e.target.value)}
                        className="w-full pl-8 pr-4 py-3 backdrop-blur-xl bg-black/40 border-2 border-white/20 rounded-lg focus:border-cyan-500 focus:outline-none text-white"
                        placeholder="800"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Salaried Staff</label>
                    <div className="relative">
                      <span className="absolute left-4 top-3.5 text-gray-500">$</span>
                      <input
                        type="number"
                        value={fixedCosts.salaries}
                        onChange={(e) => updateFixedCost('salaries', e.target.value)}
                        className="w-full pl-8 pr-4 py-3 backdrop-blur-xl bg-black/40 border-2 border-white/20 rounded-lg focus:border-cyan-500 focus:outline-none text-white"
                        placeholder="8000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Other Fixed Costs</label>
                    <div className="relative">
                      <span className="absolute left-4 top-3.5 text-gray-500">$</span>
                      <input
                        type="number"
                        value={fixedCosts.other}
                        onChange={(e) => updateFixedCost('other', e.target.value)}
                        className="w-full pl-8 pr-4 py-3 backdrop-blur-xl bg-black/40 border-2 border-white/20 rounded-lg focus:border-cyan-500 focus:outline-none text-white"
                        placeholder="2000"
                      />
                    </div>
                  </div>

                  <div className="mt-4 p-4 backdrop-blur-xl bg-cyan-500/10 border border-cyan-300/30 rounded-lg">
                    <p className="text-sm font-semibold text-gray-300">Total Fixed Costs:</p>
                    <p className="text-2xl font-bold text-cyan-400">${totalFixedCosts.toLocaleString()}/month</p>
                  </div>
                </div>
              </div>

              {/* Variable Costs */}
              <div className="mb-8 border-t border-white/10 pt-8">
                <h3 className="text-xl font-semibold mb-4 text-cyan-300">Variable Costs (% of Sales)</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Food Cost %</label>
                    <div className="relative">
                      <input
                        type="number"
                        value={variableCosts.foodCost}
                        onChange={(e) => updateVariableCost('foodCost', e.target.value)}
                        className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border-2 border-white/20 rounded-lg focus:border-cyan-500 focus:outline-none text-white"
                        placeholder="30"
                      />
                      <span className="absolute right-4 top-3.5 text-gray-500">%</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Labor %</label>
                    <div className="relative">
                      <input
                        type="number"
                        value={variableCosts.labor}
                        onChange={(e) => updateVariableCost('labor', e.target.value)}
                        className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border-2 border-white/20 rounded-lg focus:border-cyan-500 focus:outline-none text-white"
                        placeholder="25"
                      />
                      <span className="absolute right-4 top-3.5 text-gray-500">%</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Supplies %</label>
                    <div className="relative">
                      <input
                        type="number"
                        value={variableCosts.supplies}
                        onChange={(e) => updateVariableCost('supplies', e.target.value)}
                        className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border-2 border-white/20 rounded-lg focus:border-cyan-500 focus:outline-none text-white"
                        placeholder="5"
                      />
                      <span className="absolute right-4 top-3.5 text-gray-500">%</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Other Variable %</label>
                    <div className="relative">
                      <input
                        type="number"
                        value={variableCosts.other}
                        onChange={(e) => updateVariableCost('other', e.target.value)}
                        className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border-2 border-white/20 rounded-lg focus:border-cyan-500 focus:outline-none text-white"
                        placeholder="3"
                      />
                      <span className="absolute right-4 top-3.5 text-gray-500">%</span>
                    </div>
                  </div>

                  <div className="mt-4 p-4 backdrop-blur-xl bg-cyan-500/10 border border-cyan-300/30 rounded-lg">
                    <p className="text-sm font-semibold text-gray-300">Total Variable Costs:</p>
                    <p className="text-2xl font-bold text-cyan-400">{totalVariableCostPercent}% of sales</p>
                  </div>
                </div>
              </div>

              {/* Operating Info */}
              <div className="border-t border-white/10 pt-8">
                <h3 className="text-xl font-semibold mb-4 text-cyan-300">Operating Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Average Check Size ($)</label>
                    <div className="relative">
                      <span className="absolute left-4 top-3.5 text-gray-500">$</span>
                      <input
                        type="number"
                        value={avgCheckSize}
                        onChange={(e) => setAvgCheckSize(e.target.value)}
                        className="w-full pl-8 pr-4 py-3 backdrop-blur-xl bg-black/40 border-2 border-white/20 rounded-lg focus:border-cyan-500 focus:outline-none text-white"
                        placeholder="35"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Hours Open Per Day</label>
                    <input
                      type="number"
                      value={hoursOpen}
                      onChange={(e) => setHoursOpen(e.target.value)}
                      className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border-2 border-white/20 rounded-lg focus:border-cyan-500 focus:outline-none text-white"
                      placeholder="12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Days Open Per Month</label>
                    <input
                      type="number"
                      value={daysOpen}
                      onChange={(e) => setDaysOpen(e.target.value)}
                      className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border-2 border-white/20 rounded-lg focus:border-cyan-500 focus:outline-none text-white"
                      placeholder="26"
                    />
                  </div>
                </div>
              </div>

              {/* Optional Current Revenue */}
              <div className="border-t border-white/10 pt-8 mt-8">
                <h3 className="text-xl font-semibold mb-4 text-cyan-300">Current Performance (Optional)</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Current Monthly Revenue</label>
                  <div className="relative">
                    <span className="absolute left-4 top-3.5 text-gray-500">$</span>
                    <input
                      type="number"
                      value={revenue}
                      onChange={(e) => setRevenue(e.target.value)}
                      className="w-full pl-8 pr-4 py-3 backdrop-blur-xl bg-black/40 border-2 border-white/20 rounded-lg focus:border-cyan-500 focus:outline-none text-white"
                      placeholder="50000"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Column */}
          <div>
            {contributionMargin > 0 && (
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-center mb-6 text-white">Break-Even Analysis</h3>
                
                {/* Key Metrics */}
                <div className="grid gap-4">
                  <div className="backdrop-blur-xl bg-cyan-500/10 border border-cyan-300/30 p-6 rounded-xl">
                    <p className="text-sm text-gray-400 mb-1">Break-Even Revenue</p>
                    <p className="text-4xl font-bold text-white">${breakEvenRevenue.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
                    <p className="text-sm text-cyan-300 mt-1">per month</p>
                  </div>

                  <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-6 rounded-xl">
                    <p className="text-sm text-gray-400 mb-1">Break-Even Customers</p>
                    <p className="text-4xl font-bold text-white">{breakEvenCustomers.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
                    <p className="text-sm text-gray-300 mt-1">per month</p>
                  </div>

                  <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-6 rounded-xl">
                    <p className="text-sm text-gray-400 mb-1">Customers Per Day</p>
                    <p className="text-4xl font-bold text-white">{customersPerDay.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
                  </div>

                  <div className={`backdrop-blur-xl ${achievability.bg} border ${achievability.border} p-6 rounded-xl`}>
                    <p className="text-sm text-gray-400 mb-1">Customers Per Hour</p>
                    <p className={`text-4xl font-bold ${achievability.color}`}>{customersPerHour.toLocaleString(undefined, { maximumFractionDigits: 1 })}</p>
                    {achievability.label && (
                      <p className={`text-sm ${achievability.color} mt-2 font-semibold`}>{achievability.label}</p>
                    )}
                  </div>
                </div>

                {/* Current Performance */}
                {monthlyRevenue > 0 && (
                  <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 mt-6">
                    <h4 className="text-lg font-semibold mb-4 text-white">Current Performance</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Monthly Revenue:</span>
                        <span className="text-xl font-bold text-white">${monthlyRevenue.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Current Customers:</span>
                        <span className="text-xl font-bold text-white">{currentCustomers.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                      </div>
                      <div className="flex justify-between items-center pt-3 border-t border-white/10">
                        <span className="text-gray-400">Monthly Profit:</span>
                        <span className={`text-2xl font-bold ${currentProfit >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                          ${currentProfit.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {contributionMargin === 0 && (
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-12 text-center">
                <svg className="w-16 h-16 mx-auto mb-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <h3 className="text-xl font-semibold text-white mb-2">Enter Your Numbers</h3>
                <p className="text-gray-400">Fill out the form to calculate your break-even point</p>
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 backdrop-blur-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-300/30 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-3 text-white">Want Real-Time Break-Even Tracking?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            OwnerClone automatically tracks your break-even point daily based on actual POS data and alerts you when you're falling short.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/25"
          >
            See OwnerClone Demo
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
