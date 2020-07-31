import React, { useState, FormEvent, useEffect } from 'react'
import { character } from '../../Types';
import TextInput from './TextInput';
import NumberInput from './NumberInput';
import AbilityInput from './AbilityInput';

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

        // If target has type number, enforce number type in tentative_cahracter
        value = target.type === 'number' ? parseFloat(target.value) : target.value;

        // If nested attribute, do some extra work
        if (target.name.includes('abilities')) {
            // Grab current tentative abilities
            let abilities = tentative_character.abilities;
            // Find the ability we're targeting
            let [unimporatnt_variable, ability] = target.name.split(' ');
            // Update tentative abilities
            abilities = { ...abilities, [ability]: value };
            // Update tentative character with tentative abilities
            set_tentative({ ...tentative_character, abilities: abilities });
            console.log('Updated nested attribute ' + target.name + '\nNew value: ' + value)
        } else {
            // If the targeted attribute is not nested, a simple [] access is enough
            set_tentative({ ...tentative_character, [target.name]: value });
            console.log('Updated ' + target.name + '\nNew value: ' + value);
        }
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
                                </div>
                                <div className='column'>
                                    <NumberInput field_name='XP' field_value={tentative_character.xp} change_handler={handle_change} />
                                </div>
                            </div>
                            <div className='columns'>
                                <div className='column'>
                                    <NumberInput field_name='Initiative' field_value={tentative_character.initiative} change_handler={handle_change} />
                                </div>
                                <div className='column'>
                                    <NumberInput field_name='Inspiration' field_value={tentative_character.inspiration} change_handler={handle_change} />
                                </div>
                            </div>
                            <div className='columns'>
                                <div className='column'>
                                    <NumberInput field_name='Age' field_value={tentative_character.age} change_handler={handle_change} />
                                </div>
                                <div className='column'>
                                    <NumberInput field_name='Speed' field_value={tentative_character.speed} change_handler={handle_change} />
                                </div>
                            </div>
                        </div>
                        <div className='box'>
                            <p className='has-text-centered mb-2'>Ability scores</p>
                            <AbilityInput abilities={tentative_character.abilities} change_handler={handle_change} />
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
            </div>
        </div>
    );
}

export default EditModal;