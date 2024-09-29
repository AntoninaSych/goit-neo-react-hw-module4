import { useState } from 'react';
import styles from './SearchBar.module.css'; // Import the styles

export default function SearchBar({ onSubmit }) {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim() === '') {
            alert('Please enter a search term');
            return;
        }
        onSubmit(query);
        setQuery(''); // Clear the search bar after submit
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
