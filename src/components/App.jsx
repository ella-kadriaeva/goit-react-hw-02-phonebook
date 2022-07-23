import React, { Component } from 'react';
import Input from './Input/Input';
import Container from './Input/Container';
export default class App extends Component {
  state = {
    // contacts: [],
    name: '',
  };
  render() {
    return (
      <Container>
        <Input />
      </Container>
    );
  }
}
