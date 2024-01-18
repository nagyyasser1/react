import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Axios from 'axios'

const url = 'http://localhost:5000'
const API = Axios.create({ baseURL: url })

export const Register = createAsyncThunk(
  'auth/register',
  async (args, thunkAPI) => {
    try {
      const { rejectWithValue } = thunkAPI
      const { data } = await API.post('/users/register', args.formData)
      localStorage.setItem('profile', JSON.stringify(data))
      args.history.push('/')
      return data
    } catch (error) {
      console.log(error)
    }
  },
)

export const Login = createAsyncThunk('auth/signin', async (args, thunkAPI) => {
  try {
    const { rejectWithValue } = thunkAPI
    const { data } = await API.post('/users/login', args.formData)
    localStorage.setItem('profile', JSON.stringify(data))
    args.history.push('/')
    return data
  } catch (error) {
    console.log(error)
  }
})

const initialState = {
  authData: null,
  loading: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    googleLogin: (state, action) => {
      localStorage.setItem('profile', JSON.stringify(action.payload))
      state.authData = action.payload
    },
    Logout: (state, action) => {
      localStorage.removeItem('profile')

      state.authData = null
    },
  },
  extraReducers: {
    [Login.pending]: (state) => {
      state.loading = true
    },
    [Login.fulfilled]: (state, action) => {
      state.authData = action.payload
      state.loading = false
    },
    [Register.pending]: (state) => {
      state.loading = true
    },
    [Register.fulfilled]: (state, action) => {
      state.authData = action.payload
      state.loading = false
    },
  },
})

export const { googleLogin, Logout } = authSlice.actions
export default authSlice.reducer
