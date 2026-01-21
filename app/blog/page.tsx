import { Metadata } from 'next'
import Link from 'next/link'
import { FaClock, FaUser } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Restaurant Owner Insights & Tips | OwnerClone Blog',
  description: 'Real-world restaurant management advice from owners who\'ve been there.',
  keywords: ['restaurant management blog', 'restaurant owner tips'],
}

async function getPosts() {
  try {
    // Fetch from your CMS API
    const res = await fetch('https://ownerclone-aenvnzcyt-matt-mckinneys-projects-c4902371.vercel.app/api/blog?status=published', {
      next: { revalidate: 60 } // Revalidate every 60 seconds
    })
    
    if (!res.ok) return []
    
    const data = await res.json()
    return data.posts || []
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

export default async function Blog() {
  const posts = await getPosts()

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
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No published posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="space-y-8">
              {posts.map((post: any) => (
                <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200 border border-gray-200">
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full font-semibold">
                        Restaurant Management
                      </span>
                      <div className="flex items-center gap-2">
                        <FaClock className="text-gray-400" />
                        <span>{new Date(post.created_at).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaUser className="text-gray-400" />
                        <span>OwnerClone Team</span>
                      </div>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mb-4 hover:text-primary-600 transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>

                    {post.excerpt && (
                      <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                        {post.excerpt}
                      </p>
                    )}

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
          )}

          {/* Rest of your sections... */}
        </div>
      </section>
    </>
  )
}
