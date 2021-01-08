import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

function Filter({ value, onChange }) {
  return (
    <form className={styles.form}>
      <label>
        <span className={styles.title}>Find contacts by name</span>
        <input
          className={styles.searchField}
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
    </form>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
