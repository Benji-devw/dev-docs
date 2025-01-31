# React + TypeScript + Vite
## Package link
- [https://www.npmjs.com/](#https://www.npmjs.com/package/@benji-devw/dev-docs?activeTab=readme) ...@benji-devw/dev-docs
- [https://github.com/](#https://github.com/Benji-devw/dev-docs/pkgs/npm/dev-docs) ...pkgs/npm/dev-docs

## Installation
```bash
npm install @benji-devw/dev-docs
```

## Import
```js
import { Modal } from '@benji-devw/dev-docs';
```

# Exemples
```js
import { Modal } from '@benji-devw/dev-docs';

export const Index = () => {
    const [openModal, setOpenModal] = useState(false);
    const closeModal = () => {
        setOpenModal(false);
    };
    return (
        <>
            {openModal && (
                // position: 'center' | 'left' | 'right'
                <Modal onClose={closeModal} position="center">
                    <h2>Title</h2>
                    <p>Content</p>
                </Modal>
            )}
            <button onClick={() => setOpenModal(true)}>Open Modal</button>
        </>
    );
};
```

## Todo
- [x] Améliorer la gestion du style