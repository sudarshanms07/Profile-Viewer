import React, { useState } from "react";

const MapPage = ({ location }) => {
    const [loading, setLoading] = useState(true);

    return (
        <div className="map-container">
            {/* Show Loader when loading */}
            {loading && (
                <div className="loader">
                    Loading Map...
                    <div className="spinner"></div>
                </div>
            )}

            {/* Google Map Iframe */}
            <iframe
                title="Google Maps"
                width="100%"
                height="400"
                src={`https://www.google.com/maps?q=${encodeURIComponent(location)}&output=embed`}
                allowFullScreen
                onLoad={() => setLoading(false)} // Hide loader when map loads
                style={{ display: loading ? "none" : "block" }} // Hide iframe until loaded
            ></iframe>
        </div>
    );
};

export default MapPage;
