import YTClone from '../assets/YTClone2.png'

const YouTubeClone = () => {
    return ( 
        <div className='youtube'>
            <a href="">
                <img src={YTClone} height='175px' width='275px' alt='YouTubeClone' />
            </a>
            <h3 className='proj-header'>YouTube Clone</h3>
            <div className='description'>
                <ul>Languages: Python, JavaScript, CSS <br></br>
                Technologies: Django, DjangoRestFramework, RESTful APIs, React,js</ul>
            </div>
    </div>
     );
}
 
export default YouTubeClone;