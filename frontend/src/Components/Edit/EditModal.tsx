import React, { useState, SyntheticEvent, FormEvent } from 'react'
import { character } from '../../Types';
import TextInput from './TextInput';

export interface Props {
    modal_callback: () => void;
    character: character;
}

const EditModal = ({ modal_callback, character }: Props) => {
    const [name, set_name] = useState(character.name);
    const [dnd_class, set_class] = useState(character.dnd_class);
    const [race, set_race] = useState(character.race);
    const [background, set_background] = useState(character.background);
    const [alignment, set_alignment] = useState(character.alignment);

    const handle_text_change = (event: FormEvent) => {
        const target = event.target as HTMLInputElement;
        switch (target.name) {
            case 'Name':
                set_name(target.value);
                break;
            case 'Class':
                set_class(target.value);
                break;
            case 'Race':
                set_race(target.value);
                break;
            case 'Background':
                set_background(target.value);
                break;
            case 'Alignment':
                set_alignment(target.value);
                break;
        }
        console.log('Updated ' + target.name + '\nNew value: ' + target.value);
    }

    return (
        <div className='modal is-active'>
            <div className='modal-background' onClick={modal_callback}></div>
            <div className='modal-content'>
                <div className='box'>
                    <form className='edit_form'>
                        <TextInput field_name='Name' field_value={name} change_handler={handle_text_change}/>
                        <TextInput field_name='Race' field_value={race} change_handler={handle_text_change} />
                        <TextInput field_name='Class' field_value={dnd_class} change_handler={handle_text_change}/>
                        <TextInput field_name='Background' field_value={background} change_handler={handle_text_change}/>
                        <TextInput field_name='Alignment' field_value={alignment} change_handler={handle_text_change}/>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditModal;