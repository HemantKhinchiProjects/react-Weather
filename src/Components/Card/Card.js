import React, { useState, useEffect } from 'react';
import Input from '../Inputs/Input';
const Card = (props) => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState('Ahmedabad');
  useEffect(() => {
    const featchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=e7fc42d81dcab94ec1e0c74f098b1566`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson);
    };
    featchApi();
  });

  const getLocationHandler = (e) => {
    e.preventDefault();
    //console.log('this is:', this);

    setSearch(e.target.value);
  };
  return (
    <div className="card text-center" style={{ width: '18rem' }}>
      <Input onChange={getLocationHandler} />

      <div className="card-body align-center">
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
          Current {search}
        </h5>
        <a href="#" className="btn btn-primary my-3">
          5.25 Cel
        </a>
        <p className="card-text">Min 5.25 Cel | Max: 6.35. Cel</p>
      </div>
    </div>
  );
};
export default Card;
