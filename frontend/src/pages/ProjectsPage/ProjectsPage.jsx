
import './ProjectsPage.css'


const ProjectsPage = () => {


    return ( 
        <div className='projects-page'>
            <div className='container'>
                <div className='header'>
                    <h1>Currently Under Construction</h1>
                    <h1>Please come back soon</h1><br></br>
                </div>
                <div className='project-grid'>
                    <div className='capstone'>
                        <a href="https://github.com/Mmeissner37/Capstone">
                        <img src="./././assets/PawrentHelper2.png" height='100px' width='75px' alt='capstone teaser' />
                        </a>
                        <h3>Here's a sneak peak!</h3>
                    </div><br></br>
                    <div className='music-library'>
                        <a href="https://github.com/Mmeissner37/Music_Library_React">
                            <img src="./././assets/Mewsic-Library2.png" height='100px' width='75px' alt='music library thumbnail' />
                        </a>
                        <h3>One More</h3>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ProjectsPage;