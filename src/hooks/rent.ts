import { useEffect } from "react"
import { db } from "../firebase"
import { onValue, ref, update } from "firebase/database"
import updatedCars from "../server/addCarDatabase/updateCars"
import MyRentOrders from "../server/MyRentOrders/MyRentOrders"

export const rent = async (index) => {
    let cars = ''
    let carTarget = ''
    const dataBaseCars = ref(db,`/Cars`)
    
     await onValue(dataBaseCars, (snapshot) => {
       cars = snapshot.val()
       carTarget = cars[index]
       console.log(carTarget.isRented)
        carTarget.isRented = carTarget.isRented == true ? false : true;
        localStorage.setItem('orderUid',carTarget.carUid)
    })
    MyRentOrders(carTarget)
    updatedCars(cars)
  

}