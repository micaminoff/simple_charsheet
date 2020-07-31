import React, { useState, FormEvent } from 'react'
import { character } from '../../Types';
import TextInput from './TextInput';
import NumberInput from './NumberInput';

export interface Props {
    modal_callback: () => void;
    character: character;
}

const EditModal = ({ modal_callback, character }: Props) => {
    const [tentative_character, set_tentative] = useState(character);

    const handle_change = (event: FormEvent) => {
        const target = event.target as HTMLInputElement;
        set_tentative({...tentative_character, [target.name]: target.value});
        console.log('Updated ' + target.name + '\nNew value: ' + target.value);
    }

    return (
        <div className='modal is-active'>
            <div className='modal-background' onClick={modal_callback}></div>
            <div className='modal-content'>
                <div className='box'>
                    <form className='edit_form'>
                        <TextInput field_name='Name' field_value={tentative_character.name} change_handler={handle_change} />
                        <TextInput field_name='Race' field_value={tentative_character.race} change_handler={handle_change} />
                        <TextInput field_name='Class' field_value={tentative_character.dnd_class} change_handler={handle_change} />
                        <TextInput field_name='Background' field_value={tentative_character.background} change_handler={handle_change} />
                        <TextInput field_name='Alignment' field_value={tentative_character.alignment} change_handler={handle_change} />
                        <NumberInput field_name='Level' field_value={tentative_character.level} change_handler={handle_change} />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditModal;