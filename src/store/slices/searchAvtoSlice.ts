import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface Car {
    carName: string;
    carModel:string;
    carPhoto: string;
    carYear: number;
    carTransmission: string;
    id:number;
    isRented:boolean
    rentPrice: number
    carUid: string
  }
  
  interface SearchCarState {
    cars: Car[];
  }
  
  const initialState: SearchCarState = {
    cars: [],
  };
  

const searchCarSlice  = createSlice({
  name: 'searchCar',
  initialState,
  reducers: {
    addCar(state, action: PayloadAction<Car[]>) {
        state.cars = action.payload;
      },
 
  },
})

export const { addCar,  } = searchCarSlice.actions
export default searchCarSlice.reducer