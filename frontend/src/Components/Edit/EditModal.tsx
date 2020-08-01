import React, { useState, FormEvent } from 'react'
import { character } from '../../Types';
import TextInput from './TextInput';
import NumberInput from './NumberInput';
import AbilityInput from './AbilityInput';
import SkillInputContainer from './SkillInputContainer';

export interface Props {
    modal_callback: () => void;
    handle_submit: (event: FormEvent, character: character) => void;
    character: character;
}

const EditModal = ({ modal_callback, character, handle_submit }: Props) => {
    const [tentative_character, set_tentative] = useState(character);

    const handle_change = (event: FormEvent) => {
        let value: string | number;
        // Typecast to get access to attributes
        const target = event.target as HTMLInputElement;

        // If target has type number, enforce number type in tentative_character
        value = target.type === 'number' ? parseFloat(target.value) : target.value;

        // If the targeted attribute is not nested, a simple [] access is enough
        set_tentative({ ...tentative_character, [target.name]: value });
        console.log('Updated ' + target.name + '\nNew value: ' + value);
    }

    const handle_ability_change = (event: FormEvent) => {
        let abilities = tentative_character.abilities;
        const target = event.target as HTMLInputElement;
        let value = parseFloat(target.value);

        let [unimportant_variable, ability] = target.name.split(' ');
        // Update tentative abilities
        abilities = { ...abilities, [ability]: value };
        // Update tentative character with tentative abilities
        set_tentative({ ...tentative_character, abilities: abilities });
        console.log('Updated nested attribute ' + target.name + '\nNew value: ' + value)
    }

    const handle_skills_change = (name: string, new_val: number) => {
        let skills = tentative_character.skills;

        // Update tentative abilities
        skills = { ...skills, [name]: new_val };
        // Update tentative character with tentative abilities
        set_tentative({ ...tentative_character, skills: skills });
        console.log('Updated nested attribute ' + name + '\nNew value: ' + new_val)
    }

    return (
        <div className='modal is-active'>
            <div className='modal-background' onClick={modal_callback}></div>
            <div className='modal-content'>
                <div className='box'>
                    <form className='edit_form'>
                        <div className='box'>
                            <p className='has-text-centered mb-2'>Basic Info</p>
                            <TextInput field_name='Name' field_value={tentative_character.name} change_handler={handle_change} />
                            <TextInput field_name='Race' field_value={tentative_character.race} change_handler={handle_change} />
                            <TextInput field_name='Class' field_value={tentative_character.dnd_class} change_handler={handle_change} />
                            <TextInput field_name='Background' field_value={tentative_character.background} change_handler={handle_change} />
                            <TextInput field_name='Alignment' field_value={tentative_character.alignment} change_handler={handle_change} />
                            <div className='columns'>
                                <div className='column'>
                                    <NumberInput field_name='Level' field_value={tentative_character.level} change_handler={handle_change} />
                                    <NumberInput field_name='Initiative' field_value={tentative_character.initiative} change_handler={handle_change} />
                                    <NumberInput field_name='Proficiency_Bonus' field_value={tentative_character.proficiency_bonus} change_handler={handle_change} />
                                    <NumberInput field_name='Age' field_value={tentative_character.age} change_handler={handle_change} />
                                </div>
                                <div className='column'>
                                    <NumberInput field_name='XP' field_value={tentative_character.xp} change_handler={handle_change} />
                                    <NumberInput field_name='Inspiration' field_value={tentative_character.inspiration} change_handler={handle_change} />
                                    <NumberInput field_name='Speed' field_value={tentative_character.speed} change_handler={handle_change} />
                                    <TextInput field_name='Size' field_value={tentative_character.size} change_handler={handle_change} />
                                </div>
                            </div>

                        </div>
                        <div className='box'>
                            <p className='has-text-centered mb-2'>Ability scores</p>
                            <AbilityInput abilities={tentative_character.abilities} change_handler={handle_ability_change} />
                        </div>
                        <div className='box'>
                            <p className='has-text-centered'>Proficiencies</p>
                            <p className='has-text-centered mb-2'>Click the proficiency to change the level of proficiency</p>
                            <SkillInputContainer skills={tentative_character.skills} change_handler={handle_skills_change} />
                        </div>
                        <div className="field is-grouped">
                            <div className="control">
                                <button className="button is-primary" onClick={(event) => handle_submit(event, tentative_character)}>Submit</button>
                            </div>
                            <div className="control">
                                <button className="button is-link is-danger" onClick={modal_callback}>Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    );
}

export default EditModal;