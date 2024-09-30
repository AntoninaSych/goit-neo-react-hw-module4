import ReactModal from 'react-modal';
import { useEffect } from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io"; // Импортируем иконку
import styles from './ImageModal.module.css';

export default function ImageModal({ isOpen, onClose, image }) {
    useEffect(() => {
        ReactModal.setAppElement('#root');
    }, []);

    if (!image) return null;

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onClose}
            className={styles.modalContent}
            overlayClassName={styles.modalOverlay}
        >
            <img src={image.urls.regular} alt={image.alt_description} className={styles.modalImage} />
            <button onClick={onClose} className={styles.closeButton}>
                <IoIosCloseCircleOutline size={40} color="white" />
            </button>
        </ReactModal>
    );
}
