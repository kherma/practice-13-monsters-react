import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    // Every time state change, render mothod is runnning
    onChange={handleChange}
  />
);