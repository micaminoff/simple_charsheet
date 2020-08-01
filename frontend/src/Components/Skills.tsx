import React from 'react';
import SkillBox from './SkillBox';
import { abilities, skills } from '../Types';

interface Props {
    skills: skills;
    abilities: abilities;
    proficiency_bonus: number;
};

const Skills = ({ skills, abilities, proficiency_bonus = 3 }: Props) => (
    <div className='box has-text-centered'>
        Saving throws
        <div className='saving_throws columns'>
            <div className='column'>
                <SkillBox skill='STR' proficient={skills.strength} ability={abilities.strength} bonus={proficiency_bonus} />
                <SkillBox skill='DEX' proficient={skills.dexterity} ability={abilities.dexterity} bonus={proficiency_bonus} />
                <SkillBox skill='CON' proficient={skills.constitution} ability={abilities.constitution} bonus={proficiency_bonus} />
            </div>
            <div className='column'>
                <SkillBox skill='INT' proficient={skills.intelligence} ability={abilities.intelligence} bonus={proficiency_bonus} />
                <SkillBox skill='WIS' proficient={skills.wisdom} ability={abilities.wisdom} bonus={proficiency_bonus} />
                <SkillBox skill='CHA' proficient={skills.charisma} ability={abilities.charisma} bonus={proficiency_bonus} />
            </div>
        </div>
        Skills
        <SkillBox skill='Acrobatics' proficient={skills.acrobatics} ability={abilities.dexterity} bonus={proficiency_bonus} />
        <SkillBox skill='Animal Handling' proficient={skills.animal_handling} ability={abilities.wisdom} bonus={proficiency_bonus} />
        <SkillBox skill='Arcana' proficient={skills.arcana} ability={abilities.intelligence} bonus={proficiency_bonus} />
        <SkillBox skill='Athletics' proficient={skills.athletics} ability={abilities.strength} bonus={proficiency_bonus} />
        <SkillBox skill='Deception' proficient={skills.deception} ability={abilities.charisma} bonus={proficiency_bonus} />
        <SkillBox skill='History' proficient={skills.history} ability={abilities.intelligence} bonus={proficiency_bonus} />
        <SkillBox skill='Insight' proficient={skills.insight} ability={abilities.wisdom} bonus={proficiency_bonus} />
        <SkillBox skill='Intimidation' proficient={skills.intimidation} ability={abilities.charisma} bonus={proficiency_bonus} />
        <SkillBox skill='Investigation' proficient={skills.investigation} ability={abilities.intelligence} bonus={proficiency_bonus} />
        <SkillBox skill='Medicine' proficient={skills.medicine} ability={abilities.wisdom} bonus={proficiency_bonus} />
        <SkillBox skill='Nature' proficient={skills.nature} ability={abilities.intelligence} bonus={proficiency_bonus} />
        <SkillBox skill='Perception' proficient={skills.perception} ability={abilities.wisdom} bonus={proficiency_bonus} />
        <SkillBox skill='Performance' proficient={skills.acrobatics} ability={abilities.charisma} bonus={proficiency_bonus} />
        <SkillBox skill='Persuasion' proficient={skills.performance} ability={abilities.charisma} bonus={proficiency_bonus} />
        <SkillBox skill='Religion' proficient={skills.religion} ability={abilities.intelligence} bonus={proficiency_bonus} />
        <SkillBox skill='Sleight of Hand' proficient={skills.sleight_of_hand} ability={abilities.dexterity} bonus={proficiency_bonus} />
        <SkillBox skill='Stealth' proficient={skills.stealth} ability={abilities.dexterity} bonus={proficiency_bonus} />
        <SkillBox skill='Survival' proficient={skills.survival} ability={abilities.wisdom} bonus={proficiency_bonus} />
        <nav className='level mt-2'>
            <span className='tag'>Not Proficient</span>
            <span className='tag is-warning'>Proficient</span>
            <span className='tag is-danger'>Expert</span>
        </nav>
    </div>
);

export default Skills;