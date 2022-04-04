import React from 'react';
import Input from './Inputs/Input';
const Card = (props) => (
  <div className="card" style={{ width: '18rem' }}>
    <Input />
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
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
    </div>
  </div>
);
export default Card;
