import React from 'react';
import PropTypes from 'prop-types';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './Contact.module.css';
import IconButton from '../IconButton/';

function Contact({ id, name, phone, deleteHandler }) {
  return (
    <li key={id} className={styles.contact}>
      <span className={styles.name}>
        <AccountCircleIcon className={styles.icon} />
        {name}
      </span>

      <span className={styles.phone}>
        <PhoneIphoneIcon className={styles.icon} />
        {phone}
      </span>

      <IconButton
        onClick={deleteHandler}
        data-id={id}
        aria-label="delete contact"
      >
        <DeleteIcon />
      </IconButton>
    </li>
  );
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  deleteHandler: PropTypes.func.isRequired,
};

export default Contact;
