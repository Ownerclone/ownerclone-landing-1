import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-white mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link href="/features" className="text-gray-400 hover:text-white transition">Features</Link></li>
              <li><Link href="/pricing" className="text-gray-400 hover:text-white transition">Pricing</Link></li>
              <li><Link href="/free-tools" className="text-gray-400 hover:text-white transition">Free Tools</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-gray-400 hover:text-white transition">Privacy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white transition">Terms</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">OwnerClone</h3>
            <p className="text-gray-400 text-sm">AI-powered restaurant management</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">© 2026 OwnerClone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
