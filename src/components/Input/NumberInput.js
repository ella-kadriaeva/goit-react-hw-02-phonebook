import React from 'react';
const NumberInput = ({ number, onChange }) => {
  return (
    <form autoComplete="off" onChange={onChange}>
      <label htmlFor="name">Telefon</label>
      <input
        type="tel"
        name="number"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
    </form>
  );
};

export default NumberInput;
