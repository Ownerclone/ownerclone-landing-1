'use client'

import { useState } from 'react'
import { ArrowLeft, DollarSign, Home, Utensils, Users, Truck, FileText, AlertCircle, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function StartupCostCalculator() {
  const [inputs, setInputs] = useState({
    // Real Estate
    buildoutCost: '',
    securityDeposit: '',
    firstMonthRent: '',
    
    // Equipment
    kitchenEquipment: '',
    diningFurniture: '',
    posSystem: '',
    
    // Initial Inventory
    foodInventory: '',
    beverageInventory: '',
    supplies: '',
    
    // Licenses & Legal
    licenses: '',
    insurance: '',
    legal: '',
    
    // Marketing
    signage: '',
    marketing: '',
    website: '',
    
    // Working Capital
    workingCapital: ''
  })

  const calculateTotals = () => {
    // Real Estate
    const realEstate = 
      (parseFloat(inputs.buildoutCost) || 0) +
      (parseFloat(inputs.securityDeposit) || 0) +
      (parseFloat(inputs.firstMonthRent) || 0)

    // Equipment
    const equipment = 
      (parseFloat(inputs.kitchenEquipment) || 0) +
      (parseFloat(inputs.diningFurniture) || 0) +
      (parseFloat(inputs.posSystem) || 0)

    // Initial Inventory
    const inventory = 
      (parseFloat(inputs.foodInventory) || 0) +
      (parseFloat(inputs.beverageInventory) || 0) +
      (parseFloat(inputs.supplies) || 0)

    // Licenses & Legal
    const licensesLegal = 
      (parseFloat(inputs.licenses) || 0) +
      (parseFloat(inputs.insurance) || 0) +
      (parseFloat(inputs.legal) || 0)

    // Marketing
    const marketing = 
      (parseFloat(inputs.signage) || 0) +
      (parseFloat(inputs.marketing) || 0) +
      (parseFloat(inputs.website) || 0)

    // Working Capital
    const workingCapital = parseFloat(inputs.workingCapital) || 0

    // Total
    const total = realEstate + equipment + inventory + licensesLegal + marketing + workingCapital

    return {
      realEstate: realEstate.toFixed(0),
      equipment: equipment.toFixed(0),
      inventory: inventory.toFixed(0),
      licensesLegal: licensesLegal.toFixed(0),
      marketing: marketing.toFixed(0),
      workingCapital: workingCapital.toFixed(0),
      total: total.toFixed(0),
      realEstatePercent: total > 0 ? ((realEstate / total) * 100).toFixed(1) : '0',
      equipmentPercent: total > 0 ? ((equipment / total) * 100).toFixed(1) : '0',
      inventoryPercent: total > 0 ? ((inventory / total) * 100).toFixed(1) : '0',
      licensesLegalPercent: total > 0 ? ((licensesLegal / total) * 100).toFixed(1) : '0',
      marketingPercent: total > 0 ? ((marketing / total) * 100).toFixed(1) : '0',
      workingCapitalPercent: total > 0 ? ((workingCapital / total) * 100).toFixed(1) : '0'
    }
  }

  const results = calculateTotals()

  const categories = [
    { 
      name: 'Real Estate', 
      amount: results.realEstate, 
      percent: results.realEstatePercent,
      icon: Home,
      color: 'from-orange-500/20 to-red-500/20',
      borderColor: 'border-orange-300/30'
    },
    { 
      name: 'Equipment', 
      amount: results.equipment, 
      percent: results.equipmentPercent,
      icon: Utensils,
      color: 'from-purple-500/20 to-pink-500/20',
      borderColor: 'border-purple-300/30'
    },
    { 
      name: 'Initial Inventory', 
      amount: results.inventory, 
      percent: results.inventoryPercent,
      icon: Truck,
      color: 'from-blue-500/20 to-cyan-500/20',
      borderColor: 'border-blue-300/30'
    },
    { 
      name: 'Licenses & Legal', 
      amount: results.licensesLegal, 
      percent: results.licensesLegalPercent,
      icon: FileText,
      color: 'from-green-500/20 to-emerald-500/20',
      borderColor: 'border-green-300/30'
    },
    { 
      name: 'Marketing', 
      amount: results.marketing, 
      percent: results.marketingPercent,
      icon: TrendingUp,
      color: 'from-yellow-500/20 to-orange-500/20',
      borderColor: 'border-yellow-300/30'
    },
    { 
      name: 'Working Capital', 
      amount: results.workingCapital, 
      percent: results.workingCapitalPercent,
      icon: DollarSign,
      color: 'from-indigo-500/20 to-purple-500/20',
      borderColor: 'border-indigo-300/30'
    }
  ]

  return (
    <div className="min-h-screen relative">

  <div className="relative z-10 container mx-auto px-4 pt-24 pb-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/free-tools" 
            className="inline-flex items-center gap-2 text-orange-300 hover:text-orange-100 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Free Tools
          </Link>
          
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 backdrop-blur-xl bg-orange-500/20 border border-orange-300/30 rounded-xl">
                <DollarSign className="w-8 h-8 text-orange-300" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">Restaurant Startup Cost Calculator</h1>
                <p className="text-orange-200 mt-1">Estimate total investment needed to open your restaurant</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 items-start">
          {/* Input Section */}
          <div className="space-y-6">
            {/* Real Estate */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Home className="w-5 h-5 text-orange-400" />
                Real Estate Costs
              </h3>
              <div className="space-y-3">
                <input
                  type="number"
                  value={inputs.buildoutCost}
                  onChange={(e) => setInputs({ ...inputs, buildoutCost: e.target.value })}
                  placeholder="Buildout/Renovation Cost"
                  className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                />
                <input
                  type="number"
                  value={inputs.securityDeposit}
                  onChange={(e) => setInputs({ ...inputs, securityDeposit: e.target.value })}
                  placeholder="Security Deposit"
                  className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                />
                <input
                  type="number"
                  value={inputs.firstMonthRent}
                  onChange={(e) => setInputs({ ...inputs, firstMonthRent: e.target.value })}
                  placeholder="First Month Rent"
                  className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                />
              </div>
            </div>

            {/* Equipment */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Utensils className="w-5 h-5 text-purple-400" />
                Equipment & Furniture
              </h3>
              <div className="space-y-3">
                <input
                  type="number"
                  value={inputs.kitchenEquipment}
                  onChange={(e) => setInputs({ ...inputs, kitchenEquipment: e.target.value })}
                  placeholder="Kitchen Equipment"
                  className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                />
                <input
                  type="number"
                  value={inputs.diningFurniture}
                  onChange={(e) => setInputs({ ...inputs, diningFurniture: e.target.value })}
                  placeholder="Dining Furniture & Decor"
                  className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                />
                <input
                  type="number"
                  value={inputs.posSystem}
                  onChange={(e) => setInputs({ ...inputs, posSystem: e.target.value })}
                  placeholder="POS System & Technology"
                  className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                />
              </div>
            </div>

            {/* Initial Inventory */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Truck className="w-5 h-5 text-blue-400" />
                Initial Inventory
              </h3>
              <div className="space-y-3">
                <input
                  type="number"
                  value={inputs.foodInventory}
                  onChange={(e) => setInputs({ ...inputs, foodInventory: e.target.value })}
                  placeholder="Food Inventory"
                  className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                />
                <input
                  type="number"
                  value={inputs.beverageInventory}
                  onChange={(e) => setInputs({ ...inputs, beverageInventory: e.target.value })}
                  placeholder="Beverage Inventory"
                  className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                />
                <input
                  type="number"
                  value={inputs.supplies}
                  onChange={(e) => setInputs({ ...inputs, supplies: e.target.value })}
                  placeholder="Supplies (smallwares, etc.)"
                  className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                />
              </div>
            </div>

            {/* Licenses & Legal */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-green-400" />
                Licenses, Legal & Insurance
              </h3>
              <div className="space-y-3">
                <input
                  type="number"
                  value={inputs.licenses}
                  onChange={(e) => setInputs({ ...inputs, licenses: e.target.value })}
                  placeholder="Licenses & Permits"
                  className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/50"
                />
                <input
                  type="number"
                  value={inputs.insurance}
                  onChange={(e) => setInputs({ ...inputs, insurance: e.target.value })}
                  placeholder="Insurance (first year)"
                  className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/50"
                />
                <input
                  type="number"
                  value={inputs.legal}
                  onChange={(e) => setInputs({ ...inputs, legal: e.target.value })}
                  placeholder="Legal & Accounting Fees"
                  className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/50"
                />
              </div>
            </div>

            {/* Marketing */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-yellow-400" />
                Marketing & Branding
              </h3>
              <div className="space-y-3">
                <input
                  type="number"
                  value={inputs.signage}
                  onChange={(e) => setInputs({ ...inputs, signage: e.target.value })}
                  placeholder="Signage & Branding"
                  className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
                />
                <input
                  type="number"
                  value={inputs.marketing}
                  onChange={(e) => setInputs({ ...inputs, marketing: e.target.value })}
                  placeholder="Pre-Opening Marketing"
                  className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
                />
                <input
                  type="number"
                  value={inputs.website}
                  onChange={(e) => setInputs({ ...inputs, website: e.target.value })}
                  placeholder="Website & Online Presence"
                  className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
                />
              </div>
            </div>

            {/* Working Capital */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-indigo-400" />
                Working Capital
              </h3>
              <input
                type="number"
                value={inputs.workingCapital}
                onChange={(e) => setInputs({ ...inputs, workingCapital: e.target.value })}
                placeholder="Operating expenses reserve (3-6 months recommended)"
                className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              />
              <p className="text-xs text-indigo-300 mt-2">
                Reserve for payroll, rent, utilities until profitable
              </p>
            </div>
          </div>

          {/* Results Section - Sticky */}
          <div className="lg:sticky lg:top-24">
            {/* Total Investment */}
            <div className="backdrop-blur-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-300/30 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Total Investment Required</h3>
              <div className="text-5xl font-bold text-white mb-4">
                ${parseInt(results.total).toLocaleString()}
              </div>

              {/* Category Breakdown */}
              <div className="space-y-3">
                {categories.map((category) => {
                  const Icon = category.icon
                  const amount = parseInt(category.amount)
                  if (amount === 0) return null
                  
                  return (
                    <div key={category.name} className={`backdrop-blur-xl bg-gradient-to-r ${category.color} border ${category.borderColor} rounded-xl p-4`}>
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <Icon className="w-4 h-4 text-white" />
                          <span className="text-white text-sm font-medium">{category.name}</span>
                        </div>
                        <span className="text-white font-bold">{category.percent}%</span>
                      </div>
                      <div className="text-right text-white text-lg font-bold">
                        ${amount.toLocaleString()}
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Warning/Info */}
              <div className="mt-4 backdrop-blur-xl bg-orange-500/10 border border-orange-300/20 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-orange-200">
                      <strong>Note:</strong> Actual costs vary by location, concept, and size. This is an estimate - always add 20-30% contingency for unexpected expenses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Typical Cost Ranges */}
        <div className="mt-8 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Typical Startup Cost Ranges by Restaurant Type</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="backdrop-blur-xl bg-orange-500/10 border border-orange-300/20 rounded-xl p-4">
              <h4 className="font-semibold text-orange-300 mb-2">Fast Casual / QSR</h4>
              <p className="text-2xl font-bold text-white mb-1">$175K - $750K</p>
              <p className="text-sm text-orange-200">Smaller footprint, limited kitchen equipment</p>
            </div>
            <div className="backdrop-blur-xl bg-red-500/10 border border-red-300/20 rounded-xl p-4">
              <h4 className="font-semibold text-red-300 mb-2">Casual Dining</h4>
              <p className="text-2xl font-bold text-white mb-1">$250K - $1.2M</p>
              <p className="text-sm text-red-200">Full kitchen, bar, table service</p>
            </div>
            <div className="backdrop-blur-xl bg-pink-500/10 border border-pink-300/20 rounded-xl p-4">
              <h4 className="font-semibold text-pink-300 mb-2">Fine Dining</h4>
              <p className="text-2xl font-bold text-white mb-1">$500K - $3M+</p>
              <p className="text-sm text-pink-200">Premium location, upscale decor, extensive wine program</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-8 backdrop-blur-xl bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-300/30 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Planning Your Restaurant Opening?</h3>
          <p className="text-orange-200 mb-6 max-w-2xl mx-auto">
            OwnerClone helps you manage every aspect of your restaurant from day one - from tracking startup expenses to optimizing operations once you're open.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-orange-500/25"
          >
            See OwnerClone Demo
            <TrendingUp className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
