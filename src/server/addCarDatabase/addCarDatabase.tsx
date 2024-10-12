import { get,  ref, set } from "firebase/database";
import { IAddCar } from "../../pages/MyCars/MyCars";
import { auth, db } from "../../firebase";


export default async function addCarDatabase (car) {
 const user = auth.currentUser?.uid.replace(/[^\w\s]/gi, '')
 
      console.log(car)
     
   
      const carRef = ref(db, `/Cars/${user}`);
    
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