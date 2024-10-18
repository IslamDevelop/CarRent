import { get,  ref, set } from "firebase/database";
import { IAddCar } from "../../pages/MyCars/MyCars";
import { auth, db } from "../../firebase";


export default async function MyRentOrders (order,rentName) {
    const myuid = auth.currentUser.uid
 const carUid = order.carUid
 
     console.log(order.carUid)
     
   
      const ordersRef = ref(db, `/Orders/${carUid}${rentName}`);
   
      try {
        await set(ordersRef, order);

    
        console.log("Автомобиль Обновлен");
      } catch (error) {
        console.error("Ошибка обновления:", error);
      }
    
      
    }