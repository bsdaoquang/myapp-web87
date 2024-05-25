import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: '',
  accesstoken: '',
  _id: ''
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authData: initialState
  },
  reducers: {
    login: (state, action) => {
      const res = localStorage.getItem('user')
      state.authData = res ? JSON.parse(res) : action.payload
    },
    logout: (state, _action) => {
      state.authData = initialState
    }
  },
  
})


export const authReducer = authSlice.reducer
export const {login, logout} = authSlice.actions
export const authSelector = (state) => state.authReducer.authData


const fetchUser = createAsyncThunk('users/fetchUser', async (userId) => {
  const res = await fetch('dafafa')

  return res
})