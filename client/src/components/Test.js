import React, { Component } from 'react';

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apartmenets: []
    };
  }
  componentDidMount() {
    fetch('https://zibo-estates-fullstack.herokuapp.com/api/apartments')
      .then(res => res.json())
      .then(data => console.log(data));
  }
  render() {
    return <div></div>;
  }
}
