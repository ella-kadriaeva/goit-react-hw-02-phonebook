import React from 'react';
import PropTypes from 'prop-types';
import css from './Input.module.css';
export default function ContactList({ contacts, deleteContacts }) {
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          {name + ': ' + number}
          {
            <button type="button" onClick={() => deleteContacts(id)}>
              Delete
            </button>
          }
        </li>
      ))}
    </ul>
  );
}
ContactList.propTypes = {
  deleteContacts: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
