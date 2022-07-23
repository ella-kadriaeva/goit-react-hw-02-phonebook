import React from 'react';
import css from './Input.module.css';
const ContactList = ({ contacts, onDeleteContacts }) => {
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={css.item}>
          <p className={css.itemText}>{name}</p>
          <p className={css.itemText}>{number}</p>
          <button onClick={() => onDeleteContacts(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
