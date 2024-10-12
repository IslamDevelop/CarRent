import { get,  ref, set } from "firebase/database";
import { db } from "../../firebase";

export default async function writeUserData(regUser) {
 
      console.log(regUser)
     
   
      const userRef = ref(db, `/authUsers/usersAuth`);
    
      try {
        // Получаем существующие сообщения
        const snapshot = await get(userRef);
    
        const existingUser = snapshot.val() || [];
       
    
        // Добавляем новое сообщение к существующим
        const updatedUsers = [...existingUser, regUser];
      
        
    
       
        // Обновляем данные в базе с помощью set
        await set(userRef, updatedUsers);

    
        console.log("Пользователь зарегестрирован");
      } catch (error) {
        console.error("Ошибка авторизации:", error);
      }
    
      
    }
    