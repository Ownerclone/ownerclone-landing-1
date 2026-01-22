import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'

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
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link 
        href="/blog"
        className="text-primary-600 hover:text-primary-700 mb-8 inline-block"
      >
        ← Back to Blog
      </Link>
      
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <div className="text-gray-600">
          <time dateTime={post.created_at}>
            {new Date(post.created_at).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </time>
        </div>
      </header>

      <div className="prose prose-lg max-w-none">
<div 
  className="prose prose-lg max-w-none" 
  dangerouslySetInnerHTML={{ __html: post.content }} 
/>     
      </div>
    </article>
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
