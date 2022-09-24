import React, { useState } from 'react';

// Pages
import Header from './Header';
import Home from './pages/Home';
import About from './pages/About';
import SoilFreezeAdvantage from './pages/SoilFreezeAdvantage';
import Projects from './pages/Projects';
import News from './pages/News';
import Contact from './pages/Contact';

// CSS
import '../styles/main.css';

export default function MainContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'SoilFreezeAdvantage') {
            return <SoilFreezeAdvantage />;
        }
        if (currentPage === 'Projects') {
            return <Projects />;
        }
        if (currentPage === 'News') {
            return <News />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            <div className='contentContainer'>
                {renderPage()}
            </div>
        </div>
    )
}