import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class apartmentDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apartmentId: null,
      apartmentDetail: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    const apartmentId = this.props.match.params.id;
    this.setState({ apartmentId });
    fetch(`https://zibo.herokuapp.com/api/apartments/${apartmentId}`)
      .then(res => res.json())
      .then(data => this.setState({ apartmentDetail: data }));
  }
  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    const { apartmentDetail } = this.state;
    return (
      <Container fluid>
        <div className="details-container">
          <Row>
            <Col xs={6}>
              <img
                src={`https://zibo.herokuapp.com/${apartmentDetail?.apartmentImage}`}
                alt={apartmentDetail?.title}
                width="600px"
              />
            </Col>
            <Col xs={6}>
              <p className="more-info">{apartmentDetail?.title}</p>
              <p className="more-info">{apartmentDetail?.Specification}</p>
              <p className="more-info">{apartmentDetail?.location}</p>
              <p className="more-info">{apartmentDetail?.amount}</p>
              <Form>
                <p className="request-tour">Request Tour</p>
                <FormGroup>
                  <Label for="exampleEmail" hidden>
                    Email
                  </Label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Enter your Email here"
                    width="50px"
                  />
                </FormGroup>
                <div className="submit">
                  <Button color="primary" onClick={this.handleSubmit}>
                    Submit
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}
