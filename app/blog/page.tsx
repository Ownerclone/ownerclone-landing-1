import { Metadata } from 'next'
import Link from 'next/link'
import { FaClock, FaUser } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Restaurant Owner Insights & Tips | OwnerClone Blog',
  description: 'Real-world restaurant management advice from owners who\'ve been there.',
  keywords: ['restaurant management blog', 'restaurant owner tips'],
}

// Hardcoded posts (your original content)
const hardcodedPosts = [
  {
    id: 'hardcoded-1',
    slug: 'why-restaurants-fail',
    title: 'Why Most Restaurants Fail (And How to Beat the Odds)',
    excerpt: 'After running three restaurants and helping hundreds more, I\'ve seen the same mistakes destroy otherwise great concepts. Here\'s what actually matters.',
    created_at: '2024-01-15',
    isHardcoded: true
  },
  {
    id: 'hardcoded-2',
    slug: 'food-cost-secrets',
    title: 'The Food Cost Secret That Saved My Restaurant $50K',
    excerpt: 'Most owners track food cost wrong. Here\'s the system I used to cut waste by 40% without compromising quality.',
    created_at: '2024-01-10',
    isHardcoded: true
  },
  // Add more hardcoded posts here if you have them
]

async function getPosts() {
  try {
    // Fetch from LOCAL API (same deployment)
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/blog?status=published`, {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
      cache: 'no-store' // For development
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
  
  // Combine hardcoded posts with database posts
  const allPosts = [...hardcodedPosts, ...dbPosts].sort((a, b) => {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  })

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-6
