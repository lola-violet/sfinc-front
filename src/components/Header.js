import React from 'react';
import { Link } from 'react-router-dom';
import transparentLogo from '../assets/img/logo_transparentback.png';
import '../styles/header.css';
import { Navbar, Container, Nav } from 'react-bootstrap';

export default function Header() {
    return (
        <header className='cust-header'>
            <Navbar className='cust-nav' expand='lg'>
                <Container>
                    <Navbar.Brand className='cust-log'>
                        <Link className='navbar-brand' to='/'>
                            <img className='cust-logo img-fluid' src={transparentLogo} alt='SoilFreeze Logo' />
                        </Link>
                    </Navbar.Brand>
                    
                    <Navbar.Toggle aria-controls='main-navbar-nav' />

                    <Navbar.Collapse id='main-navbar-nav'>
                        <Nav className='me-auto'>
                            <Nav.Link>
                                <Link className='cust-navlink nav-link' to='/'>Home</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link className='cust-navlink nav-link' to='/about'>About</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link className='cust-navlink nav-link' to='/advantage'>SoilFreeze Advantage</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link className='cust-navlink nav-link' to='/projects'>Projects</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link className='cust-navlink nav-link' to='/news'>News</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link className='cust-navlink nav-link' to='/contact'>Contact</Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}