import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "Centralia",
    admin1: "Pennsylvania",
    country: "United States",
    latitude: 6.93548,
    longitude: 79.84868,
    temperature: 16.0,
    is_day: 1,
    cloudcover: 61,
    windspeed: 5.6,
    relativehumidity: 74,
    rain: 0.00,
    time: "2023-10-20T07:00",
    timezone: "Pennsylvania/United States",
}

const infosSlice = createSlice({
    name: 'infos',
    initialState,
    reducers:{
        setInfos: (state, action) => {
            return{
                ...state,
                name: action.payload.name,
                admin1: action.payload.admin1,
                country: action.payload.country,
                latitude: action.payload.latitude,
                longitude: action.payload.longitude,
                temperature: action.payload.temperature,
                is_day: action.payload.is_day,
                cloudcover: action.payload.cloudcover,
                windspeed: action.payload.windspeed,
                relativehumidity: action.payload.relativehumidity,
                rain: action.payload.rain,
                time: action.payload.time,
                timezone: action.payload.timezone,
            }
        } 
    }
})

export const { setInfos } = infosSlice.actions
export const selectInfos = state => state.infos

export default infosSlice.reducer

// "https://api.open-meteo.com/v1/forecast?longitude=79.84868&latitude=6.93548&current=temperature_2m,relativehumidity_2m,is_day,rain,cloudcover,windspeed_10m&timezone=auto"

// const data = {
//   latitude: 6.875,
//   longitude: 79.875,
//   generationtime_ms: 0.04792213439941406,
//   utc_offset_seconds: 19800,
//   timezone: "Asia/Colombo",
//   timezone_abbreviation: "+0530",
//   elevation: 4.0,
//   current_units: {
//     time: "iso8601",
//     interval: "seconds",
//     temperature_2m: "°C",
//     relativehumidity_2m: "%",
//     is_day: "",
//     rain: "mm",
//     cloudcover: "%",
//     windspeed_10m: "km/h",
//   },
//   current: {
//     time: "2023-10-20T12:45",
//     interval: 900,
//     temperature_2m: 29.1,
//     relativehumidity_2m: 73,
//     is_day: 1,
//     rain: 0.0,
//     cloudcover: 96,
//     windspeed_10m: 5.9,
//   },
// };