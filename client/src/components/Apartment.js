import React from 'react';
import { Link } from 'react-router-dom';

const Apartment = props => {
  return (
    <div className="col-sm-12 col-md-4 apartment mb-2">
      <div className="container">
        <Link
          style={{}}
          className="link"
          to={`/apartments/${props.apartment._id}`}
        >
          <img
            alt={props.apartment.title}
            className="apartment-image"
            src={`https://zibo.herokuapp.com/${props.apartment.apartmentImage}`}
          />
        </Link>
      </div>
    </div>
  );
};
export default Apartment;
