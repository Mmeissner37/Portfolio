import "./ProjectsPage.css";

import MewsicLibrary from "../../components/MewsicLibrary";
import PawrentHelper from "../../components/PawrentHelper";
import YouTubeClone from "../../components/YouTubeClone";
import RPSLS from "../../components/RPSLS";
import RobotvsDinosaur from "../../components/RobotvsDinosaur";
import FrostedWhiskers from "../../components/FrostedWhiskers";
import Snowflakes from "../../components/Snowflakes";


const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <div>
        <Snowflakes />
      </div>
      <div className="container">
        <div className="header">
          <h1>My Projects</h1>
        </div>
        <div className="grid-container">
          <div className="grid-item">
              <FrostedWhiskers />
          </div>
          <div className="grid-item">
            <PawrentHelper />
          </div>
          <div className="grid-item">
            <MewsicLibrary />
          </div>
          <div className="grid-item">
            <YouTubeClone />
          </div>
          <div className="grid-item">
            <RPSLS />
          </div>
          <div className="grid-item">
            <RobotvsDinosaur />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
