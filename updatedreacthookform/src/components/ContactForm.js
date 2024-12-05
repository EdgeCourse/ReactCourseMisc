//with react-hook-form and yup schema in separate file
import React, {forwardRef} from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './validationSchema'; 
import TextInput from './TextInput';
import SubmitButton from './SubmitButton';
import { Box } from '@mui/material';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // Simulate an API call
    setTimeout(() => {
      alert(JSON.stringify(data, null, 2));
    }, 500);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box mb={2}>
        <TextInput
          {...register('name')} 
          label="Name"
          error={!!errors.name}
          helperText={errors?.name?.message}
        />
      </Box>
      <Box mb={2}>
        <TextInput
          {...register('email')} 
          label="Email"
          error={!!errors.email}
          helperText={errors?.email?.message}
        />
      </Box>
      <Box mb={2}>
        <TextInput
          {...register('message')}
          label="Message"
          multiline
          rows={4}
          error={!!errors.message}
          helperText={errors?.message?.message}
        />
      </Box>
      <SubmitButton>Submit</SubmitButton>
    </form>
  );
};

export default ContactForm;
// original src/components/ContactForm.js
/*
import React, { useState } from 'react';
import TextInput from './TextInput';
import SubmitButton from './SubmitButton';
import { Box } from '@mui/material';

const ContactForm = () => {
  // State to manage form values
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: ''
  });

  // State to manage form errors
  const [errors, setErrors] = useState({});

  // Handle input value changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  // Validate form values
  const validate = () => {
    let tempErrors = {};
    if (!values.name) tempErrors.name = 'Name is required';
    if (!values.email) tempErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(values.email)) tempErrors.email = 'Email is not valid';
    if (!values.message) tempErrors.message = 'Message is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Simulate an API call
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setValues({ name: '', email: '', message: '' });
      }, 500);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box mb={2}>
        <TextInput
          name="name"
          label="Name"
          value={values.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
        />
      </Box>
      <Box mb={2}>
        <TextInput
          name="email"
          label="Email"
          value={values.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
        />
      </Box>
      <Box mb={2}>
        <TextInput
          name="message"
          label="Message"
          multiline
          rows={4}
          value={values.message}
          onChange={handleChange}
          error={!!errors.message}
          helperText={errors.message}
        />
      </Box>
      <SubmitButton>Submit</SubmitButton>
    </form>
  );
};

export default ContactForm;
*/