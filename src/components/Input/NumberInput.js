import React from 'react';
const NumberInput = ({ number, onChange }) => {
  return (
    <form>
      <label htmlFor="name">
        Telefon
        <input
          type="tel"
          name="number"
          value={number}
          onChange={onChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
    </form>
  );
};

export default NumberInput;
