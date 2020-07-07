import React from 'react'

export interface AttrProps {
    attr: string;
}

const AttributeBox = ({attr}: AttrProps) => (
    <div className='attribute_box level-item has-text-centered'>
        {attr}
    </div>
);

export default AttributeBox;