import ImageDino from '../assets/RobotvsDinosaur.png'
import '../pages/ProjectsPage/ProjectsPage.css';


const RobotvsDinosaur = () => {
    return ( 
        <div>
            <a href="https://github.com/Mmeissner37/Robot-vs-Dinosaur">
                <img src={ImageDino} height='275px' width='425px' alt='capstone teaser' />
            </a>
            <h3 className='proj-header'>Robot Vs Dinosaur</h3>
            <div className='description'>
                Interactive Python game where a Robot and Dinosaur fight to the death!
            </div>
            <div className='description'>
                Language: Python <br></br>
                Technology: Object-Oriented Programing
            </div>
        </div>
     );
}
 
export default RobotvsDinosaur;