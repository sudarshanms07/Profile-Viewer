import { useNavigate } from "react-router-dom";

const ProfileCard = ({ profile }) => {
  const navigate = useNavigate();

  return (
    <div className="border p-4 rounded-lg shadow-md" >
      <img src={profile.photo} alt={profile.name} className="w-24 h-24 rounded-full mx-auto" />
      <h3 className="text-lg font-bold mt-2">{profile.name}</h3>
      <p className="text-sm text-gray-600">{profile.description}</p>
      <p>{profile.location}</p>
      <button 
        className="mt-2 bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600"
        onClick={() => navigate(`/summary/${encodeURIComponent(profile.location)}`)}
      >
        Map-Locate
      </button>
    </div>
  );
};

export default ProfileCard;
