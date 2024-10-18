import { useEffect } from "react"
import { db } from "../firebase"
import { onValue, ref, update } from "firebase/database"
import updatedCars from "../server/addCarDatabase/updateCars"
import MyRentOrders from "../server/MyRentOrders/MyRentOrders"
import { acceptOrder } from "./acceptOrder"

export const rent = async (index,item) => {

    let cars = ''
    let carTarget = ''
    const dataBaseCars = ref(db,`/Cars`)
    console.log(item)
    console.log(index)
    const rentName:string = item+index
     await onValue(dataBaseCars, (snapshot) => {
       cars = snapshot.val()
       carTarget = cars[index]
       console.log(carTarget.isRented)
        carTarget.isRented = carTarget.isRented == true ? false : true;
        carTarget.acceptOrder = false
    })
    MyRentOrders(carTarget,rentName)
    updatedCars(cars)
  

}