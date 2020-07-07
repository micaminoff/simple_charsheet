import React from 'react';
import AttributeBox from './AttributeBox';

const AttributeRow = () => (
    <section className='section'>
        <nav className='level'>
            <AttributeBox attr='STR' />
            <AttributeBox attr='DEX' />
            <AttributeBox attr='CON' />
            <AttributeBox attr='INT' />
            <AttributeBox attr='WIS' />
            <AttributeBox attr='CHA' />
        </nav>
    </section>
);

export default AttributeRow;