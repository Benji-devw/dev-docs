import React, { useEffect, useRef } from 'react';
import styled from "styled-components";

type ModalProps = {
    children: React.ReactNode;
    className?: string;
    onClose?: () => void;
};

const StyledModal = styled.div<ModalProps>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    .modal {
        background-color: #fff;
        border-radius: 5px;
        padding: 20px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        width: 90%;
        max-width: 40rem;
    }
    .modal-header {
        display: flex;
        justify-content: flex-end;
    }
    .modal-content {
        margin-top: 1rem;
    }
`;

const Modal: React.FC<ModalProps> = ({ children, className, onClose }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = React.useCallback(
        (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                if (onClose) {
                    onClose();
                }
            }
        },
        [onClose]
    );

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handleClickOutside]);

    return (
        <StyledModal>
            <div className={`modal-warpper`}>
                <div ref={modalRef} className='modal'>
                    <div className="modal-header">
                        <button className="close-modal-button" onClick={onClose}>
                            X
                        </button>
                    </div>
                    <div className={`modal-content ${className}`}>{children}</div>
                </div>
            </div>
        </StyledModal>
    );
};

export default Modal;
