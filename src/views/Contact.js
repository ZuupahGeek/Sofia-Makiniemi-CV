import React from "react";
import { Link } from 'react-router-dom'
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
        <div className="contact-content">
            <div className='contact-mail'> <Link to='mailto:smakiniemiart@gmail.com' target={'_blank'}>smakiniemiart@gmail.com</Link></div>
            <div className='contact-social'> <Link to='https://www.instagram.com/smakiniemi_art/' target={'_blank'}>Instagram: @smakiniemi_art</Link></div>
            <div className='contact-social'> <Link to='https://www.linkedin.com/in/smakiniemi/' target={'_blank'}>LinkedIn: www.linkedin.com/in/smakiniemi</Link></div>
            <div className='contact-social'> <Link to='https://www.youtube.com/@SofiaM%C3%A4kiniemiArtist' target={'_blank'}>Youtube: www.youtube.com/@SofiaMäkiniemiArtist</Link></div>
        </div>
    </div>
);
};

export default Contact;