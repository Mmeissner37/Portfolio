import Pawrent from '../assets/PawrentHelper2.png'
import '../pages/ProjectsPage/ProjectsPage.css';

const PawrentHelper = () => {
    return ( 
        <div className='capstone'>
            <div className='image-link'>
            <a href="https://github.com/Mmeissner37/Capstone">
                <img src={Pawrent} height='275px' width='425px' alt='capstone teaser' />
            </a>
            </div>
            <h3 className='proj-header'>Pawrent Helper</h3>
            <div className='description'>
                <ul>
                A web application for pet owners to create pet profiles, keep tract of medications, and schedule appointments
                </ul>
            </div>
            <div className='description'>
                <ul> 
                Languages: Python, JavaScript, HTML, CSS <br></br>
                Technologies: JWT, RESTful APIs, React,js, Node, React-Router, Axios, MySQL, Django, DjangoRestFramework, FullCalender.io</ul>
            </div>
        </div>
     );
}
 
export default PawrentHelper;

/* <h3>Description: Web Application for pet owners to create pet profiles, track current medications, and schedule appointments with a vet clinic</h3>
                <h3>The associated vet clinic has access to the schedule and appointments, and can grant guest access to other veterinary professionals</h3> */
                