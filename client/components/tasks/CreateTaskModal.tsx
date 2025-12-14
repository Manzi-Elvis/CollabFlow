'use client'

import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from '@/store/ui/uiSlice'
import { RootState } from '@/store'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function CreateTaskModal() {
  const dispatch = useDispatch()
  const { modalPayload } = useSelector((s: RootState) => s.ui)

  const columnId = modalPayload?.columnId

  const [title, setTitle] = useState('')

  function handleSubmit() {
    if (!title.trim()) return

    // TEMP: later → dispatch async thunk
    console.log('Create task:', {
      title,
      columnId,
    })

    dispatch(closeModal())
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full max-w-sm rounded-xl bg-background p-4 shadow-lg"
      >
        <h2 className="text-sm font-medium">Create task</h2>

        <input
          autoFocus
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Task title"
          className="mt-3 w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />

        <div className="mt-4 flex justify-end gap-2">
          <button
            onClick={() => dispatch(closeModal())}
            className="text-xs text-muted-foreground hover:text-foreground"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground"
          >
            Create
          </button>
        </div>
      </motion.div>
    </div>
  )
}