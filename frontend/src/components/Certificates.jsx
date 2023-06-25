import DCC from "../assets/DCC_Certificate.png";

const Certficates = () => {
  return (
    <div className="certicates">
      <div className="journey-header">
        <h2>Current Certificates</h2>
        <br></br>
      </div>
      <div className="image-link">
        <img src={DCC} height="200" width="275" alt="DCC Certficate" />
      </div>
    </div>
  );
};

export default Certficates;
