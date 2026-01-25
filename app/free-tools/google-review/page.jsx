'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function GoogleReviewCalculator() {
  const [currentRating, setCurrentRating] = useState('');
  const [totalReviews, setTotalReviews] = useState('');
  const [activeScenario, setActiveScenario] = useState('negative');
  
  // Negative impact states
  const [oneStarCount, setOneStarCount] = useState('1');
  const [negativeResults, setNegativeResults] = useState(null);
  
  // Recovery states
  const [recoveryOneStars, setRecoveryOneStars] = useState('1');
  const [recoveryResults, setRecoveryResults] = useState(null);
  
  // Goal states
  const [goalRating, setGoalRating] = useState('4.8');
  const [goalResults, setGoalResults] = useState(null);

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
    <div className="min-h-screen relative text-white">
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url(/bg-glow.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <div className="relative z-10">
        <div className="pt-24 px-4">
          <div className="max-w-5xl mx-auto mb-8">
            <Link 
              href="/free-tools" 
              className="inline-flex items-center gap-2 text-amber-300 hover:text-amber-100 transition-colors mb-6"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Free Tools
            </Link>
            
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-4">
                <div className="p-3 backdrop-blur-xl bg-amber-500/20 border border-amber-300/30 rounded-xl">
                  <svg className="w-8 h-8 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-white">Google Review Calculator</h1>
                  <p className="text-amber-200 mt-1">Plan your review strategy & calculate rating impact</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="py-8 px-4">
          <div className="max-w-5xl mx-auto">
            {/* Current Rating Section */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 mb-8 shadow-[0_0_50px_rgba(236,72,153,0.1)]">
              <h2 className="text-2xl font-bold text-[#ec4899] mb-6">Your Current Rating</h2>
              <div className="backdrop-blur-xl bg-[#38bdf8]/10 border-l-4 border-[#38bdf8] p-4 rounded-lg mb-6">
                <p className="text-gray-300"><strong className="text-[#38bdf8]">💡 Pro Tip:</strong> Find these numbers on your Google Business Profile. Your current star rating and total number of reviews are displayed prominently on your listing.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-semibold text-gray-300 mb-2">Current Star Rating (1.0 - 5.0)</label>
                  <input
                    type="number"
                    min="1"
                    max="5"
                    step="0.1"
                    placeholder="e.g., 4.3"
                    value={currentRating}
                    onChange={(e) => setCurrentRating(e.target.value)}
                    className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border-2 border-white/10 rounded-lg text-white text-lg focus:border-[#ec4899] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-gray-300 mb-2">Total Number of Reviews</label>
                  <input
                    type="number"
                    min="1"
                    placeholder="e.g., 150"
                    value={totalReviews}
                    onChange={(e) => setTotalReviews(e.target.value)}
                    className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border-2 border-white/10 rounded-lg text-white text-lg focus:border-[#ec4899] focus:outline-none transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Scenario Tabs */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#ec4899] mb-6">Choose Your Scenario</h2>
              
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <button
                  onClick={() => setActiveScenario('negative')}
                  className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all ${
                    activeScenario === 'negative'
                      ? 'bg-gradient-to-r from-[#ec4899] to-[#f472b6] text-white'
                      : 'backdrop-blur-xl bg-white/5 border border-white/10 text-gray-300 hover:border-[#ec4899]/50'
                  }`}
                >
                  😰 Negative Impact
                </button>
                <button
                  onClick={() => setActiveScenario('recovery')}
                  className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all ${
                    activeScenario === 'recovery'
                      ? 'bg-gradient-to-r from-[#ec4899] to-[#f472b6] text-white'
                      : 'backdrop-blur-xl bg-white/5 border border-white/10 text-gray-300 hover:border-[#ec4899]/50'
                  }`}
                >
                  🚀 Recovery Plan
                </button>
                <button
                  onClick={() => setActiveScenario('goal')}
                  className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all ${
                    activeScenario === 'goal'
                      ? 'bg-gradient-to-r from-[#ec4899] to-[#f472b6] text-white'
                      : 'backdrop-blur-xl bg-white/5 border border-white/10 text-gray-300 hover:border-[#ec4899]/50'
                  }`}
                >
                  🎯 Goal Planning
                </button>
              </div>

              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-[0_0_50px_rgba(236,72,153,0.1)]">
                {/* Negative Impact Scenario */}
                {activeScenario === 'negative' && (
                  <div>
                    <div className="backdrop-blur-xl bg-[#38bdf8]/10 border-l-4 border-[#38bdf8] p-4 rounded-lg mb-6">
                      <p className="text-gray-300"><strong className="text-[#38bdf8]">📉 What-If Analysis:</strong> See how negative reviews would impact your rating and learn how to recover.</p>
                    </div>

                    <div className="mb-6">
                      <label className="block font-semibold text-gray-300 mb-2">How many 1-star reviews are you worried about?</label>
                      <input
                        type="number"
                        min="1"
                        placeholder="e.g., 5"
                        value={oneStarCount}
                        onChange={(e) => setOneStarCount(e.target.value)}
                        className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border-2 border-white/10 rounded-lg text-white text-lg focus:border-[#ec4899] focus:outline-none transition-colors"
                      />
                    </div>

                    <button
                      onClick={calculateNegativeImpact}
                      className="w-full bg-gradient-to-r from-[#ec4899] to-[#f472b6] text-white py-4 rounded-lg text-lg font-semibold hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] transition-all"
                    >
                      Calculate Impact
                    </button>

                    {negativeResults && (
                      <div className="mt-8 space-y-4 animate-fadeIn">
                        <div className="backdrop-blur-xl bg-[#ef4444]/10 border-l-4 border-[#ef4444] p-6 rounded-lg">
                          <h3 className="text-xl font-semibold text-[#ef4444] mb-3">⚠️ Impact Analysis</h3>
                          <div className="text-4xl font-bold text-white my-3">{negativeResults.newRating.toFixed(2)} ⭐</div>
                          <p className="text-gray-300">
                            <strong>Your new rating after {negativeResults.oneStarCount} one-star review{negativeResults.oneStarCount > 1 ? 's' : ''}:</strong><br />
                            Rating drops from {negativeResults.currentRating.toFixed(2)} to {negativeResults.newRating.toFixed(2)} (-{negativeResults.ratingDrop.toFixed(2)} stars)<br />
                            Total reviews: {negativeResults.totalReviews} → {negativeResults.newTotalReviews}
                          </p>
                        </div>

                        <div className="backdrop-blur-xl bg-[#10b981]/10 border-l-4 border-[#10b981] p-6 rounded-lg">
                          <h3 className="text-xl font-semibold text-[#10b981] mb-3">💪 Recovery Plan</h3>
                          <div className="text-4xl font-bold text-white my-3">{negativeResults.fiveStarNeeded} Five-Star Reviews</div>
                          <p className="text-gray-300">
                            You need <strong className="text-[#10b981]">{negativeResults.fiveStarNeeded} five-star reviews</strong> to get back to your original {negativeResults.currentRating.toFixed(2)} rating.<br /><br />
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
                    <div className="backdrop-blur-xl bg-[#38bdf8]/10 border-l-4 border-[#38bdf8] p-4 rounded-lg mb-6">
                      <p className="text-gray-300"><strong className="text-[#38bdf8]">💪 Recovery Calculator:</strong> Get back to your original rating by generating 5-star reviews.</p>
                    </div>

                    <div className="mb-6">
                      <label className="block font-semibold text-gray-300 mb-2">Number of 1-star reviews you received</label>
                      <input
                        type="number"
                        min="1"
                        placeholder="e.g., 3"
                        value={recoveryOneStars}
                        onChange={(e) => setRecoveryOneStars(e.target.value)}
                        className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border-2 border-white/10 rounded-lg text-white text-lg focus:border-[#ec4899] focus:outline-none transition-colors"
                      />
                    </div>

                    <button
                      onClick={calculateRecovery}
                      className="w-full bg-gradient-to-r from-[#ec4899] to-[#f472b6] text-white py-4 rounded-lg text-lg font-semibold hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] transition-all"
                    >
                      Calculate Recovery Plan
                    </button>

                    {recoveryResults && (
                      <div className="mt-8 space-y-4 animate-fadeIn">
                        <div className="backdrop-blur-xl bg-white/5 border-l-4 border-[#ec4899] p-6 rounded-lg">
                          <h3 className="text-xl font-semibold text-[#ec4899] mb-3">📊 Current Situation</h3>
                          <div className="text-4xl font-bold text-white my-3">{recoveryResults.currentRating.toFixed(2)} ⭐</div>
                          <p className="text-gray-300">
                            Current rating: {recoveryResults.currentRating.toFixed(2)}<br />
                            Total reviews: {recoveryResults.totalReviews}<br />
                            Recent 1-star reviews: {recoveryResults.oneStars}
                          </p>
                        </div>

                        <div className="backdrop-blur-xl bg-[#10b981]/10 border-l-4 border-[#10b981] p-6 rounded-lg">
                          <h3 className="text-xl font-semibold text-[#10b981] mb-3">🎯 Recovery Target</h3>
                          <div className="text-4xl font-bold text-white my-3">{recoveryResults.fiveStarNeeded} Reviews Needed</div>
                          <p className="text-gray-300">
                            To get back to approximately {recoveryResults.originalRating.toFixed(2)} stars, you need:<br />
                            <strong className="text-[#10b981]">{recoveryResults.fiveStarNeeded} five-star reviews</strong><br /><br />
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
                    <div className="backdrop-blur-xl bg-[#38bdf8]/10 border-l-4 border-[#38bdf8] p-4 rounded-lg mb-6">
                      <p className="text-gray-300"><strong className="text-[#38bdf8]">🎯 Goal Setting:</strong> Calculate exactly how many 5-star reviews you need to reach your target rating.</p>
                    </div>

                    <div className="mb-6">
                      <label className="block font-semibold text-gray-300 mb-2">Target Star Rating (1.0 - 5.0)</label>
                      <input
                        type="number"
                        min="1"
                        max="5"
                        step="0.1"
                        placeholder="e.g., 4.8"
                        value={goalRating}
                        onChange={(e) => setGoalRating(e.target.value)}
                        className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border-2 border-white/10 rounded-lg text-white text-lg focus:border-[#ec4899] focus:outline-none transition-colors"
                      />
                    </div>

                    <button
                      onClick={calculateGoal}
                      className="w-full bg-gradient-to-r from-[#ec4899] to-[#f472b6] text-white py-4 rounded-lg text-lg font-semibold hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] transition-all"
                    >
                      Calculate Goal Plan
                    </button>

                    {goalResults && (
                      <div className="mt-8 space-y-4 animate-fadeIn">
                        {goalResults.tooAmbitious ? (
                          <div className="backdrop-blur-xl bg-[#ef4444]/10 border-l-4 border-[#ef4444] p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-[#ef4444] mb-3">⚠️ Goal May Not Be Achievable</h3>
                            <p className="text-gray-300">
                              With your current rating, reaching this goal would require an extremely large number of 5-star reviews.<br /><br />
                              <strong>Consider a more realistic goal:</strong><br />
                              • Set intermediate targets<br />
                              • Focus on consistently delivering excellent experiences<br />
                              • The rating will improve naturally over time
                            </p>
                          </div>
                        ) : (
                          <>
                            <div className="backdrop-blur-xl bg-white/5 border-l-4 border-[#ec4899] p-6 rounded-lg">
                              <h3 className="text-xl font-semibold text-[#ec4899] mb-3">📊 Current Status</h3>
                              <div className="text-4xl font-bold text-white my-3">{goalResults.currentRating.toFixed(2)} ⭐</div>
                              <p className="text-gray-300">
                                Current: {goalResults.currentRating.toFixed(2)} stars with {goalResults.totalReviews} reviews
                              </p>
                            </div>

                            <div className="backdrop-blur-xl bg-[#10b981]/10 border-l-4 border-[#10b981] p-6 rounded-lg">
                              <h3 className="text-xl font-semibold text-[#10b981] mb-3">🎯 Your Goal</h3>
                              <div className="text-4xl font-bold text-white my-3">{goalResults.goalRating.toFixed(2)} ⭐</div>
                              <p className="text-gray-300">
                                Target: {goalResults.goalRating.toFixed(2)} stars (+{goalResults.ratingGain.toFixed(2)} star increase)
                              </p>
                            </div>

                            <div className="backdrop-blur-xl bg-[#38bdf8]/10 border-l-4 border-[#38bdf8] p-6 rounded-lg">
                              <h3 className="text-xl font-semibold text-[#38bdf8] mb-3">📈 Action Plan</h3>
                              <div className="text-4xl font-bold text-white my-3">{goalResults.fiveStarNeeded} Five-Star Reviews</div>
                              <p className="text-gray-300">
                                You need <strong className="text-[#38bdf8]">{goalResults.fiveStarNeeded} five-star reviews</strong> to reach {goalResults.goalRating.toFixed(2)} stars<br />
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
            </div>

            {/* CTA Section */}
            <div className="mt-12 backdrop-blur-xl bg-gradient-to-br from-[#ec4899]/20 to-[#f472b6]/20 border-2 border-[#ec4899] rounded-3xl p-8 text-center shadow-[0_0_80px_rgba(236,72,153,0.15)]">
              <h2 className="text-2xl font-bold mb-4">Ready to Manage Your Reviews <span className="text-[#ec4899]">Like a Pro</span>?</h2>
              <p className="text-lg text-gray-300 mb-6">
                OwnerClone helps you track reviews, respond strategically, and build a 5-star reputation automatically.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/pricing" className="bg-[#ec4899] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#db2777] transition-colors">
                  Join Early Access
                </Link>
                <Link href="/free-tools" className="border-2 border-[#ec4899] text-[#ec4899] px-8 py-3 rounded-lg font-bold hover:bg-[#ec4899]/10 transition-colors">
                  Try Other Calculators
                </Link>
              </div>
            </div>
          </div>
        </section>
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
