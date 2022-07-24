import React, { Component } from 'react';
import NameInput from './Input/NameInput';
import NumberInput from './Input/NumberInput';
import Container from './Input/Container';
import Section from './Input/Section';
import ContactsList from './Input/ContactList';
export default class App extends Component {
  state = {
    contacts: [
      //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };
  deleteContacts = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  render() {
    const { contacts, name, number } = this.state;

    return (
      <Section>
        <Container title="Phonebook">
          <NameInput value={name} onChange={this.handleChange} />
        </Container>
        <Container title="Contacts">
          <NumberInput value={number} onChange={this.handleChange} />
          <ContactsList
            contacts={contacts}
            onDeleteContacts={this.deleteContacts}
          />
        </Container>
      </Section>
    );
  }
}
