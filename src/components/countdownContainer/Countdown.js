import React from "react";

import "./Countdown.css";

const Countdown = () => {
  const countDownDate = new Date("July 8, 2022 5:20:30").getTime();
  setInterval(() => {
    const todaysDate = new Date().getTime();
    const distance = countDownDate - todaysDate;
    const day = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hour = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const second = Math.floor((distance % (1000 * 60)) / 1000);
    const leadingZeroD = () => {
      if (day < 10) {
        return `0${day}`;
      } else {
        return day;
      }
    };
    const leadingZeroH = () => {
      if (hour < 10) {
        return `0${hour}`;
      } else {
        return hour;
      }
    };
    const leadingZeroM = () => {
      if (minute < 10) {
        return `0${minute}`;
      } else {
        return minute;
      }
    };
    const leadingZeroS = () => {
      if (second < 10) {
        return `0${second}`;
      } else {
        return second;
      }
    };

    document.getElementById("days").innerHTML = leadingZeroD();
    document.getElementById("hours").innerHTML = leadingZeroH();
    document.getElementById("minutes").innerHTML = leadingZeroM();
    document.getElementById("seconds").innerHTML = leadingZeroS();
  }, 1000);

  return (
    <>
      <h1 className="launchText">we're Launching Soon</h1>
      <div className="countdownContainer">
        <div className="numberContainer">
          <div className="numberBox">
            <p id="days">50</p>
          </div>
          <div className="rectangleOne"></div>
          <div className="rectangleTwo"></div>
          <div className="shadow"></div>
          <div className="halfCircleOne"></div>
          <div className="halfCircleTwo"></div>
          <p className="calenderText">DAYS</p>
        </div>
        <div className="numberContainer">
          <div className="numberBox">
            <p id="hours">23</p>
          </div>
          <div className="rectangleOne"></div>
          <div className="rectangleTwo"></div>
          <div className="shadow"></div>
          <div className="halfCircleOne"></div>
          <div className="halfCircleTwo"></div>
          <p className="calenderText">HOURS</p>
        </div>
        <div className="numberContainer">
          <div className="numberBox">
            <p id="minutes">55</p>
          </div>
          <div className="rectangleOne"></div>
          <div className="rectangleTwo"></div>
          <div className="shadow"></div>
          <div className="halfCircleOne"></div>
          <div className="halfCircleTwo"></div>
          <p className="calenderText">MINTUES</p>
        </div>
        <div className="numberContainer">
          <div className="numberBox">
            <p id="seconds">21</p>
          </div>
          <div className="rectangleOne"></div>
          <div className="rectangleTwo"></div>
          <div className="shadow"></div>
          <div className="halfCircleOne"></div>
          <div className="halfCircleTwo"></div>
          <p className="calenderText">SECONDS</p>
        </div>
      </div>
      <div className="mountainImage"></div>
    </>
  );
};

export default Countdown;
