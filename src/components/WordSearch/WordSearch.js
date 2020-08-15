import React from "react";
import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 544px;
  height: 544px;
  padding: 24px 48px;
  border: 3px solid black;
  display: grid;
  grid-template-rows: repeat(7, 64px);
  grid-template-columns: repeat(6, 64px);
  column-gap: 12px;
  row-gap: 8px;
`;

export const Letter = styled.div`
  text-transform: uppercase;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
  ${(props) =>
    props.selected &&
    css`
      color: blue;
    `}
  ${(props) =>
    props.wordFound &&
    css`
      background: green;
      color: white;
    `}
`;

let lettersArray = [
  "m",
  "n",
  "m",
  "n",
  "m",
  "m",
  "m",
  "i",
  "o",
  "o",
  "m",
  "a",
  "m",
  "a",
  "t",
  "m",
  "m",
  "k",
  "m",
  "i",
  "m",
  "c",
  "m",
  "a",
  "m",
  "a",
  "a",
  "m",
  "h",
  "m",
  "m",
  "r",
  "r",
  "m",
  "m",
  "i",
  "l",
  "m",
  "g",
  "a",
  "i",
  "l",
];

lettersArray = lettersArray.map((letter, index) => {
  return {
    id: index.toString(),
    letter,
  };
});

const namesMap = {
  mitch: true,
  noam: true,
  kamil: true,
  tom: true,
  tim: true,
  gail: true,
  mara: true,
  mia: true,
  ram: true,
  carl: true,
  nia: true,
};

export const WordSearch = () => {
  const [lettersSelected, setLettersSelected] = React.useState("");
  const [indicesSelected, setIndicesSelected] = React.useState({}); // refactor to one useState
  const [indicesOrder, setIndicesOrder] = React.useState([]);

  const foundName = !!namesMap[lettersSelected];

  const _onLetterClick = (letter) => {
    // if indicesOrder length >= 2 and newLetterIndex diff with prev !== prev with antepenultimate diff, then just make all state to new letter
    setIndicesSelected({
      ...indicesSelected,
      [letter.id]: true,
    });
    setLettersSelected(lettersSelected + letter.letter);
  };
  const _onClear = () => {
    setLettersSelected("");
    setIndicesSelected({});
  };

  // if length of map is two, figure out difference between the two letters and expect that difference to continue. to the right is +1, diagonal right is +7, diagonal left is -7, etc.

  // could have an object to check if index is selected, an array to track order of selected indices, and a string to contain the word. all would be 0(1)

  return (
    <>
      <div>
        <button onClick={_onClear}>Clear</button>
      </div>
      <Container>
        {lettersArray.map((letter) => {
          return (
            <Letter
              key={letter.id}
              selected={!!indicesSelected[letter.id]}
              wordFound={foundName && indicesSelected[letter.id]}
              onClick={() => _onLetterClick(letter)}
            >
              {letter.letter}
            </Letter>
          );
        })}
      </Container>
    </>
  );
};
