/* 
Formik:
Declarative Approach: Formik takes a declarative approach, where you define the form structure and validation rules upfront.
Built-in Validation: It provides built-in validation using Yup or custom validation functions.
State Management: Handles form state (values, errors, touched) internally.
Form Submission: Simplifies form submission with a single onSubmit handler.
Error Handling: Easily displays error messages using ErrorMessage components.

React Hook Form:
Imperative Approach: React Hook Form takes a more imperative approach, requiring you to register form fields and manually handle state updates.
Flexible Validation: Offers flexible validation options, including built-in validation rules and custom validation functions.
Performance Optimization: Known for its performance optimizations, especially in large forms.
Custom Hooks: Provides custom hooks for advanced form scenarios, like multi-step forms or dynamic forms.
*/

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too Short!').max(50, 'Too Long!').required('Required'),
});

const MyForm = () => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="my-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" className="form-control" />
            <ErrorMessage name="email" component="div" className="text-danger" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field name="password" type="password" className="form-control" />
            <ErrorMessage name="password" component="div" className="text-danger" />
          </div>
          <button type="submit" disabled={isSubmitting} className="btn btn-primary">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;