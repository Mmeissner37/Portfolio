import useCustomForm from '../../hooks/useCustomForm';
import './ContactMePage.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

let initialValues = {
    name: "",
    company: "",
    email: "",
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
            <div className="container">
                <h2 className='header-contact'>Contact Me</h2><br></br>
                <form className="form" onSubmit={handleSubmit}>
                    <label className='contact-form'>Name: {' '}
                        <input type='text' name='name' value={formData.name} onChange={handleInputChange} /><br></br>
                    </label>
                    <label className='contact-form'>Company: {' '}
                        <input type='text' name='company' value={formData.company} onChange={handleInputChange} /><br></br>
                    </label>
                    <label className='contact-form'>Email Address: {' '}
                        <input type='text' name='email' value={formData.email} onChange={handleInputChange}/><br></br>
                    </label>
                    <div className='contact-button'>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default ContactMePage;