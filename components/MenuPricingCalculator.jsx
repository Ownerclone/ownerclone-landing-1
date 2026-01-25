'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MenuPricingCalculator() {
  const [itemName, setItemName] = useState('');
  const [ingredientCost, setIngredientCost] = useState('');
  const [laborCost, setLaborCost] = useState('');
  const [overheadPercent, setOverheadPercent] = useState('20');
  const [targetFoodCost, setTargetFoodCost] = useState('30');

  const ingCost = parseFloat(ingredientCost) || 0;
  const labCost = parseFloat(laborCost) || 0;
  const overhead = parseFloat(overheadPercent) || 0;
  const targetFC = parseFloat(targetFoodCost) || 0;

  // Total cost per plate
  const totalCost = ingCost + labCost;
  
  // Pricing strategies
  const costPlusPrice = totalCost * 3; // Industry standard 3x multiplier
  const targetFoodCostPrice = targetFC > 0 ? (ingCost / (targetFC / 100)) : 0;
  const competitorPrice = totalCost * 2.5; // Conservative competitor pricing
  const premiumPrice = totalCost * 3.5; // Premium positioning

  // Calculate margins for each strategy
  const calculateMargins = (price: number) => {
    const foodCostPercent = price > 0 ? (ingCost / price) * 100 : 0;
    const laborPercent = price > 0 ? (labCost / price) * 100 : 0;
    const overheadAmount = price * (overhead / 100);
    const profit = price - ingCost - labCost - overheadAmount;
    const profitMargin = price > 0 ? (profit / price) * 100 : 0;
    
    return { foodCostPercent, laborPercent, profit, profitMargin };
  };

  const strategies = [
    {
      name: 'Cost-Plus (3x)',
      price: costPlusPrice,
      description: 'Traditional 3x food cost multiplier',
      ...calculateMargins(costPlusPrice)
    },
    {
      name: 'Target Food Cost',
      price: targetFoodCostPrice,
      description: `Price to hit ${targetFC}% food cost`,
      ...calculateMargins(targetFoodCostPrice)
    },
    {
      name: 'Competitive',
      price: competitorPrice,
      description: 'Market-based pricing (2.5x)',
      ...calculateMargins(competitorPrice)
    },
    {
      name: 'Premium',
      price: premiumPrice,
      description: 'Premium positioning (3.5x)',
      ...calculateMargins(premiumPrice)
    }
  ];

  const getRecommendedStrategy = () => {
    const viable = strategies.filter(s => s.profitMargin > 15 && s.foodCostPercent < 35);
    if (viable.length === 0) return strategies[0];
    return viable.reduce((best, current) => 
      current.profitMargin > best.profitMargin ? current : best
    );
  };

  const recommended = totalCost > 0 ? getRecommendedStrategy() : null;

  return (
    <div className="min-h-screen text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Menu Pricing <span className="text-[#a855f7]">Calculator</span>
          </h1>
          <p className="text-xl text-gray-300">
            Find the optimal price for maximum profitability
          </p>
        </div>
      </section>

      <section className="relative py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Calculator Card */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 mb-8 shadow-[0_0_50px_rgba(168,85,247,0.1)]">
            
            {/* Item Details */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6">Menu Item Details</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Item Name</label>
                  <input
                    type="text"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                    placeholder="e.g., Grilled Salmon"
                    className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#a855f7] focus:outline-none text-white transition-colors"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Ingredient Cost (Food Cost)
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-3.5 text-gray-500">$</span>
                      <input
                        type="number"
                        value={ingredientCost}
                        onChange={(e) => setIngredientCost(e.target.value)}
                        placeholder="8.50"
                        className="w-full pl-8 pr-4 py-3 backdrop-blur-xl bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#a855f7] focus:outline-none text-white transition-colors"
                        step="0.01"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Total cost of all ingredients per plate</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Labor Cost Per Plate
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-3.5 text-gray-500">$</span>
                      <input
                        type="number"
                        value={laborCost}
                        onChange={(e) => setLaborCost(e.target.value)}
                        placeholder="3.00"
                        className="w-full pl-8 pr-4 py-3 backdrop-blur-xl bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#a855f7] focus:outline-none text-white transition-colors"
                        step="0.01"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Kitchen labor cost to prepare this dish</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Overhead Percentage
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={overheadPercent}
                        onChange={(e) => setOverheadPercent(e.target.value)}
                        placeholder="20"
                        className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#a855f7] focus:outline-none text-white transition-colors"
                        min="0"
                        max="50"
                      />
                      <span className="absolute right-4 top-3.5 text-gray-500">%</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Rent, utilities, insurance (typically 15-25%)</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Target Food Cost %
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={targetFoodCost}
                        onChange={(e) => setTargetFoodCost(e.target.value)}
                        placeholder="30"
                        className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border-2 border-white/10 rounded-lg focus:border-[#a855f7] focus:outline-none text-white transition-colors"
                        min="0"
                        max="100"
                      />
                      <span className="absolute right-4 top-3.5 text-gray-500">%</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Ideal food cost percentage (28-32% typical)</p>
                  </div>
                </div>
              </div>

              {totalCost > 0 && (
                <div className="mt-6 p-4 backdrop-blur-xl bg-[#a855f7]/10 border border-[#a855f7]/30 rounded-lg">
                  <p className="text-sm text-gray-300">Total Cost Per Plate</p>
                  <p className="text-2xl font-bold text-[#a855f7]">${totalCost.toFixed(2)}</p>
                </div>
              )}
            </div>

            {/* Pricing Strategies */}
            {totalCost > 0 && (
              <div className="border-t-2 border-white/10 pt-8">
                <h3 className="text-2xl font-bold mb-6">Pricing Strategy Analysis</h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {strategies.map((strategy, index) => {
                    const isRecommended = recommended && strategy.name === recommended.name;
                    
                    return (
                      <div 
                        key={index} 
                        className={`p-6 rounded-lg border-2 backdrop-blur-xl ${
                          isRecommended 
                            ? 'border-[#10b981] bg-[#10b981]/10' 
                            : 'border-white/10 bg-white/5'
                        }`}
                      >
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="text-lg font-bold text-white">{strategy.name}</h4>
                            <p className="text-sm text-gray-400">{strategy.description}</p>
                          </div>
                          {isRecommended && (
                            <span className="bg-[#10b981] text-white text-xs font-bold px-2 py-1 rounded">
                              RECOMMENDED
                            </span>
                          )}
                        </div>
                        
                        <div className="mb-4">
                          <p className="text-3xl font-bold text-white">
                            ${strategy.price.toFixed(2)}
                          </p>
                        </div>

                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Food Cost %:</span>
                            <span className={`font-semibold ${
                              strategy.foodCostPercent < 32 ? 'text-[#10b981]' : 
                              strategy.foodCostPercent < 35 ? 'text-[#fbbf24]' : 'text-[#ef4444]'
                            }`}>
                              {strategy.foodCostPercent.toFixed(1)}%
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Labor %:</span>
                            <span className="font-semibold text-white">
                              {strategy.laborPercent.toFixed(1)}%
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Profit Per Plate:</span>
                            <span className={`font-semibold ${
                              strategy.profit > 0 ? 'text-[#10b981]' : 'text-[#ef4444]'
                            }`}>
                              ${strategy.profit.toFixed(2)}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Profit Margin:</span>
                            <span className={`font-semibold ${
                              strategy.profitMargin > 20 ? 'text-[#10b981]' : 
                              strategy.profitMargin > 15 ? 'text-[#fbbf24]' : 'text-[#ef4444]'
                            }`}>
                              {strategy.profitMargin.toFixed(1)}%
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Psychological Pricing Tips */}
                {recommended && (
                  <div className="backdrop-blur-xl bg-[#38bdf8]/10 border border-[#38bdf8]/30 p-6 rounded-lg mb-8">
                    <h4 className="font-bold text-xl text-white mb-4">Psychological Pricing Tips</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="backdrop-blur-xl bg-black/40 border border-white/10 p-4 rounded-lg">
                        <p className="text-sm text-gray-400 mb-1">Charm Pricing</p>
                        <p className="text-2xl font-bold text-[#38bdf8]">
                          ${(Math.floor(recommended.price) - 0.01).toFixed(2)}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">Ends in .99 (feels cheaper)</p>
                      </div>
                      <div className="backdrop-blur-xl bg-black/40 border border-white/10 p-4 rounded-lg">
                        <p className="text-sm text-gray-400 mb-1">Prestige Pricing</p>
                        <p className="text-2xl font-bold text-[#38bdf8]">
                          ${Math.ceil(recommended.price).toFixed(0)}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">Round number (premium feel)</p>
                      </div>
                      <div className="backdrop-blur-xl bg-black/40 border border-white/10 p-4 rounded-lg">
                        <p className="text-sm text-gray-400 mb-1">Mid-Point Sweet Spot</p>
                        <p className="text-2xl font-bold text-[#38bdf8]">
                          ${(Math.floor(recommended.price) + 0.50).toFixed(2)}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">Ends in .50 (balanced)</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Volume Profitability */}
                {recommended && (
                  <div className="backdrop-blur-xl bg-[#10b981]/10 border border-[#10b981]/30 p-6 rounded-lg">
                    <h4 className="font-bold text-xl text-white mb-4">Volume Profitability Projection</h4>
                    <p className="text-gray-300 mb-4">
                      At ${recommended.price.toFixed(2)} per plate with ${recommended.profit.toFixed(2)} profit margin:
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm text-gray-400 mb-1">Sell 50/week</p>
                        <p className="text-2xl font-bold text-[#10b981]">
                          ${(recommended.profit * 50).toFixed(0)}/week
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 mb-1">Sell 200/month</p>
                        <p className="text-2xl font-bold text-[#10b981]">
                          ${(recommended.profit * 200).toFixed(0)}/month
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 mb-1">Sell 2,400/year</p>
                        <p className="text-2xl font-bold text-[#10b981]">
                          ${(recommended.profit * 2400).toFixed(0)}/year
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* CTA Section */}
          <div className="backdrop-blur-xl bg-gradient-to-br from-[#a855f7]/20 to-[#c084fc]/20 border-2 border-[#a855f7] rounded-3xl p-8 text-center shadow-[0_0_80px_rgba(168,85,247,0.15)]">
            <h2 className="text-2xl font-bold mb-4">Want AI-Powered <span className="text-[#a855f7]">Menu Engineering</span>?</h2>
            <p className="text-lg text-gray-300 mb-6">
              OwnerClone automatically analyzes every menu item and recommends optimal pricing based on sales data
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing" className="bg-[#a855f7] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#9333ea] transition-colors">
                Join Early Access
              </Link>
              <Link href="/blog" className="border-2 border-[#a855f7] text-[#a855f7] px-8 py-3 rounded-lg font-bold hover:bg-[#a855f7]/10 transition-colors">
                Read Complete Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
