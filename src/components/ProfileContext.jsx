import { createContext, useState } from "react";

export const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
  const [profiles, setProfiles] = useState([
    { 
        "id": 1, 
        "name": "Jethalal Champaklal Gada", 
        "description": "A funny and hardworking Gujarati businessman who owns Gada Electronics. He is always stuck in problems and scared of his Bapuji.", 
        "location": "Gokuldham Society, Mumbai", 
        "photo": "https://wallpaperaccess.com/full/5669862.jpg"
    },

    { 
        "id": 2, 
        "name": "Daya Jethalal Gada", 
        "description": "Jethalal’s cheerful wife, famous for her Garba and calling Jethalal as Tapu Ke Papa.",  
        "location": "Ahamadabad", 
        "photo": "https://tse4.mm.bing.net/th/id/OIP.SMd_d-H72ALEo4Uj5UidcQHaEK?rs=1&pid=ImgDetMain"
    },

    { 
        "id": 3, 
        "name": "Champaklal Gada", 
        "description": "Jethalal’s father, a strict yet loving old man, who always scolds Jethalal for his mistakes.", 
        "location": "Gujarat", 
        "photo": "https://i.ytimg.com/vi/0CZz62tk30o/hqdefault.jpg"
    },

    { 
        "id": 4, 
        "name": "Taarak Mehta", 
        "description": "The wise and intelligent writer, best friend of Jethalal, always helping him with problems.", 
        "location": "Nachiket Balgram Pune", 
        "photo": "https://origin-staticv2.sonyliv.com/landscape_thumb/tarak_ep3284_landscape_thumb.jpg"
    },

    { 
        "id": 5, 
        "name": "Tapu (Tipendra Gada)", 
        "description": "Jethalal’s naughty and intelligent son, leader of Tapu Sena.", 
        "location": "Gokuldham Society, Mumbai", 
        "photo": "https://tse1.explicit.bing.net/th/id/OIP.PTlxt46nkxW1vMZnP63rFAHaGS?rs=1&pid=ImgDetMain"
    },

    { 
        "id": 6, 
        "name": "Atmaram Tukaram Bhide", 
        "description": "The strict Secretary of Gokuldham Society, a tuition teacher, and often in trouble with Tapu Sena.", 
        "location": "Ratnagiri, Maharashtra", 
        "photo": "https://feeds.abplive.com/onecms/images/uploaded-images/2022/01/07/1a684e5548d376964d099d0076205c6b_original.jpg?impolicy=abp_cdn&imwidth=720"
    },

    { 
        "id": 7, 
        "name": "Madhavi Bhide", 
        "description": "Bhide’s hardworking wife, famous for making Achar-Papad (Pickles).", 
        "location": "Ratnagiri, Maharashtra", 
        "photo": "https://i.pinimg.com/originals/ff/63/60/ff63607ab7b379575e643a05ea9ac89c.jpg"
    },

    { 
        "id": 8, 
        "name": "Roshan Singh Sodhi", 
        "description": "The fun-loving Punjabi guy, owner of a garage, always full of energy, and loves parties!", 
        "location": "Amritsar, Punjab", 
        "photo": "https://tse4.mm.bing.net/th/id/OIP.5BvAMLXJ5jNv3piC36QnqQAAAA?rs=1&pid=ImgDetMain"
    },

    

    { 
        "id": 9, 
        "name": "Dr. Hansraj Hathi", 
        "description": "The food-loving doctor whose most famous dialogue is 'Sahi Baat Hai!'", 
        "location": "Patna, Bihar", 
        "photo": "https://th.bing.com/th/id/R.dd9c58cadea074ef2cc8730f200e93e5?rik=%2fSBBJWy6szVlEw&riu=http%3a%2f%2fphotogallery.indiatimes.com%2ftv%2fstars%2fkavi-kumar-azad%2fdr-hathi-of-taarak-mehta-ka-ooltah-chashmah-aka-kavi-kumar-azad-passes-away%2fphoto%2f64926662%2fDr-Hathi-of-Taarak-Mehta-Ka-Ooltah-Chashmah-aka-Kavi-Kumar-Azad-passes-away.jpg&ehk=hT8Kf6JNy3rBTBcSGh7Xw6ioFIGF5Mn8o0p0afjJGZI%3d&risl=&pid=ImgRaw&r=0"
    },

]
);

  // Function to add a new profile
  const addProfile = (newProfile) => {
    setProfiles([...profiles, { id: profiles.length + 1, ...newProfile }]);
  };

  // Function to delete a profile
  const deleteProfile = (id) => {
    setProfiles(profiles.filter((profile) => profile.id !== id));
  };

  return (
    <ProfileContext.Provider value={{ profiles, addProfile, deleteProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
