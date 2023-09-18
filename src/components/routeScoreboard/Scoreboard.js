import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from '@mui/material/Container';
import SpeedDialTooltipOpen from './SpeedDialTooltipOpen.js';
import './Scoreboard.css';
import Member from './Member.js';

export default function Scoreboard({ setSinglesLeftPlayer, setSinglesRightPlayer,
                                     setDoublesLeftUpPlayer, setDoublesLeftDownPlayer,
                                     setDoublesRightUpPlayer, setDoublesRightDownPlayer }) {
  
  const matches = useMediaQuery('(max-width:880px)');

  return (
    <div className="App">
       {matches ? 
         <>
         <Member/>
         <SpeedDialTooltipOpen setSinglesLeftPlayer={setSinglesLeftPlayer} 
                                setSinglesRightPlayer={setSinglesRightPlayer}
                                setDoublesLeftUpPlayer={setDoublesLeftUpPlayer}
                                setDoublesLeftDownPlayer={setDoublesLeftDownPlayer}
                                setDoublesRightUpPlayer={setDoublesRightUpPlayer}
                                setDoublesRightDownPlayer={setDoublesRightDownPlayer}
         />
         </>
          :
        <>
          <Container maxWidth="md" sx={{marginTop: 0}}>
            <Member/>
            <SpeedDialTooltipOpen setSinglesLeftPlayer={setSinglesLeftPlayer} 
                                setSinglesRightPlayer={setSinglesRightPlayer}
                                setDoublesLeftUpPlayer={setDoublesLeftUpPlayer}
                                setDoublesLeftDownPlayer={setDoublesLeftDownPlayer}
                                setDoublesRightUpPlayer={setDoublesRightUpPlayer}
                                setDoublesRightDownPlayer={setDoublesRightDownPlayer}
            />
          </Container>
        </>
      }   
    </div>
  );
}