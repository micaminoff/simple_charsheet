import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldAlt, faBolt, faRunning } from '@fortawesome/free-solid-svg-icons';

export interface Props {
    ac: number;
    initiative: number;
    speed: number;
}

const CombatStats = ({ ac = 15, initiative = 0, speed = 30 }) => (
    <div className='box has-text-centered combat_stats'>
        Combat Stats
        <nav className='level'>
            <div className='level-item' title='Armor Class'>
                <FontAwesomeIcon icon={faShieldAlt} size='2x' /> {ac}
            </div>
            <div className='level-item' title='Initiative'>
                <FontAwesomeIcon icon={faBolt} size='2x' /> {initiative}
            </div>
            <div className='level-item' title='Speed'>
                <FontAwesomeIcon icon={faRunning} size='2x' /> {speed}
            </div>
        </nav>
    </div>
);

export default CombatStats;