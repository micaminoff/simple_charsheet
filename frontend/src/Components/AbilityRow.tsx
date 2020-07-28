import React from 'react';
import AbilityBox from './AbilityBox';
import { abilities } from '../Types';

export interface Props {
    abilities: abilities;
}

const AbilityRow = ({ abilities }: Props) => (
    <div className='box has-text-centered'>
        Abilities
        <nav className='level atribute_row'>
            <AbilityBox ability_name='STR' ability_val={abilities.str} />
            <AbilityBox ability_name='DEX' ability_val={abilities.dex} />
            <AbilityBox ability_name='CON' ability_val={abilities.con} />
            <AbilityBox ability_name='INT' ability_val={abilities.int} />
            <AbilityBox ability_name='WIS' ability_val={abilities.wis} />
            <AbilityBox ability_name='CHA' ability_val={abilities.cha} />
        </nav>
    </div>
);

export default AbilityRow;
