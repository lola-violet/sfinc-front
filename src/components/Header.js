import React from 'react';
import { Link } from 'react-router-dom';
import transparentLogo from '../assets/img/logo_transparentback.png';
import '../styles/header.css';
import { Navbar, Container, Nav } from 'react-bootstrap';

export default function Header() {
    return (
        <header>
            <Navbar className='cust-nav' expand='lg'>
                <Container>
                    <Navbar.Brand className='cust-logo'>
                        <Link className='navbar-brand' to='/'>
                            <img className='img-fluid' src={transparentLogo} alt='SoilFreeze Logo' />
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

            {/* <nav className='cust-nav navbar navbar-expand-lg'>
                <div className='container'>
                    <Link className='navbar-brand' to='/'>
                        <img className='cust-logo img-fluid' src={transparentLogo} alt='SoilFreeze Logo' />
                    </Link>
                    <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target="#navbarMainCollapse" aria-controls="navbarMainCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarMainCollapse'>
                        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/'>Home</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/about'>About</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/advantage'>SoilFreeze Advantage</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/projects'>Projects</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/news'>News</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/contact'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}
        </header>
    )
}