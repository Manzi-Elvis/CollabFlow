import { createSlice } from '@reduxjs/toolkit'

const workspaceSlice = createSlice({
  name: 'workspace',
  initialState: {
    activeWorkspace: null,
    workspaces: [],
  },
  reducers: {
    setWorkspaces(state, action) {
      state.workspaces = action.payload
    },
    setActiveWorkspace(state, action) {
      state.activeWorkspace = action.payload
      localStorage.setItem('workspaceId', action.payload.id)
    },
  },
})

export const { setWorkspaces, setActiveWorkspace } = workspaceSlice.actions
export default workspaceSlice.reducer