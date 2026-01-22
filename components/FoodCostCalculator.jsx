'use client';

import { useState } from 'react';

export default function FoodCostCalculator() {
  const [ingredients, setIngredients] = useState([
    { name: '', cost: '', yield: 100 }
  ]);
  const [portionSize, setPortionSize] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');

  const addIngredient = () => {
    setIngredients([...ingredients, { name: '', cost: '', yield: 100 }]);
  };

  const removeIngredient = (index) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  const updateIngredient = (index, field, value) => {
    const updated = [...ingredients];
    updated[index][field] = value;
    setIngredients(updated);
  };

  // Calculate total recipe cost
  const totalRecipeCost = ingredients.reduce((sum, ing) => {
    const cost = parseFloat(ing.cost) || 0;
    const yieldPercent = parseFloat(ing.yield) || 100;
    return sum + (cost * (yieldPercent / 100));
  }, 0);

  // Calculate per-portion cost
  const portions = parseFloat(portionSize) || 1;
  const costPerPortion = totalRecipeCost / portions;

  // Calculate food cost percentage
  const price = parseFloat(sellingPrice) || 0;
  const foodCostPercent = price > 0 ? (costPerPortion / price) * 100 : 0;

  // Determine health status
  const getHealthStatus = () => {
    if (foodCostPercent <= 28) return { label: 'Excellent', color: 'text-green-600', bg: 'bg-green-50' };
    if (foodCostPercent <= 32) return { label: 'Good', color: 'text-blue-600', bg: 'bg-blue-50' };
    if (foodCostPercent <= 35) return { label: 'Fair', color: 'text-yellow-600', bg: 'bg-yellow-50' };
    return { label: 'Critical', color: 'text-red-600', bg: 'bg-red-50' };
  };

  const health = getHealthStatus();

  // Get recommended selling price for target food cost %
  const getRecommendedPrice = (targetPercent) => {
    return (costPerPortion / (targetPercent / 100)).toFixed(2);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          🍽️ Restaurant Food Cost Calculator
        </h1>
        <p className="text-xl text-gray-600">
          Calculate recipe costs, portion pricing, and food cost percentage
        </p>
      </div>

      {/* Main Calculator Card */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        
        {/* Ingredients Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Recipe Ingredients</h2>
          
          {ingredients.map((ingredient, index) => (
            <div key={index} className="grid grid-cols-12 gap-4 mb-4">
              <input
                type="text"
                placeholder="Ingredient name"
                value={ingredient.name}
                onChange={(e) => updateIngredient(index, 'name', e.target.value)}
                className="col-span-5 px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              />
              <div className="col-span-3 relative">
                <span className="absolute left-4 top-3.5 text-gray-500">$</span>
                <input
                  type="number"
                  placeholder="Cost"
                  value={ingredient.cost}
                  onChange={(e) => updateIngredient(index, 'cost', e.target.value)}
                  className="w-full pl-8 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  step="0.01"
                />
              </div>
              <div className="col-span-3 relative">
                <input
                  type="number"
                  placeholder="Yield %"
                  value={ingredient.yield}
                  onChange={(e) => updateIngredient(index, 'yield', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  min="0"
                  max="100"
                />
                <span className="absolute right-4 top-3.5 text-gray-500">%</span>
              </div>
              {ingredients.length > 1 && (
                <button
                  onClick={() => removeIngredient(index)}
                  className="col-span-1 text-red-500 hover:text-red-700 text-2xl"
                >
                  ×
                </button>
              )}
            </div>
          ))}

          <button
            onClick={addIngredient}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            + Add Ingredient
          </button>
        </div>

        {/* Portion & Pricing Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Number of Portions
            </label>
            <input
              type="number"
              value={portionSize}
              onChange={(e) => setPortionSize(e.target.value)}
              placeholder="e.g., 8"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              min="1"
            />
            <p className="text-xs text-gray-500 mt-1">How many servings does this recipe make?</p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Menu Selling Price
            </label>
            <div className="relative">
              <span className="absolute left-4 top-3.5 text-gray-500">$</span>
              <input
                type="number"
                value={sellingPrice}
                onChange={(e) => setSellingPrice(e.target.value)}
                placeholder="e.g., 18.99"
                className="w-full pl-8 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                step="0.01"
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">What do you charge for this dish?</p>
          </div>
        </div>

        {/* Results Section */}
        {costPerPortion > 0 && (
          <div className="border-t-2 border-gray-200 pt-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">📊 Results</h3>
            
            {/* Key Metrics */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Total Recipe Cost</p>
                <p className="text-3xl font-bold text-gray-900">${totalRecipeCost.toFixed(2)}</p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Cost Per Portion</p>
                <p className="text-3xl font-bold text-gray-900">${costPerPortion.toFixed(2)}</p>
              </div>
              
              <div className={`${health.bg} p-6 rounded-lg border-2 ${health.color.replace('text-', 'border-')}`}>
                <p className="text-sm text-gray-600 mb-1">Food Cost %</p>
                <p className={`text-3xl font-bold ${health.color}`}>{foodCostPercent.toFixed(1)}%</p>
                <p className={`text-sm font-semibold ${health.color} mt-1`}>{health.label}</p>
              </div>
            </div>

            {/* Industry Benchmarks */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-bold text-gray-900 mb-4">📈 Industry Benchmarks</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Excellent (Fine Dining)</span>
                  <span className="font-semibold text-green-600">28% or less</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Good (Most Restaurants)</span>
                  <span className="font-semibold text-blue-600">28-32%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Fair (Needs Work)</span>
                  <span className="font-semibold text-yellow-600">32-35%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Critical (Losing Money)</span>
                  <span className="font-semibold text-red-600">35%+</span>
                </div>
              </div>
            </div>

            {/* Pricing Recommendations */}
            {foodCostPercent > 32 && (
              <div className="bg-yellow-50 border-2 border-yellow-200 p-6 rounded-lg mb-8">
                <h4 className="font-bold text-gray-900 mb-4">💡 Pricing Recommendations</h4>
                <p className="text-gray-700 mb-4">Your food cost is higher than recommended. Consider these pricing strategies:</p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">For 28% Food Cost</p>
                    <p className="text-2xl font-bold text-green-600">${getRecommendedPrice(28)}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">For 30% Food Cost</p>
                    <p className="text-2xl font-bold text-blue-600">${getRecommendedPrice(30)}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">For 32% Food Cost</p>
                    <p className="text-2xl font-bold text-yellow-600">${getRecommendedPrice(32)}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Profit Analysis */}
            {price > 0 && (
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-4">💰 Profit Analysis</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Gross Profit Per Dish</p>
                    <p className="text-2xl font-bold text-green-600">${(price - costPerPortion).toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">If You Sell 100 Per Week</p>
                    <p className="text-2xl font-bold text-green-600">${((price - costPerPortion) * 100).toFixed(2)}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg p-8 text-center text-white">
        <h3 className="text-2xl font-bold mb-4">Want Automated Food Cost Tracking?</h3>
        <p className="text-lg mb-6 text-blue-100">
          OwnerClone automatically calculates food costs from your invoices and POS data
        </p>
        <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors">
          Start Free Trial →
        </button>
      </div>
    </div>
  );
}
