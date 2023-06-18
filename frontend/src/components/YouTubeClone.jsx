import YTClone from '../assets/YTClone2.png'

const YouTubeClone = () => {
    return ( 
        <div className='youtube'>
            <a href="">
                <img src={YTClone} height='175px' width='275px' alt='YouTubeClone' />
            </a>
            <h3>YouTube Clone</h3>
            <div className='description'>
                {/* <h3>Description: Web Application for pet owners to create pet profiles, track current medications, and schedule appointments with a vet clinic</h3>
                <h3>The associated vet clinic has access to the schedule and appointments, and can grant guest access to other veterinary professionals</h3> */}
                <ul>Languages: Python, JavaScript, CSS</ul>
                <ul>Technologies: Django, DjangoRestFramework, RESTful APIs, React,js</ul>
            </div>
    </div>
     );
}
 
export default YouTubeClone;