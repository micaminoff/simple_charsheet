import React from 'react'
import { format_string } from '../Functions'

export interface Props {
    background: string;
    alignment: string;
    languages: string[];
    xp: number;
    inspiration: number;
    features: string[];
    feats: string[];
    inventory: string[];
    proficiency_bonus: number;
}

const CharacterInfo = ({
        inspiration = 0,
        background = '',
        alignment = '',
        languages = [],
        xp = 0,
        features = [],
        feats = [],
        inventory = [],
        proficiency_bonus = 0
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
            <div>Inventory: {format_string(inventory)}</div>
            <div>Proficiency Bonus: {proficiency_bonus}</div>
        </div>
    );

export default CharacterInfo;