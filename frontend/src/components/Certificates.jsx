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
        <div>
          <img src={DCC} className="thumbnail" height="200" width="275" alt="Full Stack Developer Certficate" />
        </div>
        <div>
          <img src={FCC} className="thumbnail" height="200" width="275" alt="Responsive Web Design Certficiate" />
        </div>
        <div>
          <img src={UIUX} className="thumbnail" height="200" width="275" alt="UI UX Design Certificiate" />
        </div>
        </div><br></br>
    </div>
  );
};

export default Certficates;
