import Pawrent from '../assets/PawrentHelper2.png'
import '../pages/ProjectsPage/ProjectsPage.css';

const PawrentHelper = () => {
    return ( 
        <div className='capstone'>
            <a href="https://github.com/Mmeissner37/Capstone">
                <img src={Pawrent} height='175px' width='275px' alt='capstone teaser' />
            </a>
            <h3>Pawrent Helper</h3>
            <div className='description'>
                <ul>Languages: Python, JavaScript, CSS <br></br>
                Technologies: Django, DjangoRestFramework, RESTful APIs, React,js</ul>
            </div>
        </div>
     );
}
 
export default PawrentHelper;

/* <h3>Description: Web Application for pet owners to create pet profiles, track current medications, and schedule appointments with a vet clinic</h3>
                <h3>The associated vet clinic has access to the schedule and appointments, and can grant guest access to other veterinary professionals</h3> */
                