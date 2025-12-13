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

const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    setActiveBoard(state, action: PayloadAction<string>) {
      state.activeBoardId = action.payload
    },

    setBoardData(state, action: PayloadAction<BoardsState>) {
      return action.payload
    },

    moveTask(
      state,
      action: PayloadAction<{
        taskId: string
        fromColumnId: string
        toColumnId: string
        toIndex: number
      }>
    ) {
      const { taskId, fromColumnId, toColumnId, toIndex } = action.payload

      const fromTasks = state.columns[fromColumnId].taskIds
      const toTasks = state.columns[toColumnId].taskIds

      state.columns[fromColumnId].taskIds = fromTasks.filter(id => id !== taskId)
      toTasks.splice(toIndex, 0, taskId)

      state.tasks[taskId].columnId = toColumnId
    },
  },
})

export default boardsSlice.reducer