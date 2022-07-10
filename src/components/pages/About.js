import React, { useState } from 'react';
import AboutJumbo from '../aboutComponents/AboutJumbo';
import AboutNavigation from '../aboutComponents/AboutNavigation';
import AboutOverview from '../pages/aboutPages/AboutOverview';
import Leadership from '../pages/aboutPages/Leadership';
import CompanyHistory from '../pages/aboutPages/CompanyHistory';
import FreezingHistory from '../pages/aboutPages/FreezingHistory';
import Safety from '../pages/aboutPages/Safety';


export default function AboutContainer() {
  const [currentPage, setCurrentPage] = useState('AboutOverview');

  const renderPage = () => {
    if (currentPage === 'AboutOverview') {
      return <AboutOverview />;
    }
    if (currentPage === 'Leadership') {
      return <Leadership />;
    }
    if (currentPage === 'CompanyHistory') {
      return <CompanyHistory />;
    }
    if (currentPage === 'FreezingHistory') {
      return <FreezingHistory />;
    }
    if (currentPage === 'Safety') {
        return <Safety />;
      }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className='container'>
        <AboutJumbo />
        <AboutNavigation currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
    </div>
  );
}