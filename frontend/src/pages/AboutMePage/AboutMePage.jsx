import "./AboutMePage.css";
import AboutMeGrid from "../../components/AboutMeGrid.jsx";
import Journey from "../../components/Journey";

const AboutMePage = () => {
  return (
    <div className="aboutme-page">
      <Journey />
      <div className="aboutme-grid">
        <AboutMeGrid />
      </div>
      <br></br>
    </div>
  );
};

export default AboutMePage;
