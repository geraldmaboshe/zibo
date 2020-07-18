import React from 'react';
import { Link } from 'react-router-dom';

const Apartment = props => {
  console.log(props.apartment.apartmentImage);
  return (
    <Link to={`/apartments/${props.apartment._id}`}>
      <div className="apartment">
        <div className="apartment__title">
          <i
            style={{
              color: 'white',
              fontSize: '1.2rem'
            }}
            className={'far fa-star'}
          />{' '}
          {props.apartment.title}
        </div>

        <img
          className="apartment__image"
          top
          width="100%"
          src={`https://zibo.herokuapp.com/${props.apartment.apartmentImage}`}
          height="160px"
          alt={props.apartment.title}
        />
      </div>
    </Link>
  );
};
export default Apartment;
