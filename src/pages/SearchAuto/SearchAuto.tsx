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
import { IAddCar } from "../MyCars/MyCarsForm";



export const SearchAuto = () => {
  const cars = useSelector((state: RootState) => state.searchCar.cars);
  const [filteredCars, setFilteredCars] = useState(cars); 
  const [isauth, setAuth] = useState(false);
  const [carInfo,SetInfo] = useState<IAddCar>()

  const dispatch = useDispatch();
console.log(carInfo)
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
    const lowercasedText = text.toLowerCase(); 
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
            <h3>Model</h3>
            <p>{carInfo?.carName} {carInfo?.carModel}</p>
          </div>
          <div>
            <h3>Year of manufacture</h3>
            <p>{carInfo?.carYear}</p>
          </div>
          <div>
            <h3>Transmission</h3>
            <p>{carInfo?.carTransmission}</p>
          </div>
          <div>
            <h3>PICKUP DATE, TIME</h3>
            <p>{carInfo?.dateAdd}</p>
          </div>
          <div className={style.lastDivSide}>
            <h3>TOTAL TIME</h3>
            <p>{carInfo?.rentDays}</p>
          </div>
        </div>
<div>

        {filteredCars.map((item, index) => {
          return (
            <div onClick={() => {
              SetInfo(item)
            }} key={item.carName + Math.random()} className={style.cardCar}>
              <div className={style.cardLeft}>
                <img src={item.carPhoto} alt="Car" className={style.carImage} />
              </div>
              <div className={style.cardRight}>
                <div className={style.cardDetails}>
                <div className={style.cardHeader}>
                  <p>{item.carName} {item.carModel} </p>
                  {/* <p className={style.carModel}>{item.carName} {item.carModel} {item.carYear}.г</p> */}
                  <p className={style.carPrice}>Price: {item.rentPrice}&#8381;</p>
                </div>
                 
                <span>добавлено пользователем {item.carUser} {item.dateAdd}</span>
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
    </div>
  );
};
