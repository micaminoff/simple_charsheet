import React from 'react';
import SkillBox from './SkillBox';
import { abilities, proficiencies } from '../Types';

interface Props {
    proficiencies: proficiencies
    abilities: abilities,
    proficiency_bonus: number
};

const Skills = ({ proficiencies, abilities, proficiency_bonus = 3 }: Props) => (
    <div className='box has-text-centered'>
        Saving throws
        <div className='saving_throws columns'>
            <div className='column'>
                <SkillBox skill='STR' proficient={proficiencies.str} ability={abilities.str} bonus={proficiency_bonus} />
                <SkillBox skill='DEX' proficient={proficiencies.dex} ability={abilities.dex} bonus={proficiency_bonus} />
                <SkillBox skill='CON' proficient={proficiencies.con} ability={abilities.con} bonus={proficiency_bonus} />
            </div>
            <div className='column'>
                <SkillBox skill='INT' proficient={proficiencies.int} ability={abilities.int} bonus={proficiency_bonus} />
                <SkillBox skill='WIS' proficient={proficiencies.wis} ability={abilities.wis} bonus={proficiency_bonus} />
                <SkillBox skill='CHA' proficient={proficiencies.cha} ability={abilities.cha} bonus={proficiency_bonus} />
            </div>
        </div>
        Skills
        <SkillBox skill='Acrobatics' proficient={proficiencies.acrobatics} ability={abilities.dex} bonus={proficiency_bonus} />
        <SkillBox skill='Animal Handling' proficient={proficiencies.animal_handling} ability={abilities.wis} bonus={proficiency_bonus} />
        <SkillBox skill='Arcana' proficient={proficiencies.arcana} ability={abilities.int} bonus={proficiency_bonus} />
        <SkillBox skill='Athletics' proficient={proficiencies.athletics} ability={abilities.str} bonus={proficiency_bonus} />
        <SkillBox skill='Deception' proficient={proficiencies.deception} ability={abilities.cha} bonus={proficiency_bonus} />
        <SkillBox skill='History' proficient={proficiencies.history} ability={abilities.int} bonus={proficiency_bonus} />
        <SkillBox skill='Insight' proficient={proficiencies.insight} ability={abilities.wis} bonus={proficiency_bonus} />
        <SkillBox skill='Intimidation' proficient={proficiencies.intimidation} ability={abilities.cha} bonus={proficiency_bonus} />
        <SkillBox skill='Investigation' proficient={proficiencies.investigation} ability={abilities.int} bonus={proficiency_bonus} />
        <SkillBox skill='Medicine' proficient={proficiencies.medicine} ability={abilities.wis} bonus={proficiency_bonus} />
        <SkillBox skill='Nature' proficient={proficiencies.nature} ability={abilities.int} bonus={proficiency_bonus} />
        <SkillBox skill='Perception' proficient={proficiencies.perception} ability={abilities.wis} bonus={proficiency_bonus} />
        <SkillBox skill='Performance' proficient={proficiencies.acrobatics} ability={abilities.cha} bonus={proficiency_bonus} />
        <SkillBox skill='Persuasion' proficient={proficiencies.performance} ability={abilities.cha} bonus={proficiency_bonus} />
        <SkillBox skill='Religion' proficient={proficiencies.religion} ability={abilities.int} bonus={proficiency_bonus} />
        <SkillBox skill='Sleight of Hand' proficient={proficiencies.sleight_of_hand} ability={abilities.dex} bonus={proficiency_bonus} />
        <SkillBox skill='Stealth' proficient={proficiencies.stealth} ability={abilities.dex} bonus={proficiency_bonus} />
        <SkillBox skill='Survival' proficient={proficiencies.survival} ability={abilities.wis} bonus={proficiency_bonus} />
        <nav className='level mt-2'>
            <span className='tag'>Not Proficient</span>
            <span className='tag is-warning'>Proficient</span>
            <span className='tag is-danger'>Expert</span>
        </nav>
    </div>
);

export default Skills;