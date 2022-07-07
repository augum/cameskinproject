import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  connect: {
    user: [],
    connected: false,
  },
}
export const connectedSlice = createSlice({
  name: 'connected',
  initialState,
  reducers: {
    getConnectedData: (state, action) => {
      state.users = action.payload
    },
  },
})
export const { getConnectedData } = connectedSlice.actions
export default connectedSlice.reducer
