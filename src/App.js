import React from 'react'
import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/routeHome/Home';
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
  const [singlesLeftPlayer, setSinglesLeftPlayer] = useState("名無しA");
  const [singlesRightPlayer, setSinglesRightPlayer] = useState("名無しB");
  const [doublesLeftUpPlayer, setDoublesLeftUpPlayer] = useState("名無しA");
  const [doublesLeftDownPlayer, setDoublesLeftDownPlayer] = useState("名無しB");
  const [doublesRightUpPlayer, setDoublesRightUpPlayer] = useState("名無しC");
  const [doublesRightDownPlayer, setDoublesRightDownPlayer] = useState("名無しD");

  return (
    <>
      <Router>
        <DrawerLeft isAuth={isAuth} setIsAuth={setIsAuth}/>
        <Routes>
          <Route path="/" element={<Home setSinglesLeftPlayer={setSinglesLeftPlayer} 
                                         setSinglesRightPlayer={setSinglesRightPlayer}
                                         setDoublesLeftUpPlayer={setDoublesLeftUpPlayer}
                                         setDoublesLeftDownPlayer={setDoublesLeftDownPlayer}
                                         setDoublesRightUpPlayer={setDoublesRightUpPlayer}
                                         setDoublesRightDownPlayer={setDoublesRightDownPlayer}
                                         isAuth={isAuth}
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
