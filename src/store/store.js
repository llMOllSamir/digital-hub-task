 import { configureStore } from '@reduxjs/toolkit'
import navbarReducer from './Nav.slice'

export const store = configureStore({
  reducer: {
    navbar:navbarReducer
  },
})