import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from './ContactForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, <div className={styles.nameError}>Minimum 3 symbols</div>)
    .max(10, <div className={styles.nameError}>Maximum 10 symbols</div>)
    .required(<div className={styles.nameError}>Please fill this field</div>),
  number: Yup.number()
    .typeError(
      <div className={styles.numberError}>Please use only numbers</div>,
    )
    .required(<div className={styles.numberError}>Please fill this field</div>),
});

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.btn = React.createRef();
  }

  render() {
    return (
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          this.props.onSubmit(values);
          this.btn.current.blur();
          setSubmitting(false);
          resetForm({ values: { name: '', number: '' } });
        }}
      >
        {props => (
          <Form className={styles.form}>
            <Field
              className={styles.addField}
              type="text"
              name="name"
              placeholder="name"
            />
            <ErrorMessage name="name" />
            <Field
              className={styles.addField}
              type="text"
              name="number"
              placeholder="xxxx-xx-xx"
            />
            <ErrorMessage name="number" />
            <button
              className={styles.btn}
              type="submit"
              disabled={!(props.isValid && props.dirty)}
              ref={this.btn}
            >
              Add contact
            </button>
          </Form>
        )}
      </Formik>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
