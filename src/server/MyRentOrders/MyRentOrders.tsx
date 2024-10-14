import { get,  ref, set } from "firebase/database";
import { IAddCar } from "../../pages/MyCars/MyCars";
import { auth, db } from "../../firebase";


export default async function MyRentOrders (order) {

 const carUid = order.carUid
     
     
   
      const ordersRef = ref(db, `/Orders/${auth.currentUser.uid + carUid}`);
      const ordersRef2 = ref(db, `/Orders/${carUid + auth.currentUser.uid}`);
      try {
        await set(ordersRef, order);
        await set(ordersRef2, order);
    
        console.log("Автомобиль Обновлен");
      } catch (error) {
        console.error("Ошибка обновления:", error);
      }
    
      
    }