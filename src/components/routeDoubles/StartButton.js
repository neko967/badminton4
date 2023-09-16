import React from 'react';
import Button from '@mui/material/Button';

export default function StartButton({ isStart, onStartClick}) {
  
  return (
    <>
    {!isStart && 
      <Button 
        variant="contained"
        size="large"
        sx={{ 
          position: 'fixed', 
          bottom: 60, 
          left: {xs:0, sm:30, lg:140}, 
          right: {xs:0, sm:30, lg:140}}}
        onClick={onStartClick}
      >
        試合開始
      </Button>
    }
    </>
  );
}