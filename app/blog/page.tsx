import { Metadata } from 'next'
import Link from 'next/link'
import { FaClock, FaUser } from 'react-icons/fa'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export const metadata: Metadata = {
  title: 'Restaurant Owner Insights & Tips | OwnerClone Blog',
  description: 'Real-world restaurant management advice from owners who have been there.',
  keywords: ['restaurant management blog', 'restaurant owner tips'],
}

const hardcodedPosts = [
  {
    id: 'hardcoded-1',
    slug: 'why-restaurants-fail',
    title: 'Why Most Restaurants Fail (And How to Beat the Odds)',
    excerpt: 'After running three restaurants and helping hundreds more, I have seen the same mistakes destroy otherwise great concepts. Here is what actually matters.',
    created_at: '2024-01-15',
    isHardcoded: true
  },
  {
    id: 'hardcoded-2',
    slug: 'food-cost-secrets',
    title: 'The Food Cost Secret That Saved My Restaurant $50K',
    excerpt: 'Most owners track food cost wrong. Here is the system I used to cut waste by 40% without compromising quality.',
    created_at: '2024-01-10',
    isHardcoded: true
  },
]

async function getPosts() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
    const res = await fetch(`${baseUrl}/api/blog?status=published`, {
      cache: 'no-
