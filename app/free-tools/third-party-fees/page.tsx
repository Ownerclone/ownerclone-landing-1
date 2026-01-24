'use client';

import { useState } from 'react';
import Link from 'next/link';

interface PlatformFees {
  name: string;
  commission: number;
  serviceFee: number;
  marketingFee: number;
  paymentProcessing: { percent: number; fixed: number };
  color: string;
}

const defaultPlatforms: { [key: string]: PlatformFees } = {
  doordash: {
    name: 'DoorDash',
    commission: 30,
    serviceFee: 3.5,
    marketingFee: 15,
    paymentProcessing: { percent: 2.9, fixed: 0.30 },
    color: 'red'
  },
  ubereats: {
    name: 'Uber Eats',
    commission: 30,
    serviceFee: 0,
    marketingFee: 5,
    paymentProcessing: { percent: 2.9, fixed: 0.30 },
    color: 'green'
  },
  grubhub: {
    name: 'GrubHub',
    commission: 30,
    serviceFee: 10,
    marketingFee: 20,
    paymentProcessing: { percent: 3.05, fixed: 0.30 },
    color: 'orange'
  }
};

export default function ThirdPartyFeesCalculator() {
  const [selectedPlatform, setSelectedPlatform] = useState<string>('doordash');
  const [averageOrderValue, setAverageOrderValue] = useState<string>('45');
  const [ordersPerMonth, setOrdersPerMonth] = useState<string>('300');
  const [showResults, setShowResults] = useState(false);
  const [compareAll, setCompareAll] = useState(false);
  
  // Custom commission rates for each platform
  const [doordashCommission, setDoordashCommission] = useState<string>('30');
  const [ubereatsCommission, setUbereatsCommission] = useState<string>('30');
  const [grubhubCommission, setGrubhubCommission] = useState<string>('30');

  const getPlatformWithCustomCommission = (platformKey: string): PlatformFees => {
    const platform = { ...defaultPlatforms[platformKey] };
    
    switch(platformKey) {
      case 'doordash':
        platform.commission = parseFloat(doordashCommission) || 30;
        break;
      case 'ubereats':
        platform.commission = parseFloat(ubereatsCommission) || 30;
        break;
      case 'grubhub':
        platform.commission = parseFloat(grubhubCommission) || 30;
        break;
    }
    
    return platform;
  };

  const calculateFees = (platformKey: string, orderValue: number) => {
    const platform = getPlatformWithCustomCommission(platformKey);
    
    const commissionFee = (orderValue * platform.commission) / 100;
    const serviceFee = platform.serviceFee > 0 ? platform.serviceFee : 0;
    const marketingFee = platform.marketingFee;
    const paymentProcessingFee = (orderValue * platform.paymentProcessing.percent / 100) + platform.paymentProcessing.fixed;
    const totalFees = commissionFee + serviceFee + marketingFee + paymentProcessingFee;
    const netRevenue = orderValue - totalFees;
    const effectiveFeePercent = (totalFees / orderValue) * 100;
    
    return {
      orderValue,
      commissionFee,
      serviceFee,
      marketingFee,
      paymentProcessingFee,
      totalFees,
      netRevenue,
      effectiveFeePercent,
      commissionPercent: platform.commission
    };
  };

  const handleCalculate = () => {
    const orderValue = parseFloat(averageOrderValue);
    const orders = parseInt(ordersPerMonth);
    
    if (!orderValue || orderValue <= 0 || !orders || orders <= 0) {
      alert('Please enter valid values');
      return;
    }
    
    setShowResults(true);
  };

  const orderValue = parseFloat(averageOrderValue) || 0;
  const orders = parseInt(ordersPerMonth) || 0;
  
  const singlePlatformResult = calculateFees(selectedPlatform, orderValue);
  const monthlyLoss = singlePlatformResult.totalFees * orders;
  const annualLoss = monthlyLoss * 12;
  const monthlyNet = singlePlatformResult.netRevenue * orders;
  const annualNet = monthlyNet * 12;
  
  const directOrderProcessingFee = (orderValue * 2.9 / 100) + 0.30;
  const directOrderNet = orderValue - directOrderProcessingFee;
  const directMonthlyNet = directOrderNet * orders;
  const directAnnualNet = directMonthlyNet * 12;
  
  const savingsVsDirect = annualNet > 0 ? directAnnualNet - annualNet : 0;
  const monthsToPayback = savingsVsDirect > 0 ? Math.ceil((4000 / savingsVsDirect) * 12) : 0;

  const allPlatformsComparison = Object.keys(defaultPlatforms).map(key => ({
    key,
    ...getPlatformWithCustomCommission(key),
    calculation: calculateFees(key, orderValue)
  }));

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Animated Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#6366f1] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#8b5cf6] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1419] to-transparent pointer-events-none"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Third Party Delivery <span className="text-[#6366f1]">True Cost Calculator</span>
          </h1>
          <p className="text-xl text-gray-300">
            See the REAL fees you're paying DoorDash, Uber Eats & GrubHub
          </p>
        </div>
      </section>

      <section className="relative py-16 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Warning Box */}
          <div className="bg-[#ef4444]/10 border-l-4 border-[#ef4444] p-6 rounded-xl mb-8 backdrop-blur-xl">
            <h3 className="text-[#ef4444] font-bold text-lg mb-2">⚠️ Most Restaurant Owners Are Shocked By These Numbers</h3>
            <p className="text-gray-300">
              Third-party platforms advertise "15-20% commission" but the TRUE cost is often <strong className="text-[#ef4444]">40-50% of your order value</strong> after all fees, marketing, and promotions are added up. This calculator shows you the complete picture.
            </p>
          </div>

          {/* Calculator Inputs */}
          <div className="bg-[#0a0a0a]/40 backdrop-blur-xl border border-[#6366f1]/20 rounded-2xl p-8 mb-8 shadow-[0_0_50px_rgba(99,102,241,0.1)]">
            <h2 className="text-2xl font-bold text-[#6366f1] mb-6">Your Numbers</h2>

            <div className="space-y-6">
              {/* Platform Selection with Commission Input */}
              <div>
                <label className="block font-semibold text-gray-300 mb-3">Select Delivery Platform & Enter Your Commission Rate</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* DoorDash */}
                  <div
                    onClick={() => setSelectedPlatform('doordash')}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition backdrop-blur-xl ${
                      selectedPlatform === 'doordash'
                        ? 'border-[#ef4444] bg-[#ef4444]/10'
                        : 'border-[#2a2a2a] bg-[#0a0a0a]/60 hover:border-[#ef4444]/50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-bold text-lg">🔴 DoorDash</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="number"
                        min="0"
                        max="100"
                        step="0.1"
                        value={doordashCommission}
                        onChange={(e) => setDoordashCommission(e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                        className="w-20 px-2 py-1 bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded text-center text-white focus:border-[#ef4444] focus:outline-none transition-colors"
                      />
                      <span className="text-gray-400">% commission</span>
                    </div>
                  </div>

                  {/* Uber Eats */}
                  <div
                    onClick={() => setSelectedPlatform('ubereats')}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition backdrop-blur-xl ${
                      selectedPlatform === 'ubereats'
                        ? 'border-[#10b981] bg-[#10b981]/10'
                        : 'border-[#2a2a2a] bg-[#0a0a0a]/60 hover:border-[#10b981]/50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-bold text-lg">🟢 Uber Eats</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="number"
                        min="0"
                        max="100"
                        step="0.1"
                        value={ubereatsCommission}
                        onChange={(e) => setUbereatsCommission(e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                        className="w-20 px-2 py-1 bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded text-center text-white focus:border-[#10b981] focus:outline-none transition-colors"
                      />
                      <span className="text-gray-400">% commission</span>
                    </div>
                  </div>

                  {/* GrubHub */}
                  <div
                    onClick={() => setSelectedPlatform('grubhub')}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition backdrop-blur-xl ${
                      selectedPlatform === 'grubhub'
                        ? 'border-[#fb923c] bg-[#fb923c]/10'
                        : 'border-[#2a2a2a] bg-[#0a0a0a]/60 hover:border-[#fb923c]/50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-bold text-lg">🟠 GrubHub</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="number"
                        min="0"
                        max="100"
                        step="0.1"
                        value={grubhubCommission}
                        onChange={(e) => setGrubhubCommission(e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                        className="w-20 px-2 py-1 bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded text-center text-white focus:border-[#fb923c] focus:outline-none transition-colors"
                      />
                      <span className="text-gray-400">% commission</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-3">💡 Tip: Enter your actual negotiated commission rate. Default is 30% for all platforms.</p>
              </div>

              {/* Average Order Value */}
              <div>
                <label className="block font-semibold text-gray-300 mb-2">Average Order Value ($)</label>
                <input
                  type="number"
                  min="1"
                  step="0.01"
                  placeholder="e.g., 45.00"
                  value={averageOrderValue}
                  onChange={(e) => setAverageOrderValue(e.target.value)}
                  className="w-full px-4 py-3 bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg text-white text-lg focus:border-[#6366f1] focus:outline-none transition-colors"
                />
                <p className="text-sm text-gray-500 mt-2">💡 Tip: Check your POS reports for average delivery order size</p>
              </div>

              {/* Orders Per Month */}
              <div>
                <label className="block font-semibold text-gray-300 mb-2">Orders Per Month</label>
                <input
                  type="number"
                  min="1"
                  placeholder="e.g., 300"
                  value={ordersPerMonth}
                  onChange={(e) => setOrdersPerMonth(e.target.value)}
                  className="w-full px-4 py-3 bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg text-white text-lg focus:border-[#6366f1] focus:outline-none transition-colors"
                />
              </div>

              {/* Compare All Toggle */}
              <div className="flex items-center space-x-3 p-4 bg-[#0a0a0a]/60 border border-[#2a2a2a] rounded-lg">
                <input
                  type="checkbox"
                  id="compareAll"
                  checked={compareAll}
                  onChange={(e) => setCompareAll(e.target.checked)}
                  className="w-5 h-5 text-[#6366f1] bg-[#0a0a0a] border-[#2a2a2a] rounded focus:ring-[#6366f1]"
                />
                <label htmlFor="compareAll" className="font-semibold text-gray-300 cursor-pointer">
                  Compare all platforms side-by-side
                </label>
              </div>
            </div>

            <button
              onClick={handleCalculate}
              className="w-full mt-8 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white py-4 rounded-lg text-lg font-semibold hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all"
            >
              Calculate True Cost
            </button>
          </div>

          {/* Results Section */}
          {showResults && (
            <div className="space-y-8 animate-fadeIn">
              {!compareAll ? (
                // Single Platform Results
                <>
                  {/* Fee Breakdown */}
                  <div className="bg-[#0a0a0a]/40 backdrop-blur-xl border border-[#6366f1]/20 rounded-2xl p-8 shadow-[0_0_50px_rgba(99,102,241,0.1)]">
                    <h3 className="text-2xl font-bold text-[#6366f1] mb-6">
                      💸 {getPlatformWithCustomCommission(selectedPlatform).name} Fee Breakdown (Per Order)
                    </h3>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-3 border-b border-[#2a2a2a]">
                        <span className="text-gray-300 font-medium">Order Subtotal</span>
                        <span className="text-2xl font-bold text-white">${orderValue.toFixed(2)}</span>
                      </div>

                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-400">Commission ({singlePlatformResult.commissionPercent}%)</span>
                        <span className="text-[#ef4444] font-semibold">-${singlePlatformResult.commissionFee.toFixed(2)}</span>
                      </div>

                      {singlePlatformResult.serviceFee > 0 && (
                        <div className="flex justify-between items-center py-2">
                          <span className="text-gray-400">Service Fee</span>
                          <span className="text-[#ef4444] font-semibold">-${singlePlatformResult.serviceFee.toFixed(2)}</span>
                        </div>
                      )}

                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-400">Marketing/Promotions</span>
                        <span className="text-[#ef4444] font-semibold">-${singlePlatformResult.marketingFee.toFixed(2)}</span>
                      </div>

                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-400">Payment Processing</span>
                        <span className="text-[#ef4444] font-semibold">-${singlePlatformResult.paymentProcessingFee.toFixed(2)}</span>
                      </div>

                      <div className="flex justify-between items-center py-3 border-t-2 border-[#6366f1] mt-4">
                        <span className="text-gray-300 font-bold">Total Fees</span>
                        <span className="text-2xl font-bold text-[#ef4444]">-${singlePlatformResult.totalFees.toFixed(2)}</span>
                      </div>

                      <div className="flex justify-between items-center py-3 bg-[#10b981]/10 rounded-xl px-4 border-2 border-[#10b981]">
                        <span className="text-gray-300 font-bold">You Actually Receive</span>
                        <span className="text-3xl font-bold text-[#10b981]">${singlePlatformResult.netRevenue.toFixed(2)}</span>
                      </div>

                      <div className="bg-[#ef4444]/10 border border-[#ef4444]/30 rounded-xl p-4 mt-4">
                        <p className="text-[#ef4444] font-bold text-center">
                          Effective Fee Rate: {singlePlatformResult.effectiveFeePercent.toFixed(1)}% of order value
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Monthly/Annual Impact */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-[#fb923c]/10 border-l-4 border-[#fb923c] p-6 rounded-xl backdrop-blur-xl">
                      <h4 className="text-lg font-bold text-[#fb923c] mb-3">📅 Monthly Impact</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Gross Revenue</span>
                          <span className="font-semibold text-white">${(orderValue * orders).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Total Fees Paid</span>
                          <span className="font-semibold text-[#ef4444]">-${monthlyLoss.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between pt-2 border-t border-[#2a2a2a]">
                          <span className="text-gray-300 font-bold">Net Revenue</span>
                          <span className="font-bold text-[#10b981]">${monthlyNet.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#ef4444]/10 border-l-4 border-[#ef4444] p-6 rounded-xl backdrop-blur-xl">
                      <h4 className="text-lg font-bold text-[#ef4444] mb-3">📆 Annual Impact</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Gross Revenue</span>
                          <span className="font-semibold text-white">${(orderValue * orders * 12).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Total Fees Paid</span>
                          <span className="font-semibold text-[#ef4444]">-${annualLoss.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between pt-2 border-t border-[#2a2a2a]">
                          <span className="text-gray-300 font-bold">Net Revenue</span>
                          <span className="font-bold text-[#10b981]">${annualNet.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Direct Ordering Comparison */}
                  <div className="bg-gradient-to-br from-[#10b981]/20 to-[#059669]/20 border-2 border-[#10b981] rounded-2xl p-8 backdrop-blur-xl shadow-[0_0_80px_rgba(16,185,129,0.15)]">
                    <h3 className="text-2xl font-bold text-[#10b981] mb-6">
                      🎯 What If You Had Direct Online Ordering?
                    </h3>

                    <div className="grid md:grid-cols-3 gap-6 mb-6">
                      <div className="bg-[#0a0a0a]/60 backdrop-blur-xl border border-[#2a2a2a] rounded-xl p-6 text-center">
                        <div className="text-sm text-gray-400 mb-2">Processing Fee Only</div>
                        <div className="text-3xl font-bold text-white">${directOrderProcessingFee.toFixed(2)}</div>
                        <div className="text-xs text-gray-500 mt-1">per order</div>
                      </div>

                      <div className="bg-[#0a0a0a]/60 backdrop-blur-xl border border-[#2a2a2a] rounded-xl p-6 text-center">
                        <div className="text-sm text-gray-400 mb-2">You'd Receive</div>
                        <div className="text-3xl font-bold text-[#10b981]">${directOrderNet.toFixed(2)}</div>
                        <div className="text-xs text-gray-500 mt-1">per order</div>
                      </div>

                      <div className="bg-[#0a0a0a]/60 backdrop-blur-xl border border-[#2a2a2a] rounded-xl p-6 text-center">
                        <div className="text-sm text-gray-400 mb-2">Annual Savings</div>
                        <div className="text-3xl font-bold text-[#10b981]">${savingsVsDirect.toLocaleString()}</div>
                        <div className="text-xs text-gray-500 mt-1">vs {getPlatformWithCustomCommission(selectedPlatform).name}</div>
                      </div>
                    </div>

                    <div className="bg-[#0a0a0a]/60 backdrop-blur-xl border border-[#10b981]/30 rounded-xl p-6">
                      <h4 className="font-bold text-white mb-3">💡 ROI Analysis</h4>
                      <div className="space-y-2 text-gray-300">
                        <p>• <strong className="text-[#10b981]">Have OwnerClone create a custom website with integrated ordering.</strong> With your numbers, this pays for itself in {monthsToPayback} {monthsToPayback === 1 ? 'month' : 'months'}.</p>
                        <p>• Keep 97%+ of every order (vs 50-60% on third-party)</p>
                        <p>• Build your own customer database</p>
                        <p>• Control the entire customer experience</p>
                        <p>• No commission increases or surprise fees</p>
                        <p className="pt-3 border-t border-[#2a2a2a] mt-3 font-semibold text-[#10b981]">
                          You'd save ${savingsVsDirect.toLocaleString()} EVERY YEAR with direct ordering
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                // All Platforms Comparison
                <div className="bg-[#0a0a0a]/40 backdrop-blur-xl border border-[#6366f1]/20 rounded-2xl p-8 shadow-[0_0_50px_rgba(99,102,241,0.1)]">
                  <h3 className="text-2xl font-bold text-white mb-6">📊 Platform Comparison</h3>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-[#0a0a0a]/60">
                          <th className="p-3 text-left font-bold text-gray-300">Fee Type</th>
                          <th className="p-3 text-center font-bold text-[#ef4444]">DoorDash</th>
                          <th className="p-3 text-center font-bold text-[#10b981]">Uber Eats</th>
                          <th className="p-3 text-center font-bold text-[#fb923c]">GrubHub</th>
                        </tr>
                      </thead>
                      <tbody className="bg-[#0a0a0a]/40">
                        <tr className="border-b border-[#2a2a2a]">
                          <td className="p-3 font-semibold text-gray-300">Commission</td>
                          <td className="p-3 text-center text-gray-300">${allPlatformsComparison[0].calculation.commissionFee.toFixed(2)} ({allPlatformsComparison[0].calculation.commissionPercent}%)</td>
                          <td className="p-3 text-center text-gray-300">${allPlatformsComparison[1].calculation.commissionFee.toFixed(2)} ({allPlatformsComparison[1].calculation.commissionPercent}%)</td>
                          <td className="p-3 text-center text-gray-300">${allPlatformsComparison[2].calculation.commissionFee.toFixed(2)} ({allPlatformsComparison[2].calculation.commissionPercent}%)</td>
                        </tr>
                        <tr className="border-b border-[#2a2a2a]">
                          <td className="p-3 font-semibold text-gray-300">Service Fee</td>
                          <td className="p-3 text-center text-gray-300">${allPlatformsComparison[0].calculation.serviceFee.toFixed(2)}</td>
                          <td className="p-3 text-center text-gray-300">${allPlatformsComparison[1].calculation.serviceFee.toFixed(2)}</td>
                          <td className="p-3 text-center text-gray-300">${allPlatformsComparison[2].calculation.serviceFee.toFixed(2)}</td>
                        </tr>
                        <tr className="border-b border-[#2a2a2a]">
                          <td className="p-3 font-semibold text-gray-300">Marketing</td>
                          <td className="p-3 text-center text-gray-300">${allPlatformsComparison[0].calculation.marketingFee.toFixed(2)}</td>
                          <td className="p-3 text-center text-gray-300">${allPlatformsComparison[1].calculation.marketingFee.toFixed(2)}</td>
                          <td className="p-3 text-center text-gray-300">${allPlatformsComparison[2].calculation.marketingFee.toFixed(2)}</td>
                        </tr>
                        <tr className="border-b border-[#2a2a2a]">
                          <td className="p-3 font-semibold text-gray-300">Processing</td>
                          <td className="p-3 text-center text-gray-300">${allPlatformsComparison[0].calculation.paymentProcessingFee.toFixed(2)}</td>
                          <td className="p-3 text-center text-gray-300">${allPlatformsComparison[1].calculation.paymentProcessingFee.toFixed(2)}</td>
                          <td className="p-3 text-center text-gray-300">${allPlatformsComparison[2].calculation.paymentProcessingFee.toFixed(2)}</td>
                        </tr>
                        <tr className="bg-[#ef4444]/10 font-bold border-b border-[#2a2a2a]">
                          <td className="p-3 text-gray-300">Total Fees</td>
                          <td className="p-3 text-center text-[#ef4444]">${allPlatformsComparison[0].calculation.totalFees.toFixed(2)}</td>
                          <td className="p-3 text-center text-[#ef4444]">${allPlatformsComparison[1].calculation.totalFees.toFixed(2)}</td>
                          <td className="p-3 text-center text-[#ef4444]">${allPlatformsComparison[2].calculation.totalFees.toFixed(2)}</td>
                        </tr>
                        <tr className="bg-[#10b981]/10 font-bold border-b border-[#2a2a2a]">
                          <td className="p-3 text-gray-300">You Receive</td>
                          <td className="p-3 text-center text-[#10b981]">${allPlatformsComparison[0].calculation.netRevenue.toFixed(2)}</td>
                          <td className="p-3 text-center text-[#10b981]">${allPlatformsComparison[1].calculation.netRevenue.toFixed(2)}</td>
                          <td className="p-3 text-center text-[#10b981]">${allPlatformsComparison[2].calculation.netRevenue.toFixed(2)}</td>
                        </tr>
                        <tr className="bg-[#fb923c]/10 font-bold">
                          <td className="p-3 text-gray-300">Effective Rate</td>
                          <td className="p-3 text-center text-[#fb923c]">{allPlatformsComparison[0].calculation.effectiveFeePercent.toFixed(1)}%</td>
                          <td className="p-3 text-center text-[#fb923c]">{allPlatformsComparison[1].calculation.effectiveFeePercent.toFixed(1)}%</td>
                          <td className="p-3 text-center text-[#fb923c]">{allPlatformsComparison[2].calculation.effectiveFeePercent.toFixed(1)}%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-6 grid md:grid-cols-3 gap-4">
                    {allPlatformsComparison.map(platform => {
                      const annualFeesThisPlatform = platform.calculation.totalFees * orders * 12;
                      return (
                        <div key={platform.key} className="bg-[#0a0a0a]/60 backdrop-blur-xl rounded-xl p-4 text-center border-2 border-[#2a2a2a]">
                          <div className="font-bold text-gray-300 mb-2">{platform.name}</div>
                          <div className="text-sm text-gray-400 mb-1">Annual Fees</div>
                          <div className="text-2xl font-bold text-[#ef4444]">${annualFeesThisPlatform.toLocaleString()}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Action Items */}
              <div className="bg-[#0a0a0a]/40 backdrop-blur-xl border border-[#6366f1]/20 rounded-2xl p-8 shadow-[0_0_50px_rgba(99,102,241,0.1)]">
                <h3 className="text-2xl font-bold text-[#6366f1] mb-6">🎯 What You Can Do About This</h3>
                
                <div className="space-y-4">
                  <div className="bg-[#0a0a0a]/60 border-l-4 border-[#10b981] p-6 rounded-xl">
                    <h4 className="text-xl font-semibold text-white mb-3">1. Build Your Own Online Ordering</h4>
                    <p className="text-gray-300 mb-3">
                      Have OwnerClone create a custom website with integrated ordering. With your numbers, this pays for itself in {monthsToPayback} {monthsToPayback === 1 ? 'month' : 'months'}.
                    </p>
                    <ul className="space-y-2 text-gray-400 text-sm">
                      <li>• Keep 97%+ of every order (vs 50-60% on third-party)</li>
                      <li>• Build your own customer database</li>
                      <li>• Control the entire customer experience</li>
                      <li>• No commission increases or surprise fees</li>
                    </ul>
                  </div>

                  <div className="bg-[#0a0a0a]/60 border-l-4 border-[#38bdf8] p-6 rounded-xl">
                    <h4 className="text-xl font-semibold text-white mb-3">2. Renegotiate Your Rates</h4>
                    <p className="text-gray-300 mb-3">
                      Many restaurants don't realize commission rates are negotiable. If you do high volume:
                    </p>
                    <ul className="space-y-2 text-gray-400 text-sm">
                      <li>• Request a lower commission tier (can drop from 30% to 15%)</li>
                      <li>• Opt out of paid promotions/marketing</li>
                      <li>• Use "self-delivery" to avoid delivery fees</li>
                      <li>• Consider switching to a lower-cost platform</li>
                    </ul>
                  </div>

                  <div className="bg-[#0a0a0a]/60 border-l-4 border-[#a855f7] p-6 rounded-xl">
                    <h4 className="text-xl font-semibold text-white mb-3">3. Increase Delivery Menu Prices</h4>
                    <p className="text-gray-300 mb-3">
                      Most successful restaurants have separate pricing for delivery:
                    </p>
                    <ul className="space-y-2 text-gray-400 text-sm">
                      <li>• Add 20-30% to delivery menu prices to cover fees</li>
                      <li>• Customers expect delivery to cost more</li>
                      <li>• Protects your margins on unavoidable third-party orders</li>
                      <li>• Many competitors are already doing this</li>
                    </ul>
                  </div>

                  <div className="bg-[#0a0a0a]/60 border-l-4 border-[#fb923c] p-6 rounded-xl">
                    <h4 className="text-xl font-semibold text-white mb-3">4. Promote Direct Ordering Heavily</h4>
                    <p className="text-gray-300 mb-3">
                      Train your team and market aggressively to shift customers to direct:
                    </p>
                    <ul className="space-y-2 text-gray-400 text-sm">
                      <li>• QR codes on tables linking to your ordering site</li>
                      <li>• Offer 10% off for direct orders (still more profitable than third-party)</li>
                      <li>• Receipt inserts with direct ordering info</li>
                      <li>• Loyalty program exclusive to direct orders</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-12 bg-[#0a0a0a]/40 backdrop-blur-xl border-2 border-[#6366f1] rounded-3xl p-8 text-center shadow-[0_0_80px_rgba(99,102,241,0.15)]">
            <h2 className="text-2xl font-bold mb-4">Stop Giving Away <span className="text-[#6366f1]">Half Your Revenue</span></h2>
            <p className="text-lg text-gray-300 mb-6">
              OwnerClone helps you build direct customer relationships and keep more of what you earn.
            </p>
            <div className="bg-[#6366f1]/10 border border-[#6366f1]/30 rounded-xl p-6 mb-6 max-w-2xl mx-auto">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-1">✓</div>
                  <div className="text-sm text-gray-300">Custom Online Ordering</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">✓</div>
                  <div className="text-sm text-gray-300">Customer Database</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">✓</div>
                  <div className="text-sm text-gray-300">Loyalty Programs</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">✓</div>
                  <div className="text-sm text-gray-300">SMS Marketing</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing" className="bg-[#6366f1] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#4f46e5] transition-colors">
                Join Early Access
              </Link>
              <Link href="/free-tools" className="border-2 border-[#6366f1] text-[#6366f1] px-8 py-3 rounded-lg font-bold hover:bg-[#6366f1]/10 transition-colors">
                Try Other Calculators
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease;
        }
      `}</style>
    </div>
  );
}
