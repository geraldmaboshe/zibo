import React from 'react';
import { Card, CardImg, CardText, CardTitle, CardImgOverlay } from 'reactstrap';
import { Link } from 'react-router-dom';

const Apartments = props => {
  console.log(props.apartment.apartmentImage);
  return (
    <Link to={`/apartments/${props.apartment._id}`}>
      <Card className="card1">
        <CardImg
          top
          width="100%"
          src={`https://zibo.herokuapp.com/${props.apartment.apartmentImage}`}
          height="160px"
          alt={props.apartment.title}
        />
        <CardImgOverlay>
          <CardTitle>{props.apartment.title}</CardTitle>
          <CardText>{props.apartment.price}</CardText>
        </CardImgOverlay>
      </Card>
    </Link>
  );
};
export default Apartments;
