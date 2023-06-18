import ImageDino from '../assets/RobotvsDinosaur.png'
import '../pages/ProjectsPage/ProjectsPage.css';


const RobotvsDinosaur = () => {
    return ( 
        <div>
            <a href="https://github.com/Mmeissner37/Robot-vs-Dinosaur">
                <img src={ImageDino} height='175px' width='275px' alt='capstone teaser' />
            </a>
            <h3>Robot Vs Dinosaur</h3>
            <div className='description'>
                <ul>Language: Python <br></br>
                Technology: Object-Oriented Programing</ul>
            </div>
        </div>
     );
}
 
export default RobotvsDinosaur;