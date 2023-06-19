import Mewsic from "../assets/Mewsic-Library2.png";

const MewsicLibrary = () => {
  return (
    <div className="music-library">
      <a href="https://github.com/Mmeissner37/Music_Library_React">
        <img
          src={Mewsic}
          height='275px' width='425px'
          alt="music library thumbnail"
        />
      </a>
      <h3 className="proj-header">Mewsic Library</h3>
      <div className="description">
        <ul>
          Languages: Python, JavaScript, CSS <br></br>
          Technologies: Django, DjangoRestFramework, RESTful APIs, React.js
        </ul>
      </div>
    </div>
  );
};

export default MewsicLibrary;
