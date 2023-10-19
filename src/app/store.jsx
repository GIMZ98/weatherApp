import { configureStore } from "@reduxjs/toolkit";
import coordsReducer from '../features/coordsSlice'

export const store = configureStore({
    reducer:{
        coords: coordsReducer,
    }
})