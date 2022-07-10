import React from 'react';

export default function ProjectNavigation({ currentPage, handlePageChange }) {
    return (
        <div>
            <button>
                <a href="/projects"
                        onClick={() => handlePageChange('Overview')}
                        className={currentPage === 'About' ? 'nav-link custom-navlink nav-active' : 'nav-link custom-navlink'}
                    > Overview </a>
            </button>
            <button>
                <a href="/projects/tunnels-and-shafts"
                        onClick={() => handlePageChange('TunnelsAndShafts')}
                        className={currentPage === 'TunnelsAndShafts' ? 'nav-link custom-navlink nav-active' : 'nav-link custom-navlink'}
                    > Tunnels & Shafts </a>
            </button>
            <button>
                <a href="/projects/foundation-excavations"
                        onClick={() => handlePageChange('FoundationExcavations')}
                        className={currentPage === 'FoundationExcavations' ? 'nav-link custom-navlink nav-active' : 'nav-link custom-navlink'}
                    > Foundation Excavations </a>
            </button>
            <button>
                <a href="/projects/utilities-and-pump-stations"
                        onClick={() => handlePageChange('UtilitiesAndPumpStations')}
                        className={currentPage === 'UtilitiesAndPumpStations' ? 'nav-link custom-navlink nav-active' : 'nav-link custom-navlink'}
                    > Utilities & Pump Stations </a>
            </button>
            <button>
                <a href="/projects/environmental-soil-remediation"
                        onClick={() => handlePageChange('EnvironmentalSoilRemediation')}
                        className={currentPage === 'EnvironmentalSoilRemediation' ? 'nav-link custom-navlink nav-active' : 'nav-link custom-navlink'}
                    > Environmental / Soil Remediation </a>
            </button>
            <button>
                <a href="/projects/mining"
                        onClick={() => handlePageChange('Mining')}
                        className={currentPage === 'Mining' ? 'nav-link custom-navlink nav-active' : 'nav-link custom-navlink'}
                    > Mining </a>
            </button>
        </div>
    )
}