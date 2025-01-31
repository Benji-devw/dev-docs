import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Modal } from "./components/modal/Modal";

function App() {
    const [isOpen, setIsopen] = useState(false);
    const closeModal = () => {
        setIsopen(false);
    };
    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div>
                <div className="flex align-middle justify-center">
                    <button className="open-modal-btn" onClick={() => setIsopen(true)}>
                        Open Middle Modal
                    </button>
                    {isOpen && (
                        <Modal onClose={closeModal} position="right">
                            <h1>Middle Modal</h1>
                            <p>Middle Modal content</p>
                        </Modal>
                    )}
                </div>
            </div>
        </>
    );
}

export default App;
