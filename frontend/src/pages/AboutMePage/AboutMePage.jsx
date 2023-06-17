import './AboutMePage.css'


const AboutMePage = () => {


    return ( 
        <div className='aboutme-page'>
            <div className="aboutme-container">
                <h2>My Journey</h2><br></br>
            </div>
            <div>
                <ul>Anyone who knows me has asked the same question when I talk about changing careers. </ul>
            </div>
            <div className='aboutme-container'>
                <h3>Why software development?</h3><br></br>
            </div>
            <div className='journey'>
                <ul></ul>
                <ul>I come from a medically heavy background. From working with clients as a Customer Service Representative to working with animals </ul> 
                <ul>as a Licensed Veterinary Technician, my work experience up to this point has consisted entirely of veterinary clinics. I went to </ul>
                <ul>Radford University and graduated, with cum laude with honors, with a Bachelors of Science. I worked the front desk of a local veterinary </ul> 
                <ul>clinic before enrolling in an AVMA accredited school to obtain my license as a veterinary technician. Five years later, I started a </ul>
                <ul>program to become one of the few Veterinary Technician Specialists in Dentistry (VTS(Dentistry)). There are just over 100 of us in the </ul> 
                <ul>world! I have been published in professional journals, spoken at veterinary conferences, and achieved several certifications.</ul>
            </div>
            <div className='aboutme-container'>
                <h3>So again, why software development? And what could I bring to the table? </h3><br></br>
            <div className='journey'>
                <ul>Software is all around us. In TV applications, to our phones, to the paperless systems in veterinary hospital, and to the dental program my current clinic uses. I’ve seen and worked with many. </ul>
            </div>    
            </div>
        </div>

     );
}
 
export default AboutMePage;