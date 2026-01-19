import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Calculate Restaurant Prime Cost (And Why It Matters) | OwnerClone',
  description: 'Learn how to calculate your restaurant\'s prime cost, the single most important metric for profitability. Step-by-step guide with real examples from restaurant owners.',
  keywords: ['restaurant prime cost', 'prime cost calculation', 'food cost percentage', 'labor cost restaurant', 'restaurant profitability', 'COGS calculation'],
}

export default function PrimeCostPost() {
  return (
    <article className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Restaurant Profitability
            </span>
          </div>
          <h1 className="mb-6">
            How to Calculate Your Restaurant's Prime Cost (And Why It's the Only Number That Really Matters)
          </h1>
          <div className="flex items-center gap-6 text-gray-300">
            <span>By OwnerClone Team</span>
            <span>•</span>
            <span>January 2026</span>
            <span>•</span>
            <span>12 min read</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-container">
        <div className="max-w-3xl mx-auto prose prose-lg">
          
          <p className="text-xl text-gray-700 leading-relaxed font-semibold">
            If you're only tracking one metric in your restaurant, make it prime cost. This single number tells you whether you're going to make money or go broke, and most restaurant owners either don't track it or calculate it wrong.
          </p>

          <h2>What is Prime Cost?</h2>

          <p>
            Prime cost is dead simple: it's the total of your cost of goods sold (food and beverage costs) plus your labor costs. That's it. These are your two biggest controllable expenses, and together they should represent somewhere between fifty-five and sixty-five percent of your total sales. If your prime cost is higher than sixty-five percent, you're in trouble. If it's lower than fifty-five percent, you're either running an incredibly efficient operation or you're probably sacrificing quality somewhere.
          </p>

          <p>
            The formula looks like this: Prime Cost equals Cost of Goods Sold plus Total Labor Cost. Written mathematically, it's COGS plus Labor equals Prime Cost. Then you calculate your prime cost percentage by dividing prime cost by total sales and multiplying by one hundred.
          </p>

          <h2>Why Prime Cost Matters More Than Any Other Metric</h2>

          <p>
            Here's what nobody tells you when you open a restaurant: you can have lines out the door, five-star reviews, and a packed dining room every night, and still go bankrupt if your prime cost is out of control. Revenue is vanity, profit is sanity, and prime cost tells you whether you have any profit left after paying for the two things that actually run your restaurant—the food and the people.
          </p>

          <p>
            Most restaurant owners focus on top-line revenue. They celebrate a ten thousand dollar Saturday night without realizing they spent seven thousand dollars on food and labor to generate it. Prime cost forces you to look at what actually matters: how much money you kept after feeding customers and paying staff.
          </p>

          <p>
            The reason prime cost is so powerful is that these are your two largest variable costs, and they're the ones you can actually control. Your rent is fixed. Your insurance is fixed. Your utilities are mostly fixed. But food cost and labor cost move with your business decisions every single day. Cut portions, prices go up, labor cost drops—these changes show up immediately in your prime cost.
          </p>

          <h2>How to Calculate Prime Cost: Step by Step</h2>

          <h3>Step One: Calculate Your Cost of Goods Sold</h3>

          <p>
            Your cost of goods sold is how much you spent on food and beverage for a specific time period. Most restaurants calculate this weekly or monthly. The formula is: Beginning Inventory plus Purchases minus Ending Inventory equals COGS.
          </p>

          <p>
            Let's walk through a real example. Say you start the week with five thousand dollars worth of food in your walk-in and dry storage. During the week, you receive eight thousand dollars in deliveries from your suppliers. At the end of the week, you do a physical inventory count and you have four thousand dollars of food remaining. Your COGS for the week is five thousand (starting inventory) plus eight thousand (purchases) minus four thousand (ending inventory), which equals nine thousand dollars.
          </p>

          <p>
            The mistake most owners make here is not doing an actual physical count of ending inventory. They guess, or they use the same number every week, or they just look at what they spent on invoices. That doesn't work. You need to physically count what's in your restaurant at the end of each period, because that's the only way to catch waste, theft, and over-ordering.
          </p>

          <h3>Step Two: Calculate Your Total Labor Cost</h3>

          <p>
            Total labor cost isn't just what you pay in hourly wages. It includes everything related to having employees. That means gross wages, payroll taxes (which add about ten to fifteen percent), worker's compensation insurance, health insurance if you offer it, paid time off, bonuses, and any other employee benefits.
          </p>

          <p>
            Here's a real number from a restaurant doing thirty thousand dollars a week in sales. They pay out seven thousand dollars in gross wages. Payroll taxes add another one thousand dollars. Worker's comp adds five hundred dollars. They offer a simple health insurance stipend that costs three hundred dollars per week. Their total labor cost is eight thousand eight hundred dollars, not the seven thousand they initially thought they were spending.
          </p>

          <p>
            This is where restaurants get killed—they track wages but forget about the burden. Payroll taxes alone will add ten to fifteen percent on top of wages, and most states require worker's compensation insurance that can add another three to ten percent depending on your classification. When you add it all up, that fifteen-dollar-per-hour cook actually costs you somewhere between seventeen and nineteen dollars per hour when you include all the extra costs.
          </p>

          <h3>Step Three: Add Them Together and Calculate Percentage</h3>

          <p>
            Now you add your COGS and your total labor cost. In our example, you had nine thousand dollars in COGS and eight thousand eight hundred dollars in labor, which gives you a prime cost of seventeen thousand eight hundred dollars.
          </p>

          <p>
            To get your prime cost percentage, divide your prime cost by your total sales. If you did thirty thousand dollars in sales that week, your calculation is seventeen thousand eight hundred divided by thirty thousand, which equals point five nine three, or fifty-nine point three percent. That's actually pretty good—you're in the sweet spot of fifty-five to sixty-five percent.
          </p>

          <h2>What Your Prime Cost Number Actually Tells You</h2>

          <p>
            If your prime cost is below fifty-five percent, you're either running an exceptionally efficient operation, you're charging premium prices for your market, or something's off in your calculations. Double-check your numbers. Make sure you're including all labor costs, not just wages. Make sure your food cost calculation includes everything—food, beverage, paper goods, takeout containers, all of it.
          </p>

          <p>
            If your prime cost is between fifty-five and sixty percent, you're in good shape. This is where most successful independent restaurants operate. You've got enough margin left over to cover rent, utilities, insurance, marketing, and hopefully take home some profit at the end of the month.
          </p>

          <p>
            If your prime cost is between sixty and sixty-five percent, you're in the danger zone. You can survive here, but you don't have much room for error. Any unexpected expense, any slow week, any supplier price increase can push you into the red. You need to start looking seriously at your food costs and labor efficiency.
          </p>

          <p>
            If your prime cost is above sixty-five percent, you're in crisis mode. You're almost certainly losing money, or you're breaking even at best. Something needs to change immediately—menu pricing, portion sizes, labor scheduling, vendor negotiations, or all of the above.
          </p>

          <h2>The Two Levers You Can Pull: Food and Labor</h2>

          <p>
            The beauty of prime cost is that it shows you exactly where to focus. If your food cost percentage is high (above thirty-three percent), you need to look at your menu engineering, portion control, vendor pricing, and waste management. If your labor cost percentage is high (above thirty-three percent), you need to optimize your scheduling, cross-train staff, and make sure you're not overstaffed during slow periods.
          </p>

          <p>
            Most restaurants find they can't fix both problems at once. Pick the bigger of the two and tackle that first. If your food cost is thirty-eight percent and your labor cost is twenty-eight percent, focus all your energy on food cost. Get that down to thirty-two percent and suddenly you've added six points to your bottom line without changing anything about labor.
          </p>

          <h2>Common Prime Cost Mistakes</h2>

          <p>
            The biggest mistake is not calculating it at all. The second biggest mistake is calculating it monthly instead of weekly. By the time you see a bad month, you've already lost thousands of dollars. Weekly calculations let you catch problems fast—a vendor price increase, a theft issue, a scheduling problem—before they compound into major losses.
          </p>

          <p>
            Another common mistake is not including everything in your calculations. Comped meals need to count toward COGS. Manager salaries need to count toward labor. Packaging and disposables need to count toward COGS. If you're spending money on it and it goes into a customer's hands or helps deliver food to customers, it counts toward prime cost.
          </p>

          <p>
            The third mistake is not taking action on the number. Calculating prime cost is useless if you don't use it to make decisions. If your prime cost is climbing week over week, something changed. Figure out what it was—a supplier raised prices, someone's stealing, your host is over-scheduling servers, your line cooks are wasting food. The number is a signal that tells you where to look.
          </p>

          <h2>How to Actually Improve Your Prime Cost</h2>

          <p>
            Improving prime cost isn't about cutting quality. It's about cutting waste and improving efficiency. On the food side, this means menu engineering to push high-margin items, negotiating better supplier pricing, implementing portion control systems, tracking waste religiously, and training staff on proper handling and storage to reduce spoilage.
          </p>

          <p>
            On the labor side, it means scheduling to actual demand patterns, not to what you think will happen. It means cross-training so you're not calling in extra people for specific tasks. It means tracking productivity metrics—covers per labor hour, sales per labor hour—and adjusting staffing when the numbers don't make sense.
          </p>

          <p>
            The most effective tactic is to track prime cost daily or at least weekly, and react immediately when it starts climbing. Don't wait until the end of the month when the damage is already done. Weekly tracking lets you test changes and see results fast. You implement a new portion control system on Monday, and by Friday you can see if it's working in your food cost numbers.
          </p>

          <h2>The Bottom Line on Prime Cost</h2>

          <p>
            Prime cost is the single most important metric for restaurant profitability because it tells you whether your fundamental business model works. Everything else—rent, utilities, marketing—is secondary. If your prime cost is out of control, nothing else matters because you won't have any money left to pay for those other things anyway.
          </p>

          <p>
            Track it weekly, not monthly. Include everything, not just the obvious costs. And when the number tells you something's wrong, act on it immediately. The difference between a restaurant that thrives and one that barely survives often comes down to whether the owner knows their prime cost and does something about it when it drifts out of range.
          </p>

          {/* Calculator CTA */}
          <div className="not-prose bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-8 my-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Calculate Your Prime Cost Now</h3>
            <p className="text-lg text-gray-700 mb-6">
              Use our free prime cost calculator to see where your restaurant stands. Get your exact percentage and see if you're in the danger zone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/calculators/prime-cost" className="btn-primary text-center">
                Try Prime Cost Calculator
              </Link>
              <Link href="/early-access" className="btn-secondary text-center">
                Get OwnerClone - Track Automatically
              </Link>
            </div>
          </div>

          {/* Related Articles */}
          <div className="not-prose mt-12">
            <h4 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h4>
            <div className="grid gap-4">
              <Link href="/blog/food-cost-management-guide" className="border-2 border-gray-200 rounded-lg p-4 hover:border-primary-500 transition-colors">
                <h5 className="font-bold text-gray-900 mb-2">Complete Guide to Food Cost Management</h5>
                <p className="text-gray-600 text-sm">Master your food costs with this comprehensive guide to tracking, calculating, and optimizing COGS.</p>
              </Link>
              <Link href="/blog/why-restaurants-fail" className="border-2 border-gray-200 rounded-lg p-4 hover:border-primary-500 transition-colors">
                <h5 className="font-bold text-gray-900 mb-2">Why Most Restaurants Fail in Their First Year</h5>
                <p className="text-gray-600 text-sm">The real reasons restaurants go out of business, and how to avoid becoming a statistic.</p>
              </Link>
            </div>
          </div>

          {/* Back to Blog */}
          <div className="not-prose mt-12 text-center">
            <Link href="/blog" className="text-primary-600 hover:text-primary-700 font-semibold">
              ← Back to All Articles
            </Link>
          </div>

        </div>
      </section>
    </article>
  )
}
