import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";
import clouds from "../img/cl.jpg";
import sky1 from "../img/sky.jpg";

const api = {
  key: "1c05f4b5e6cd5ed6e8445e2894dc586d",
  base: "https://api.openweathermap.org/data/2.5/",
};

function WeatherCard() {
  const [Search, setSearch] = useState("lagos");
  const [fetchWeather, setFetchWeather] = useState("");

  const SubmitSearch = async () => {
    const result = await axios(
      `${api.base}weather?q=${Search}&units=metric&appid=${api.key}`
    );

    console.log(result.data);
    if (result) {
      return setFetchWeather(result.data);
    }
  };

  const dateBuilder = (d) => {
    let day = [
      "Sunday",
      "Monday",
      "Tuesday",
      "wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let month = [
      "January",
      "Febuary",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let days = day[d.getDay()];
    let months = month[d.getMonth()];
    let dates = d.getDate();
    let year = d.getFullYear();
    console.log(days);

    return `${days} ${dates} ${months} ${year}`;
  };

  useEffect(() => {
    SubmitSearch();
  }, []);

  return (
    <Container>
      {fetchWeather ? (
        <Wrapper>
          <TextDate>{dateBuilder(new Date())}</TextDate>
          <WeatherCity>
            {" "}
            {fetchWeather.name}, {fetchWeather.sys.country}
          </WeatherCity>
          <Weatherdegree> {Math.round(fetchWeather.main.temp)}°c</Weatherdegree>
          <WeatherDescription>
            {" "}
            {fetchWeather.weather[0].description}
          </WeatherDescription>
        </Wrapper>
      ) : (
        <Wrapper>
          <TextDate>{dateBuilder(new Date())}</TextDate>
          <WeatherCity> No Search yet, Null</WeatherCity>
          <Weatherdegree> 0°c°c</Weatherdegree>
          <WeatherDescription> description</WeatherDescription>
        </Wrapper>
      )}
    </Container>
  );
}

export default WeatherCard;

const WeatherDescription = styled.div`
  border-radius: 5px;
  font-size: 20px;
  font-weight: bold;
`;

const Weatherdegree = styled.div`
  margin-top: 20px;
  font-size: 70px;
  font-weight: bold;
  color: white;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.19);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  box-shadow: 0px 5px 7px -2px rgba(0, 0, 0, 0.35);
  height: 150px;
  width: 220px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WeatherCity = styled.div`
  border-radius: 5px;
  font-size: 15px;
  font-weight: bold;
`;

const TextDate = styled.div`
  margin-top: 15px;
  border-radius: 5px;
  font-size: 25px;
`;

const Container = styled.div``;

const Wrapper = styled.div`
  height: 300px;
  background-image: url(${sky1});
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0 8px 32px 0 rgba(1, 38, 15, 0.19);
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  color: white;
  border-radius: 5px;

  @media screen and (max-width: 600px) {
    width: 300px;
    margin-bottom: 10px;
  }
`;
