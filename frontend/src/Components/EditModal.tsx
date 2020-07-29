import React from 'react'

export interface Props {
    modal_callback: () => void;
}

const EditModal = ({modal_callback}: Props) => (
    <div className='modal is-active'>
        <div className='modal-background' onClick={modal_callback}></div>
        <div className='modal-content'>
            <div className='box'>
                MODAL TEST!!!
            </div>
        </div>
    </div>
);

export default EditModal;