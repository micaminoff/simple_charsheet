import React, { FormEvent } from 'react'

export interface Props {
    field_name: string;
    field_value: number;
    change_handler: (event: FormEvent) => void;
}

const NumberInput = ({field_name, field_value = 0, change_handler}: Props) => (
    <div className='field'>
        <label className='label'>{field_name}</label>
        <div className='control'>
            <input className='input' name={field_name.toLowerCase()} type='number' value={field_value} onChange={change_handler}></input>
        </div>
    </div>
);

export default NumberInput;