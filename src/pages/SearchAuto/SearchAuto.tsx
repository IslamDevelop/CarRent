import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import SearchInput from "./SearchInput";
import { useDispatch, useSelector } from "react-redux";
import { addCar } from "../../store/slices/searchAvtoSlice";
import { RootState } from "../../store/store";

export const SearchAuto = () => {
  const cars = useSelector((state: RootState) => state.searchCar.cars);
  const [filteredCars, setFilteredCars] = useState(cars); // Состояние для отфильтрованных автомобилей
  const dispatch = useDispatch();

  const dataBaseCars = ref(db, `/Cars`);
  useEffect(() => {
    onValue(dataBaseCars, (snapshot) => {
      const carsData = snapshot.val() || [];
      dispatch(addCar(carsData));
    });
  }, []);

  useEffect(() => {
    setFilteredCars(cars);
  }, [cars]);

  console.log(cars);

  const handleSearch = (text: string) => {
    const lowercasedText = text.toLowerCase(); // Приводим текст к нижнему регистру для поиска
    const filtered = cars.filter(
      (car) =>
        car.carName.toLowerCase().includes(lowercasedText) ||
        car.carModel.toLowerCase().includes(lowercasedText)
    );
    setFilteredCars(filtered);
  };
  return (
    <div>
      <SearchInput onSearch={handleSearch} />
      {filteredCars.length > 0 ? (
        filteredCars.map((item, index) => (
          <div key={index}>
            <img src={item.carPhoto} alt={item.carName} />
            <p>Марка: {item.carName } {item.carModel}</p>
            <p>Год: {item.carYear}</p>
            <p>Трансмиссия: {item.carTransmission}</p>
          </div>
        ))
      ) : (
        <p>Автомобили не найдены.</p>
      )}
    </div>
  );
};
