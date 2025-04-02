import { useState, useContext } from "react";
import { ProfileContext } from "../components/ProfileContext";
import ProfileCard from "../components/ProfileCard";

const Home = () => {
  const { profiles } = useContext(ProfileContext);
  const [search, setSearch] = useState("");

  const filteredProfiles = profiles.filter(
    (profile) =>
      profile.name.toLowerCase().includes(search.toLowerCase()) ||
      profile.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">All Profiles</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by name or location..."
        className="border p-2 w-full mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid grid-cols-3 gap-4">
        {filteredProfiles.length > 0 ? (
          filteredProfiles.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} />
          ))
        ) : (
          <p>No profiles found</p>
        )}
      </div>
    </div>
  );
};

export default Home;
