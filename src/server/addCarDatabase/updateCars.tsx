import { get,  ref, set } from "firebase/database";
import { IAddCar } from "../../pages/MyCars/MyCars";
import { auth, db } from "../../firebase";


export default async function updatedCars (cars) {

 
     
     console.log(cars)
   
      const carsRef = ref(db, `/Cars`);
    
      try {
        await set(carsRef, cars);

    
        console.log("Автомобиль Обновлен");
      } catch (error) {
        console.error("Ошибка обновления:", error);
      }
    
      
    }