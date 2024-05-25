import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./authReducer";
import { settingReducer } from "./settingsReducer";
import { cartReducer } from "./cartReducer";

const store = configureStore({
  reducer: {
    authReducer,
    settingReducer,
    cartReducer
  }
})

export default store