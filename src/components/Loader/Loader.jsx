import { Rings } from 'react-loader-spinner';

export default function Loader() {
    return (
        <div className="loader">
            <Rings
                height="180"
                width="180"
                color="#00BFFF"
                ariaLabel="loading"
            />
        </div>
    );
}
