import Mewsic from "../assets/Mewsic-Library2.png";

const MewsicLibrary = () => {
    return ( 
        <div className='music-library'>
            <a href="https://github.com/Mmeissner37/Music_Library_React">
                <img src={Mewsic} height='175px' width='275px' alt='music library thumbnail' />
            </a>
            <h3>Mewsic Library</h3>
            <div className='description'>
            <ul>Languages: Python, JavaScript, CSS <br></br>
            Technologies: Django, DjangoRestFramework, RESTful APIs, React.js</ul>
            </div>
        </div>
     );
}
 
export default MewsicLibrary;