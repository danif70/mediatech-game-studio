import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Game1 from "./Components/Game1";
import Game2 from "./Components/Game2";
import Game3 from "./Components/Game3";
import Game4 from "./Components/Game4";
import Game5 from "./Components/Game5";
import Game6 from "./Components/Game6";
import Game7 from "./Components/Game7";
import Game8 from "./Components/Game8";
import Game9 from "./Components/Game9";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Mediatech Game Studio!</h1>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="game1" element={ <Game1 /> } />
          <Route path="game2" element={ <Game2 /> } />
          <Route path="game3" element={ <Game3 /> } />
          <Route path="game4" element={ <Game4 /> } />
          <Route path="game5" element={ <Game5 /> } />
          <Route path="game6" element={ <Game6 /> } />
          <Route path="game7" element={ <Game7 /> } />
          <Route path="game8" element={ <Game8 /> } />
          <Route path="game9" element={ <Game9 /> } />
        </Routes>
      </header>
    </div>
  );
}

export default App;
