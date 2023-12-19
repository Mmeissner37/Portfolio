import CatCafe from '../assets/FrostedWhiskers.png';
import '../pages/ProjectsPage/ProjectsPage.css';

const FrostedWhiskers = () => {
    return ( 
        <div className='catcafe'>
            <div className='image-link'>
                <a href="https://frostedwhiskerscafe.vercel.app/">
                    <img src={CatCafe} height='275px' width='425px' alt='Frosted Whiskers Cat Cafe' />
                </a>
            </div>
            <h3 className='proj-header'>Frosted Whiskers Cat Cafe</h3>
            <div className='description'>
                A custom-made website displaying a local cat cafe for Winchester, VA.
            </div>
            <div className='description'>
                Languages: JavaScript, CSS <br />
                Technologies: Axios, Node.js, React.js, Vercel
            </div>
        </div>
     );
}
 
export default FrostedWhiskers;