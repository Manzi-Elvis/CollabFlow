import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ModalType = 'CREATE_TASK' | 'CREATE_COLUMN' | 'NONE'

type UiState = {
  activeModal: ModalType
  modalPayload?: any
  isSidebarOpen: boolean
  isDragging: boolean
}

const initialState: UiState = {
  activeModal: 'NONE',
  isSidebarOpen: true,
  isDragging: false,
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<{ type: ModalType; payload?: any }>) {
      state.activeModal = action.payload.type
      state.modalPayload = action.payload.payload
    },
    closeModal(state) {
      state.activeModal = 'NONE'
      state.modalPayload = undefined
    },
    toggleSidebar(state) {
      state.isSidebarOpen = !state.isSidebarOpen
    },
    setDragging(state, action: PayloadAction<boolean>) {
      state.isDragging = action.payload
    },
  },
})

export default uiSlice.reducer