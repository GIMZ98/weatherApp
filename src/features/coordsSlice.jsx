import { createSlice } from "@reduxjs/toolkit";

const initialState = 
    {
        longitude: 6.93548,
        latitude: 79.84868
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