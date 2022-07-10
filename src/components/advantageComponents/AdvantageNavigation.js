import React from 'react';

export default function AdvantageNavigation() {
    return (
        <div>
            <button>
                <a href="/advantage"
                        // onClick={() => handlePageChange('Overview')}
                        // className={currentPage === 'About' ? 'nav-link custom-navlink nav-active' : 'nav-link custom-navlink'}
                    > Why SoilFreeze? </a>
            </button>
            <button>
                <a href="#engineeredStructure"
                        // onClick={() => handlePageChange('Leadership')}
                        // className={currentPage === 'Leadership' ? 'nav-link custom-navlink nav-active' : 'nav-link custom-navlink'}
                    > Engineered Structure </a>
            </button>
            <button>
                <a href="#costEfficient"
                        // onClick={() => handlePageChange('CompanyHistory')}
                        // className={currentPage === 'CompanyHistory' ? 'nav-link custom-navlink nav-active' : 'nav-link custom-navlink'}
                    > Cost Efficient </a>
            </button>
            <button>
                <a href="#eliminateDewatering"
                        // onClick={() => handlePageChange('FreezingHistory')}
                        // className={currentPage === 'FreezingHistory' ? 'nav-link custom-navlink nav-active' : 'nav-link custom-navlink'}
                    > Eliminate Dewatering </a>
            </button>
            <button>
                <a href="#allSoilTypes"
                        // onClick={() => handlePageChange('Safety')}
                        // className={currentPage === 'Safety' ? 'nav-link custom-navlink nav-active' : 'nav-link custom-navlink'}
                    > Effective in All Soil Types </a>
            </button>
            <button>
                <a href="#shoringBeforeExcavation"
                        // onClick={() => handlePageChange('Safety')}
                        // className={currentPage === 'Safety' ? 'nav-link custom-navlink nav-active' : 'nav-link custom-navlink'}
                    > Shoring Completely Formed Before Excavation Begins </a>
            </button>
            <button>
                <a href="#flexibleAdaptable"
                        // onClick={() => handlePageChange('Safety')}
                        // className={currentPage === 'Safety' ? 'nav-link custom-navlink nav-active' : 'nav-link custom-navlink'}
                    > Flexible & Adaptable </a>
            </button>
            <button>
                <a href="#environmentallyFriendly"
                        // onClick={() => handlePageChange('Safety')}
                        // className={currentPage === 'Safety' ? 'nav-link custom-navlink nav-active' : 'nav-link custom-navlink'}
                    > Friendly to the Community & Environment </a>
            </button>
        </div>
    )
}