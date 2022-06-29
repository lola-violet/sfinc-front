import React, { useState } from 'react';
import Header from './Header';
import Home from './pages/Home';
import About from './pages/About';

export default function MainContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'About') {
            return <About />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <main>
            {/* <h1>
                I'm the main container!
            </h1> */}
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        </main>
    )
}