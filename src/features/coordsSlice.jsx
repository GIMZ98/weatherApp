import { createSlice } from "@reduxjs/toolkit";

const initialState = 
    {
        latitude: 6.93548,
        longitude: 79.84868,
        name: "Centralia",
        admin1: "Pennsylvania",
        country: "United States",
    }


const coordsSlice = createSlice({
    name: 'coords',
    initialState,
    reducers: {
        setCoords: (state, action) => {
            return {
                ...state,
                latitude : action.payload.latitude,
                longitude : action.payload.longitude
            }
        }
    }
})

export const { setCoords } = coordsSlice.actions
export const selectCoords = state => state.coords

export default coordsSlice.reducer