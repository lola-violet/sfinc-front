import React from 'react';
import { Link } from 'react-router-dom';
// import Nav from 'react-bootstrap/Nav';
// import 'bootstrap';

export default function Header() {
    return (
        <header>
            <nav className='navbar navbar-expand-lg'>
                <div className='container'>
                    <ul className='navbar-nav'>
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
            </nav>
        </header>
    )
}