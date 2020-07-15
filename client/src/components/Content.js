import React, { Component } from 'react';
import Apartments from './Apartments';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apartments: []
    };
  }
  componentDidMount() {
    fetch('https://zibo-estates-fullstack.herokuapp.com/api/apartments')
      .then(res => res.json())
      .then(data => this.setState({ apartments: data }));
  }

  render() {
    return (
      <div className="cards">
        {this.state.apartments.map(apartment => (
          <div key={apartment.id}>
            <Apartments apartment={apartment} />
          </div>
        ))}
      </div>
    );
  }
}
