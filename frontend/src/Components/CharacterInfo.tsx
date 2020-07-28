import React from 'react'

export interface Props {
    background?: string;
    alignment?: string;
    languages?: string[];
    xp?: number;
    inspiration?: number;
}

const CharacterInfo = ({inspiration, background, alignment, languages, xp }: Props) => (
    <div className='box'>
        <p className='has-text-centered mb-1'>Character Info</p>
        <div>Inspiration: {inspiration}</div>
        <div>XP: {xp}</div>
        <div>Background: {background}</div>
        <div>Alignment: {alignment}</div>
        <div>Languages: {languages?.map(lang => lang + ', ')}</div>
    </div>
);

export default CharacterInfo;