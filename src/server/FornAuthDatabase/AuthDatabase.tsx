import { get, getDatabase, ref, set } from "firebase/database";

export default async function writeUserData(regUser) {
 
      console.log(regUser)
      const db = getDatabase();
      const userRef = ref(db, `/authUsers/users`);
    
      try {
        // Получаем существующие сообщения
        const snapshot = await get(userRef);
    
        const existingUser = snapshot.val() || [];
       
    
        // Добавляем новое сообщение к существующим
        const updatedMessages = [...existingUser, regUser];
      
        
    
       
        // Обновляем данные в базе с помощью set
        await set(userRef, updatedMessages);

    
        console.log("Пользователь зарегестрирован");
      } catch (error) {
        console.error("Ошибка авторизации:", error);
      }
    
      
    }
    