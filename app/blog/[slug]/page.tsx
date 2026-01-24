import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navigation from '@/components/Navigation'

interface BlogPost {
  id: string
  title: string
  content: string
  excerpt: string
  slug: string
  status: string
  created_at: string
}

async function getPost(slug: string): Promise<BlogPost | null> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
    const res = await fetch(`${baseUrl}/api/blog?slug=${slug}`, {
      next: { revalidate: 0 }
    })
    
    if (!res.ok) {
      return null
    }
    
    const data = await res.json()
    return data.posts?.[0] || null
  } catch (error) {
    console.error('Error fetching post:', error)
    return null
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)
  
  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Animated Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#a855f7] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#38bdf8] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <Navigation />

      <article className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <Link 
          href="/blog"
          className="text-[#38bdf8] hover:text-[#0ea5e9] mb-8 inline-flex items-center gap-2 font-semibold transition-colors"
        >
          ← Back to Blog
        </Link>
        
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">{post.title}</h1>
          <div className="text-gray-400">
            <time dateTime={post.created_at}>
              {new Date(post.created_at).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </time>
          </div>
        </header>

        <div className="bg-[#0a0a0a]/60 backdrop-blur-xl border border-[#2a2a2a] rounded-2xl p-8 md:p-12">
          <div 
            className="prose prose-lg prose-invert max-w-none
              prose-headings:text-white prose-headings:font-bold
              prose-h2:text-3xl prose-h2:mt-8 prose-h2:mb-4 prose-h2:text-[#38bdf8]
              prose-h3:text-2xl prose-h3:mt-6 prose-h3:mb-3 prose-h3:text-[#38bdf8]
              prose-p:text-gray-300 prose-p:leading-relaxed
              prose-a:text-[#38bdf8] prose-a:no-underline hover:prose-a:text-[#0ea5e9]
              prose-strong:text-white prose-strong:font-bold
              prose-ul:text-gray-300 prose-ol:text-gray-300
              prose-li:text-gray-300 prose-li:marker:text-[#38bdf8]
              prose-blockquote:border-l-[#38bdf8] prose-blockquote:text-gray-300 prose-blockquote:italic
              prose-code:text-[#10b981] prose-code:bg-[#1a1a1a] prose-code:px-1 prose-code:py-0.5 prose-code:rounded
              prose-pre:bg-[#1a1a1a] prose-pre:border prose-pre:border-[#2a2a2a]
              prose-img:rounded-xl prose-img:shadow-lg"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
        </div>

        <div className="mt-12 pt-8 border-t border-[#2a2a2a]">
          <Link 
            href="/blog"
            className="text-[#38bdf8] hover:text-[#0ea5e9] inline-flex items-center gap-2 font-semibold transition-colors"
          >
            ← Back to all posts
          </Link>
        </div>
      </article>
    </div>
  )
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found | OwnerClone Blog'
    }
  }

  return {
    title: `${post.title} | OwnerClone Blog`,
    description: post.excerpt,
  }
}
