import "./AboutMePage.css";
import AboutMeGrid from "../../components/AboutMeGrid.jsx";
import Certficates from "../../components/Certificates";
import Journey from "../../components/Journey";

const AboutMePage = () => {
  return (
    <div className="aboutme-page">
      <Journey />
      <div className="aboutme-grid">
        <AboutMeGrid />
      </div>
      <br></br>
      <div className="aboutme-container">
        <Certficates />
      </div>
    </div>
  );
};

export default AboutMePage;
