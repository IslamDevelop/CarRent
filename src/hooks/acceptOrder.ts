import { useEffect } from "react"
import { db } from "../firebase"
import { onValue, ref, update } from "firebase/database"
import updatedCars from "../server/addCarDatabase/updateCars"
import MyRentOrders from "../server/MyRentOrders/MyRentOrders"

export const acceptOrder = async (index,item) => {
    let cars = ''
    let carTarget = ''
    const dataBaseCars = ref(db,`/Cars`)
    const rentName:string = item+index
     await onValue(dataBaseCars, (snapshot) => {
       cars = snapshot.val()
       carTarget = cars[index]
       console.log(carTarget.acceptOrder)
        carTarget.acceptOrder = carTarget.acceptOrder == true ? false : true;
        
    })
    MyRentOrders(carTarget,rentName)
    updatedCars(cars)
}