import DCC from "../assets/DCC_Certificate.png";
import FCC from "../assets/FCC_ResponsiveWebDesign.png"

const Certficates = () => {
  return (
    <div>
      <div className="journey-header">
        <h2>Current Certificates</h2>
        <br></br>
      </div>
      <div className="certificates">
        <div className="image-link">
          <img src={DCC} height="200" width="275" alt="DCC Certficate" />
        </div>
        <div className="image-link">
          <img src={FCC} height="200" width="275" alt="FCC Certficiate" />
        </div>
        </div>
    </div>
  );
};

export default Certficates;
