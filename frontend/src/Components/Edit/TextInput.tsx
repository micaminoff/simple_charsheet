import React, { FormEvent } from 'react'

export interface Props {
    field_name: string;
    field_value: string;
    change_handler: (event: FormEvent) => void;
}

const TextInput = ({field_name, field_value = '', change_handler}: Props) => (
    <div className='field'>
        <label className='label'>{field_name}</label>
        <div className='control'>
            <input className='input' name={field_name} type='text' value={field_value} onChange={change_handler}></input>
        </div>
    </div>
);

export default TextInput;