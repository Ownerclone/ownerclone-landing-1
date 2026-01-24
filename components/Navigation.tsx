{/* Logo */}
<Link href="/" className="flex items-center space-x-2">
  <svg viewBox="-5 0 85 60" className="h-10 md:h-12 w-auto">
    {/* O circle */}
    <circle 
      cx="20" 
      cy="30" 
      r="18" 
      fill="none" 
      className="logo-color" 
      strokeWidth="10"
    />
    {/* White outline for light mode only - O circle */}
    <circle 
      cx="20" 
      cy="30" 
      r="18" 
      fill="none" 
      stroke="white"
      strokeWidth="3"
      className="opacity-0 light-mode-outline"
    />
    
    {/* C circle */}
    <circle 
      cx="48" 
      cy="30" 
      r="18" 
      fill="none" 
      className="logo-color" 
      strokeWidth="10" 
      strokeDasharray="85 113" 
      transform="rotate(40, 48, 30)"
    />
    {/* White outline for light mode only - C circle */}
    <circle 
      cx="48" 
      cy="30" 
      r="18" 
      fill="none" 
      stroke="white"
      strokeWidth="3"
      strokeDasharray="85 113" 
      transform="rotate(40, 48, 30)"
      className="opacity-0 light-mode-outline"
    />
  </svg>
  <span className="text-2xl font-black text-white">OwnerClone</span>
</Link>
