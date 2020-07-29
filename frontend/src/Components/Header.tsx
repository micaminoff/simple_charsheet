import React from 'react';

export interface Props {
    name: string;
    level: number;
    race: string;
    dnd_class: string;
    modal_callback: () => void;
}

const Header = ({ name = '', level = 0, race = '', dnd_class = '', modal_callback }: Props) => (
    <section className='hero is-dark'>
        <div className='hero-body'>
            <nav className='level'>
                <div className='level-left container level-item hero-info'>
                    <h1 className='title'>{name}, 
                        <span className='subtitle'> Level {level} {race} {dnd_class} </span>
                    </h1>
                </div>
                <div className='level-right button is-success' onClick={modal_callback}>
                    Edit
            </div>
            </nav>
        </div>
    </section>
);

export default Header;