import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import Axios from 'axios'
const url = 'http://localhost:5000'
const API = Axios.create({ baseURL: url })

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem('profile')).token
    }`
  }
  return req
})

export const getPosts = createAsyncThunk(
  'post/getPosts',
  async (page, thunkAPI) => {
    try {
      const { data } = await API.get(`/posts?page=${page}`)
      return data
    } catch (error) {
      console.log(error)
    }
  },
)

export const getPost = createAsyncThunk(
  'post/getPost',
  async (id, thunkAPI) => {
    try {
      const { data } = await API.get(`/posts/${id}`)

      return data
    } catch (error) {
      console.log(error)
    }
  },
)

export const getPostsBySearch = createAsyncThunk(
  'post/getPostsBySearch',
  async (searchQuery, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await API.get(
        `/posts/search?searchQuery=${searchQuery?.search || 'none'}&tags=${
          searchQuery.tags
        }`,
      )
      return data
    } catch (error) {
      console.log(error)
    }
  },
)

export const createPost = createAsyncThunk(
  'post/createPost',
  async ({ postInfo, history }, thunkAPI) => {
    try {
      const { data } = await API.post('/posts', postInfo)
      history.push(`/posts/${data._id}`)
      return data
    } catch (error) {
      console.log(error)
    }
  },
)

export const updatePost = createAsyncThunk(
  'post/updatePost',
  async (args, thunkAPI) => {
    try {
      const { data } = await API.patch(
        `/posts/${args.currentId}`,
        args.postData,
      )

      return data
    } catch (error) {
      console.log(error)
    }
  },
)

export const deletePost = createAsyncThunk(
  'post/deletePost',
  async (id, thunkAPI) => {
    try {
      const res = await API.delete(`/posts/${id}`)
      return { status: res.status, _id: id }
    } catch (error) {
      console.log(error)
    }
  },
)

export const likePost = createAsyncThunk(
  'post/likePost',
  async (args, thunkAPI) => {
    try {
      const { data } = await API.patch(`/posts/${args.id}/likePost`)
      return data
    } catch (error) {
      console.log(error)
    }
  },
)

export const commentPost = createAsyncThunk(
  'post/commentPost',
  async ({ id, commentData }, thunkAPI) => {
    console.log(commentData)
    try {
      const { data } = await API.patch(`/posts/${id}/commentPost`, commentData)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  },
)
const initialState = {
  posts: [],
  post: {},
  currentPage: 1,
  numberOfPages: 1,
  isLoading: false,
}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.isLoading = true
    },
    [getPosts.fulfilled]: (state, action) => {
      state.posts = action.payload.data
      state.numberOfPages = action.payload.numberOfPages
      state.currentPage = action.payload.currentPage
      state.isLoading = false
    },
    [getPost.pending]: (state) => {
      state.isLoading = true
    },
    [getPost.fulfilled]: (state, action) => {
      state.post = action.payload
      state.isLoading = false
    },
    [getPostsBySearch.pending]: (state) => {
      state.isLoading = true
    },
    [getPostsBySearch.fulfilled]: (state, action) => {
      state.posts = action.payload
      state.isLoading = false
    },
    [createPost.pending]: (state) => {
      state.isLoading = true
    },
    [createPost.fulfilled]: (state, action) => {
      state.posts.push(action.payload)
      state.isLoading = false
    },

    [updatePost.fulfilled]: (state, action) => {
      state.posts = state.posts.map((post) => {
        if (post._id === action.payload._id) {
          return action.payload
        }
        return post
      })
    },

    [deletePost.fulfilled]: (state, action) => {
      state.posts = state.posts.filter(
        (post) => post._id !== action.payload._id,
      )
    },

    [likePost.fulfilled]: (state, action) => {
      state.posts = state.posts.map((post) => {
        if (post._id === action.payload._id) {
          return action.payload
        }
        return post
      })
    },
  },
})

export const {} = postSlice.actions

export default postSlice.reducer
