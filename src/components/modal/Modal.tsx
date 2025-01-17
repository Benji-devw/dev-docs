import React, { useEffect, useRef } from "react";
import styled from "styled-components";

type ModalProps = {
    children: React.ReactNode;
    className?: string;
    position?: "center" | "right" | "left";
    onClose?: () => void;
};

const StyledModal = styled.div<ModalProps>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;

    &.center {
        justify-content: center;
        align-items: center;
    }
    &.right {
        justify-content: flex-end;
        align-items: flex-start;
    }
    &.left {
        justify-content: flex-start;
        align-items: flex-start;
    }
    .modal {
        background-color: #fff;
        border-radius: 5px;
        padding: 20px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        width: 90%;
        max-width: 40rem;
    }
    .modal.right,
    .modal.left {
        height: 100%;
        max-width: none;
        width: 30%;
    }
    .modal-header {
        display: flex;
        justify-content: flex-end;
    }
    .modal-content {
        margin-top: 1rem;
    }
`;

export const Modal: React.FC<ModalProps> = ({ children, className, position = "center", onClose }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = React.useCallback(
        (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                if (onClose) {
                    onClose();
                }
            }
        },
        [onClose],
    );

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [handleClickOutside]);

    return (
        <StyledModal className={`${position} ${className}`}>
            <div ref={modalRef} className={`modal ${position}`}>
                <div className="modal-header">
                    <button className="close-modal-button" onClick={onClose}>
                        X
                    </button>
                </div>
                <div className="modal-content">{children}</div>
            </div>
        </StyledModal>
    );
};
