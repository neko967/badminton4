import React from 'react'
import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/routeHome/Home';
import Scoreboard from './components/routeScoreboard/Scoreboard';
import Singles from './components/routeSingles/SinglesScoreboard';
import Doubles from './components/routeDoubles/DoublesScoreboard';
import Record from './components/routeRecord/Records';
import Member from './components/routeMember/Members';
import Homey from './components/Homey';
import CreatePost from './components/CreatePost';
import DrawerLeft from './components/DrawerLeft.js';
import BottomNavigation from './components/BottomNavigation.js';
import { useState } from 'react';

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const [singlesLeftPlayer, setSinglesLeftPlayer] = useState("ゲストA");
  const [singlesRightPlayer, setSinglesRightPlayer] = useState("ゲストB");
  const [doublesLeftUpPlayer, setDoublesLeftUpPlayer] = useState("ゲストA");
  const [doublesLeftDownPlayer, setDoublesLeftDownPlayer] = useState("ゲストB");
  const [doublesRightUpPlayer, setDoublesRightUpPlayer] = useState("ゲストC");
  const [doublesRightDownPlayer, setDoublesRightDownPlayer] = useState("ゲストD");

  return (
    <>
      <Router>
        <DrawerLeft isAuth={isAuth} setIsAuth={setIsAuth}/>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Scoreboard setSinglesLeftPlayer={setSinglesLeftPlayer} 
                                               setSinglesRightPlayer={setSinglesRightPlayer}
                                               setDoublesLeftUpPlayer={setDoublesLeftUpPlayer}
                                               setDoublesLeftDownPlayer={setDoublesLeftDownPlayer}
                                               setDoublesRightUpPlayer={setDoublesRightUpPlayer}
                                               setDoublesRightDownPlayer={setDoublesRightDownPlayer}
                                   />}
          />
          <Route path="/singles" element={<Singles leftPlayer={singlesLeftPlayer} 
                                                   setLeftPlayer={setSinglesLeftPlayer} 
                                                   rightPlayer={singlesRightPlayer} 
                                                   setRightPlayer={setSinglesRightPlayer}
                                          />}
          />
          <Route path="/doubles" element={<Doubles doublesLeftUpPlayer={doublesLeftUpPlayer} 
                                                   setDoublesLeftUpPlayer={setDoublesLeftUpPlayer}
                                                   doublesLeftDownPlayer={doublesLeftDownPlayer}
                                                   setDoublesLeftDownPlayer={setDoublesLeftDownPlayer}
                                                   doublesRightUpPlayer={doublesRightUpPlayer}
                                                   setDoublesRightUpPlayer={setDoublesRightUpPlayer}
                                                   doublesRightDownPlayer={doublesRightDownPlayer}
                                                   setDoublesRightDownPlayer={setDoublesRightDownPlayer}
                                          />}
          />
          <Route path="/record" element={<Record />} />
          <Route path="/member" element={<Member />} />

          <Route path="/homey" element={<Homey/>}></Route>
          <Route path="/createpost" element={<CreatePost isAuth={isAuth}/>}></Route>
        </Routes>
        <BottomNavigation />
      </Router>
    </>
    
    
  );
}

export default App;
