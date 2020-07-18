import React, { Component } from 'react';
import Apartments from './Apartment';

export default class Content extends Component {
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
      <div className="row">
        {this.state.apartments.map(apartment => (
          <div key={apartment._id} className="col">
            <Apartments apartment={apartment} />
          </div>
        ))}
      </div>
    );
  }
}
