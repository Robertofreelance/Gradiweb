import React, { useState } from "react";
import "./ForeCast.scss";
export default function ForeCast(props) {
  const getDay = () => {
    const date = new Date(props.time * 1000);
    switch (date.getDay()) {
      case 0:
        return "Monday";
      case 1:
        return "Tuesday";
      case 2:
        return "Wednesday";
      case 3:
        return "Thursday";
      case 4:
        return "Friday";
      case 5:
        return "Saturday";
      case 6:
        return "Sunday";
      default:
        return "Error";
    }
  };
  const daySwitcher = () => {
    switch (props.status) {
      case "Rain":
        return { ico: "fad fa-cloud-showers-heavy icon", color: "purple1" };
      case "Clouds":
        return { ico: "fad fa-clouds", color: "purple1" };
      case "Clear":
        return { ico: "fas fa-sun", color: "yellow1" };
      case "Thunderstorm":
        return { ico: "fas fa-bolt", color: "yellow1" };
      case "Drizzle":
        return { ico: "fad fa-cloud-drizzle", color: "purple1" };
      case "Snow":
        return { ico: "fas fa-snowflake", color: "blue1" };
      default:
        return { ico: "fas fa-exclamation-circle", color: "red" };
    }
  };
  const [icon] = useState(daySwitcher());

  return (
    <div className="foreCast">
      <div className="capsule">
        <p className="icon">
          <i className={icon.ico + " " + icon.color}></i>
        </p>

        <div>
          <p className="text">
            <strong>{getDay()}</strong>
          </p>
          <p className="status">
            <strong>{props.status}</strong>
          </p>
        </div>
      </div>
      <div
        className={props.first ? "temperature purple" : "temperature normal"}
      >
        <p className={props.first ? "text-white" : ""}>
          <strong>{props.temperature}</strong>
        </p>
      </div>
    </div>
  );
}
