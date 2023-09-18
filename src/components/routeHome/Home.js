import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from '@mui/material/Container';
import SpeedDialTooltipOpen from './SpeedDialTooltipOpen.js';
import './Home.css';
import Member from './Member.js';

export default function Home({ setSinglesLeftPlayer, setSinglesRightPlayer,
                               setDoublesLeftUpPlayer, setDoublesLeftDownPlayer,
                               setDoublesRightUpPlayer, setDoublesRightDownPlayer,
                               isAuth }) {
  
  const matches = useMediaQuery('(max-width:880px)');

  return (
    <div className="App">
      {matches ? 
        <>
          <Member isAuth={isAuth}/>
          <SpeedDialTooltipOpen setSinglesLeftPlayer={setSinglesLeftPlayer} 
                                setSinglesRightPlayer={setSinglesRightPlayer}
                                setDoublesLeftUpPlayer={setDoublesLeftUpPlayer}
                                setDoublesLeftDownPlayer={setDoublesLeftDownPlayer}
                                setDoublesRightUpPlayer={setDoublesRightUpPlayer}
                                setDoublesRightDownPlayer={setDoublesRightDownPlayer}
                                isAuth={isAuth}
          />
        </>
           :
        <>
           <Container maxWidth="md" sx={{marginTop: 0}}>
             <Member isAuth={isAuth}/>
             <SpeedDialTooltipOpen setSinglesLeftPlayer={setSinglesLeftPlayer} 
                                   setSinglesRightPlayer={setSinglesRightPlayer}
                                   setDoublesLeftUpPlayer={setDoublesLeftUpPlayer}
                                   setDoublesLeftDownPlayer={setDoublesLeftDownPlayer}
                                   setDoublesRightUpPlayer={setDoublesRightUpPlayer}
                                   setDoublesRightDownPlayer={setDoublesRightDownPlayer}
                                   isAuth={isAuth}
             />
           </Container>
         </>
        }
    </div>
  );
}