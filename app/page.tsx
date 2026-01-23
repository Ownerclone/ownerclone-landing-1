import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            Your AI Restaurant
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Management Partner
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Catch theft, optimize costs, and predict demand—all powered by AI that learns your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/early-access"
              className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-lg font-semibold text-white hover:shadow-lg text-lg transition"
            >
              Start Free Trial →
            </Link>
            <Link
              href="/features"
              className="border-2 border-blue-500 px-8 py-4 rounded-lg font-semibold text-blue-400 hover:bg-blue-500 hover:text-white text-lg transition"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Three AI Tools. One Complete Solution.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🛡️',
                title: 'Theft Detection',
                description: 'AI catches what you miss. Real-time alerts for suspicious patterns.',
              },
              {
                icon: '📈',
                title: 'Cost Optimization',
                description: 'Reduce food cost by 2-5%. Find savings in every invoice.',
              },
              {
                icon: '👥',
                title: 'Demand Forecasting',
                description: 'Predict busy nights. Staff perfectly. Never waste inventory.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800 border border-gray-700 rounded-2xl p-8 hover:-translate-y-2 hover:shadow-2xl transition-all"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-12">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Restaurant?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of restaurant owners saving thousands every month.
          </p>
          <Link
            href="/early-access"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition"
          >
            Start Your Free Trial
          </Link>
        </div>
      </section>
    </div>
  );
}
