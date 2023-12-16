import "./AboutMePage.css";
import AboutMeGrid from "../../components/AboutMeGrid.jsx";
import Snowflakes from "../../components/Snowflakes.jsx";


const AboutMePage = () => {
  return (
    <div className="aboutme-page">
      <div>
        <Snowflakes />
      </div>
      <div className="quote">
        <p><i> However difficult life may seem, there is always something you can do, and succeed at.</i></p>
        <p><i>It matters that you don't just give up.</i></p>
        <p>~ Stephen Hawking</p>
      </div>
    </div>
  );
};

export default AboutMePage;
