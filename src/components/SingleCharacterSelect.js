import React, { useState } from 'react';
import { characters, characterData } from '../consts.js';
import './SingleCharacterSelect.css';

const IMAGE_PATH = process.env.PUBLIC_URL + '/assets/';


function renderCharacterSelectDropdown(usedCharacters, currentCharacters, setCurrentCharacters, myCharacter, setMyCharacter) {
  return (
    <div className="characterDropdown">
      <select
        name="characterSelect"
        id="characterSelect"
        onChange={(e) => {
          let characters = [...currentCharacters];
          const selectedCharacter = e.target.value;
          characters.push(selectedCharacter);
          if (characters.includes(myCharacter)) {
            const myCharacterIndex = characters.indexOf(myCharacter);
            characters.splice(myCharacterIndex, 1);
          }
          setCurrentCharacters(characters);
          setMyCharacter(selectedCharacter);
        }}
      >
        <option value="" selected disabled hidden>Choose</option>
        {characters.map(c => (
          <option
            value={c}
            disabled={usedCharacters.includes(c) || currentCharacters.includes(c)}
          >
            {characterData[c].displayName}
          </option>
        ))}
      </select>
    </div>
  );
}

function renderPortrait(myCharacter) {
  let characterRenderFilePath = '';
  if (myCharacter !== '') {
    characterRenderFilePath = `${IMAGE_PATH}full_render/${myCharacter}.png`;
  } else {
    characterRenderFilePath = `${IMAGE_PATH}full_render/random.png`;
  }
  return (
    <div className="characterPortrait">
      <div
        className="characterRender"
        style={{ backgroundImage: `url(${characterRenderFilePath})` }} />
    </div>
  );
}

function renderName(myCharacter) {
  if (myCharacter === '') {
    return null;
  }

  const displayName = characterData[myCharacter].displayName;
  return (
    <div className="characterName">
      {displayName}
    </div>
  );
}

function renderSeriesIcon(myCharacter) {
  if (myCharacter === '') {
    return null;
  }

  const series = characterData[myCharacter].series;
  const seriesIconFilePath = `${IMAGE_PATH}series/${series}.png`;
  return (
    <div
      className="seriesIcon"
      style={{ backgroundImage: `url(${seriesIconFilePath})` }} />
  );
}

function SingleCharacterSelect(props) {
  const [myCharacter, setMyCharacter] = useState('');
  const { usedCharacters, currentCharacters, setCurrentCharacters} = props;
  return (
    <div className="singleCharacterContainer">
      {renderPortrait(myCharacter)}
      {renderName(myCharacter)}
      {renderSeriesIcon(myCharacter)}
      {renderCharacterSelectDropdown(usedCharacters, currentCharacters, setCurrentCharacters, myCharacter, setMyCharacter)}
    </div>
  );
}

export default SingleCharacterSelect;
