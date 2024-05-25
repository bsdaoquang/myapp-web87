import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: 'light',
  language: 'vi'
}

const settingsSlice = createSlice({
  name: 'settings',
  initialState: {
    settingsData: initialState
  },
  reducers:{
    switchLang: (state, action) => {
      const lang =state.settingsData.language
      state.settingsData.language = lang === 'vi' ? 'eng': 'vi'
    }
  }
})

export const settingReducer = settingsSlice.reducer
export const {switchLang} = settingsSlice.actions
export const settingSelector = (state) => state.settingReducer.settingsData