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

const CharacterInfo = ({ ac=15, speed=30, initiative, inspiration, background, alignment, languages, xp }: Props) => (
    <div>AC: {ac}</div>
);

export default CharacterInfo;