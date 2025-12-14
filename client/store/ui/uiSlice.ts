import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type ModalType = 'NONE' | 'CREATE_TASK'

type UiState = {
  activeModal: ModalType
  modalPayload?: any
}

const initialState: UiState = {
  activeModal: 'NONE',
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openModal(
      state,
      action: PayloadAction<{ type: ModalType; payload?: any }>
    ) {
      state.activeModal = action.payload.type
      state.modalPayload = action.payload.payload
    },
    closeModal(state) {
      state.activeModal = 'NONE'
      state.modalPayload = undefined
    },
  },
})

export const { openModal, closeModal } = uiSlice.actions
export default uiSlice.reducer