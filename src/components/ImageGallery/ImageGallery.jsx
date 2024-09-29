import styles from './ImageGallery.module.css';

export default function ImageGallery({ images, onImageClick }) {
    return (
        <div className={styles.galleryContainer}>
            {images.map((image) => (
                <div
                    className={styles.imageCard}
                    key={image.id}
                    onClick={() => onImageClick(image)}
                >
                    <img src={image.urls.small} alt={image.alt_description} />
                </div>
            ))}
        </div>
    );
}
