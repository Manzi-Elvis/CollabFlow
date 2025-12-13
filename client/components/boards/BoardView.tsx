'use client'

import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import Column from './Column'
import EmptyBoard from './EmptyBoard'

export default function BoardView() {
  const { activeBoardId, boards, columns } = useSelector(
    (state: RootState) => state.boards
  )

  if (!activeBoardId) return <EmptyBoard />

  const board = boards[activeBoardId]
  if (!board) return <EmptyBoard />

  return (
    <div className="flex h-full gap-4 p-4 overflow-x-auto">
      {board.columnIds.map(columnId => (
        <Column key={columnId} column={columns[columnId]} />
      ))}

      {/* Add Column placeholder */}
      <button className="min-w-70 h-fit rounded-xl border border-dashed p-4 text-sm text-muted-foreground hover:bg-muted">
        + Add column
      </button>
    </div>
  )
}