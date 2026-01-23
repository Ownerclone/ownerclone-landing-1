import Button from '@/components/Button';
import Card from '@/components/Card';
import { ArrowRight, Shield, TrendingUp, Users } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-6">
            Your AI Restaurant
            <br />
            <span className="gradient-text">Management Partner</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Catch theft, optimize costs, and predict demand—all powered by AI that learns your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" href="/demo">
              Start Free Trial
              <ArrowRight className="inline ml-2" size={20} />
            </Button>
            <Button variant="outline" size="lg" href="/features">
              See How It Works
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Three AI Tools. One Complete Solution.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Theft Detection',
                description: 'AI catches what you miss. Real-time alerts for suspicious patterns.',
              },
              {
                icon: TrendingUp,
                title: 'Cost Optimization',
                description: 'Reduce food cost by 2-5%. Find savings in every invoice.',
              },
              {
                icon: Users,
                title: 'Demand Forecasting',
                description: 'Predict busy nights. Staff perfectly. Never waste inventory.',
              },
            ].map((feature, index) => (
              <Card key={index} className="p-8">
                <feature.icon className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Restaurant?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of restaurant owners saving thousands every month.
          </p>
          <Button variant="secondary" size="lg" href="/demo">
            Start Your Free Trial
          </Button>
        </div>
      </section>
    </div>
  );
}
