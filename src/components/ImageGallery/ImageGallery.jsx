import styles from './ImageGallery.module.css';

export default function ImageGallery({ images, onImageClick }) {
    return (
        <ul className={styles.galleryContainer}>
            {images.map((image) => (
                <li
                    className={styles.imageCard}
                    key={image.id}
                    onClick={() => onImageClick(image)}
                >
                    <img src={image.urls.small} alt={image.alt_description} />
                </li>
            ))}
        </ul>
    );
}
