import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import SearchInput from "./SearchInput";
import { useDispatch, useSelector } from "react-redux";
import { addCar } from "../../store/slices/searchAvtoSlice";
import { RootState } from "../../store/store";

import { auth, db } from "../../firebase";

import { rent } from "../../hooks/rent";
import style from "./SearchAuto.module.css";
import { useNavigate } from "react-router-dom";


export const SearchAuto = () => {
  const cars = useSelector((state: RootState) => state.searchCar.cars);
  const [filteredCars, setFilteredCars] = useState(cars); // Состояние для отфильтрованных автомобилей
  const dispatch = useDispatch();

  const [isauth, setAuth] = useState(false);
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

  const navigate = useNavigate();
  const redirectLogin = () => navigate("/Login");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setAuth(true);
      } else {
        setAuth(false);
      }
    });
    return () => unsubscribe();
  }, []);

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
    <div className={style.Find}>
      <div className={style.FindContainer}>
        <SearchInput onSearch={handleSearch} />

        {filteredCars.map((item, index) => {
          return (
            <div key={item.carName + Math.random()} className={style.cardCar}>
              <div className={style.cardLeft}>
                <div className={style.cardHeader}>
                  <p className={style.carModel}>{item.carModel}</p>
                  <p className={style.carPrice}>{item.rentPrice}р в сутки</p>
                </div>
                <img src={item.carPhoto} alt="Car" className={style.carImage} />
              </div>
              <div className={style.cardRight}>
                <div className={style.cardDetails}>
                  <p>Марка: {item.carName}</p>
                  <p>Год: {item.carYear}</p>
                  <p>Трансмиссия: {item.carTransmission}</p>
                </div>
                {isauth ? (
                  item.isRented == false ? (
                    <button
                      className={style.BtnCardContain}
                      onClick={(e) => rent(index, e)}
                    >
                      Арендовать
                    </button>
                  ) : (
                    <button>Арендовано</button>
                  )
                ) : (
                  <button onClick={() => redirectLogin()}>Арендовать</button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
