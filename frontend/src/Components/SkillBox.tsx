import React from 'react';
import { modifier } from '../Functions'

export interface Props {
    skill: string;
    proficient: number;
    ability: number;
    bonus: number;
}

const render_bonus = (ability: number, proficient: number, bonus: number) => {
    let class_name: string = 'tag';
    let title: string = 'Not Proficient'
    if (proficient === 2) {
        class_name += ' is-danger';
        title = 'Expert'
    } else if (proficient === 1) {
        class_name += ' is-warning';
        title = 'Proficient'
    }
    return (
        <span className={class_name} title={title}>
            {modifier(ability) + (proficient * bonus)}
        </span>
    )

}

const SkillBox = ({ skill, proficient = 0, ability = 0, bonus = 0 }: Props) => (
    <div className='skill_box'>
        <nav className='level'>
            <div className='level-left'>{skill}</div>
            <div className='level-right'>{render_bonus(ability, proficient, bonus)}</div>
        </nav>
    </div>
);

export default SkillBox;