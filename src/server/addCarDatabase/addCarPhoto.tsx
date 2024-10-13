import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { auth, storage } from "../../firebase";
import addCarDatabase from "./addCarDatabase";

export const addPhotoCar = async (car) => {
    const file = car.carPhoto[0]; // Предполагаем, что car.carPhoto содержит массив файлов
    console.log(file);

    try {
   
        const storageRef = ref(storage, `carPhoto/${file.name}`);

  
        const uploadTask = uploadBytesResumable(storageRef, file);

     
        await new Promise((resolve, reject) => {
            uploadTask.on(
                'state_changed',
                (snaphot) => {

                },
             
                (error) => {
                
                    console.error('Ошибка загрузки:', error);
                    reject(error);
                },
                async () => {
                    
                    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                    car.carPhoto = downloadURL; 
                    car.carUid = auth.currentUser.uid
                    console.log('File available at', downloadURL);

                   
                    await addCarDatabase(car);
                    resolve();
                }
            );
        });
    } catch (error) {
        console.error('Ошибка при добавлении автомобиля и фото:', error);
    }
};