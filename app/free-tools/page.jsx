'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function BeerCostCalculator() {
  const [kegSize, setKegSize] = useState('half')
  const [kegCost, setKegCost] = useState('')
  const [servingSize, setServingSize] = useState('16')
  const [sellingPrice, setSellingPrice] = useState('')
  const [wasteFactor, setWasteFactor] = useState('10')

  // Keg sizes in gallons
  const kegSizes = {
    'sixth': { gallons: 5.16, name: '1/6 Barrel', description: '5.16 gallons' },
    'quarter': { gallons: 7.75, name: '1/4 Barrel', description: '7.75 gallons' },
    'half': { gallons: 15.5, name: '1/2 Barrel', description: '15.5 gallons' }
  }

  // Serving sizes in oz
  const servingSizes = {
    '10': { oz: 10, name: '10 oz (High Gravity)' },
    '12': { oz: 12, name: '12 oz (American)' },
    '16': { oz: 16, name: '16 oz (Pint)' },
    '20': { oz: 20, name: '20 oz (Imperial)' },
    '64': { oz: 64, name: '64 oz (Pitcher)' }
  }

  // Calculations
  const keg = kegSizes[kegSize]
  const serving = servingSizes[servingSize]
  const cost = parseFloat(kegCost) || 0
  const price = parseFloat(sellingPrice) || 0
  const waste = parseFloat(wasteFactor) || 10

  // Total oz in keg: gallons × 128
  const totalOz = keg.gallons * 128

  // Servings before waste
  const servingsBeforeWaste = Math.floor(totalOz / serving.oz)

  // Actual servings after waste
  const actualServings = Math.floor(servingsBeforeWaste * (1 - waste / 100))

  // Cost per serving
  const costPerServing = actualServings > 0 ? cost / actualServings : 0

  // Beer cost percentage
  const beerCostPercent = price > 0 ? (costPerServing / price) * 100 : 0

  // Profit per serving
  const profitPerServing = price - costPerServing

  // Total profit per keg
  const totalProfitPerKeg = profitPerServing * actualServings

  // Lost servings to waste
  const lostServings = servingsBeforeWaste - actualServings

  // Lost profit to waste
  const lostProfit = lostServings * profitPerServing

  // Status helper
  const getStatus = (pct) => {
    if (pct === 0) return { color: 'text-gray-500', bg: 'backdrop-blur-xl bg-white/5', border: 'border-white/10', message: 'Enter your numbers above', icon: '—' }
    if (pct < 20) return { color: 'text-[#10b981]', bg: 'backdrop-blur-xl bg-[#10b981]/10', border: 'border-[#10b981]', message: 'Excellent! You\'re maximizing draft profits.', icon: '✓' }
    if (pct < 25) return { color: 'text-[#10b981]', bg: 'backdrop-blur-xl bg-[#10b981]/10', border: 'border-[#10b981]', message: 'Good! You\'re in the target range for draft beer.', icon: '✓' }
    if (pct < 28) return { color: 'text-[#fbbf24]', bg: 'backdrop-blur-xl bg-[#fbbf24]/10', border: 'border-[#fbbf24]', message: 'Acceptable, but consider raising prices slightly.', icon: '⚠' }
    return { color: 'text-[#ef4444]', bg: 'backdrop-blur-xl bg-[#ef4444]/10', border: 'border-[#ef4444]', message: 'Too high! Your draft beer is cutting into profits.', icon: '✗' }
  }

  const status = getStatus(beerCostPercent)

  // Generate serving breakdown for all sizes
  const getServingsForSize = (oz) => {
    const raw = Math.floor(totalOz / oz)
    const adjusted = Math.floor(raw * (1 - waste / 100))
    return { raw, adjusted }
  }

  return (
    <div className="min-h-screen text-white">
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-8 max-w-4xl">
        
        {/* Back Link */}
        <Link href="/free-tools" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Free Tools
        </Link>

        {/* Header Card */}
        <div className="mb-8">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-[0_0_50px_rgba(245,158,11,0.1)]">
            <h1 className="text-4xl md:text-5xl font-black mb-4">
              Draft Beer <span className="text-[#f59e0b]">Cost Calculator</span>
            </h1>
            <p className="text-xl text-gray-300">
              Calculate pour cost, profit per pint, and total keg profit for your draft beer program
            </p>
          </div>
        </div>

        {/* Main Calculator Card */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-[0_0_50px_rgba(245,158,11,0.1)]">
          
          {/* Inputs */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Keg Size */}
            <div>
              <label className="block text-lg font-bold mb-2">Keg Size</label>
              <select
                value={kegSize}
                onChange={(e) => setKegSize(e.target.value)}
                className="w-full px-4 py-3 bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#f59e0b] focus:outline-none text-white text-lg transition-colors"
              >
                <option value="sixth">1/6 Barrel (5.16 gal)</option>
                <option value="quarter">1/4 Barrel (7.75 gal)</option>
                <option value="half">1/2 Barrel (15.5 gal)</option>
              </select>
            </div>

            {/* Keg Cost */}
            <div>
              <label className="block text-lg font-bold mb-2">Keg Cost ($)</label>
              <div className="relative">
                <span className="absolute left-4 top-3 text-gray-500 text-lg">$</span>
                <input
                  type="number"
                  step="0.01"
                  placeholder="180.00"
                  value={kegCost}
                  onChange={(e) => setKegCost(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#f59e0b] focus:outline-none text-white text-lg transition-colors"
                />
              </div>
            </div>

            {/* Serving Size */}
            <div>
              <label className="block text-lg font-bold mb-2">Serving Size</label>
              <select
                value={servingSize}
                onChange={(e) => setServingSize(e.target.value)}
                className="w-full px-4 py-3 bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#f59e0b] focus:outline-none text-white text-lg transition-colors"
              >
                <option value="10">10 oz (High Gravity)</option>
                <option value="12">12 oz (American)</option>
                <option value="16">16 oz (Pint)</option>
                <option value="20">20 oz (Imperial)</option>
                <option value="64">64 oz (Pitcher)</option>
              </select>
            </div>

            {/* Selling Price */}
            <div>
              <label className="block text-lg font-bold mb-2">Selling Price ($)</label>
              <div className="relative">
                <span className="absolute left-4 top-3 text-gray-500 text-lg">$</span>
                <input
                  type="number"
                  step="0.01"
                  placeholder="6.00"
                  value={sellingPrice}
                  onChange={(e) => setSellingPrice(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#f59e0b] focus:outline-none text-white text-lg transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Foam/Waste Slider */}
          <div className="mb-8 p-6 bg-[#0a0a0a]/50 rounded-lg border border-[#2a2a2a]">
            <div className="flex justify-between items-center mb-3">
              <label className="text-lg font-bold">Foam & Waste Factor</label>
              <span className="text-2xl font-bold text-[#f59e0b]">{wasteFactor}%</span>
            </div>
            <input
              type="range"
              min="5"
              max="20"
              step="1"
              value={wasteFactor}
              onChange={(e) => setWasteFactor(e.target.value)}
              className="w-full h-3 bg-[#2a2a2a] rounded-lg appearance-none cursor-pointer accent-[#f59e0b]"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <span>5% (Excellent)</span>
              <span>10% (Average)</span>
              <span>20% (Poor)</span>
            </div>
          </div>

          {/* Keg Yield Info */}
          <div className="mb-8 p-6 bg-[#f59e0b]/10 border border-[#f59e0b]/30 rounded-lg">
            <h3 className="text-lg font-bold mb-4 text-[#f59e0b]">🍺 {keg.name} Yield Breakdown</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
              {Object.entries(servingSizes).map(([key, size]) => {
                const servings = getServingsForSize(size.oz)
                return (
                  <div key={key} className={`p-3 rounded-lg ${key === servingSize ? 'bg-[#f59e0b]/20 border border-[#f59e0b]' : 'bg-black/20'}`}>
                    <p className="text-xs text-gray-400">{size.name}</p>
                    <p className="text-xl font-bold text-white">{servings.adjusted}</p>
                    <p className="text-xs text-gray-500">({servings.raw} - waste)</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Results */}
          {cost > 0 && price > 0 && (
            <div className="border-t-2 border-[#2a2a2a] pt-8">
              <h3 className="text-2xl font-bold mb-6">📊 Your Results</h3>

              {/* Main Stats */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {/* Beer Cost % */}
                <div className={`p-6 rounded-lg border-2 text-center ${status.bg} ${status.border}`}>
                  <p className="text-sm font-semibold text-gray-300 mb-2">BEER COST %</p>
                  <p className={`text-5xl font-bold ${status.color}`}>{beerCostPercent.toFixed(1)}%</p>
                  <p className={`text-sm mt-2 ${status.color}`}>{status.icon} {status.message.split('.')[0]}</p>
                </div>

                {/* Cost Per Serving */}
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-lg p-6 text-center">
                  <p className="text-sm font-semibold text-gray-300 mb-2">COST PER {serving.name.toUpperCase()}</p>
                  <p className="text-5xl font-bold text-white">${costPerServing.toFixed(2)}</p>
                </div>

                {/* Profit Per Serving */}
                <div className="backdrop-blur-xl bg-[#10b981]/10 border border-[#10b981]/30 rounded-lg p-6 text-center">
                  <p className="text-sm font-semibold text-gray-300 mb-2">PROFIT PER {serving.name.split(' ')[0].toUpperCase()}</p>
                  <p className="text-5xl font-bold text-[#10b981]">${profitPerServing.toFixed(2)}</p>
                </div>
              </div>

              {/* Keg Totals */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-lg p-6">
                  <h4 className="text-lg font-bold mb-4">Per Keg Breakdown</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Keg Cost</span>
                      <span className="font-semibold">${cost.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Servings (before waste)</span>
                      <span className="font-semibold">{servingsBeforeWaste}</span>
                    </div>
                    <div className="flex justify-between text-[#ef4444]">
                      <span>Lost to Foam/Waste ({wasteFactor}%)</span>
                      <span className="font-semibold">-{lostServings}</span>
                    </div>
                    <div className="flex justify-between border-t border-white/10 pt-3">
                      <span className="text-white font-bold">Actual Servings</span>
                      <span className="font-bold text-[#f59e0b]">{actualServings}</span>
                    </div>
                  </div>
                </div>

                <div className="backdrop-blur-xl bg-gradient-to-br from-[#10b981]/20 to-[#059669]/20 border border-[#10b981]/30 rounded-lg p-6">
                  <h4 className="text-lg font-bold mb-4 text-[#10b981]">Profit Summary</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Revenue per Keg</span>
                      <span className="font-semibold">${(actualServings * price).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Keg Cost</span>
                      <span className="font-semibold">-${cost.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between border-t border-[#10b981]/30 pt-3">
                      <span className="text-white font-bold text-lg">Total Profit per Keg</span>
                      <span className="font-bold text-[#10b981] text-2xl">${totalProfitPerKeg.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Waste Impact */}
              {lostProfit > 0 && (
                <div className="backdrop-blur-xl bg-[#ef4444]/10 border border-[#ef4444]/30 rounded-lg p-6 mb-8">
                  <h4 className="text-lg font-bold mb-2 text-[#ef4444]">⚠️ Waste Impact</h4>
                  <p className="text-gray-300">
                    At {wasteFactor}% waste, you're losing <strong className="text-[#ef4444]">{lostServings} servings</strong> per keg, 
                    which equals <strong className="text-[#ef4444]">${lostProfit.toFixed(2)}</strong> in lost profit.
                  </p>
                  <p className="text-gray-400 mt-2 text-sm">
                    Reducing waste by just 5% would save you ${((servingsBeforeWaste * 0.05) * profitPerServing).toFixed(2)} per keg!
                  </p>
                </div>
              )}

              {/* Pro Tips */}
              <div className="backdrop-blur-xl bg-[#f59e0b]/10 border border-[#f59e0b]/30 rounded-lg p-6">
                <h4 className="text-lg font-bold mb-3 text-[#f59e0b]">💡 Pro Tips to Reduce Waste</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-[#f59e0b]">•</span>
                    <span><strong>Train staff on proper pours</strong> - A 45° angle pour reduces foam significantly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#f59e0b]">•</span>
                    <span><strong>Clean draft lines bi-weekly</strong> - Dirty lines cause excess foam and off-flavors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#f59e0b]">•</span>
                    <span><strong>Check CO2 pressure</strong> - Incorrect pressure is the #1 cause of foam issues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#f59e0b]">•</span>
                    <span><strong>Keep kegs cold</strong> - Warm kegs foam more; maintain 36-38°F</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* Industry Benchmarks */}
          <div className="mt-8 backdrop-blur-xl bg-white/5 border border-white/10 rounded-lg p-6">
            <h4 className="text-lg font-bold mb-4">Industry Benchmarks</h4>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Draft Beer Target</span>
                  <span className="text-[#10b981] font-semibold">20-25%</span>
                </div>
                <div className="h-2 bg-[#2a2a2a] rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#10b981] to-[#fbbf24]" style={{ width: '25%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Bottled Beer Target</span>
                  <span className="text-[#06b6d4] font-semibold">25-30%</span>
                </div>
                <div className="h-2 bg-[#2a2a2a] rounded-full overflow-hidden">
                  <div className="h-full bg-[#06b6d4]" style={{ width: '30%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Craft/Import Premium</span>
                  <span className="text-[#a855f7] font-semibold">22-28%</span>
                </div>
                <div className="h-2 bg-[#2a2a2a] rounded-full overflow-hidden">
                  <div className="h-full bg-[#a855f7]" style={{ width: '28%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-8 bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] rounded-xl shadow-lg p-8 text-center text-black">
            <h3 className="text-2xl font-bold mb-4">Want Automated Beverage Costing?</h3>
            <p className="text-lg mb-6 text-black/70">
              OwnerClone tracks your pour costs automatically and alerts you when waste spikes
            </p>
            <Link 
              href="/demo"
              className="inline-block bg-black text-[#f59e0b] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-900 transition-colors"
            >
              Start Free Trial →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
