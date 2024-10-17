import { configureStore } from '@reduxjs/toolkit'
import searchCarSlice  from './slices/searchAvtoSlice'
const store = configureStore({
reducer: {
    searchCar:searchCarSlice,
}
})
export type RootState = ReturnType<typeof store.getState>;



export default store