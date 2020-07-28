import React from 'react'

export interface Props {
    ac?: number;
    speed?: number;
    inspiration?: number;
    background?: string;
    alignment?: string;
    languages?: string[];
    xp?: number;
    initiative?: number;
}

const CharacterInfo = ({ ac = 15, speed = 30, initiative, inspiration, background, alignment, languages, xp }: Props) => (
    <div className='box'>
        <nav className='level has-text-centered'>
            <p>{ac}</p>
            <p>{speed}</p>
            <p>{initiative}</p>
            <p>{inspiration}</p>
        </nav>
        <div>XP: {xp}</div>
        <div>Background: {background}</div>
        <div>Alignment: {alignment}</div>
        <div>Languages: {languages?.map(lang => lang + ', ')}</div>
    </div>
);

export default CharacterInfo;