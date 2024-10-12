import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../firebase";
import addCarDatabase from "./addCarDatabase";

export const addPhotoCar = async (car) => {
    const file = car.carPhoto[0]; // Предполагаем, что car.carPhoto содержит массив файлов
    console.log(file);

    try {
        // Создаем ссылку на файл в хранилище Firebase
        const storageRef = ref(storage, `carPhoto/${file.name}`);

        // Загружаем файл в хранилище
        const uploadTask = uploadBytesResumable(storageRef, file);

        // Ожидаем завершения загрузки
        await new Promise((resolve, reject) => {
            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    // Здесь можно обрабатывать прогресс загрузки, если нужно
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                },
                (error) => {
                    // Обработка ошибок при загрузке
                    console.error('Ошибка загрузки:', error);
                    reject(error);
                },
                async () => {
                    // Получаем URL загруженного файла после завершения загрузки
                    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                    car.carPhoto = downloadURL; // Обновляем URL фотографии в объекте car
                    console.log('File available at', downloadURL);

                    // Добавляем запись автомобиля в базу данных
                    await addCarDatabase(car);
                    resolve();
                }
            );
        });

        console.log('Автомобиль и фото добавлены');
    } catch (error) {
        console.error('Ошибка при добавлении автомобиля и фото:', error);
    }
};