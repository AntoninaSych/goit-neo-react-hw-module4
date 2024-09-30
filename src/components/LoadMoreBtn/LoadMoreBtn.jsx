import styles from './LoadMoreBtn.module.css';

export default function LoadMoreBtn({ onClick }) {
    return (
        <div className={styles.loadMoreButtonContainer}>
            <button className={styles.loadMoreButton} onClick={onClick}>
                Load More
            </button>
        </div>
    );
}
