import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons';


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
                <div className='level-right button edit_icon is-primary'>
                    <span className='icon' onClick={modal_callback}>
                        <FontAwesomeIcon icon={faPen} size='lg' className='edit_iicon' />
                    </span>

                </div>
            </nav>
        </div>
    </section>
);

export default Header;