'use client'

import { usePathname } from 'next/navigation'

export function DevelopmentBanner() {
  const pathname = usePathname()
  const showDevBanner = pathname === '/services/project-management'

  if (!showDevBanner) return null

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full rounded-t-lg bg-yellow-400 text-black py-2 text-center z-40">
      <span className="bg-yellow-900 p-1 rounded-sm">🚧</span> Note: The Project Management feature is still in the early stages of development
    </div>



  )
} 