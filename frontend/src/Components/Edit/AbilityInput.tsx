import React, { FormEvent } from 'react'
import { abilities } from '../../Types';

export interface Props {
    abilities: abilities;
    change_handler: (event: FormEvent) => void;
}

const AbilityInput = ({ abilities, change_handler }: Props) => (
    <div className='columns'>
        <div className='column'>
            <div className='field'>
                <label className='label'>Strength</label>
                <div className='control'>
                    <input className='input' name='abilities strength' type='number' value={abilities.strength} onChange={change_handler}></input>
                </div>
            </div>
            <div className='field'>
                <label className='label'>Dexterity</label>
                <div className='control'>
                    <input className='input' name='abilities dexterity' type='number' value={abilities.dexterity} onChange={change_handler}></input>
                </div>
            </div>
            <div className='field'>
                <label className='label'>Constitution</label>
                <div className='control'>
                    <input className='input' name='abilities constitution' type='number' value={abilities.constitution} onChange={change_handler}></input>
                </div>
            </div>
        </div>
        <div className='column'>
            <div className='field'>
                <label className='label'>Intelligence</label>
                <div className='control'>
                    <input className='input' name='abilities intelligence' type='number' value={abilities.intelligence} onChange={change_handler}></input>
                </div>
            </div>
            <div className='field'>
                <label className='label'>Wisdom</label>
                <div className='control'>
                    <input className='input' name='abilities wisdom' type='number' value={abilities.wisdom} onChange={change_handler}></input>
                </div>
            </div>
            <div className='field'>
                <label className='label'>Charisma</label>
                <div className='control'>
                    <input className='input' name='abilities charisma' type='number' value={abilities.charisma} onChange={change_handler}></input>
                </div>
            </div>
        </div>
    </div>
)

export default AbilityInput;