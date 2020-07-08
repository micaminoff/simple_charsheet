import React from 'react';

export interface Props {
    name: string;
    level: number;
    race: string;
    // silly protected words
    dnd_class: string;
}

const Header = ({ name, level, race, dnd_class }: Props) => (
    <section className='hero is-dark'>
        <div className='hero-body'>
            <div className='container'>
                <h1 className='title'>{name}</h1>
                <h2 className='subtitle'>Level {level} {race} {dnd_class} </h2>
            </div>
        </div>
    </section>
);

export default Header;