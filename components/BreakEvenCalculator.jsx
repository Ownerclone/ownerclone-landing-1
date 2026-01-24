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
    if (customersPerHour < 5) return { label: 'Very Achievable', color: 'text-[#10b981]', bg: 'bg-[#10b981]/10', border: 'border-[#10b981]' };
    if (customersPerHour < 10) return { label: 'Achievable', color: 'text-[#38bdf8]', bg: 'bg-[#38bdf8]/10', border: 'border-[#38bdf8]' };
    if (customersPerHour < 15) return { label: 'Challenging', color: 'text-[#fbbf24]', bg: 'bg-[#fbbf24]/10', border: 'border-[#fbbf24]' };
    return { label: 'Very Difficult', color: 'text-[#ef4444]', bg: 'bg-[#ef4444]/10', border: 'border-[#ef4444]' };
  };

  const achievability = getAchievability();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Animated Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#10b981] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#34d399] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1419] to-transparent pointer-events-none"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Break-Even <span className="text-[#10b981]">Calculator</span>
          </h1>
          <p className="text-xl text-gray-300">
            Find out exactly how many customers you need to break even
          </p>
        </div>
      </section>

      <section className="relative py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Calculator Card */}
          <div className="bg-[#0a0a0a]/40 backdrop-blur-xl border border-[#10b981]/20 rounded-2xl p-8 mb-8 shadow-[0_0_50px_rgba(16,185,129,0.1)]">
            
            {/* Fixed Costs Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Monthly Fixed Costs</h2>
              <p className="text-sm text-gray-400 mb-6">Costs that stay the same regardless of sales volume</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Rent/Lease</label>
                  <div className="relative">
                    <span className="absolute left-4 top-3.5 text-gray-500">$</span>
                    <input
                      type="number"
                      value={fixedCosts.rent}
                      onChange={(e) => updateFixedCost('rent', e.target.value)}
                      placeholder="5,000"
                      className="w-full pl-8 pr-4 py-3 bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#10b981] focus:outline-none text-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Insurance</label>
                  <div className="relative">
                    <span className="absolute left-4 top-3.5 text-gray-500">$</span>
                    <input
                      type="number"
                      value={fixedCosts.insurance}
                      onChange={(e) => updateFixedCost('insurance', e.target.value)}
                      placeholder="800"
                      className="w-full pl-8 pr-4 py-3 bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#10b981] focus:outline-none text-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Utilities</label>
                  <div className="relative">
                    <span className="absolute left-4 top-3.5 text-gray-500">$</span>
                    <input
                      type="number"
                      value={fixedCosts.utilities}
                      onChange={(e) => updateFixedCost('utilities', e.target.value)}
                      placeholder="1,200"
                      className="w-full pl-8 pr-4 py-3 bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#10b981] focus:outline-none text-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Salaried Staff</label>
                  <div className="relative">
                    <span className="absolute left-4 top-3.5 text-gray-500">$</span>
                    <input
                      type="number"
                      value={fixedCosts.salaries}
                      onChange={(e) => updateFixedCost('salaries', e.target.value)}
                      placeholder="8,000"
                      className="w-full pl-8 pr-4 py-3 bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#10b981] focus:outline-none text-white transition-colors"
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Other Fixed Costs</label>
                  <div className="relative">
                    <span className="absolute left-4 top-3.5 text-gray-500">$</span>
                    <input
                      type="number"
                      value={fixedCosts.other}
                      onChange={(e) => updateFixedCost('other', e.target.value)}
                      placeholder="2,000"
                      className="w-full pl-8 pr-4 py-3 bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#10b981] focus:outline-none text-white transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-[#10b981]/10 border border-[#10b981]/30 rounded-lg">
                <p className="text-sm font-semibold text-gray-300">Total Fixed Costs:</p>
                <p className="text-2xl font-bold text-[#10b981]">${totalFixedCosts.toLocaleString()}/month</p>
              </div>
            </div>

            {/* Variable Costs Section */}
            <div className="mb-8 border-t-2 border-[#2a2a2a] pt-8">
              <h2 className="text-2xl font-bold mb-2">Variable Costs (% of Sales)</h2>
              <p className="text-sm text-gray-400 mb-6">Costs that change based on your sales volume</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Food Cost %</label>
                  <div className="relative">
                    <input
                      type="number"
                      value={variableCosts.foodCost}
                      onChange={(e) => updateVariableCost('foodCost', e.target.value)}
                      placeholder="30"
                      className="w-full px-4 py-3 bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#10b981] focus:outline-none text-white transition-colors"
                      min="0"
                      max="100"
                    />
                    <span className="absolute right-4 top-3.5 text-gray-500">%</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Labor %</label>
                  <div className="relative">
                    <input
                      type="number"
                      value={variableCosts.labor}
                      onChange={(e) => updateVariableCost('labor', e.target.value)}
                      placeholder="25"
                      className="w-full px-4 py-3 bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#10b981] focus:outline-none text-white transition-colors"
                      min="0"
                      max="100"
                    />
                    <span className="absolute right-4 top-3.5 text-gray-500">%</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Supplies %</label>
                  <div className="relative">
                    <input
                      type="number"
                      value={variableCosts.supplies}
                      onChange={(e) => updateVariableCost('supplies', e.target.value)}
                      placeholder="5"
                      className="w-full px-4 py-3 bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#10b981] focus:outline-none text-white transition-colors"
                      min="0"
                      max="100"
                    />
                    <span className="absolute right-4 top-3.5 text-gray-500">%</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Other Variable %</label>
                  <div className="relative">
                    <input
                      type="number"
                      value={variableCosts.other}
                      onChange={(e) => updateVariableCost('other', e.target.value)}
                      placeholder="5"
                      className="w-full px-4 py-3 bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#10b981] focus:outline-none text-white transition-colors"
                      min="0"
                      max="100"
                    />
                    <span className="absolute right-4 top-3.5 text-gray-500">%</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-[#a855f7]/10 border border-[#a855f7]/30 rounded-lg">
                <p className="text-sm font-semibold text-gray-300">Total Variable Costs:</p>
                <p className="text-2xl font-bold text-[#a855f7]">{totalVariableCostPercent.toFixed(1)}% of sales</p>
              </div>
            </div>

            {/* Operations Section */}
            <div className="mb-8 border-t-2 border-[#2a2a2a] pt-8">
              <h2 className="text-2xl font-bold mb-6">Operations</h2>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Average Check Size</label>
                  <div className="relative">
                    <span className="absolute left-4 top-3.5 text-gray-500">$</span>
                    <input
                      type="number"
                      value={avgCheckSize}
                      onChange={(e) => setAvgCheckSize(e.target.value)}
                      placeholder="25"
                      className="w-full pl-8 pr-4 py-3 bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#10b981] focus:outline-none text-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Hours Open Per Day</label>
                  <input
                    type="number"
                    value={hoursOpen}
                    onChange={(e) => setHoursOpen(e.target.value)}
                    placeholder="12"
                    className="w-full px-4 py-3 bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#10b981] focus:outline-none text-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Days Open Per Month</label>
                  <input
                    type="number"
                    value={daysOpen}
                    onChange={(e) => setDaysOpen(e.target.value)}
                    placeholder="26"
                    className="w-full px-4 py-3 bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#10b981] focus:outline-none text-white transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Optional: Current Revenue */}
            <div className="border-t-2 border-[#2a2a2a] pt-8">
              <h2 className="text-2xl font-bold mb-2">Current Performance (Optional)</h2>
              <p className="text-sm text-gray-400 mb-6">Enter your current monthly revenue to compare</p>
              
              <div className="max-w-md">
                <label className="block text-sm font-semibold text-gray-300 mb-2">Monthly Revenue</label>
                <div className="relative">
                  <span className="absolute left-4 top-3.5 text-gray-500">$</span>
                  <input
                    type="number"
                    value={revenue}
                    onChange={(e) => setRevenue(e.target.value)}
                    placeholder="50,000"
                    className="w-full pl-8 pr-4 py-3 bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#10b981] focus:outline-none text-white transition-colors"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          {contributionMargin > 0 && (
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-center mb-8">Break-Even Analysis</h3>
              
              {/* Key Metrics */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-[#10b981]/10 backdrop-blur-xl border border-[#10b981]/30 p-6 rounded-lg">
                  <p className="text-sm text-gray-400 mb-1">Break-Even Revenue</p>
                  <p className="text-3xl font-bold text-white">${breakEvenRevenue.toLocaleString()}</p>
                  <p className="text-xs text-gray-500 mt-1">per month</p>
                </div>
                
                <div className="bg-[#38bdf8]/10 backdrop-blur-xl border border-[#38bdf8]/30 p-6 rounded-lg">
                  <p className="text-sm text-gray-400 mb-1">Customers Needed</p>
                  <p className="text-3xl font-bold text-white">{Math.ceil(breakEvenCustomers).toLocaleString()}</p>
                  <p className="text-xs text-gray-500 mt-1">per month</p>
                </div>
                
                <div className="bg-[#a855f7]/10 backdrop-blur-xl border border-[#a855f7]/30 p-6 rounded-lg">
                  <p className="text-sm text-gray-400 mb-1">Contribution Margin</p>
                  <p className="text-3xl font-bold text-white">${contributionMargin.toFixed(2)}</p>
                  <p className="text-xs text-gray-500 mt-1">per customer</p>
                </div>
              </div>

              {/* Daily/Hourly Breakdown */}
              <div className="bg-[#0a0a0a]/40 backdrop-blur-xl border border-[#10b981]/20 rounded-xl p-6">
                <h4 className="font-bold text-xl mb-4">Daily & Hourly Breakdown</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Customers Per Day</p>
                    <p className="text-2xl font-bold text-[#10b981]">{Math.ceil(customersPerDay)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Customers Per Hour</p>
                    <p className="text-2xl font-bold text-[#10b981]">{customersPerHour.toFixed(1)}</p>
                  </div>
                </div>
              </div>

              {/* Achievability Assessment */}
              {achievability.label && (
                <div className={`${achievability.bg} border-2 ${achievability.border} p-6 rounded-xl backdrop-blur-xl`}>
                  <h4 className="font-bold text-xl text-white mb-2">Achievability Assessment</h4>
                  <p className={`text-xl font-bold ${achievability.color} mb-3`}>{achievability.label}</p>
                  <p className="text-gray-300">
                    {customersPerHour < 5 && "These numbers look very realistic for most restaurants. You have a solid path to profitability."}
                    {customersPerHour >= 5 && customersPerHour < 10 && "These numbers are achievable with good marketing and operations. Focus on building a loyal customer base."}
                    {customersPerHour >= 10 && customersPerHour < 15 && "These numbers are challenging but possible. You'll need strong marketing, great location, and excellent execution."}
                    {customersPerHour >= 15 && "These numbers are very difficult to achieve consistently. Consider ways to reduce fixed costs or increase average check size."}
                  </p>
                </div>
              )}

              {/* Current Performance (if revenue provided) */}
              {monthlyRevenue > 0 && (
                <div className="bg-[#38bdf8]/10 backdrop-blur-xl border border-[#38bdf8]/30 p-6 rounded-xl">
                  <h4 className="font-bold text-xl text-white mb-4">Your Current Performance</h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Monthly Revenue</p>
                      <p className="text-2xl font-bold text-[#38bdf8]">${monthlyRevenue.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Monthly Customers</p>
                      <p className="text-2xl font-bold text-[#38bdf8]">{Math.ceil(currentCustomers).toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Net Profit</p>
                      <p className={`text-2xl font-bold ${currentProfit > 0 ? 'text-[#10b981]' : 'text-[#ef4444]'}`}>
                        ${currentProfit.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-12 bg-[#0a0a0a]/40 backdrop-blur-xl border-2 border-[#10b981] rounded-3xl p-8 text-center shadow-[0_0_80px_rgba(16,185,129,0.15)]">
            <h2 className="text-2xl font-bold mb-4">Want Real-Time <span className="text-[#10b981]">Break-Even Tracking</span>?</h2>
            <p className="text-lg text-gray-300 mb-6">
              OwnerClone automatically tracks your break-even point daily based on actual POS data
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing" className="bg-[#10b981] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#059669] transition-colors">
                Join Early Access
              </Link>
              <Link href="/blog" className="border-2 border-[#10b981] text-[#10b981] px-8 py-3 rounded-lg font-bold hover:bg-[#10b981]/10 transition-colors">
                Read Complete Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
