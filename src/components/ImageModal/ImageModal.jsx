import ReactModal from 'react-modal';
import { useEffect } from 'react';

export default function ImageModal({ isOpen, onClose, image }) {
    useEffect(() => {
        ReactModal.setAppElement('#root');
    }, []);

    if (!image) return null;

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onClose}
            style={{
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    width: '80%',
                    maxWidth: '600px',
                },
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.75)',
                },
            }}
        >
            <img src={image.urls.regular} alt={image.alt_description} style={{ width: '100%', borderRadius: '8px' }} />
            <button onClick={onClose} style={{ marginTop: '10px', padding: '10px 20px', background: '#3f51b5', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                Close
            </button>
        </ReactModal>
    );
}
