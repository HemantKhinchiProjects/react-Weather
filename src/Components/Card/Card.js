import React, { useState, useEffect } from 'react';
import Input from '../Inputs/Input';
import HurricaneSvg from '../UI/HurricaneSvg';
import ClearSkySvg from '../UI/clearSkySvg';
import WindySvg from '../UI/WindySvg';
import OvercastClouds from '../UI/OvercastClouds';
import FogSvg from '../UI/FogSvg';
const Card = (props) => {
  const [city, setCity] = useState(null);
  const [dis, setDis] = useState(null);

  let weatherImage = <ClearSkySvg />;
  const [search, setSearch] = useState('Ahmedabad');
  useEffect(() => {
    const featchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=2d27aad48daac2645f19d5db24e9516d`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
      setDis(resJson.weather[0].description);
    };

    featchApi();
  }, [search]);

  const getLocationHandler = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  if (dis === 'few clouds') {
    weatherImage = <OvercastClouds />;
  } else if (dis === 'scattered clouds') {
    weatherImage = <OvercastClouds />;
  } else if (dis === 'overcast clouds') {
    weatherImage = <WindySvg />;
  } else if (dis === 'haze') {
    weatherImage = <FogSvg />;
  } else if (dis === 'broken clouds') {
    weatherImage = <OvercastClouds />;
  } else if (dis === 'light rain') {
    weatherImage = <HurricaneSvg />;
  } else if (dis === 'clear sky') {
    weatherImage = <ClearSkySvg />;
  } else {
  }
  return (
    <div className="bg-warning card text-center col-md-4 m-auto p-3 mt-5">
      <div className="my-4">
        <input
          value={search}
          type="search"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="addon-wrapping"
          onChange={getLocationHandler}
        />
      </div>
      {!city ? (
        <p>No deta Found</p>
      ) : (
        <div className="bg-light p-4 rounded-2">
          <h5 className="card-title">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={60}
              height={60}
              fill="currentColor"
              className="bi bi-geo-alt-fill"
              viewBox="0 0 16 16"
              {...props}
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 002 6c0 4.314 6 10 6 10zm0-7a3 3 0 110-6 3 3 0 010 6z" />
            </svg>
            {search} : City Weather
          </h5>

          <div className="card-body align-center">
            <div className="weather-container">{weatherImage}</div>
            <p className="card-text">Weather : {dis}</p>
            <div className="alert alert-primary my-3">
              <h1>{city.temp}°C</h1>
            </div>
            <p className="card-text">
              Min :{dis} {city.temp_min} Cel | Max: {city.temp_max} Cel
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
export default Card;
