'use client'

import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import ColumnHeader from './ColumnHeader'
import TaskCard from '@/components/tasks/TaskCard'

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
    <div className="flex flex-col w-[280px] bg-muted rounded-xl p-3">
      <ColumnHeader title={column.name} />

      <div className="flex flex-col gap-2 mt-3">
        {column.taskIds.map(taskId => {
          const task = tasks[taskId]
          if (!task) return null

          return (
            <TaskCard
              key={task.id}
              id={task.id}
              title={task.title}
              description={task.description}
              onClick={(id) => {
                // later → open task details modal
                console.log('Task clicked:', id)
              }}
            />
          )
        })}
      </div>

      <button className="mt-3 text-xs text-muted-foreground hover:text-foreground">
        + Add task
      </button>
    </div>
  )
}