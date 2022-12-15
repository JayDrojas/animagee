// import "./styles.css";
import { useState, useEffect } from "react";

export default function Steve({ input }) {
  input = [1, 2];
  // input = 1
  // const [inputType, setInputType] = useState(() => {
  //   if (!input) return 'falsey'
  //   else if (Array.isArray(input) === true) return 'array'
  //   else return input
  // });

  console.log(input);
  // console.log("check2", typeof input);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const updateTime = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(updateTime);
  }, []);

  let hour = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  let amPm = time.getHours() > 12 ? "PM" : "AM";

  hour = hour > 12 ? hour - 12 : hour;

  hour = hour < 10 ? `0${hour}` : hour;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  let month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(time);
  let day = time.getDate() < 10 ? `0${time.getDate()}` : time.getDate();
  let dayWeek = new Intl.DateTimeFormat("en-US", { weekday: "long" })
    .format(time)
    .slice(0, 3);
  let year = time.getFullYear();

  return (
    <div className="App">
      <div className="clock-date-bar">
        {dayWeek}, {month} {day} , {year}
      </div>
      <div className="clock-hour-bar">
        <span>{hour}</span>:<span>{minutes}</span>:<span>{seconds}</span>
        <span>{amPm}</span>
      </div>
    </div>
  );
}
