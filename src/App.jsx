import { useState, useEffect } from 'react';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';

export default function App() {
    const [images, setImages] = useState([]);
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [selectedImage, setSelectedImage] = useState(null);

    const ACCESS_KEY = 'Nc-c9u0iy2teHWrlIEPu4AGvr35pFDYcXSrK55Fhmxc';

    const fetchImages = async (newQuery, newPage = 1) => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get(
                `https://api.unsplash.com/search/photos`,
                {
                    params: {
                        query: newQuery,
                        page: newPage,
                        per_page: 12,
                    },
                    headers: {
                        Authorization: `Client-ID ${ACCESS_KEY}`,
                    },
                }
            );

            if (newPage === 1) {
                setImages(response.data.results);
            } else {
                setImages((prevImages) => [...prevImages, ...response.data.results]);
            }
            setTotalPages(response.data.total_pages);
        } catch (err) {
            setError('Request failed with status code ' + err.response.status);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (newQuery) => {
        setQuery(newQuery);
        setPage(1);
        fetchImages(newQuery, 1);
    };

    const loadMore = () => {
        if (page < totalPages) {
            const newPage = page + 1;
            setPage(newPage);
            fetchImages(query, newPage);
        }
    };

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    return (
        <div>
            <Toaster position="top-right" reverseOrder={false} />
            <SearchBar onSubmit={handleSearch} />
            {error && <ErrorMessage message={error} />}
            {images.length > 0 && (
                <ImageGallery images={images} onImageClick={handleImageClick} />
            )}
            {loading && <Loader />}
            {images.length > 0 && !loading && page < totalPages && (
                <LoadMoreBtn onClick={loadMore} />
            )}
            {selectedImage && (
                <ImageModal
                    isOpen={!!selectedImage}
                    image={selectedImage}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
}
