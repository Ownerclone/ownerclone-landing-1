import { Metadata } from 'next'
import Link from 'next/link'
import { FaClock, FaUser } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Restaurant Owner Insights & Tips | OwnerClone Blog',
  description: 'Real-world restaurant management advice from owners who\'ve been there. Learn about food costing, labor management, scaling restaurants, and building systems that work.',
  keywords: ['restaurant management blog', 'restaurant owner tips', 'restaurant profitability', 'food cost management', 'labor cost tips', 'restaurant operations'],
}

export default function Blog() {
  const posts = [
    {
      slug: 'hard-truths-independent-restaurant-owner',
      title: 'The Hard Truths About Being an Independent Restaurant Owner',
      excerpt: 'From film industry success to three restaurant concepts - the lessons nobody talks about. Learn what it really takes to scale restaurants without losing quality or your sanity.',
      author: 'OwnerClone Founder',
      date: 'January 2026',
      readTime: '10 min read',
      category: 'Restaurant Ownership',
      featured: true,
    },
    {
      slug: 'how-to-calculate-prime-cost',
      title: 'How to Calculate Your Restaurant\'s Prime Cost (And Why It Matters)',
      excerpt: 'Master the single most important metric for restaurant profitability. Step-by-step guide with real examples showing you exactly how to calculate and use prime cost.',
      author: 'OwnerClone Team',
      date: 'January 2026',
      readTime: '12 min read',
      category: 'Profitability',
      featured: false,
    },
    {
      slug: 'why-restaurants-fail',
      title: 'Why Most Restaurants Fail in Their First Year',
      excerpt: 'The real operational reasons sixty percent of restaurants close within twelve months. Learn from someone who ran three restaurant concepts and understands exactly what kills restaurants.',
      author: 'OwnerClone Founder',
      date: 'January 2026',
      readTime: '15 min read',
      category: 'Restaurant Business',
      featured: false,
    },
    {
      slug: 'food-cost-management-guide',
      title: 'The Complete Guide to Restaurant Food Cost Management',
      excerpt: 'Everything you need to know about calculating, tracking, and optimizing your food costs. From recipe costing to vendor negotiation to portion control.',
      author: 'OwnerClone Team',
      date: 'January 2026',
      readTime: '18 min read',
      category: 'Cost Control',
      featured: false,
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-6">
            Restaurant Owner Insights
          </h1>
          <p className="text-xl text-primary-100">
            Real advice from real restaurant owners. No fluff, no theory - just hard-earned lessons from the trenches.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.slug} className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200 ${post.featured ? 'border-4 border-primary-500' : 'border border-gray-200'}`}>
                {post.featured && (
                  <div className="bg-primary-600 text-white text-center py-2 font-bold text-sm uppercase tracking-wide">
                    Featured Post
                  </div>
                )}
                
                <div className="p-8">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full font-semibold">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-2">
                      <FaClock className="text-gray-400" />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaUser className="text-gray-400" />
                      <span>{post.author}</span>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mb-4 hover:text-primary-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-block px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200"
                  >
                    Read Full Article →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Coming Soon Section */}
          <div className="mt-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">More Articles Coming Soon</h3>
            <p className="text-lg text-gray-700 mb-6">
              We're publishing new articles regularly about restaurant management, profitability, and operations. Subscribe to get notified when we publish new content.
            </p>
            <Link href="/contact" className="btn-primary">
              Get Notified of New Articles
            </Link>
          </div>

          {/* Topics We Cover */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Topics We Cover</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Food Cost Management</h4>
                <p className="text-gray-600">Strategies for tracking, calculating, and reducing food costs without compromising quality.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Labor & Scheduling</h4>
                <p className="text-gray-600">Optimize labor costs, prevent overtime, and build schedules that actually work.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Scaling Restaurants</h4>
                <p className="text-gray-600">How to grow from one location to multiple without losing quality or burning out.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
                <h4 className="text-lg font-bold text-gray-900 mb-2">POS Integration</h4>
                <p className="text-gray-600">Making your POS system work for you instead of against you.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Restaurant Systems</h4>
                <p className="text-gray-600">Building processes and systems that let your restaurant run without you.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Real Owner Stories</h4>
                <p className="text-gray-600">Authentic experiences from restaurant owners who've been through it all.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
