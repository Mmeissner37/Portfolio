import DCC from "../assets/DCC_Certificate.png";
import FCC from "../assets/FCC_ResponsiveWebDesign.png";
import UIUX from '../assets/UI-UX-Design.jpg';

const Certficates = () => {
  return (
    <div>
      <div className="journey-header">
        <h2>Current Certificates</h2>
      </div>
      <div className="certificates">
        <div className="image-link">
          <img src={DCC} height="200" width="275" alt="Full Stack Developer Certficate" />
        </div>
        <div className="image-link">
          <img src={FCC} height="200" width="275" alt="Responsive Web Design Certficiate" />
        </div>
        <div className="image-link">
          <img src={UIUX} height="200" width="275" alt="UI UX Design Certificiate" />
        </div>
        </div>
    </div>
  );
};

export default Certficates;
