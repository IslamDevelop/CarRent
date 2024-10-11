import React, { useState } from "react";
import style from "./myCars.module.scss";
import Input from "../../components/Forms/Form/Input/Input";
import Button from "../../components/Forms/Form/Button/Button";

import location from "../../assets/MyCar/location.svg";
import calendar from "../../assets/MyCar/calendar.svg";

export const MyCars: React.FC = () => {
  return (
    <>
      <div className={style.myCars}>
        <h1>Book Now</h1>
        <form action="" className={style.form}>
          <div className={style.formUp}>
            <div className={style.formInput}>
              <img src={location} alt="" />

              <Input
                type="text"
                placeholder="Pickup Location"
                name="pickupLocation"
              />
            </div>
            <div className={style.formInput}>
              <img src={calendar} alt="" />
              <Input
                type="date"
                placeholder="Drop-off Location"
                name="dropoffLocation"
              />
            </div>
            <div className={style.formInput}>
              <img src={calendar} alt="" />

              <Input type="date" name="pickupDate" />
            </div>
          </div>
          {/* <div  className={style.formBt}>
            <Input
              type="text"
              placeholder="Pickup Location"
             
              name="pickupLocation"
            />
            <Input
              type="text"
              placeholder="Drop-off Location"
              
              name="dropoffLocation"
            />
            <Input
              type="date"
             
              name="pickupDate"
            />

            <Button>Book</Button>
          </div> */}
        </form>
      </div>
    </>
  );
};
