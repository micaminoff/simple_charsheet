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
                    <input className='input' name='abilities str' type='number' value={abilities.str} onChange={change_handler}></input>
                </div>
            </div>
            <div className='field'>
                <label className='label'>Dexterity</label>
                <div className='control'>
                    <input className='input' name='abilities dex' type='number' value={abilities.dex} onChange={change_handler}></input>
                </div>
            </div>
            <div className='field'>
                <label className='label'>Constitution</label>
                <div className='control'>
                    <input className='input' name='abilities con' type='number' value={abilities.con} onChange={change_handler}></input>
                </div>
            </div>
        </div>
        <div className='column'>
            <div className='field'>
                <label className='label'>Intelligence</label>
                <div className='control'>
                    <input className='input' name='abilities int' type='number' value={abilities.int} onChange={change_handler}></input>
                </div>
            </div>
            <div className='field'>
                <label className='label'>Wisdom</label>
                <div className='control'>
                    <input className='input' name='abilities wis' type='number' value={abilities.wis} onChange={change_handler}></input>
                </div>
            </div>
            <div className='field'>
                <label className='label'>Charisma</label>
                <div className='control'>
                    <input className='input' name='abilities cha' type='number' value={abilities.cha} onChange={change_handler}></input>
                </div>
            </div>
        </div>
    </div>
)

export default AbilityInput;