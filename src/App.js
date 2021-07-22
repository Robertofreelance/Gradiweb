import React, { useEffect, useState } from "react";
import "./App.scss";
import TopImage from "./TopImage";
import BogotaImage from "./images/Bogota.jpg";
import ForeCast from "./ForeCast";
import User1 from "./images/profile1.jpg";
import User2 from "./images/profile2.jpg";
import User3 from "./images/profile3.jpg";
import Location from "./images/location.png";
import SingapureImage from "./images/Singapure.jpg"
import ArtImage from "./images/Art.jpg"
import FountainImage from "./images/Fountain.jpg"
import CityWeather from "./CityWeather";
function App() {
  const [foredays, setForedays] = useState({});
  const [lyonDay, setLyonDay] = useState({});
  const [parisDay, setParisLyonDay] = useState({});
  const [currentIcon, setCurrent] = useState();

  const daySwitcher = () => {
    if (Object.keys(foredays).length > 0) {
      const date = new Date(foredays.current.dt * 1000);

      const dayOrNigth =
        date.getHours() > 6 && date.getHours() < 18 ? "sun" : "moon";
      switch (foredays.current.weather[0].main) {
        case "Rain":
          setCurrent({
            ico: `fad fa-cloud-${dayOrNigth}-rain`,
            color: "white1",
          });
          return;
        case "Clouds":
          setCurrent({ ico: `fad fa-cloud-${dayOrNigth}`, color: "white1" });
          return;
        case "Clear":
          setCurrent({ ico: `fas fa-${dayOrNigth}`, color: "yellow1" });
          return;
        case "Thunderstorm":
          setCurrent({
            ico: `fad fa-thunderstorm-${dayOrNigth}`,
            color: "white1",
          });
          return;
        case "Drizzle":
          setCurrent({ ico: `fad fa-cloud-drizzle`, color: "white" });
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
  }, [foredays]);
  useEffect(() => {
    const request = new XMLHttpRequest();

    request.onreadystatechange = function () {
      if (request.readyState === 4) {
        if (request.status === 200) {
          setForedays(JSON.parse(request.responseText));
          console.log(JSON.parse(request.responseText));
        } else {
          alert(
            "An error occurred during your request: " +
              request.status +
              " " +
              request.statusText
          );
        }
      }
    };

    request.open(
      "Get",
      `https://api.openweathermap.org/data/2.5/onecall?lat=4.7067108&lon=-74.083959&exclude=hourly,minutely,alert&appid=c23b17a15cfde7c66919161c6b90aeb4&units=metric`
    );
    request.setRequestHeader(
      "Content-type",
      "application/x-www-form-urlencoded"
    );
    request.send();
  }, []);
  useEffect(() => {
    const request = new XMLHttpRequest();

    request.onreadystatechange = function () {
      if (request.readyState === 4) {
        if (request.status === 200) {
          setParisLyonDay(JSON.parse(request.responseText));
          console.log(JSON.parse(request.responseText));
        } else {
          alert(
            "An error occurred during your request: " +
              request.status +
              " " +
              request.statusText
          );
        }
      }
    };

    request.open(
      "Get",
      "https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=c23b17a15cfde7c66919161c6b90aeb4&units=metric"
    );
    request.setRequestHeader(
      "Content-type",
      "application/x-www-form-urlencoded"
    );
    request.send();
  }, []);
  useEffect(() => {
    const request = new XMLHttpRequest();

    request.onreadystatechange = function () {
      if (request.readyState === 4) {
        if (request.status === 200) {
          setForedays(JSON.parse(request.responseText));
          console.log(JSON.parse(request.responseText));
        } else {
          alert(
            "An error occurred during your request: " +
              request.status +
              " " +
              request.statusText
          );
        }
      }
    };

    request.open(
      "Get",
      `https://api.openweathermap.org/data/2.5/onecall?lat=4.7067108&lon=-74.083959&exclude=hourly,minutely,alert&appid=c23b17a15cfde7c66919161c6b90aeb4&units=metric`
    );
    request.setRequestHeader(
      "Content-type",
      "application/x-www-form-urlencoded"
    );
    request.send();
  }, []);
  useEffect(() => {
    const request = new XMLHttpRequest();

    request.onreadystatechange = function () {
      if (request.readyState === 4) {
        if (request.status === 200) {
          setLyonDay(JSON.parse(request.responseText));
          console.log(JSON.parse(request.responseText));
        } else {
          alert(
            "An error occurred during your request: " +
              request.status +
              " " +
              request.statusText
          );
        }
      }
    };

    request.open(
      "Get",
      "https://api.openweathermap.org/data/2.5/weather?q=Lyon&appid=c23b17a15cfde7c66919161c6b90aeb4&units=metric"
    );
    request.setRequestHeader(
      "Content-type",
      "application/x-www-form-urlencoded"
    );
    request.send();
  }, []);
  const cloudly = (
    <i
      className="fad fa-cloud-sun"
      style={{
        "--fa-secondary-opacity": "2",
        "--fa-secondary-color": "#FAFF00",
        "--fa-primary-color": "white",
      }}
    ></i>
  );

  const cloudlyRain = (
    <i
      className="fad fa-cloud-showers-heavy icon"
      style={{ color: "#816BF5" }}
    ></i>
  );
  if (Object.keys(foredays).length < 1) return "loading...";
  if (Object.keys(lyonDay).length < 1) return "loading...";
  if (Object.keys(parisDay).length < 1) return "loading...";
  return (
    <div className="App">
      <div className="container">
        <div className="foring">
          <TopImage
            padding="70px"
            descriptionHigh
            image={BogotaImage}
            text="Bogotá"
            min="25vh"
            description="🗺"
          />
          <div className="informative">
            <div className="info1">
              <i className={currentIcon.ico + " " + currentIcon.color}></i>
              <p>{foredays.current.weather[0].main}</p>
            </div>
            <div className="info2">
              <p className="gradoWhite">
                {Math.round(foredays.current.temp)}
                <span className="celsius">°C</span>
              </p>
            </div>
          </div>
        </div>
        <div className="bottom_container ">
          <div className="section foringCast section-rigth ">
            <p className="subTitle">
              <strong>3 Days</strong> ForeCast
            </p>
            <div className="foringContainer">
              {foredays.daily
                .filter((v, i) => i < 3)
                .map((day, i) => (
                  <ForeCast
                    key={i}
                    icon={cloudlyRain}
                    time={day.dt}
                    status={day.weather[0].main}
                    temperature={`${Math.round(day.temp.day)}° / ${Math.round(
                      day.temp.night
                    )}°`}
                    first={i === 0}
                  />
                ))}
            </div>
          </div>
          <div className="section section-rigth">
            <p className="subTitle">
              <strong>Place to</strong> Visit
            </p>
            <div className="expectedShadow">
              <TopImage
                image={SingapureImage}
                text="Asrab Street"
                padding="10px"
                size="12px"
                min="120px"
                description="singapure"
              />
            </div>
          </div>
          <div className="section section-rigth lastRigth">
            <div className="taged">
              <p className="tag-title">
                <strong>
                  <i className="fas fa-plus"></i> Top Reviews
                </strong>
              </p>
              <div className="users">
                <img alt="user1" src={User1} className="profiles" />
                <img alt="user2" src={User2} className="profiles" />
                <img alt="user3" src={User3} className="profiles" />
                <div className="profiles">8+</div>
              </div>
            </div>
            <div className="flexed">
              <TopImage
                image={ArtImage}
                text="Asrab Street"
                padding="10px"
                size="12px"
                description="singapure"
              />
              <br />
              <TopImage
                image={FountainImage}
                text="Asrab Street"
                padding="10px"
                description="singapure"
                min="120px"
                size="12px"
                adding
              />
            </div>
          </div>
          <div className="section sectionLoc">
            <div className="locContainer">
              <CityWeather
                windSpeed={parisDay.wind.speed.toFixed(1)}
                windDirection={parisDay.wind.deg}
                humidity={parisDay.main.humidity}
                grados={parisDay.main.temp}
                city="Paris"
                time={parisDay.dt}
                country="Francia"
                main={parisDay.weather[0].main}
                first
              />
              <CityWeather
                windSpeed={lyonDay.wind.speed.toFixed(1)}
                windDirection={lyonDay.wind.deg}
                humidity={lyonDay.main.humidity}
                grados={lyonDay.main.temp}
                city="Lyon"
                time={lyonDay.dt}
                country="Francia"
                main={lyonDay.weather[0].main}
                first
              />
              <div className="location loc-dim">
                <div className="message">
                  <strong>Add Locations</strong>
                </div>
                <img src={Location} className="img" alt="Location" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
