import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <h1>
                I'm the header!
            </h1>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/advantage'>SoilFreeze Advantage</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/news'>News</Link>
                <Link to='/contact'>Contact</Link>
            </nav>
        </header>
    )
}