import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardTitle, CardText } from 'reactstrap';
const Apartment = props => {
  return (
    <Card className="apartment">
      <Link className="link" to={`/apartments/${props.apartment._id}`}>
        <CardImg
          top
          className="apartment-image"
          src={`https://zibo.herokuapp.com/${props.apartment.apartmentImage}`}
          alt={props.apartment.title}
        />
        <CardTitle>{props.apartment.title}</CardTitle>
        <CardText>{props.apartment.amount}</CardText>
      </Link>
    </Card>
  );
};
export default Apartment;
