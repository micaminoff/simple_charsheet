import React from 'react'

export interface Props {
    background: string;
    alignment: string;
    languages: string[];
    xp: number;
    inspiration: number;
    features: string[];
    feats: string[];
}

// Places ', ' between items in an array, but not after the last one
const format_string = (list: string[] = []) => (
    list.map((l, i) => i < list.length - 1 ? l + ', ' : l)
);

const CharacterInfo = ({
        inspiration = 0,
        background = '',
        alignment = '',
        languages = [],
        xp = 0,
        features = [],
        feats = []
    }: Props) => (
        <div className='box'>
            <p className='has-text-centered mb-1'>Character Info</p>
            <div>Inspiration: {inspiration}</div>
            <div>XP: {xp}</div>
            <div>Background: {background}</div>
            <div>Alignment: {alignment}</div>
            <div>Languages: {format_string(languages)}</div>
            <div>Class and Racial Features: {format_string(features)}</div>
            <div>Feats: {format_string(feats)}</div>
        </div>
    );

export default CharacterInfo;