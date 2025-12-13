'use client'

import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { redirect } from 'next/navigation'

export default function WorkspaceLayout({ children }: { children: React.ReactNode }) {
  const isAuthenticated = useSelector((s: RootState) => s.auth.isAuthenticated)

  if (!isAuthenticated) redirect('/login')

  return (
    <div className="flex h-screen">
      <aside className="w-64 border-r">Sidebar</aside>
      <main className="flex-1 overflow-hidden">{children}</main>
    </div>
  )
}