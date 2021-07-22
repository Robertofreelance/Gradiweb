import React, { useState, useEffect } from "react";
import "./CityWeather.scss";

export default function CityWeather(props) {
  const [current, setCurrent] = useState({});
  const direction = function () {
    let directions = [
      "Northerly",
      "North Easterly",
      "Easterly",
      "South Easterly",
      "Southerly",
      "South Westerly",
      "Westerly",
      "North Westerly",
    ];
    let d = props.windDirection;
    d += 22.5;

    if (d < 0) d = 360 - (Math.abs(d) % 360);
    else d = d % 360;

    let w = parseInt(d / 45);
    return `${directions[w]}`;
  };
  const daySwitcher = () => {
    if (props.main) {
      const date = new Date(props.time * 1000).toLocaleString("en-GB", {
        timeZone: "Europe/Paris",
      });
      const parisDate = new Date(date);
      const dayOrNigth =
        parisDate.getHours() > 6 && parisDate.getHours() < 18 ? "sun" : "moon";

      switch ("Rain") {
        case "Rain":
          setCurrent({
            ico: `fad fa-cloud-${dayOrNigth}-rain`,
            color: "purple2",
          });
          return;
        case "Clouds":
          setCurrent({ ico: `fad fa-cloud-${dayOrNigth}`, color: "purple2" });
          return;
        case "Clear":
          setCurrent({ ico: `fas fa-${dayOrNigth}`, color: "yellow1" });
          return;
        case "Thunderstorm":
          setCurrent({
            ico: `fad fa-thunderstorm-${dayOrNigth}`,
            color: "purple2",
          });
          return;
        case "Drizzle":
          setCurrent({ ico: `fad fa-cloud-drizzle`, color: "purple" });
          return;
        case "Snow":
          setCurrent({ ico: `fas fa-snowflake`, color: "blue1" });
          return;
        default:
          setCurrent({ ico: `fas fa-exclamation-circle`, color: "red" });
          return;
      }
    } else {
      setCurrent({ ico: `fas fa-exclamation-circle`, color: "red" });
    }
  };
  useEffect(() => {
    daySwitcher();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.main]);

  return (
    <div
      className={props.first ? "cityContainer shadow" : "cityContainer shadow2"}
    >
      <div className="top">
        <div className="iconContainer">
          <i className={current.ico + " " + current.color}></i>
        </div>
        <div className="Grades">
          <p className="grado">
            {Math.round(props.grados)}
            <span className="celsius">&deg;C</span>{" "}
          </p>
          <div className="separator"></div>
          <div className="placed">
            <p>{props.city}</p>
            <p>{props.country}</p>
          </div>
        </div>
      </div>
      <div className="bottom">
        <p className="humidity">Humedity {props.humidity}%</p>
        <p className="windDirection">{direction()}</p>
        <p className="windSpeed">{props.windSpeed}km/h</p>
      </div>
    </div>
  );
}
