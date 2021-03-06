import React from 'react';
import SingleCharacterSelect from '../components/SingleCharacterSelect.js'
import './CharacterSelectDropdowns.css';

function setFightStart(gameState, setGameState) {
  const clonedGameState = {...gameState};
  clonedGameState['fightStart'] = true;
  setGameState(clonedGameState);
}

function renderCharacterSelects(gameState, setGameState, numPlayers) {
  const characterSelects = [];
  for (let i = 0; i < numPlayers; i++) {
    const characterSelect = (
      <SingleCharacterSelect
        index={i}
        gameState={gameState}
        setGameState={setGameState} />
    );
    characterSelects.push(characterSelect);
  }
  return characterSelects;
}

function CharacterSelectDropdowns(props) {
  const { gameState, setGameState } = props;
  const numPlayers = Object.keys(gameState['playerData']).length;
  let numSelectedCharacters = 0;
  for (let i = 0; i < numPlayers; i++) {
    const currentCharacter = gameState['playerData'][i]['currentCharacter'];
    if (currentCharacter !== '') {
      numSelectedCharacters++;
    }
  }
  return (
    <div className="multiCharacterSelectContainer">
      <div className="characterDropdownsContainer">
        {renderCharacterSelects(gameState, setGameState, numPlayers)}
      </div>
      <div className="fightButton">
        <button
          disabled={numSelectedCharacters !== numPlayers}
          onClick={() => setFightStart(gameState, setGameState)}
          type="button"
        >
          Fight!
        </button>
      </div>
    </div>
  );
}

export default CharacterSelectDropdowns;
