import React, { Component } from 'react';
import ContactForm from './Input/ContactForm';
import Container from './Input/Container';
import Section from './Input/Section';
import ContactList from './Input/ContactList';
import { nanoid } from 'nanoid';
export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  formSubmitHandle = data => {
    const doubl = this.state.contacts
      .map(contact => contact.name)
      .includes(data.name);
    if (doubl) {
      alert(`${data.name} is already in contacts`);
    } else {
      const contact = {
        ...data,
        id: nanoid(),
      };
      this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts],
      }));
    }
  };

  deleteContacts = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  render() {
    const { contacts } = this.state;
    return (
      <Section>
        <Container title="Phonebook">
          <ContactForm onSubmit={this.formSubmitHandle} />
        </Container>
        <Container title="Contacts">
          <ContactList
            contacts={contacts}
            deleteContacts={this.deleteContacts}
          />
        </Container>
      </Section>
    );
  }
}
