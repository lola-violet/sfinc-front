import React from 'react';

export default function AboutNavigation({ currentPage, handlePageChange }) {
    return (
        <div>
            <button>
                <a href="/about"
                        onClick={() => handlePageChange('Overview')}
                        className={currentPage === 'About' ? 'nav-link custom-navlink nav-active' : 'nav-link custom-navlink'}
                    > Overview </a>
            </button>
            <button>
                <a href="#leadership"
                        onClick={() => handlePageChange('Leadership')}
                        className={currentPage === 'Leadership' ? 'nav-link custom-navlink nav-active' : 'nav-link custom-navlink'}
                    > Leadership </a>
            </button>
            <button>
                <a href="#company-history"
                        onClick={() => handlePageChange('CompanyHistory')}
                        className={currentPage === 'CompanyHistory' ? 'nav-link custom-navlink nav-active' : 'nav-link custom-navlink'}
                    > Company History & Patents </a>
            </button>
            <button>
                <a href="#freezing-history"
                        onClick={() => handlePageChange('FreezingHistory')}
                        className={currentPage === 'FreezingHistory' ? 'nav-link custom-navlink nav-active' : 'nav-link custom-navlink'}
                    > Ground Freezing History </a>
            </button>
            <button>
                <a href="#safety"
                        onClick={() => handlePageChange('Safety')}
                        className={currentPage === 'Safety' ? 'nav-link custom-navlink nav-active' : 'nav-link custom-navlink'}
                    > Safety </a>
            </button>
        </div>
    )
}