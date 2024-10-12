import { get,  ref, set } from "firebase/database";
import { auth, db } from "../../firebase";

export default async function writeUserData(regUser) {
 
      console.log(regUser)
     const authUser = auth.currentUser.uid
   
      const userRef = ref(db, `/authUsers/${authUser}`);
    
      try {

        await set(userRef, regUser);

    
        console.log("Пользователь зарегестрирован");
      } catch (error) {
        console.error("Ошибка авторизации:", error);
      }
    
      
    }
    