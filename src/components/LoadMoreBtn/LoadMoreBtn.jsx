import styles from './LoadMoreBtn.module.css';

export default function LoadMoreBtn({ onClick }) {
    return (
        <div className={styles.loadMoreContainer}>
            <button type="button" onClick={onClick} className={styles.loadMoreButton}>
                Load more
            </button>
        </div>
    );
}
