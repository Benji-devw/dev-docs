import React, { useEffect, useRef } from "react";
import styled from "styled-components";

type ModalProps = {
    children: React.ReactNode;
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
        .modal-init {
            height: 50%;
            width: 70%;
        }
    }
    &.right {
        justify-content: flex-end;
        align-items: flex-start;
    }
    &.left {
        justify-content: flex-start;
        align-items: flex-start;
    }
    .modal-init {
        background-color: #fff;
        border-radius: 5px;
        padding: 20px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        width: 90%;
        max-width: 40rem;
        height: 100%;
        width: 30%;
        max-width: none;
    }
    .modal-init.right,
    .modal-init.left {
    }
    .modal-header {
        display: flex;
        justify-content: flex-end;
    }
    .modal-content {
        margin-top: 1rem;
    }
    .close-modal-button {
        background: transparent;
        border: none;
        cursor: pointer;
        font-size: 1.5rem;
    }
`;

/**
 * Modal component that renders a modal dialog.
 *
 * @param {ModalProps} props - The properties for the Modal component.
 * @param {React.ReactNode} props.children - The content to be displayed inside the modal.
 * @param {string} [props.customstyles] - Additional class names to apply to the modal.
 * @param {string} [props.position="center"] - The position of the modal (e.g., "center", "top", "bottom").
 * @param {() => void} [props.onClose] - Callback function to be called when the modal is closed.
 */
export const Modal: React.FC<ModalProps> = ({ children, position, onClose }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = React.useCallback(
        (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                if (onClose) onClose();
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
        <StyledModal className={`${position}`}>
            <div ref={modalRef} className={`modal-init`}>
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
