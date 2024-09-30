import { useState } from 'react';
import { toast } from 'react-hot-toast';
import styles from './SearchBar.module.css'; // Импорт стилей

export default function SearchBar({ onSubmit }) {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim() === '') {
            toast.error('Enter text  for search');
            return;
        }
        onSubmit(query);
        setQuery('');
    };

    return (
        <div className={styles.searchContainer}>
            <form onSubmit={handleSubmit} className={styles.searchForm}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search images and photos"
                    className={styles.searchInput}
                />
                <button type="submit" className={styles.searchButton}>
                    Search
                </button>
            </form>
        </div>
    );
}
