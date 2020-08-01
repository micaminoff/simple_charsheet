import React, { FormEvent, useState } from 'react'

export interface Props {
    skill_name: string;
    proficient: number;
    change_handler: (name: string, new_val: number) => void;
}


const SkillInput = ({ skill_name, proficient, change_handler }: Props) => {

    const change_proficiency = () => {
        return change_handler(skill_name.toLowerCase(), (proficient + 1) % 3);
    }

    const render_bonus = () => {
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
            <span className={class_name} onClick={change_proficiency}>
                {title}
            </span>
        )
    }

    return (
        <div className='level'>
            <div className='level-left'>
                {skill_name}
            </div>
            <div className='level-right'>
                {render_bonus()}
            </div>
        </div>
    )
}

export default SkillInput;