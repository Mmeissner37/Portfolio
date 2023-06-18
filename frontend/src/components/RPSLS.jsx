import Image from '../assets/RPSLS.png'
import '../pages/ProjectsPage/ProjectsPage.css';


const RPSLS = () => {

    return ( 
        <div className='OOP'>
            <a href="https://github.com/Mmeissner37/Rock-Paper-Scissor-Lizard-Spock">
                <img src={Image} height='175px' width='275px' alt='capstone teaser' />
            </a>
            <h3 className='proj-header'>Rock, Paper, Scissor, Lizard, Spock</h3>
            <div className='description'>
                <ul>Language: Python <br></br>
                Technology: Object-Oriented Programing </ul>
            </div>
        </div>
     );
}
 
export default RPSLS;