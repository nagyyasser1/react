import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mode: 'light',
  loading: false,
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    Loading: (state, action) => {
      state.loading = action.payload
    },
  },
})

export const { Loading } = appSlice.actions
export default appSlice.reducer
