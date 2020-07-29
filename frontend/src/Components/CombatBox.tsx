import React from 'react'
import { format_string } from '../Functions'

export interface Props {
    atk_bonus: number;
    dmg_bonus: number;
    dmg_die: string;
    equipment: string[];
}

const CombatBox = ({atk_bonus = 0, dmg_bonus = 0, dmg_die = '', equipment = []}: Props) => (
    <div className='box combat_box'>
        <p>ATK: 1d20 + {atk_bonus}</p>
        <p>DMG: {dmg_die} + {dmg_bonus}</p>
        <p>Equipment: {format_string(equipment)}</p>
    </div>
);

export default CombatBox;