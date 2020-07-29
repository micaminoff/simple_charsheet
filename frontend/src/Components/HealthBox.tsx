import React from 'react'
import { hp, death_saves, hit_dice } from '../Types';

export interface Props {
    hp: hp;
    death_saves: death_saves;
    hit_dice: hit_dice;
}

const HealthBox = ({
        hp = {current: 0, max: 0 },
        hit_dice = {dice: '', max: 0, remaining: 0},
        death_saves = {successes: 0, failures: 0}
    }: Props) => (
    <div className='health_box box has-text-centered'>
        <p className='mb-1'>Health</p>
        <div className='health_part'>
            <p>Max hp: {hp.max}</p>
            <p contentEditable>Current hp: {hp.current}</p>
        </div>
        <div className='dice_part'>
            <p className='align-items-center'>Hit Dice: {hit_dice.dice}</p>
            <p>Remaining: <span contentEditable>{hit_dice.remaining}</span>/{hit_dice.max}</p>
        </div>
        <div className='death_part'>
            <p className='mb-1'>Death saves</p>
            <p>Successes: {death_saves.successes}</p>
            <p>Failures: {death_saves.failures}</p>
        </div>
    </div>
);

export default HealthBox;