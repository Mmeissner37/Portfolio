
import './ProjectsPage.css'


const ProjectsPage = () => {


    return ( 
        <div className='projects-page'>
            <div className='container'>
                <h1>Currently Under Construction</h1>
                <h1>Please come back soon</h1><br></br>
                <div className='capstone'>
                    <h3>Here's a sneak peak</h3>
                    <a href="https://github.com/Mmeissner37/Capstone">
                    <img src="./././assets/PawrentHelper2.png" height='100px' width='75px' alt='capstone teaser' />
                    </a>
                </div><br></br>
                <div className='music-library'>
                    <h3>And another</h3>
                    <a href="">
                        <img src="" height='100px' width='75px' alt='music library thumbnail' />
                    </a>
                </div>
            </div>
        </div>
     );
}
 
export default ProjectsPage;