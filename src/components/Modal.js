import React from 'react';

const Modal = props => {

    const closeModal = () => props.toggleModal(false, '', '');

    return (
        <div className="modal">
            <div className="modalBackground"></div>
            <div className="modal__box">
                <h1 className="modal__title">{props.title}</h1>
                <p className="modal__message">{props.message}</p>
                <button className="modal__button" onClick={closeModal}>close</button>
            </div>
        </div>
    )
}

export default Modal;