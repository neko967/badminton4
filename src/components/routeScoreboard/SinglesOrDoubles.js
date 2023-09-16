import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function SinglesOrDoublesButton() {
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button>シングルス</Button>
      <Button>ダブルス</Button>
    </ButtonGroup>
  );
}