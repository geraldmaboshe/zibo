import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
const Apartment = props => {
  return (
    <li className="apartment">
      <Link className="link" to={`/apartments/${props.apartment._id}`}>
        <img
          alt={props.apartment.title}
          className="apartment-image"
          src={`https://zibo.herokuapp.com/${props.apartment.apartmentImage}`}
        />
        <div className="title">{props.apartment.title}</div>
      </Link>
    </li>
  );
};
export default Apartment;
