import React from 'react';
import { characters, characterData } from '../consts.js';
import './Roster.css';

const IMAGE_PATH = process.env.PUBLIC_URL + '/assets/';


function renderCharacter(character, usedCharacters, currentCharacters) {
  const unselectableCharacters = [...new Set([...usedCharacters ,...currentCharacters])];
  const cssFilePath = `${IMAGE_PATH}character_select/${character}.png`;
  const opacityClass = unselectableCharacters.includes(character) ? "rosterCharacterUsed" : "";
  return (
    <div className="rosterCharacterBorder">
      <div className={opacityClass}>
        <img
          alt={characterData[character].displayName}
          height="75px"
          src={cssFilePath}
          title={characterData[character].displayName}
          width="75px"
        />
      </div>
    </div>
  )
}

function Roster(props) {
  const { gameState } = props;
  const usedCharacters = gameState['usedCharacters'];
  const currentCharacters = Object.keys(gameState['playerData']).map(currIndex => {
    return gameState['playerData'][currIndex]['currentCharacter'];
  });
  return (
    <div className="rosterContainer">
      {characters.map(character => {
        return renderCharacter(character, usedCharacters, currentCharacters);
      })}
    </div>
  );
}

export default Roster;
