import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [],
}
export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getUsersData: (state, action) => {
      state.users = action.payload
    },
  },
})
export const { getUsersData } = userSlice.actions
export default userSlice.reducer
