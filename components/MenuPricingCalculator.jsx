'use client';

import { useState } from 'react';

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
  const calculateMargins = (price) => {
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
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          💵 Menu Pricing Calculator
        </h1>
        <p className="text-xl text-gray-600">
          Find the optimal price for maximum profitability
        </p>
      </div>

      {/* Main Calculator Card */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        
        {/* Item Details */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🍽️ Menu Item Details</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Item Name</label>
              <input
                type="text"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                placeholder="e.g., Grilled Salmon"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Ingredient Cost (Food Cost)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-3.5 text-gray-500">$</span>
                  <input
                    type="number"
                    value={ingredientCost}
                    onChange={(e) => setIngredientCost(e.target.value)}
                    placeholder="8.50"
                    className="w-full pl-8 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                    step="0.01"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">Total cost of all ingredients per plate</p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Labor Cost Per Plate
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-3.5 text-gray-500">$</span>
                  <input
                    type="number"
                    value={laborCost}
                    onChange={(e) => setLaborCost(e.target.value)}
                    placeholder="3.00"
                    className="w-full pl-8 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                    step="0.01"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">Kitchen labor cost to prepare this dish</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Overhead Percentage
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={overheadPercent}
                    onChange={(e) => setOverheadPercent(e.target.value)}
                    placeholder="20"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                    min="0"
                    max="50"
                  />
                  <span className="absolute right-4 top-3.5 text-gray-500">%</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Rent, utilities, insurance (typically 15-25%)</p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Target Food Cost %
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={targetFoodCost}
                    onChange={(e) => setTargetFoodCost(e.target.value)}
                    placeholder="30"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
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
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Total Cost Per Plate</p>
              <p className="text-2xl font-bold text-gray-900">${totalCost.toFixed(2)}</p>
            </div>
          )}
        </div>

        {/* Pricing Strategies */}
        {totalCost > 0 && (
          <div className="border-t-2 border-gray-200 pt-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">💰 Pricing Strategy Analysis</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {strategies.map((strategy, index) => {
                const isRecommended = recommended && strategy.name === recommended.name;
                
                return (
                  <div 
                    key={index} 
                    className={`p-6 rounded-lg border-2 ${
                      isRecommended 
                        ? 'border-green-500 bg-green-50' 
                        : 'border-gray-200 bg-white'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">{strategy.name}</h4>
                        <p className="text-sm text-gray-600">{strategy.description}</p>
                      </div>
                      {isRecommended && (
                        <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                          RECOMMENDED
                        </span>
                      )}
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-3xl font-bold text-gray-900">
                        ${strategy.price.toFixed(2)}
                      </p>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Food Cost %:</span>
                        <span className={`font-semibold ${
                          strategy.foodCostPercent < 32 ? 'text-green-600' : 
                          strategy.foodCostPercent < 35 ? 'text-yellow-600' : 'text-red-600'
                        }`}>
                          {strategy.foodCostPercent.toFixed(1)}%
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Labor %:</span>
                        <span className="font-semibold text-gray-900">
                          {strategy.laborPercent.toFixed(1)}%
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Profit Per Plate:</span>
                        <span className={`font-semibold ${
                          strategy.profit > 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          ${strategy.profit.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Profit Margin:</span>
                        <span className={`font-semibold ${
                          strategy.profitMargin > 20 ? 'text-green-600' : 
                          strategy.profitMargin > 15 ? 'text-yellow-600' : 'text-red-600'
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
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h4 className="font-bold text-gray-900 mb-4">🧠 Psychological Pricing Tips</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Charm Pricing</p>
                    <p className="text-2xl font-bold text-blue-600">
                      ${(Math.floor(recommended.price) - 0.01).toFixed(2)}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Ends in .99 (feels cheaper)</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Prestige Pricing</p>
                    <p className="text-2xl font-bold text-blue-600">
                      ${Math.ceil(recommended.price).toFixed(0)}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Round number (premium feel)</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Mid-Point Sweet Spot</p>
                    <p className="text-2xl font-bold text-blue-600">
                      ${(Math.floor(recommended.price) + 0.50).toFixed(2)}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Ends in .50 (balanced)</p>
                  </div>
                </div>
              </div>
            )}

            {/* Volume Profitability */}
            {recommended && (
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-4">📈 Volume Profitability Projection</h4>
                <p className="text-gray-700 mb-4">
                  At ${recommended.price.toFixed(2)} per plate with ${recommended.profit.toFixed(2)} profit margin:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Sell 50/week</p>
                    <p className="text-2xl font-bold text-green-600">
                      ${(recommended.profit * 50).toFixed(0)}/week
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Sell 200/month</p>
                    <p className="text-2xl font-bold text-green-600">
                      ${(recommended.profit * 200).toFixed(0)}/month
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Sell 2,400/year</p>
                    <p className="text-2xl font-bold text-green-600">
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
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg p-8 text-center text-white">
        <h3 className="text-2xl font-bold mb-4">Want AI-Powered Menu Engineering?</h3>
        <p className="text-lg mb-6 text-blue-100">
          OwnerClone automatically analyzes every menu item and recommends optimal pricing based on sales data
        </p>
        <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors">
          Start Free Trial →
        </button>
      </div>
    </div>
  );
}
