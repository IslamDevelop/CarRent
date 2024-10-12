import { get,  ref, set } from "firebase/database";
import { IAddCar } from "../../pages/MyCars/MyCars";
import { auth, db } from "../../firebase";


export default async function addCarDatabase (car) {
 const user = auth.currentUser?.email?.replace(/[^\w\s]/gi, '')
 
      console.log(car)
     
   
      const carRef = ref(db, `/Cars` + user);
    
      try {
        // Получаем существующие сообщения
        const snapshot = await get(car);
    
        const existingCar = snapshot.val() || [];
       
    
        // Добавляем новое сообщение к существующим
        const updatedCars = [...existingCar, car];
      
        
    
       
        // Обновляем данные в базе с помощью set
        await set(carRef, updatedCars);

    
        console.log("Автомобиль добавлен");
      } catch (error) {
        console.error("Ошибка Добавления:", error);
      }
    
      
    }