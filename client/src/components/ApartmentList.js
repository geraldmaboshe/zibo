import React, { Component } from 'react';
import Apartment from './Apartment';
import Header from '../layout/Header';

export default class ApartmentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apartments: []
    };
  }
  componentDidMount() {
    fetch('https://zibo.herokuapp.com/api/apartments')
      .then(res => res.json())
      .then(data => this.setState({ apartments: data }));
  }

  render() {
    return (
      <div>
        <Header />
        <div>
          {this.state.apartments.map(apartment => {
            return <Apartment apartment={apartment} />;
          })}
        </div>
      </div>
    );
  }
}
