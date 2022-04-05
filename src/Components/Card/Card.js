import React, { useState, useEffect } from 'react';
import Input from '../Inputs/Input';
const Card = (props) => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState('Ahmedabad');
  useEffect(() => {
    const featchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=e7fc42d81dcab94ec1e0c74f098b1566`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
    };
    featchApi();
  }, [search]);

  const getLocationHandler = (e) => {
    e.preventDefault();

    setSearch(e.target.value);
  };
  return (
    <div className="card text-center">
      <div className="form-control">
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
        <div>
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
          <div className="alert alert-primary my-3">
            <h1>{city.temp}°C</h1>
          </div>
          <div className="card-body align-center">
            <p className="card-text">
              Min : {city.temp_min} Cel | Max: {city.temp_max} Cel
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
export default Card;
