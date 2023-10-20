import { configureStore } from "@reduxjs/toolkit";
import coordsReducer from '../features/coordsSlice'
import infosReducer from '../features/infosSlice'

export const store = configureStore({
    reducer:{
        coords: coordsReducer,
        infos: infosReducer,
    }
})