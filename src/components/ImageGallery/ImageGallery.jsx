import ImageCard from '../ImageCard/ImageCard';
import styles from './ImageGallery.module.css'; // Импорт стилей

export default function ImageGallery({ images, onImageClick }) {
    return (
        <div className={styles.galleryContainer}>
            {images.map((image) => (
                <div
                    className={styles.imageCard}
                    key={image.id}
                    onClick={() => onImageClick(image)} // Обработка клика на изображение
                >
                    <ImageCard image={image} />
                </div>
            ))}
        </div>
    );
}
