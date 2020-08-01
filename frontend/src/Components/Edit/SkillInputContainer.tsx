import React, { FormEvent } from 'react';
import { skills } from '../../Types';
import SkillInput from './SkillInput';

export interface Props {
    skills: skills;
    change_handler: (name: string, new_val: number) => void;
}

const SkillInputContainer = ({ skills, change_handler }: Props) => {
    return (
        <div>
            <p className='has-text-centered mb-2'>Saving throws</p>
            <div className='columns'>
                <div className='column'>
                    <SkillInput skill_name='Strength' proficient={skills.strength} change_handler={change_handler} />
                    <SkillInput skill_name='Dexterity' proficient={skills.dexterity} change_handler={change_handler} />
                    <SkillInput skill_name='Constitution' proficient={skills.constitution} change_handler={change_handler} />
                </div>
                <div className='column'>
                    <SkillInput skill_name='Intelligence' proficient={skills.intelligence} change_handler={change_handler} />
                    <SkillInput skill_name='Wisdom' proficient={skills.wisdom} change_handler={change_handler} />
                    <SkillInput skill_name='Charisma' proficient={skills.charisma} change_handler={change_handler} />
                </div>
            </div>
            <p className='has-text-centered mb-2'>Skills</p>
            <div className='columns'>
                <div className='column'>
                    <SkillInput skill_name='Acrobatics' proficient={skills.acrobatics} change_handler={change_handler} />
                    <SkillInput skill_name='Arcana' proficient={skills.arcana} change_handler={change_handler} />
                    <SkillInput skill_name='Deception' proficient={skills.deception} change_handler={change_handler} />
                    <SkillInput skill_name='Insight' proficient={skills.insight} change_handler={change_handler} />
                    <SkillInput skill_name='Investigation' proficient={skills.investigation} change_handler={change_handler} />
                    <SkillInput skill_name='Nature' proficient={skills.nature} change_handler={change_handler} />
                    <SkillInput skill_name='Performance' proficient={skills.performance} change_handler={change_handler} />
                    <SkillInput skill_name='Religion' proficient={skills.religion} change_handler={change_handler} />
                    <SkillInput skill_name='Stealth' proficient={skills.stealth} change_handler={change_handler} />
                </div>
                <div className='column'>
                    <SkillInput skill_name='Animal_Handling' proficient={skills.animal_handling} change_handler={change_handler} />
                    <SkillInput skill_name='Athletics' proficient={skills.athletics} change_handler={change_handler} />
                    <SkillInput skill_name='History' proficient={skills.history} change_handler={change_handler} />
                    <SkillInput skill_name='Intimidation' proficient={skills.intimidation} change_handler={change_handler} />
                    <SkillInput skill_name='Medicine' proficient={skills.medicine} change_handler={change_handler} />
                    <SkillInput skill_name='Perception' proficient={skills.perception} change_handler={change_handler} />
                    <SkillInput skill_name='Persuasion' proficient={skills.persuasion} change_handler={change_handler} />
                    <SkillInput skill_name='Sleight_of_hand' proficient={skills.sleight_of_hand} change_handler={change_handler} />
                    <SkillInput skill_name='Survival' proficient={skills.survival} change_handler={change_handler} />
                </div>
            </div>
        </div>
    )
}

export default SkillInputContainer;