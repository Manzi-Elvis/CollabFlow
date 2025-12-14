'use client'

import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import CreateTaskModal from '@/components/tasks/CreateTaskModal'

export default function ModalRoot() {
  const { activeModal } = useSelector((state: RootState) => state.ui)

  if (activeModal === 'CREATE_TASK') return <CreateTaskModal />

  return null
}