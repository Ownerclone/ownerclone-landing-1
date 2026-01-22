'use client';

import { useState } from 'react';

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
    if (customersPerHour === 0) return { label: '', color: '', bg: '' };
    if (customersPerHour < 5) return { label: 'Very Achievable', color: 'text-green-600', bg: 'bg-green-50' };
    if (customersPerHour < 10) return { label: 'Achievable', color: 'text-blue-600', bg: 'bg-blue-50' };
    if (customersPerHour < 15) return { label: 'Challenging', color: 'text-yellow-600', bg: 'bg-yellow-50' };
    return { label: 'Very Difficult', color: 'text-red-600', bg: 'bg-red-50' };
  };

  const achievability = getAchievability();

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          🎯 Restaurant Break-Even Calculator
        </h1>
        <p className="text-xl text-gray-600">
          Find out exactly how many customers you need to break even
        </p>
      </div>

      {/* Main Calculator Card */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        
        {/* Fixed Costs Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">💰 Monthly Fixed Costs</h2>
          <p className="text-sm text-gray-600 mb-4">Costs that stay the same regardless of sales volume</p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Rent/Lease</label>
              <div className="relative">
                <span className="absolute left-4 top-3.5 text-gray-500">$</span>
                <input
                  type="number"
                  value={fixedCosts.rent}
                  onChange={(e) => updateFixedCost('rent', e.target.value)}
                  placeholder="5,000"
                  className="w-full pl-8 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Insurance</label>
              <div className="relative">
                <span className="absolute left-4 top-3.5 text-gray-500">$</span>
                <input
                  type="number"
                  value={fixedCosts.insurance}
                  onChange={(e) => updateFixedCost('insurance', e.target.value)}
                  placeholder="800"
                  className="w-full pl-8 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Utilities</label>
              <div className="relative">
                <span className="absolute left-4 top-3.5 text-gray-500">$</span>
                <input
                  type="number"
                  value={fixedCosts.utilities}
                  onChange={(e) => updateFixedCost('utilities', e.target.value)}
                  placeholder="1,200"
                  className="w-full pl-8 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Salaried Staff</label>
              <div className="relative">
                <span className="absolute left-4 top-3.5 text-gray-500">$</span>
                <input
                  type="number"
                  value={fixedCosts.salaries}
                  onChange={(e) => updateFixedCost('salaries', e.target.value)}
                  placeholder="8,000"
                  className="w-full pl-8 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Other Fixed Costs</label>
              <div className="relative">
                <span className="absolute left-4 top-3.5 text-gray-500">$</span>
                <input
                  type="number"
                  value={fixedCosts.other}
                  onChange={(e) => updateFixedCost('other', e.target.value)}
                  placeholder="2,000"
                  className="w-full pl-8 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm font-semibold text-gray-700">Total Fixed Costs:</p>
            <p className="text-2xl font-bold text-blue-600">${totalFixedCosts.toLocaleString()}/month</p>
          </div>
        </div>

        {/* Variable Costs Section */}
        <div className="mb-8 border-t-2 border-gray-200 pt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">📊 Variable Costs (% of Sales)</h2>
          <p className="text-sm text-gray-600 mb-4">Costs that change based on your sales volume</p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Food Cost %</label>
              <div className="relative">
                <input
                  type="number"
                  value={variableCosts.foodCost}
                  onChange={(e) => updateVariableCost('foodCost', e.target.value)}
                  placeholder="30"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  min="0"
                  max="100"
                />
                <span className="absolute right-4 top-3.5 text-gray-500">%</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Labor %</label>
              <div className="relative">
                <input
                  type="number"
                  value={variableCosts.labor}
                  onChange={(e) => updateVariableCost('labor', e.target.value)}
                  placeholder="25"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  min="0"
                  max="100"
                />
                <span className="absolute right-4 top-3.5 text-gray-500">%</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Supplies %</label>
              <div className="relative">
                <input
                  type="number"
                  value={variableCosts.supplies}
                  onChange={(e) => updateVariableCost('supplies', e.target.value)}
                  placeholder="5"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  min="0"
                  max="100"
                />
                <span className="absolute right-4 top-3.5 text-gray-500">%</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Other Variable %</label>
              <div className="relative">
                <input
                  type="number"
                  value={variableCosts.other}
                  onChange={(e) => updateVariableCost('other', e.target.value)}
                  placeholder="5"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  min="0"
                  max="100"
                />
                <span className="absolute right-4 top-3.5 text-gray-500">%</span>
              </div>
            </div>
          </div>

          <div className="mt-4 p-4 bg-purple-50 rounded-lg">
            <p className="text-sm font-semibold text-gray-700">Total Variable Costs:</p>
            <p className="text-2xl font-bold text-purple-600">{totalVariableCostPercent.toFixed(1)}% of sales</p>
          </div>
        </div>

        {/* Operations Section */}
        <div className="mb-8 border-t-2 border-gray-200 pt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🕐 Operations</h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Average Check Size</label>
              <div className="relative">
                <span className="absolute left-4 top-3.5 text-gray-500">$</span>
                <input
                  type="number"
                  value={avgCheckSize}
                  onChange={(e) => setAvgCheckSize(e.target.value)}
                  placeholder="25"
                  className="w-full pl-8 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Hours Open Per Day</label>
              <input
                type="number"
                value={hoursOpen}
                onChange={(e) => setHoursOpen(e.target.value)}
                placeholder="12"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Days Open Per Month</label>
              <input
                type="number"
                value={daysOpen}
                onChange={(e) => setDaysOpen(e.target.value)}
                placeholder="26"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Results Section */}
        {contributionMargin > 0 && (
          <div className="border-t-2 border-gray-200 pt-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">📈 Break-Even Analysis</h3>
            
            {/* Key Metrics */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Break-Even Revenue</p>
                <p className="text-3xl font-bold text-gray-900">${breakEvenRevenue.toLocaleString()}</p>
                <p className="text-xs text-gray-500 mt-1">per month</p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Customers Needed</p>
                <p className="text-3xl font-bold text-gray-900">{Math.ceil(breakEvenCustomers).toLocaleString()}</p>
                <p className="text-xs text-gray-500 mt-1">per month</p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Contribution Margin</p>
                <p className="text-3xl font-bold text-gray-900">${contributionMargin.toFixed(2)}</p>
                <p className="text-xs text-gray-500 mt-1">per customer</p>
              </div>
            </div>

            {/* Daily/Hourly Breakdown */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-bold text-gray-900 mb-4">📅 Daily & Hourly Breakdown</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Customers Per Day</p>
                  <p className="text-2xl font-bold text-gray-900">{Math.ceil(customersPerDay)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Customers Per Hour</p>
                  <p className="text-2xl font-bold text-gray-900">{customersPerHour.toFixed(1)}</p>
                </div>
              </div>
            </div>

            {/* Achievability Assessment */}
            {achievability.label && (
              <div className={`${achievability.bg} border-2 ${achievability.color.replace('text-', 'border-')} p-6 rounded-lg mb-8`}>
                <h4 className="font-bold text-gray-900 mb-2">🎯 Achievability Assessment</h4>
                <p className={`text-xl font-bold ${achievability.color} mb-2`}>{achievability.label}</p>
                <p className="text-gray-700">
                  {customersPerHour < 5 && "These numbers look very realistic for most restaurants. You have a solid path to profitability."}
                  {customersPerHour >= 5 && customersPerHour < 10 && "These numbers are achievable with good marketing and operations. Focus on building a loyal customer base."}
                  {customersPerHour >= 10 && customersPerHour < 15 && "These numbers are challenging but possible. You'll need strong marketing, great location, and excellent execution."}
                  {customersPerHour >= 15 && "These numbers are very difficult to achieve consistently. Consider ways to reduce fixed costs or increase average check size."}
                </p>
              </div>
            )}

            {/* Current Performance (if revenue provided) */}
            {monthlyRevenue > 0 && (
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-4">💰 Your Current Performance</h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Monthly Revenue</p>
                    <p className="text-2xl font-bold text-blue-600">${monthlyRevenue.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Monthly Customers</p>
                    <p className="text-2xl font-bold text-blue-600">{Math.ceil(currentCustomers).toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Net Profit</p>
                    <p className={`text-2xl font-bold ${currentProfit > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      ${currentProfit.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg p-8 text-center text-white">
        <h3 className="text-2xl font-bold mb-4">Want Real-Time Break-Even Tracking?</h3>
        <p className="text-lg mb-6 text-blue-100">
          OwnerClone automatically tracks your break-even point daily based on actual POS data
        </p>
        <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors">
          Start Free Trial →
        </button>
      </div>
    </div>
  );
}
