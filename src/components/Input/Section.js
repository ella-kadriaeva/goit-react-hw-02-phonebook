import React from 'react';
import css from './Input.module.css';
const Section = ({ children }) => {
  return <div className={css.section}>{children}</div>;
};

export default Section;
