
import './ProjectsPage.css'

import MewsicLibrary from '../../components/MewsicLibrary';
import PawrentHelper from '../../components/PawrentHelper';
import YouTubeClone from '../../components/YouTubeClone';

const ProjectsPage = () => {


    return ( 
        <div className='projects-page'>
            <div className='container'>
                <div className='header'>
                    <h1>Currently Under Construction</h1>
                    <h1>Please come back soon</h1><br></br>
                </div>
                <div className='grid-container'>
                    <div className='grid-item'>
                        <PawrentHelper />
                    </div>
                    <div className='grid-item'>
                        <MewsicLibrary />
                    </div>
                    <div className='grid-item'>
                        <YouTubeClone />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ProjectsPage;