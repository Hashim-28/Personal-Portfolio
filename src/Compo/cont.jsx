import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactMe = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [emailSent, setEmailSent] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const validateForm = () => {
        let formErrors = {};
        if (!formData.firstName) formErrors.firstName = "First name cannot be empty";
        if (!formData.email) formErrors.email = "Email cannot be empty";
        if (!formData.message) formErrors.message = "Message cannot be empty";
        return formErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            emailjs.send(
                'service_jvsbvgb',
                'template_3j9lvb8',
                {
                    firstName: formData.firstName,
                    email: formData.email,
                    message: formData.message
                },
                '4KO-EqP0lbTyvyUd5'
            ).then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setEmailSent(true);
                setFormData({
                    firstName: '',
                    email: '',
                    message: ''
                });
                setErrors({});
            }).catch((error) => {
                console.log('FAILED...', error);
                alert(`Failed to send email. Error: ${error.text}`);
            });
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <div id="contact">
            <div id="form">
                <div id="conh">
                    <h2>Get In Touch</h2>
                    <h1>Contact Me</h1>
                    <p>Get in touch to discuss how we can turn your ideas into reality</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div id="F-na">
                        <label>First Name</label><br/>
                        <input 
                            type="text" 
                            name="firstName" 
                            value={formData.firstName} 
                            onChange={handleChange} 
                        />
                        {errors.firstName && <span className="error">{errors.firstName}</span>}
                    </div>
                    <div id='L-na' >
                        <label >Last Name (Optional)</label><br />
                        <input type="text" />
                    </div>
                    <div id="email">
                        <label>Email</label><br/>
                        <input 
                            type="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                        />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                    <div id='P-no' >
                        <label >Phone Number (Optional)</label><br />
                        <input type="text" />
                    </div>
                    <div id="txt">
                        <label>Message</label><br/>
                        <textarea 
                            name="message" 
                            value={formData.message} 
                            onChange={handleChange} 
                            placeholder="Type your message..."
                        ></textarea>
                        {errors.message && <span className="error">{errors.message}</span>}
                    </div>
                    <button type="submit">Submit</button>
                    {emailSent && <p className="success">Thank you! Your message has been sent.</p>}
                </form>
            </div>
        </div>
    );
}

export default ContactMe;
