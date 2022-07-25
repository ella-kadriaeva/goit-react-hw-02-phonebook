import React from 'react';
import PropTypes from 'prop-types';

export default function Filter({ value, onFilter }) {
  return (
    <>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={e => onFilter(e.target.value)}
      />
    </>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};
