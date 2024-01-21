import React from "react";
// import emailjs from '@emailjs/browser';
import './Contact.css'

const Contact = () => {

    // const form = useRef();

    // const sendEmail = (e) => {
    //   e.preventDefault();
  
    //   emailjs.sendForm('service_fe7mp6u', 'template_or6p2dd', form.current, 'wf-jT_e3V56eH6Qa5')
    //     .then((result) => {
    //         console.log(result.text);
    //     }, (error) => {
    //         console.log(error.text);
    //     });
    //     e.target.reset();
    // };

return (
    <div className="contact-page">
        <h1>Contact</h1>
        <div className="contact-content">
            <div className='contact-mail'> <a href='mailto:sofia.makiniemi@hotmail.com'>sofia.makiniemi@hotmail.com</a></div>
            <div className='contact-mail'> <a href='https://www.instagram.com/smakiniemi_art/'>Instagram</a></div>
        </div>
    </div>
);
};

export default Contact;