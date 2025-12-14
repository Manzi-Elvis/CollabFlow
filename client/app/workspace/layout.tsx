import ModalRoot from '@/components/common/ModalRoot'

export default function WorkspaceLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <aside className="w-64 border-r">Sidebar</aside>
      <main className="flex-1 overflow-hidden relative">
        {children}
        <ModalRoot />
      </main>
    </div>
  )
}