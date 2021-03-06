import React, { useState } from 'react';
import CharacterSelectDropdowns from './components/CharacterSelectDropdowns.js'
import Roster from './components/Roster.js'
import './Smashdown.css';

function setInitialPlayerData(numPlayers, gameState, setGameState) {
  const allPlayerData = {};
  for (let i = 0; i < numPlayers; i++) {
    const currentPlayerData = {
      'currentCharacter': '',
      'winningCharacters': [],
    }
    allPlayerData[i] = currentPlayerData;
  }
  gameState['playerData'] = allPlayerData;
  setGameState(gameState);
}

function Smashdown() {
  const initialGameState = {
    'fightStart': false,
    'usedCharacters': [],
    'playerData': {},
  };

  const [gameStart, setGameStart] = useState(true);
  const [selectedNumPlayers, setSelectedNumPlayers] = useState(false);
  const [gameState, setGameState] = useState(initialGameState);
  const fightStart = gameState['fightStart'];

  return (
    <div className="mainContainer">
      <section className="titleSection">
        <h1 className="mainTitle">S M A S H D O W N</h1>
        <div className="description">Play through the roster to see who comes out on top!</div>
      </section>
      <section>
        <Roster gameState={gameState} />
      </section>
      {gameStart && (
        <section className="numPlayersSection">
          <div className="mainLabel">{"Number of players:"}</div>
          <div className="numPlayersDropdown">
            <select
              name="numPlayers"
              id="numPlayers"
              onChange={(e) => {
                setInitialPlayerData(parseInt(e.target.value), gameState, setGameState);
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
      )}
      {!gameStart && !fightStart && (
        <section className="characterSelectSection">
          <div className="mainLabel">{'Choose your fighter!'}</div>
          <CharacterSelectDropdowns
            gameState={gameState}
            setGameState={setGameState}
          />
        </section>
      )}
      {!gameStart && fightStart && (
        <section>
          <div>
            Show icons fighting here. Add animations? Click on winner?
          </div>
        </section>
      )}
    </div>
  );
}

export default Smashdown;
