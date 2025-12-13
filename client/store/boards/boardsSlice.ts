import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Task = {
  id: string
  title: string
  description?: string
  columnId: string
  position: number
}

type Column = {
  id: string
  name: string
  boardId: string
  position: number
  taskIds: string[]
}

type Board = {
  id: string
  name: string
  columnIds: string[]
}

type BoardsState = {
  boards: Record<string, Board>
  columns: Record<string, Column>
  tasks: Record<string, Task>
  activeBoardId: string | null
}

const initialState: BoardsState = {
  boards: {},
  columns: {},
  tasks: {},
  activeBoardId: null,
}
