import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import HeaderPicture from './../images/header.jpg';

export default function Header() {
  return <img src={HeaderPicture} height="400" width="100%"></img>;
}
