import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../styles/footer.css';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
    return (
        <footer className='cust-footer fixed-bottom'>
            <div className='container'>
                <Navbar expand='md'>
                    <Container>
                        <Nav className='me-auto'>
                            <Nav.Link>
                                <Link className='cust-navlink nav-link' to='/contact'>Contact Us</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link className='cust-navlink nav-link' to='/careers'>Careers</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link className='cust-navlink nav-link' to='/terms'>Terms of Use</Link>
                            </Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                <div className='social-icons'>
                    <a href='https://www.facebook.com/soilfreeze/' target="_blank" rel="noreferrer" className='cust-icon'><FacebookIcon sx={{ fontSize: 60 }} /></a>
                    <a href='https://www.instagram.com/soilfreeze/?hl=en' target="_blank" rel="noreferrer" className='cust-icon'><InstagramIcon sx={{ fontSize: 60 }} /></a>
                    <a href='https://www.linkedin.com/company/soilfreeze/' target="_blank" rel="noreferrer" className='cust-icon'><LinkedInIcon sx={{ fontSize: 60 }} /></a>
                    <a href='https://www.youtube.com/channel/UCK5m2cIVkL3fZyMaTCl8_KQ' target="_blank" rel="noreferrer" className='cust-icon'><YouTubeIcon sx={{ fontSize: 60 }} /></a>
                </div>
                <div className='cust-copy'>
                    <p>Copyright © 2009 - 2022 SoilFreeze. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}