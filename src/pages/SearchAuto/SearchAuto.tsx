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

import salon from '../../assets/SearchCars/Salon.jpg'

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

       <div className={style.sectionSearch}>
        <img src={salon} alt="" />
       </div>

        <div className={style.InputSearch}>
        <SearchInput onSearch={handleSearch} />
        </div>
      <div className={style.FindContainer}>

        <div className={style.sideCard}>
          <h2>Summary</h2>
          <div>
            <h3>SERVICE TYPE</h3>
            <p>Hourly</p>
          </div>
          <div>
            <h3>PICKUP LOCATION</h3>
            <p>Russian, Moscow</p>
          </div>
          <div>
            <h3>DROP OFF LOCATION</h3>
            <p>Russian, Moscow</p>
          </div>
          <div>
            <h3>PICKUP DATE, TIME</h3>
            <p>23-10-2024, 21:00</p>
          </div>
          <div className={style.lastDivSide}>
            <h3>TOTAL TIME</h3>
            <p>7h 0m</p>
          </div>
        </div>

        {filteredCars.map((item, index) => {
          return (
            <div key={item.carName + Math.random()} className={style.cardCar}>
              <div className={style.cardLeft}>
                <img src={item.carPhoto} alt="Car" className={style.carImage} />
              </div>
              <div className={style.cardRight}>
                <div className={style.cardDetails}>
                <div className={style.cardHeader}>
                  <p>{item.carName}</p>
                  <p className={style.carModel}>{item.carModel}</p>
                  <p className={style.carPrice}>{item.rentPrice}&#8381; в сутки</p>
                </div>
                  <p>Год: {item.carYear}</p>
                  <p>Трансмиссия: {item.carTransmission}</p>
                </div>

                <div className={style.CardRightButton}>
                {isauth ? (
                  item.isRented == false ? (
                    <button
                      className={style.BtnCardContain}
                      onClick={() => {
                        rent(index, item.carName)
                        localStorage.setItem('orderUid',item.carName + index)
                        localStorage.setItem('carUid',item.carUid)
                      }}
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
            </div>
          );
        })}
      </div>
    </div>
  );
};
