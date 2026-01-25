import { Metadata } from 'next'
import Link from 'next/link'
import { Clock, User } from 'lucide-react'

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
    <main className="min-h-screen relative">
      {/* Fixed SVG Background */}
      <div className="fixed inset-0 z-0" style={{
        backgroundImage: 'url(/bg-glow.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }} />

      {/* All content with relative z-10 */}
      <div className="relative z-10">

        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 text-center">
              <h1 className="text-5xl md:text-6xl font-black mb-6 text-gray-200">
                Restaurant Owner <span className="text-cyan-400">Insights</span>
              </h1>
              <p className="text-xl text-gray-300">
                Real advice from real restaurant owners. No fluff, no theory - just hard-earned lessons from the trenches.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            {allPosts.length === 0 ? (
              <div className="text-center py-12">
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-12">
                  <p className="text-xl text-gray-400">No published posts yet. Check back soon!</p>
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                {allPosts.map((post: any) => (
                  <article 
                    key={post.id} 
                    className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300"
                  >
                    <div className="p-8">
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                        <span className="bg-cyan-500/10 text-cyan-400 border border-cyan-400/30 px-3 py-1 rounded-full font-semibold">
                          Restaurant Management
                        </span>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span>{new Date(post.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-gray-500" />
                          <span>OwnerClone Team</span>
                        </div>
                      </div>

                      <h2 className="text-3xl font-bold text-gray-200 mb-4 hover:text-cyan-400 transition-colors">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h2>

                      {post.excerpt && (
                        <p className="text-lg text-gray-300 mb-6 leading-relaxed">{post.excerpt}</p>
                      )}

                      <Link 
                        href={`/blog/${post.slug}`}
                        className="inline-block backdrop-blur-xl bg-cyan-500/20 border border-cyan-300/30 text-cyan-200 hover:bg-cyan-500/30 hover:text-white transition-all px-6 py-3 rounded-lg font-bold"
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
    </main>
  )
}
