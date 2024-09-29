import { Rings } from 'react-loader-spinner';

export default function Loader() {
    return (
        <div className="loader">
            <Rings
                height="80"
                width="80"
                color="#00BFFF"
                ariaLabel="loading"
            />
        </div>
    );
}
