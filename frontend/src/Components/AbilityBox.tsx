import React from 'react'
import { modifier } from '../Functions'

export interface Props {
    ability_name: string;
    ability_val?: number;
}

const AbilityBox = ({ ability_name, ability_val }: Props) => (
    <div className='ability_box level-item has-text-centered'>
        <div className='ability_mod is-size-5' title='modifier'>
            {
                ability_val ? modifier(ability_val) : 0
            }
        </div>
        <div className='ability_name'>{ability_name}</div>
        <div className='ability_val' title='value'>{ability_val}</div>
    </div>
);

export default AbilityBox;