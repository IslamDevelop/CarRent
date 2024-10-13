import { get,  ref, set } from "firebase/database";
import { IAddCar } from "../../pages/MyCars/MyCars";
import { auth, db } from "../../firebase";


export default async function addCarDatabase (car) {

 
      console.log(car)
     
   
      const carRef = ref(db, `/Cars`);
    
      try {
        
        const snapshot = await get(carRef);
    
        const existingCar = snapshot.val() || [];
       
    
     
        const updatedCars = [...existingCar, car];
      
        
    
       

        await set(carRef, updatedCars);

    
        console.log("Автомобиль добавлен");
      } catch (error) {
        console.error("Ошибка Добавления:", error);
      }
    
      
    }