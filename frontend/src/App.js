// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import AboutMePage from "./pages/AboutMePage/AboutMePage";
import ContactMePage from "./pages/ContactMePage/ContactMePage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
// import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/myjourney" element={<AboutMePage />} />
        <Route path="/contact" element={<ContactMePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
