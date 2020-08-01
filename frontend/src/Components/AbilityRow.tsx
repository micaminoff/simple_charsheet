import React from 'react';
import AbilityBox from './AbilityBox';
import { abilities } from '../Types';

export interface Props {
    abilities: abilities;
}

const AbilityRow = ({ abilities = {strength: 0, dexterity: 0, constitution: 0, intelligence: 0, wisdom: 0, charisma: 0} }: Props) => (
    <div className='box has-text-centered'>
        Abilities
        <nav className='level atribute_row'>
            <AbilityBox ability_name='Strength' ability_val={abilities.strength} />
            <AbilityBox ability_name='Dexterity' ability_val={abilities.dexterity} />
            <AbilityBox ability_name='Constitution' ability_val={abilities.constitution} />
            <AbilityBox ability_name='Intelligence' ability_val={abilities.intelligence} />
            <AbilityBox ability_name='Wisdom' ability_val={abilities.wisdom} />
            <AbilityBox ability_name='Charisma' ability_val={abilities.charisma} />
        </nav>
    </div>
);

export default AbilityRow;
