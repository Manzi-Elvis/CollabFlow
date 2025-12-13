'use client'

import ColumnHeader from './ColumnHeader'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'

type ColumnProps = {
  column: {
    id: string
    name: string
    taskIds: string[]
  }
}

export default function Column({ column }: ColumnProps) {
  const tasks = useSelector((state: RootState) => state.boards.tasks)

  return (
    <div className="flex flex-col w-70 bg-muted rounded-xl p-3">
      <ColumnHeader title={column.name} />

      <div className="flex flex-col gap-2 mt-3">
        {column.taskIds.map(taskId => (
          <div
            key={taskId}
            className="rounded-lg bg-background p-3 text-sm shadow-sm"
          >
            {tasks[taskId]?.title}
          </div>
        ))}
      </div>

      <button className="mt-3 text-xs text-muted-foreground hover:text-foreground">
        + Add task
      </button>
    </div>
  )
}