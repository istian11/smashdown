import React, { useState } from 'react';
import CharacterSelectDropdowns from './components/CharacterSelectDropdowns.js'
import Roster from './components/Roster.js'
import './Smashdown.css';


function Smashdown() {
  const [gameStart, setGameStart] = useState(true);
  const [numPlayers, setNumPlayers] = useState(0);
  const [selectedNumPlayers, setSelectedNumPlayers] = useState(false);

  const [playerData, setPlayerData] = useState({});
  const [usedCharacters, setUsedCharacters] = useState([]);

  return (
    <div className="mainContainer">
      <section className="titleSection">
        <h1 className="mainTitle">S M A S H D O W N</h1>
        <div className="description">Play through the roster to see who comes out on top!</div>
      </section>
      <section>
        <Roster usedCharacters={usedCharacters} />
      </section>
      {gameStart ? (
        <section className="numPlayersSection">
          <div className="mainLabel">{"Number of players:"}</div>
          <div className="numPlayersDropdown">
            <select
              name="numPlayers"
              id="numPlayers"
              onChange={(e) => {
                setNumPlayers(parseInt(e.target.value));
                setSelectedNumPlayers(true);
              }}
            >
              <option value="" selected disabled hidden>Choose</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="4">Four</option>
            </select>
          </div>
          <button disabled={!selectedNumPlayers} onClick={() => setGameStart(false)} type="button">Start</button>
        </section>
      ) : (
        <section className="characterSelectSection">
          <div className="mainLabel">{'Choose your fighter!'}</div>
          <CharacterSelectDropdowns
            usedCharacters={usedCharacters}
            setUsedCharacters={setUsedCharacters}
            numPlayers={numPlayers}
          />
        </section>
      )}
    </div>
  );
}

export default Smashdown;
