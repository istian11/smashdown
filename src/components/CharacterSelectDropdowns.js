import React, { useState } from 'react';
import SingleCharacterSelect from '../components/SingleCharacterSelect.js'
import './CharacterSelectDropdowns.css';


function renderCharacterSelects(usedCharacters, currentCharacters, setCurrentCharacters, numPlayers) {
  const characterSelects = [];
  for (let i = 0; i < numPlayers; i++) {
    const characterSelect = (
      <SingleCharacterSelect 
        usedCharacters={usedCharacters}
        currentCharacters={currentCharacters}
        setCurrentCharacters={setCurrentCharacters} />
    );
    characterSelects.push(characterSelect);
  }
  return characterSelects;
}

function CharacterSelectDropdowns(props) {
  const [currentCharacters, setCurrentCharacters] = useState([]);
  const { usedCharacters, numPlayers} = props;
  return (
    <div className="multiCharacterSelectContainer">
      <div className="characterDropdownsContainer">
        {renderCharacterSelects(usedCharacters, currentCharacters, setCurrentCharacters, numPlayers)}
      </div>
      <div className="fightButton">
        <button
          disabled={currentCharacters.length !== numPlayers}
          onClick={() => void(0)}
          type="button"
        >
          Fight!
        </button>
      </div>
    </div>
  );
}

export default CharacterSelectDropdowns;
