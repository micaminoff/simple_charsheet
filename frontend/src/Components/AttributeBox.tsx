import React from 'react'

export interface Props {
    attr: string;
}

const AttributeBox = ({attr}: Props) => (
    <div className='attribute_box level-item has-text-centered'>
        {attr}
    </div>
);

export default AttributeBox;