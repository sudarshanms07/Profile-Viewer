import { useState, useContext } from "react";
import { ProfileContext } from "../components/ProfileContext"; // Adjust the import path as necessary

const AdminPanel = () => {
  const { profiles, addProfile, deleteProfile } = useContext(ProfileContext);
  const [newProfile, setNewProfile] = useState({ name: "", description: "", location: "" });

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold">Admin Panel</h2>

      {/* Add Profile Form */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Name"
          className="border p-2 m-2"
          value={newProfile.name}
          onChange={(e) => setNewProfile({ ...newProfile, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="description"
          className="border p-2 m-2"
          value={newProfile.description}
          onChange={(e) => setNewProfile({ ...newProfile, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Location"
          className="border p-2 m-2"
          value={newProfile.location}
          onChange={(e) => setNewProfile({ ...newProfile, location: e.target.value })}
        />
        <button
          className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600"
          onClick={() => {
            addProfile(newProfile);
            setNewProfile({ name: "", description: "", location: "" });
          }}
        >
          Add Profile
        </button>
      </div>

      {/* List of Profiles with Delete Option */}
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id} className="border p-3 flex justify-between items-center">
            <span>{profile.name} - {profile.description} ({profile.location})</span>
            <button
              className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
              onClick={() => deleteProfile(profile.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
