import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProfileDetails = ({ profiles }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const profile = profiles.find(p => p.id === parseInt(id));

    if (!profile) {
        return <h2>Profile not found!</h2>;
    }

    return (
        <div className="profile-details">
            <img src={profile.photo} alt={profile.name} className="profile-pic" />
            <h1>{profile.name}</h1>
            <p>{profile.description}</p>
            <p><strong>Location:</strong> {profile.location}</p>
            <button onClick={() => navigate(`/map/${encodeURIComponent(profile.location)}`)}>View on Map</button>
        </div>
    );
};

export default ProfileDetails;
