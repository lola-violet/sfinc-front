import React from 'react';
import { Link } from 'react-router-dom';
// const { FacebookIcon } = require("@mui/icons-material/Facebook");

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
    return (
        <footer className='fixed-bottom'>
            <nav className='navbar navbar-expand-lg'>
                <div className='container'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/contact'>Contact Us</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/careers'>Careers</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/advantage'>Terms of Use</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <div>
                <h5>Copyright © 2009 - 2022 SoilFreeze. All rights reserved.</h5>
            </div>

            <div>
                <a href='https://www.facebook.com/soilfreeze/' target="_blank" rel="noreferrer"><FacebookIcon /></a>
                <a href='https://www.instagram.com/soilfreeze/?hl=en' target="_blank" rel="noreferrer"><InstagramIcon /></a>
                <a href='https://www.linkedin.com/company/soilfreeze/' target="_blank" rel="noreferrer"><LinkedInIcon /></a>
                <a href='https://www.youtube.com/channel/UCK5m2cIVkL3fZyMaTCl8_KQ' target="_blank" rel="noreferrer"><YouTubeIcon /></a>
            </div>
        </footer>
    )
}