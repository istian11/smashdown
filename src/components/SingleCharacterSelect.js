import React from 'react';
import { characters, characterData } from '../consts.js';
import './SingleCharacterSelect.css';

const IMAGE_PATH = process.env.PUBLIC_URL + '/assets/';


function renderCharacterSelectDropdown(index, gameState, setGameState) {
  const usedCharacters = gameState['usedCharacters'];
  const currentCharacters = Object.keys(gameState['playerData']).map(currIndex => {
    return gameState['playerData'][currIndex]['currentCharacter'];
  });
  return (
    <div className="characterDropdown">
      <select
        name="characterSelect"
        id="characterSelect"
        onChange={(e) => {
          const selectedCharacter = e.target.value;
          const clonedGameState = {...gameState};
          clonedGameState['playerData'][index]['currentCharacter'] = selectedCharacter;
          setGameState(clonedGameState);
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
  const { index, gameState, setGameState } = props;
  const myCharacter = gameState['playerData'][index]['currentCharacter']
  return (
    <div className="singleCharacterContainer">
      {renderPortrait(myCharacter)}
      {renderName(myCharacter)}
      {renderSeriesIcon(myCharacter)}
      {renderCharacterSelectDropdown(index, gameState, setGameState)}
    </div>
  );
}

export default SingleCharacterSelect;
