import './ContactMePage.css'


const ContactMePage = () => {
    return ( 
        <div className="container">
            <h2 className='header'>Contact Me</h2><br></br>
            <form className="form">
                <label>Name: 
                    <input type='text' /><br></br>
                </label>
                <label>Company: 
                    <input type='text' /><br></br>
                </label>
                <label>Email Address: 
                    <input type='text' /><br></br>
                </label>
                <div className='contact-button'>
                    <button>Submit</button>
                </div>
            </form>
        </div>
     );
}
 
export default ContactMePage;