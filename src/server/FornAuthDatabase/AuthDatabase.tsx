import { getDatabase, ref, set, push } from "firebase/database";

// Определите интерфейс для regUser, чтобы указать необходимые поля
interface User {
  // Пример полей. Замените их на свои.
  id: string;
  name: string;
  email: string;
  // Добавьте другие необходимые поля
}

export default async function writeUserData(regUser: User) {
  console.log(regUser)

  const db = getDatabase();
  const userRef = ref(db, `/authUsers/users`);

  try {
    console.log("Региструемый пользователь:", regUser);

    // Фильтруем неопределенные значения
    const filteredUser = Object.fromEntries(
      Object.entries(regUser).filter(([_, value]) => value !== undefined)
    );

    // Добавляем нового пользователя под уникальным ключом
    const newUserRef = push(userRef);
    await set(newUserRef, filteredUser);

    console.log("Пользователь зарегистрирован");
  } catch (error) {
    console.error("Ошибка авторизации:", error);
  }
}


// export default async function writeUserData(regUser) {
 
//       console.log(regUser)
//       const db = getDatabase();
//       const userRef = ref(db, `/authUsers/users`);
    
//       try {
//         // Получаем существующие сообщения
//         const snapshot = await get(userRef);
    
//         const existingUser = snapshot.val() || [];
       
    
//         // Добавляем новое сообщение к существующим
//         const updatedMessages = [...existingUser, regUser];
      
        
    
       
//         // Обновляем данные в базе с помощью set
//         await set(userRef, updatedMessages);

    
//         console.log("Пользователь зарегестрирован");
//       } catch (error) {
//         console.error("Ошибка авторизации:", error);
//       }
    
      
//     }
    
