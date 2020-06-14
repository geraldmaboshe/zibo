import React, { Component } from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardImgOverlay
} from 'reactstrap';
import Card1 from './../images/Card1.jpg';
import Card2 from './../images/Card2.jpg';
import Card3 from './../images/Card3.jpg';
import Card4 from './../images/Card4.jpg';
import Card5 from './../images/Card5.jpg';

export default class Content extends Component {
  render() {
    return (
      <div className="cards">
        <Card className="card1">
          <CardImg
            top
            width="100%"
            src={Card1}
            height="160px"
            alt="Card image cap"
          />
          <CardImgOverlay>
            <CardTitle>Partment for rent</CardTitle>
            <CardText>K 300.00/mo 3bd</CardText>
          </CardImgOverlay>
        </Card>

        <Card className="card2">
          <CardImg
            top
            width="100%"
            src={Card2}
            height="160px"
            alt="Card image cap"
          />
          <CardImgOverlay>
            <CardTitle>Partment for rent</CardTitle>
            <CardText>K 300.00/mo 3bd</CardText>
          </CardImgOverlay>
        </Card>
        <Card className="card3">
          <CardImg
            top
            width="100%"
            src={Card3}
            height="160px"
            alt="Card image cap"
          />
          <CardImgOverlay>
            <CardTitle>Partment for rent</CardTitle>
            <CardText>K 300.00/mo 3bd</CardText>
          </CardImgOverlay>
        </Card>
        <Card className="card4">
          <CardImg
            top
            width="100%"
            src={Card4}
            height="160px"
            alt="Card image cap"
          />
          <CardImgOverlay>
            <CardTitle>Partment for rent</CardTitle>
            <CardText>K 300.00/mo 3bd</CardText>
          </CardImgOverlay>
        </Card>
        <Card className="card5">
          <CardImg
            top
            width="100%"
            src={Card5}
            height="160px"
            alt="Card image cap"
          />
          <CardImgOverlay>
            <CardTitle>Partment for rent</CardTitle>
            <CardText>K 300.00/mo 3bd</CardText>
          </CardImgOverlay>
        </Card>
      </div>
    );
  }
}
