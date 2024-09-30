import styles from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

export default function ImageGallery({ images, onImageClick }) {
    return (
        <ul className={styles.galleryContainer}>
            {images.map((image) => (
                <li
                    className={styles.imageCard}
                    key={image.id}
                >
                    <ImageCard image={image} onClick={onImageClick} />
                </li>
            ))}
        </ul>
    );
}
