import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Complete Guide to Restaurant Food Cost Management | OwnerClone',
  description: 'Master restaurant food cost management with this comprehensive guide. Learn how to calculate, track, and reduce your COGS while maintaining quality.',
  keywords: ['food cost management', 'restaurant food cost', 'COGS restaurant', 'reduce food costs', 'food cost percentage', 'menu engineering'],
}

export default function FoodCostGuidePost() {
  return (
    <article className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Cost Control
            </span>
          </div>
          <h1 className="mb-6">
            The Complete Guide to Restaurant Food Cost Management
          </h1>
          <div className="flex items-center gap-6 text-gray-300">
            <span>By OwnerClone Team</span>
            <span>•</span>
            <span>January 2026</span>
            <span>•</span>
            <span>18 min read</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-container">
        <div className="max-w-3xl mx-auto prose prose-lg">
          
          <p className="text-xl text-gray-700 leading-relaxed font-semibold">
            Food cost is typically your largest controllable expense, usually representing twenty-eight to thirty-five percent of your sales. Get it wrong and you'll work yourself to death for no profit. Get it right and you'll have a sustainably profitable restaurant. This guide shows you exactly how to calculate, track, and optimize your food costs.
          </p>

          <h2>Understanding Food Cost: The Basics</h2>

          <p>
            Your food cost percentage tells you how much of every sales dollar goes toward buying the food and beverage you serve to customers. If your food cost is thirty percent, that means for every hundred dollars in sales, thirty dollars went to purchasing the ingredients. The remaining seventy dollars has to cover labor, rent, utilities, insurance, and hopefully leave you with some profit.
          </p>

          <p>
            The target food cost percentage varies by restaurant type. Fast casual concepts can often run at twenty-five to twenty-eight percent because they're focused on efficiency and simpler preparations. Full-service restaurants typically run twenty-eight to thirty-five percent. Fine dining might push to thirty-five to thirty-eight percent because of higher quality ingredients and more complex preparations. The key is knowing what's normal for your concept and staying within that range consistently.
          </p>

          <h2>How to Calculate Your Food Cost Percentage</h2>

          <p>
            The formula is straightforward. Take your beginning inventory value, add all your purchases during the period, then subtract your ending inventory value. That gives you your cost of goods sold. Divide COGS by your total food sales for that same period, and multiply by one hundred to get your percentage.
          </p>

          <p>
            Let's walk through a real example using a week's worth of data. You start the week with six thousand dollars worth of food in inventory. During the week, you receive deliveries totaling nine thousand dollars. At the end of the week, you physically count everything and find you have five thousand five hundred dollars remaining. Your COGS calculation is six thousand plus nine thousand minus five thousand five hundred, which equals nine thousand five hundred dollars.
          </p>

          <p>
            If you did thirty thousand dollars in food sales that week, your food cost percentage is nine thousand five hundred divided by thirty thousand, which equals zero point three one six seven, or thirty-one point six seven percent. That's slightly high but within acceptable range for most full-service restaurants. If that number had come back at thirty-eight percent, you'd have a serious problem that needs immediate attention.
          </p>

          <h2>The Critical Importance of Physical Inventory Counts</h2>

          <p>
            This is where most restaurants go wrong. They look at their invoice totals and call that their food cost. That doesn't work because it doesn't account for inventory changes, waste, theft, or errors. You must physically count your inventory at consistent intervals to get accurate food cost numbers.
          </p>

          <p>
            Weekly counts are ideal because they let you catch problems fast. Monthly counts are acceptable if your operation is very consistent. Anything less frequent than monthly is basically useless because by the time you see a problem, it's been compounding for weeks or months and the damage is substantial.
          </p>

          <p>
            The physical count doesn't have to take hours if you're organized about it. Set up a spreadsheet or system where all your products are already listed by storage area. Walk the walk-in, the freezer, the dry storage, and the bar, counting as you go. Estimate partial cases and opened containers as best you can. The goal is reasonable accuracy, not perfection down to the ounce. Two people can count a typical restaurant's inventory in sixty to ninety minutes.
          </p>

          <h2>Breaking Down Food Cost by Category</h2>

          <p>
            Don't just track overall food cost. Break it down by major categories because different categories have different normal ranges and different problems require different solutions. Track proteins separately from produce, dairy, dry goods, and beverages. This lets you see where your money is actually going and where problems might be hiding.
          </p>

          <p>
            If your overall food cost is thirty-two percent but your protein cost is forty-five percent of protein sales, you know exactly where to focus. Maybe your portions are too generous, maybe there's excessive waste in prep, maybe your menu prices don't reflect protein costs accurately. You can't solve the problem until you can see the problem, and category breakdowns make problems visible.
          </p>

          <h2>The Power of Recipe Costing</h2>

          <p>
            Every item on your menu should have a recipe card with exact quantities and costs for each ingredient. This tells you the theoretical food cost for each dish, which you can compare against your actual food cost to identify problems. When your theoretical cost is twenty-eight percent but your actual cost is thirty-three percent, you know you're losing five points somewhere—waste, theft, portion errors, or inaccurate recipes.
          </p>

          <p>
            Recipe costing seems tedious but it's incredibly powerful. You discover which menu items are secretly killing your margins. You learn that your "popular" burger is actually costing you more than it's making you. You realize your pasta dishes have beautiful margins while your entree salads barely break even. This information drives menu engineering decisions that can add thousands of dollars per month to your bottom line.
          </p>

          <p>
            The process is simple but time-consuming. Take each recipe, break down every ingredient to the exact quantity used, find the current cost per unit for that ingredient, and multiply to get the ingredient cost. Add up all ingredients to get the total plate cost. Divide the plate cost by your menu price to get your food cost percentage for that item. A thirty-dollar steak with seven dollars in food cost has a twenty-three point three percent food cost, which is excellent. A fourteen-dollar pasta with six dollars in food cost has a forty-three percent food cost, which is terrible.
          </p>

          <h2>Menu Engineering: Making Your Menu Work Harder</h2>

          <p>
            Once you know the food cost and popularity of every menu item, you can engineer your menu to maximize profitability. The goal is to push high-profit, high-popularity items while fixing or removing low-profit items, especially if they're also low popularity.
          </p>

          <p>
            Your menu items fall into four categories. Stars are high profit and high popularity—these are your winners, feature them prominently and never change them. Plow Horses are low profit but high popularity—these items make customers happy but don't make you much money, so work on reducing their food cost or slightly increasing prices. Puzzles are high profit but low popularity—these could be winners if more people ordered them, so promote them better or figure out why customers aren't buying them. Dogs are low profit and low popularity—seriously consider removing these from your menu unless there's a compelling strategic reason to keep them.
          </p>

          <p>
            A simple menu engineering example: you discover your chicken parm is popular but has a thirty-eight percent food cost. You analyze the recipe and realize you're using eight ounces of chicken when six ounces would still look generous and satisfy customers. You reduce the portion, test it with customers to make sure they're still happy, and your food cost on that item drops to thirty-one percent. If you sell fifty chicken parm dishes per week, you just saved three hundred fifty dollars per month on one menu item alone.
          </p>

          <h2>Portion Control: Consistency is Profit</h2>

          <p>
            Inconsistent portioning is one of the biggest sources of food cost variance. When your recipe says six ounces of salmon but your cooks eyeball it and some plates get eight ounces while others get five, you're simultaneously losing money on some plates and disappointing customers on others. Portion control tools—scales, scoops, ladles, measuring cups—aren't optional if you want consistent food costs.
          </p>

          <p>
            Train your staff on proper portioning and actually enforce it. Have your managers spot-check plates during service. Weigh proteins before they go on the plate, at least during training and periodically thereafter. Use standardized scoops for sides and measured ladles for sauces. Yes, this slows things down at first, but once your team builds the habit, they can hit consistent portions quickly.
          </p>

          <p>
            The financial impact of portion control is massive. If your average protein portion is ten percent larger than your recipe calls for, your protein cost is ten percent higher than it should be. On a restaurant doing thirty thousand per week with a ten thousand dollar protein spend, that's one thousand dollars per week or fifty-two thousand dollars per year lost to oversized portions. That's not generosity, that's waste.
          </p>

          <h2>Reducing Waste Through Better Systems</h2>

          <p>
            Every restaurant wastes food, but successful restaurants minimize waste through proper prep planning, first-in-first-out inventory rotation, proper storage procedures, and careful monitoring of expiration dates. Track what you're throwing away for a week and you'll be shocked by how much money goes in the trash.
          </p>

          <p>
            Prep-to-order systems can dramatically reduce waste. Instead of prepping fifty portions of something and hoping you sell them all, prep twenty portions and make more if you run low. Yes, you might have to prep twice during a shift, but you'll throw away far less at the end of the night. The labor cost of prepping twice is almost always less than the food cost of overprepping and throwing away product.
          </p>

          <p>
            Storage matters more than people realize. Properly wrapped proteins in the coldest part of your walk-in will last days longer than proteins left uncovered or stored at warmer temperatures. Produce stored in humidity-controlled drawers lasts longer than produce left in delivery boxes. Take the time to store things properly and you'll see your waste decrease noticeably.
          </p>

          <h2>Vendor Management and Price Negotiation</h2>

          <p>
            Most restaurant owners just accept whatever prices their vendors quote. Successful owners negotiate aggressively, compare vendors regularly, and aren't afraid to switch suppliers when they find better pricing. Even a two percent reduction in your food costs can translate to thousands of dollars per year.
          </p>

          <p>
            Get quotes from multiple vendors for your major purchases. Don't just look at the line item price—look at the package size and calculate the true cost per unit. A forty-pound case at one hundred twenty dollars might seem more expensive than a thirty-pound case at ninety-five dollars, but if you do the math, the larger case is actually three dollars per pound versus three point one seven per pound, saving you real money.
          </p>

          <p>
            Build relationships with your vendors but stay vigilant about pricing. Vendors will gradually increase prices hoping you won't notice. Review your invoices regularly and question price increases. Often you can negotiate them back down or find alternative products at better prices. Vendor loyalty is good, but blind loyalty costs you money.
          </p>

          <h2>Theft Prevention: The Silent Profit Killer</h2>

          <p>
            Theft happens in almost every restaurant, and it's not always obvious. It might be steaks going home in backpacks, bottles of liquor disappearing, or unauthorized comps and voids that staff use to give food to friends. All of it shows up in your food cost as unexplained variance between theoretical and actual costs.
          </p>

          <p>
            The best prevention is good systems. Limit access to walk-ins and storage areas. Require manager approval for all comps and voids. Do random bag checks at shift end if necessary. Install cameras in prep areas and storage rooms. Track your pour costs by bartender and investigate anomalies. When employees know you're paying attention and measuring everything, theft drops dramatically.
          </p>

          <p>
            Track your variance between theoretical food cost based on sales and actual food cost based on purchases and inventory. A few percentage points of variance is normal due to waste and minor portioning inconsistencies. If your variance consistently exceeds three to five percent, you either have significant operational issues or you have theft. Either way, you need to investigate and fix it.
          </p>

          <h2>The Role of Menu Pricing</h2>

          <p>
            Sometimes high food costs are actually a pricing problem, not a cost problem. If your food costs are reasonable but your menu prices are too low for your market, raising prices by ten to fifteen percent can bring your food cost percentage back into line without changing anything about your food costs or operations.
          </p>

          <p>
            Most restaurant owners are terrified of raising prices because they think customers will stop coming. In reality, modest price increases rarely affect traffic if your food is good and your prices are still reasonable for your market. A dollar increase on a fifteen-dollar entree is only a six point seven percent increase. Most customers won't even notice, and the ones who do notice will still come back if they love your food.
          </p>

          <p>
            Test price increases strategically. Raise prices on your most popular items first because those are the items where price increases will have the biggest impact on your bottom line. Monitor sales volume carefully. If volume doesn't drop after a price increase, you've just improved your margins without any negative effects. If volume does drop, you can always adjust prices back down, but in most cases you'll find that reasonable price increases don't hurt traffic at all.
          </p>

          <h2>Weekly Tracking and Course Corrections</h2>

          <p>
            Food cost management isn't a one-time project, it's an ongoing discipline. Calculate your food cost percentage every week. Compare it to your target. When it drifts high, investigate immediately. Look at what changed—did a vendor raise prices, did you have unusual waste, did portion sizes grow, did theft increase? Find the problem and fix it before it compounds into major losses.
          </p>

          <p>
            Keep a simple tracking spreadsheet with your weekly food cost percentage, total COGS, and notes about anything unusual that happened. Over time, you'll see patterns. Maybe your food cost always spikes in the summer when produce prices rise, so you need to adjust menu prices seasonally. Maybe your food cost creeps up whenever your head chef takes a vacation, telling you that your backup cooks need better training on portioning. The data tells you stories if you pay attention to it.
          </p>

          <h2>Putting It All Together</h2>

          <p>
            Managing food costs successfully requires attention to multiple factors simultaneously. You need accurate recipe costing to know your theoretical costs. You need physical inventory counts to know your actual costs. You need to compare the two and investigate variances. You need portion control to ensure consistency. You need waste reduction systems to minimize loss. You need vendor management to keep prices competitive. You need theft prevention to protect your margins. And you need weekly tracking to catch problems early.
          </p>

          <p>
            It sounds like a lot of work, and initially it is. But once you build the systems and habits, food cost management becomes routine. You spend an hour per week on inventory and reporting, and in return you save thousands of dollars per month. The return on investment for proper food cost management might be the highest return you'll get from any activity in your restaurant.
          </p>

          {/* Calculator CTA */}
          <div className="not-prose bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-8 my-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Calculate Your Food Cost Now</h3>
            <p className="text-lg text-gray-700 mb-6">
              Use our free food cost calculator to see where you stand. Get instant insights into your profitability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/calculators/food-cost" className="btn-primary text-center">
                Try Food Cost Calculator
              </Link>
              <Link href="/early-access" className="btn-secondary text-center">
                Automate This With OwnerClone
              </Link>
            </div>
          </div>

          {/* Related Articles */}
          <div className="not-prose mt-12">
            <h4 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h4>
            <div className="grid gap-4">
              <Link href="/blog/how-to-calculate-prime-cost" className="border-2 border-gray-200 rounded-lg p-4 hover:border-primary-500 transition-colors">
                <h5 className="font-bold text-gray-900 mb-2">How to Calculate Your Restaurant's Prime Cost</h5>
                <p className="text-gray-600 text-sm">Learn the single most important metric for restaurant profitability.</p>
              </Link>
              <Link href="/blog/why-restaurants-fail" className="border-2 border-gray-200 rounded-lg p-4 hover:border-primary-500 transition-colors">
                <h5 className="font-bold text-gray-900 mb-2">Why Most Restaurants Fail in Their First Year</h5>
                <p className="text-gray-600 text-sm">Understand the real operational reasons restaurants go out of business.</p>
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
