import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/authSlice.ts'
import workspaceReducer from './workspace/workspaceSlice'
import boardsReducer from './boards/boardsSlice'
import uiReducer from './ui/uiSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    workspace: workspaceReducer,
    boards: boardsReducer,
    ui: uiReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch