import useCustomForm from '../../hooks/useCustomForm';
import './ContactMePage.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

let initialValues = {
    name: "",
    company: "",
    email: "",
    message: "",
}

const ContactMePage = () => {
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, newContact)
    const navigate = useNavigate();

    async function newContact() {
        try {
            let response = await axios.post('', formData, {})
            navigate('/')
        } catch (error) {
            console.log(error.response.data)
        }
    }


    return ( 
        <div className='contact-page'>
            <div className="contactcontainer">
                <h2 className='header-contact'>Contact Me</h2><br></br>
                <form className="form" onSubmit={handleSubmit}>
                    <label>Name: {' '}
                        <input type='text' name='name' value={formData.name} onChange={handleInputChange} /><br></br>
                    </label>
                    <label>Company (optional): {' '}
                        <input type='text' name='company' value={formData.company} onChange={handleInputChange} /><br></br>
                    </label>
                    <label>Email Address: {' '}
                        <input type='text' name='email' value={formData.email} onChange={handleInputChange}/><br></br>
                    </label>
                    <label>Message: {' '} 
                        <textarea className='message' type='message' name='message' placeholder='Please leave feedback or contact message here...' value={formData.message} onChange={handleInputChange}/>
                        <br></br>
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        </div>
     );
}
 
export default ContactMePage;