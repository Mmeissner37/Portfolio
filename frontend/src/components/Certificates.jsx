import DCC from "../assets/DCC_Certificate.png";
import FCC from "../assets/FCC_ResponsiveWebDesign.png"

const Certficates = () => {
  return (
    <div className="certificates">
      <div className="journey-header">
        <h2>Current Certificates</h2>
        <br></br>
      </div>
      <div class="certfiicates">
        <div className="image-link">
          <img src={DCC} height="200" width="275" alt="DCC Certficate" />
        </div>
        <div className="image-link">
          <h4>*New 8/2023*</h4>
          <img src={FCC} height="200" width="275" alt="FCC Certficiate" />
        </div>
      </div>
    </div>
  );
};

export default Certficates;
