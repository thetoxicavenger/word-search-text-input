import React from 'react'
import styled, {css} from 'styled-components'

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
`

export const Letter = styled.div`
    text-transform: uppercase;
    text-align: center;
    &:hover {
        cursor: pointer;
    }
    ${props => props.selected && css`color: blue;`}
`

let lettersArray = [
    'm', 'n', 'm', 'n', 'm', 'm',
    'm', 'i', 'o', 'o', 'm', 'a',
    'm', 'a', 't', 'm', 'm', 'k',
    'm', 'i', 'm', 'c', 'm', 'a',
    'm', 'a', 'a', 'm', 'h', 'm',
    'm', 'r', 'r', 'm', 'm', 'i',
    'l', 'm', 'g', 'a', 'i', 'l'
]

lettersArray = lettersArray.map((letter, index) => {
    return {
        id: index,
        letter
    }
})

const namesMap = {
    'mitch': true,
    'noam': true,
    'kamil': true,
    'tom': true,
    'tim': true,
    'gail': true,
    'mara': true,
    'mia': true,
    'ram': true,
    'carl': true
}

export const WordSearch = () => {
    const [lettersSelected, setLettersSelected] = React.useState(new Map())
    
    const foundName = !!namesMap[lettersSelected]

    const _onLetterClick = letter => {
        const newLettersSelected = new Map(lettersSelected)

        console.log(newLettersSelected.entries())

        newLettersSelected.set(letter.id, letter.letter)
        setLettersSelected(newLettersSelected)
    }
    const _onClear = () => {
        setLettersSelected(new Map())
    }

    // if length of map is two, figure out difference between the two letters and expect that difference to continue. to the right is +1, diagonal right is +7, diagonal left is -7, etc.

    return <>
        <div>
            <button onClick={_onClear}>Clear</button>
        </div>
        <Container>
            {lettersArray.map(letter => {
                return <Letter key={letter.id} selected={lettersSelected.has(letter.id)} onClick={() => _onLetterClick(letter)}>{letter.letter}</Letter>
            })}
        </Container>
    </>
}