'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function GoogleReviewCalculator() {
  const [currentRating, setCurrentRating] = useState<string>('');
  const [totalReviews, setTotalReviews] = useState<string>('');
  const [activeScenario, setActiveScenario] = useState<'negative' | 'recovery' | 'goal'>('negative');
  
  // Negative impact states
  const [oneStarCount, setOneStarCount] = useState<string>('1');
  const [negativeResults, setNegativeResults] = useState<any>(null);
  
  // Recovery states
  const [recoveryOneStars, setRecoveryOneStars] = useState<string>('1');
  const [recoveryResults, setRecoveryResults] = useState<any>(null);
  
  // Goal states
  const [goalRating, setGoalRating] = useState<string>('4.8');
  const [goalResults, setGoalResults] = useState<any>(null);

  const calculateNegativeImpact = () => {
    const current = parseFloat(currentRating);
    const total = parseInt(totalReviews);
    const oneStars = parseInt(oneStarCount);

    if (!current || !total || !oneStars) {
      alert('Please fill in all fields');
      return;
    }

    const currentTotalStars = current * total;
    const newTotalReviews = total + oneStars;
    const newTotalStars = currentTotalStars + (oneStars * 1);
    const newRating = newTotalStars / newTotalReviews;

    let fiveStarNeeded = 0;
    let testTotalStars = newTotalStars;
    let testTotalReviews = newTotalReviews;
    
    while ((testTotalStars / testTotalReviews) < current) {
      testTotalStars += 5;
      testTotalReviews += 1;
      fiveStarNeeded++;
      if (fiveStarNeeded > 1000) break;
    }

    const ratingDrop = current - newRating;

    setNegativeResults({
      newRating,
      newTotalReviews,
      ratingDrop,
      fiveStarNeeded,
      currentRating: current,
      oneStarCount: oneStars,
      totalReviews: total
    });
  };

  const calculateRecovery = () => {
    const current = parseFloat(currentRating);
    const total = parseInt(totalReviews);
    const oneStars = parseInt(recoveryOneStars);

    if (!current || !total || !oneStars) {
      alert('Please fill in all fields');
      return;
    }

    const currentTotalStars = current * total;
    const reviewsBeforeOneStars = total - oneStars;
    
    let originalRating;
    if (reviewsBeforeOneStars > 0) {
      const starsBeforeOneStars = currentTotalStars - oneStars;
      originalRating = starsBeforeOneStars / reviewsBeforeOneStars;
    } else {
      originalRating = 5.0;
    }

    let fiveStarNeeded = 0;
    let testTotalStars = currentTotalStars;
    let testTotalReviews = total;
    
    while ((testTotalStars / testTotalReviews) < originalRating) {
      testTotalStars += 5;
      testTotalReviews += 1;
      fiveStarNeeded++;
      if (fiveStarNeeded > 1000) break;
    }

    const finalRating = (currentTotalStars + (fiveStarNeeded * 5)) / (total + fiveStarNeeded);

    setRecoveryResults({
      currentRating: current,
      totalReviews: total,
      oneStars,
      originalRating,
      fiveStarNeeded,
      finalRating
    });
  };

  const calculateGoal = () => {
    const current = parseFloat(currentRating);
    const total = parseInt(totalReviews);
    const goal = parseFloat(goalRating);

    if (!current || !total || !goal) {
      alert('Please fill in all fields');
      return;
    }

    if (goal <= current) {
      alert('Goal rating must be higher than your current rating');
      return;
    }

    if (goal > 5.0) {
      alert('Maximum rating is 5.0');
      return;
    }

    const currentTotalStars = current * total;
    let fiveStarNeeded = 0;
    let testTotalStars = currentTotalStars;
    let testTotalReviews = total;
    
    while ((testTotalStars / testTotalReviews) < goal) {
      testTotalStars += 5;
      testTotalReviews += 1;
      fiveStarNeeded++;
      
      if (fiveStarNeeded > 2000) {
        setGoalResults({ tooAmbitious: true });
        return;
      }
    }

    const ratingGain = goal - current;
    const finalTotalReviews = total + fiveStarNeeded;

    setGoalResults({
      currentRating: current,
      totalReviews: total,
      goalRating: goal,
      fiveStarNeeded,
      finalTotalReviews,
      ratingGain
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white px-8 py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">⭐ Google Review Star Rating Calculator</h1>
          <p className="text-xl opacity-95">Plan Your Review Strategy & Calculate Rating Impact</p>
        </div>

        <div className="p-8">
          {/* Current Rating Section */}
          <div className="mb-10 pb-10 border-b-2 border-gray-200">
            <h2 className="text-3xl font-semibold text-purple-600 mb-6">📊 Your Current Rating</h2>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg mb-6">
              <p className="text-blue-900"><strong>💡 Pro Tip:</strong> Find these numbers on your Google Business Profile. Your current star rating and total number of reviews are displayed prominently on your listing.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-semibold text-gray-700 mb-2">Current Star Rating (1.0 - 5.0)</label>
                <input
                  type="number"
                  min="1"
                  max="5"
                  step="0.1"
                  placeholder="e.g., 4.3"
                  value={currentRating}
                  onChange={(e) => setCurrentRating(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl text-lg focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 transition"
                />
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-2">Total Number of Reviews</label>
                <input
                  type="number"
                  min="1"
                  placeholder="e.g., 150"
                  value={totalReviews}
                  onChange={(e) => setTotalReviews(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl text-lg focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 transition"
                />
              </div>
            </div>
          </div>

          {/* Scenario Tabs */}
          <div className="mb-10">
            <h2 className="text-3xl font-semibold text-purple-600 mb-6">🎯 Choose Your Scenario</h2>
            
            <div className="flex gap-3 mb-8">
              <button
                onClick={() => setActiveScenario('negative')}
                className={`flex-1 py-3 px-4 rounded-xl font-semibold transition ${
                  activeScenario === 'negative'
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-700 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                😰 Negative Impact
              </button>
              <button
                onClick={() => setActiveScenario('recovery')}
                className={`flex-1 py-3 px-4 rounded-xl font-semibold transition ${
                  activeScenario === 'recovery'
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-700 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                🚀 Recovery Plan
              </button>
              <button
                onClick={() => setActiveScenario('goal')}
                className={`flex-1 py-3 px-4 rounded-xl font-semibold transition ${
                  activeScenario === 'goal'
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-700 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                🎯 Goal Planning
              </button>
            </div>

            {/* Negative Impact Scenario */}
            {activeScenario === 'negative' && (
              <div>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg mb-6">
                  <p className="text-blue-900"><strong>📉 What-If Analysis:</strong> See how negative reviews would impact your rating and learn how to recover.</p>
                </div>

                <div className="mb-6">
                  <label className="block font-semibold text-gray-700 mb-2">How many 1-star reviews are you worried about?</label>
                  <input
                    type="number"
                    min="1"
                    placeholder="e.g., 5"
                    value={oneStarCount}
                    onChange={(e) => setOneStarCount(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl text-lg focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 transition"
                  />
                </div>

                <button
                  onClick={calculateNegativeImpact}
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-4 rounded-xl text-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition"
                >
                  Calculate Impact
                </button>

                {negativeResults && (
                  <div className="mt-8 space-y-4 animate-fadeIn">
                    <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-xl">
                      <h3 className="text-xl font-semibold text-red-700 mb-3">⚠️ Impact Analysis</h3>
                      <div className="text-4xl font-bold text-red-900 my-3">{negativeResults.newRating.toFixed(2)} ⭐</div>
                      <p className="text-red-800">
                        <strong>Your new rating after {negativeResults.oneStarCount} one-star review{negativeResults.oneStarCount > 1 ? 's' : ''}:</strong><br />
                        Rating drops from {negativeResults.currentRating.toFixed(2)} to {negativeResults.newRating.toFixed(2)} (-{negativeResults.ratingDrop.toFixed(2)} stars)<br />
                        Total reviews: {negativeResults.totalReviews} → {negativeResults.newTotalReviews}
                      </p>
                    </div>

                    <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-xl">
                      <h3 className="text-xl font-semibold text-green-700 mb-3">💪 Recovery Plan</h3>
                      <div className="text-4xl font-bold text-green-900 my-3">{negativeResults.fiveStarNeeded} Five-Star Reviews</div>
                      <p className="text-green-800">
                        You need <strong>{negativeResults.fiveStarNeeded} five-star reviews</strong> to get back to your original {negativeResults.currentRating.toFixed(2)} rating.<br /><br />
                        <strong>Timeline estimate:</strong><br />
                        • Aggressive approach (2 reviews/week): {Math.ceil(negativeResults.fiveStarNeeded / 2)} weeks<br />
                        • Moderate approach (1 review/week): {negativeResults.fiveStarNeeded} weeks<br />
                        • Passive approach (2 reviews/month): {Math.ceil(negativeResults.fiveStarNeeded / 2)} months
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Recovery Scenario */}
            {activeScenario === 'recovery' && (
              <div>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg mb-6">
                  <p className="text-blue-900"><strong>💪 Recovery Calculator:</strong> Get back to your original rating by generating 5-star reviews.</p>
                </div>

                <div className="mb-6">
                  <label className="block font-semibold text-gray-700 mb-2">Number of 1-star reviews you received</label>
                  <input
                    type="number"
                    min="1"
                    placeholder="e.g., 3"
                    value={recoveryOneStars}
                    onChange={(e) => setRecoveryOneStars(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl text-lg focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 transition"
                  />
                </div>

                <button
                  onClick={calculateRecovery}
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-4 rounded-xl text-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition"
                >
                  Calculate Recovery Plan
                </button>

                {recoveryResults && (
                  <div className="mt-8 space-y-4 animate-fadeIn">
                    <div className="bg-white border-l-4 border-purple-500 p-6 rounded-xl shadow">
                      <h3 className="text-xl font-semibold text-purple-700 mb-3">📊 Current Situation</h3>
                      <div className="text-4xl font-bold text-gray-900 my-3">{recoveryResults.currentRating.toFixed(2)} ⭐</div>
                      <p className="text-gray-700">
                        Current rating: {recoveryResults.currentRating.toFixed(2)}<br />
                        Total reviews: {recoveryResults.totalReviews}<br />
                        Recent 1-star reviews: {recoveryResults.oneStars}
                      </p>
                    </div>

                    <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-xl">
                      <h3 className="text-xl font-semibold text-green-700 mb-3">🎯 Recovery Target</h3>
                      <div className="text-4xl font-bold text-green-900 my-3">{recoveryResults.fiveStarNeeded} Reviews Needed</div>
                      <p className="text-green-800">
                        To get back to approximately {recoveryResults.originalRating.toFixed(2)} stars, you need:<br />
                        <strong>{recoveryResults.fiveStarNeeded} five-star reviews</strong><br /><br />
                        After {recoveryResults.fiveStarNeeded} 5-star reviews:<br />
                        • New rating: {recoveryResults.finalRating.toFixed(2)} ⭐<br />
                        • Total reviews: {recoveryResults.totalReviews + recoveryResults.fiveStarNeeded}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Goal Scenario */}
            {activeScenario === 'goal' && (
              <div>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg mb-6">
                  <p className="text-blue-900"><strong>🎯 Goal Setting:</strong> Calculate exactly how many 5-star reviews you need to reach your target rating.</p>
                </div>

                <div className="mb-6">
                  <label className="block font-semibold text-gray-700 mb-2">Target Star Rating (1.0 - 5.0)</label>
                  <input
                    type="number"
                    min="1"
                    max="5"
                    step="0.1"
                    placeholder="e.g., 4.8"
                    value={goalRating}
                    onChange={(e) => setGoalRating(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl text-lg focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 transition"
                  />
                </div>

                <button
                  onClick={calculateGoal}
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-4 rounded-xl text-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition"
                >
                  Calculate Goal Plan
                </button>

                {goalResults && (
                  <div className="mt-8 space-y-4 animate-fadeIn">
                    {goalResults.tooAmbitious ? (
                      <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-xl">
                        <h3 className="text-xl font-semibold text-red-700 mb-3">⚠️ Goal May Not Be Achievable</h3>
                        <p className="text-red-800">
                          With your current rating, reaching this goal would require an extremely large number of 5-star reviews.<br /><br />
                          <strong>Consider a more realistic goal:</strong><br />
                          • Set intermediate targets<br />
                          • Focus on consistently delivering excellent experiences<br />
                          • The rating will improve naturally over time
                        </p>
                      </div>
                    ) : (
                      <>
                        <div className="bg-white border-l-4 border-purple-500 p-6 rounded-xl shadow">
                          <h3 className="text-xl font-semibold text-purple-700 mb-3">📊 Current Status</h3>
                          <div className="text-4xl font-bold text-gray-900 my-3">{goalResults.currentRating.toFixed(2)} ⭐</div>
                          <p className="text-gray-700">
                            Current: {goalResults.currentRating.toFixed(2)} stars with {goalResults.totalReviews} reviews
                          </p>
                        </div>

                        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-xl">
                          <h3 className="text-xl font-semibold text-green-700 mb-3">🎯 Your Goal</h3>
                          <div className="text-4xl font-bold text-green-900 my-3">{goalResults.goalRating.toFixed(2)} ⭐</div>
                          <p className="text-green-800">
                            Target: {goalResults.goalRating.toFixed(2)} stars (+{goalResults.ratingGain.toFixed(2)} star increase)
                          </p>
                        </div>

                        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-xl">
                          <h3 className="text-xl font-semibold text-blue-700 mb-3">📈 Action Plan</h3>
                          <div className="text-4xl font-bold text-blue-900 my-3">{goalResults.fiveStarNeeded} Five-Star Reviews</div>
                          <p className="text-blue-800">
                            You need <strong>{goalResults.fiveStarNeeded} five-star reviews</strong> to reach {goalResults.goalRating.toFixed(2)} stars<br />
                            Final total: {goalResults.finalTotalReviews} reviews<br /><br />
                            <strong>Timeline Options:</strong><br />
                            • Aggressive: 3 reviews/week = {Math.ceil(goalResults.fiveStarNeeded / 3)} weeks<br />
                            • Moderate: 2 reviews/week = {Math.ceil(goalResults.fiveStarNeeded / 2)} weeks<br />
                            • Steady: 1 review/week = {goalResults.fiveStarNeeded} weeks
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Strategies Section */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 mt-10">
            <h3 className="text-2xl font-bold text-purple-700 mb-6">🎯 Proven Strategies to Get More 5-Star Reviews</h3>

            <div className="space-y-4">
              <div className="bg-white border-l-4 border-green-500 p-6 rounded-xl relative">
                <span className="absolute top-4 right-4 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">⭐ TOP RATED</span>
                <h4 className="text-xl font-semibold text-gray-900 mb-3 pr-32">Server Selection Method with QR Code Cards</h4>
                <p className="text-gray-700 leading-relaxed">
                  <strong>How it works:</strong> Train servers to identify their happiest, most satisfied guests during the meal. At the end of service, give these specific guests a branded card with a QR code that links directly to your Google review page. Personal touch + easy access = 70%+ conversion rate.
                </p>
                <p className="text-gray-700 leading-relaxed mt-3">
                  <strong>Pro tip:</strong> Print cards with: "We noticed you had a great experience tonight! Would you mind sharing it with others?" Include QR code and handwritten note from server.
                </p>
              </div>

              <div className="bg-white border-l-4 border-purple-500 p-6 rounded-xl">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">📱 Text Message Follow-Up (24-Hour Window)</h4>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Timing is everything:</strong> Send a text within 24 hours of visit: "Hi [Name]! Thanks for dining with us last night. If you enjoyed your experience, we'd love a quick review: [link]." Studies show 24-hour follow-ups get 3x more responses than emails sent days later.
                </p>
              </div>

              <div className="bg-white border-l-4 border-purple-500 p-6 rounded-xl">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">🎁 Thank You Card with Every Check</h4>
                <p className="text-gray-700 leading-relaxed">
                  <strong>The simple approach:</strong> Include a small card with every check: "Thank you for dining with us! Share your experience:" with QR code. This passive method generates consistent reviews without being pushy. Place it facing up so guests see it immediately.
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-xl mt-6">
                <p className="text-green-900">
                  <strong>⚠️ Google's Guidelines:</strong> Never offer incentives (discounts, free items) for reviews. Google will remove incentivized reviews and may penalize your listing. Focus on making the review process easy and asking at the right moment.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white rounded-2xl p-10 text-center mt-10">
            <h2 className="text-3xl font-bold mb-4">Ready to Manage Your Reviews Like a Pro?</h2>
            <p className="text-xl mb-6 opacity-95">OwnerClone helps you track reviews, respond strategically, and build a 5-star reputation automatically.</p>
            <Link href="/" className="inline-block bg-white text-purple-600 px-10 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transform hover:-translate-y-0.5 transition">
              Start Free Trial - $0 Setup
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-100 px-8 py-6 text-center text-gray-600">
          <p>Made with ❤️ by <Link href="/" className="text-purple-600 hover:underline">OwnerClone</Link> - AI-Powered Restaurant Management</p>
          <p className="mt-3">
            <Link href="/free-tools" className="text-purple-600 hover:underline">← Back to All Calculators</Link> | 
            <Link href="/features" className="text-purple-600 hover:underline ml-2">Explore Features</Link> | 
            <Link href="/blog" className="text-purple-600 hover:underline ml-2">Restaurant Resources</Link>
          </p>
        </div>
      </div>

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
