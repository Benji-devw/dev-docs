# React + TypeScript + Vite
## Package link
- [https://www.npmjs.com/](#https://www.npmjs.com/package/@benji-devw/dev-docs?activeTab=readme) ...@benji-devw/dev-docs
- [https://github.com/](#https://github.com/Benji-devw/dev-docs/pkgs/npm/dev-docs) ...pkgs/npm/dev-docs

# Basic exemples

```js
export const Index = () => {
    const [openModal, setOpenModal] = useState(false);
    const closeModal = () => {
        setOpenModal(false);
    };
    return (
        <>
            {openModal && (
                <Modal onClose={closeModal} className="modal" position="center">
                    <h1>Title</h1>
                    <p>Content</p>
                </Modal>
            )}
            <button onClick={() => setOpenModal(true)}>Open Modal</button>
        </>
    );
};
```

