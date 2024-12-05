import React, { forwardRef } from 'react';
import TextField from '@mui/material/TextField';

const TextInput = forwardRef((props, ref) => {

const { label, name, value, onChange, onBlur, error, helperText, ...otherProps } = props;

  return (
    <TextField
      fullWidth
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      error={!!error}
      helperText={helperText}
      ref={ref} // Forward the ref to the TextField component
     {...otherProps}
    />
  );
  });

export default TextInput;