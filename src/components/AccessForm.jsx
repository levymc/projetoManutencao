import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function AccessForm(props) {
  return (
      <div>
        <TextField
          id={props.id}
          label={props.label}
          type={props.type}
          variant="standard"
        />
      </div>
  );
}