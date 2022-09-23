import React, { useState } from 'react';

// Page Components
import AboutJumbo from '../aboutComponents/AboutJumbo';
import AboutNavigation from '../aboutComponents/AboutNavigation';

// SubPages
import AboutOverview from './aboutPages/AboutOverview';
import Leadership from './aboutPages/Leadership';
import CompanyHistory from './aboutPages/CompanyHistory';
import FreezingHistory from './aboutPages/FreezingHistory';
import Safety from './aboutPages/Safety';


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
    <div>
      <AboutJumbo />
      <div className='container'>
        <AboutNavigation currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
      </div>
    </div>
  );
}