import { Metadata } from 'next'
import Link from 'next/link'
import { FaClock, FaUser } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Restaurant Owner Insights & Tips | OwnerClone Blog',
  description: 'Real-world restaurant management advice from owners who have been there.',
  keywords: ['restaurant management blog', 'restaurant owner tips'],
}

const hardcodedPosts: any[] = []

async function getPosts() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
    const res = await fetch(`${baseUrl}/api/blog?status=published`, {
      next: { revalidate: 0 }
    })
    
    if (!res.ok) {
      console.error('Failed to fetch posts:', res.status)
      return []
    }
    
    const data = await res.json()
    return data.posts || []
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

export default async function Blog() {
  const dbPosts = await getPosts()
  
  const allPosts = [...hardcodedPosts, ...dbPosts].sort((a, b) => {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  })

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Animated Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#a855f7] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#38bdf8] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1419] to-transparent pointer-events-none"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Restaurant Owner <span className="text-[#38bdf8]">Insights</span>
          </h1>
          <p className="text-xl text-gray-300">
            Real advice from real restaurant owners. No fluff, no theory - just hard-earned lessons from the trenches.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="relative py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {allPosts.length === 0 ? (
            <div className="text-center py-12">
              <div className="bg-[#0a0a0a]/60 backdrop-blur-xl border border-[#2a2a2a] rounded-2xl p-12">
                <p className="text-xl text-gray-400">No published posts yet. Check back soon!</p>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              {allPosts.map((post: any) => (
                <article 
                  key={post.id} 
                  className="bg-[#0a0a0a]/60 backdrop-blur-xl border border-[#2a2a2a] rounded-2xl overflow-hidden hover:border-[#38bdf8] hover:shadow-[0_0_40px_rgba(56,189,248,0.2)] transition-all duration-300"
                >
                  <div className="p-8">
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                      <span className="bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/30 px-3 py-1 rounded-full font-semibold">
                        Restaurant Management
                      </span>
                      <div className="flex items-center gap-2">
                        <FaClock className="text-gray-500" />
                        <span>{new Date(post.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaUser className="text-gray-500" />
                        <span>OwnerClone Team</span>
                      </div>
                    </div>

                    <h2 className="text-3xl font-bold text-white mb-4 hover:text-[#38bdf8] transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>

                    {post.excerpt && (
                      <p className="text-lg text-gray-300 mb-6 leading-relaxed">{post.excerpt}</p>
                    )}

                    <Link 
                      href={`/blog/${post.slug}`}
                      className="inline-block px-6 py-3 bg-[#38bdf8] text-black font-bold rounded-lg hover:bg-[#0ea5e9] transition-colors shadow-lg hover:shadow-[0_0_40px_rgba(56,189,248,0.3)]"
                    >
                      Read Full Article →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
