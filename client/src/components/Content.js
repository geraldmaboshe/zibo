import React, { Component } from 'react';
import { Card, CardImg, CardText, CardTitle, CardImgOverlay } from 'reactstrap';
import Card1 from './../images/Card1.jpg';
import Card2 from './../images/Card2.jpg';
import Card3 from './../images/Card3.jpg';
import Card4 from './../images/Card4.jpg';
import Card5 from './../images/Card5.jpg';
import ApartmentRow from './ApartmentRow';

export default class Content extends Component {
  constructor(props) {
    super(props);
    const apartments = [
      {
        id: 1,
        title: 'Cottage',
        amount: 'K30',
        specification: '2rooms',
        location: 'kabwata'
      },
      {
        id: 2,
        title: 'House',
        amount: 'K30',
        specification: '2rooms',
        location: 'kabwata'
      }
    ];
    let apartmentRows = [];
    apartments.forEach(apartment => {
      console.log(apartment.title);
      const apartmentRow = <ApartmentRow apartment={apartment} />;
      apartmentRows.push(apartmentRow);
    });
    this.state = {
      rows: apartmentRows
    };
  }

  render() {
    return (
      <div>
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
        <div>{this.state.rows}</div>
      </div>
    );
  }
}
