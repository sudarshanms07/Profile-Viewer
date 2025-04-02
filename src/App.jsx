import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AdminPanel from "./pages/AdminPanel";
// import ProfileDetail from "./pages/ProfileDetails";
import ProfileProvider from "../src/components/ProfileContext";
import Navbar from "./components/NavBar";
import Location from "./components/Location";
function App() {
  return (
    <ProfileProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminPanel />} />
          {/* <Route path="/profile/:id" element={<ProfileDetail />} /> */}
          <Route path="/summary/:location" element={<Location />} />
        </Routes>
      </Router>
    </ProfileProvider>
  );
}

export default App;
