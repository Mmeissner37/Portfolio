import Image from "../assets/RPSLS.png";
import "../pages/ProjectsPage/ProjectsPage.css";

const RPSLS = () => {
  return (
    <div className="OOP">
      <a href="https://github.com/Mmeissner37/Rock-Paper-Scissor-Lizard-Spock">
        <img src={Image} height="275px" width="425px" alt="capstone teaser" />
      </a>
      <h3 className="proj-header">Rock, Paper, Scissor, Lizard, Spock</h3>
      <div className="description">
          Interactive Python that allows a user to play against another user or a computer in a rivoting game of The Big Bang's Version of Rock-Paper-Scissors
      </div>
      <div className="description">
          Language: Python <br></br>
          Technology: Object-Oriented Programing{" "}
      </div>
    </div>
  );
};

export default RPSLS;
