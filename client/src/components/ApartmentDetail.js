import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';

export default class apartmentDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apartmentId: null,
      apartmentDetail: null
    };
  }
  componentDidMount() {
    const apartmentId = this.props.match.params.id;
    this.setState({ apartmentId });
    fetch(`https://zibo.herokuapp.com/api/apartments/${apartmentId}`)
      .then(res => res.json())
      .then(data => this.setState({ apartmentDetail: data }));
  }
  render() {
    console.log(this.state.apartmentDetail);
    const { apartmentDetail } = this.state;
    return (
      <Container fluid>
        <Row>
          <Col>
            <img
              src={`https://zibo.herokuapp.com/${apartmentDetail?.apartmentImage}`}
              alt={apartmentDetail?.title}
              width="200px"
              height="150px"
            />
          </Col>
          <Col>
            <div>{apartmentDetail?.title}</div>
            <div>{apartmentDetail?.Specification}</div>
            <div>{apartmentDetail?.location}</div>
            <div>{apartmentDetail?.amount}</div>
            <button>Checkout</button>
          </Col>
        </Row>
      </Container>
    );
  }
}
