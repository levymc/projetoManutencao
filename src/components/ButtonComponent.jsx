import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ButtonComponent(props) {
  return (
    <Stack spacing={1} direction="row">
      <Button variant="contained">{props.textButton}</Button>
    </Stack>
  );
}