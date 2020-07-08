import React from 'react';

export interface Props {
    skill: string;
    proficient?: boolean;
    value?: number;
}

const SkillBox = ({ skill, proficient = false, value = 0 }: Props) => (
    <div className='skill_box'>
        <nav className='level'>
            <div className='level-left'>{skill}</div>
            <div className='level-right'>{value}</div>
        </nav>
    </div>
);

export default SkillBox;