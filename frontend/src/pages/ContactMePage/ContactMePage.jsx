import Snowflakes from '../../components/Snowflakes';
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
        // debugger
        try {
            let response = await axios.post('44.202.128.85:8000/portfolio/contact/', formData, {})
            navigate('/')
        } catch (error) {
            console.log(error.response.data)
        }
    }
//     try {
//         let response = await axios.post('http://127.0.0.1:8000/portfolio/contact/', formData, {})
//         navigate('/')
//     } catch (error) {
//         console.log(error.response.data)
//     }
// }

    return ( 
        <div className='contact-page'>
            <div className="contactcontainer">
                <Snowflakes />
                <h1 className='contact-header'>Contact Me</h1><br></br>
                <form className="form" onSubmit={handleSubmit}>
                    <label>Name: {' '}
                        <input type='text' name='name' placeholder='First & Last Name' value={formData.name} onChange={handleInputChange} /><br></br>
                    </label>
                    <label>Company (optional): {' '}
                        <input type='text' name='company' placeholder ='Company Name or N/A' value={formData.company} onChange={handleInputChange} /><br></br>
                    </label>
                    <label>Email Address: {' '}
                        <input type='text' name='email' placeholder= '@gmail.com' value={formData.email} onChange={handleInputChange}/><br></br>
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