import React from 'react';
import { characters, characterData } from '../consts.js';
import './Roster.css';

const IMAGE_PATH = process.env.PUBLIC_URL + '/assets/';


function renderCharacter(character, usedCharacters) {
  const cssFilePath = `${IMAGE_PATH}character_select/${character}.png`;
  const opacityClass = usedCharacters.includes(character) ? "rosterCharacterUsed" : "";
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
  return (
    <div className="rosterContainer">
      {characters.map(character => {
        return renderCharacter(character, props.usedCharacters);
      })}
    </div>
  );
}

export default Roster;
