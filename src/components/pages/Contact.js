import React from 'react';

// CSS
import '../../styles/contact.css';

// Page Components
import ContactJumbo from '../contactComponents/ContactJumbo';
import GeneralContact from '../contactComponents/GeneralContact';


export default function Contact() {
    return (
        <div>
            <ContactJumbo />
            <div className='container'>
                <GeneralContact />
            </div>
        </div>
    )
}