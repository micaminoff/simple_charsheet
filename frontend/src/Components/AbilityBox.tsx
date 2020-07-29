import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell, faUserNinja, faMedkit, faGlasses, faBookOpen, faQuestionCircle, faCommentDots } from '@fortawesome/free-solid-svg-icons'
import { modifier } from '../Functions'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

export interface Props {
    ability_name: string;
    ability_val?: number;
}

const render_icon = (ability: string) => {
    let icon: IconProp;
    switch (ability) {
        case 'STR':
            icon = faDumbbell;
            break;
        case 'DEX':
            icon = faUserNinja;
            break;
        case 'CON':
            icon = faMedkit;
            break;
        case 'INT':
            icon = faGlasses;
            break;
        case 'WIS':
            icon = faBookOpen;
            break;
        case 'CHA':
            icon = faCommentDots;
            break;
        default:
            icon = faQuestionCircle;
    }
    return (
        <span className='icon'><FontAwesomeIcon icon={icon} size='2x'/></span>
    );
}

const AbilityBox = ({ ability_name, ability_val = 0 }: Props) => (
    <div className='ability_box level-item has-text-centered'>
        <div className='ability_mod is-size-5 mb-1' title='modifier'>
            {modifier(ability_val)}
        </div>
        <div title={ability_name} className='ability_name'>
            {render_icon(ability_name)}
        </div>
        <div className='ability_val' title='value'>{ability_val}</div>
    </div>
);

export default AbilityBox;