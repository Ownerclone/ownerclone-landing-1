</strong>. 
                  That's <strong className="text-[#10b981]">${(totalPlateCost * 0.1).toFixed(2)}</strong> saved per plate!
                </p>
                <p className="text-gray-300 mt-2">
                  At {platesPerWeek} plates/week, that's <strong className="text-[#10b981]">${((totalPlateCost * 0.1) * platesWeek * 52).toFixed(0)}</strong> saved annually.
                </p>
              </div>
            </div>
          )}

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-[#10b981] to-[#059669] rounded-xl shadow-lg p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Want Automated Recipe Costing?</h3>
            <p className="text-lg mb-6 text-white/80">
              OwnerClone automatically calculates plate costs from your invoices and alerts you when prices change
            </p>
            <Link 
              href="/demo"
              className="inline-block bg-white text-[#059669] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Start Free Trial →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
