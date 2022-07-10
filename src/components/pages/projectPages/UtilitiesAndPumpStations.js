import React from 'react';
import ProjectNavigation from '../../projectComponents/ProjectNavigation';
import UtilitiesAndPumpStationsJumbo from '../../projectComponents/utilitiesAndPumpStations/UtilitiesAndPumpStationsJumbo';
import UtilitiesAndPumpStationsDescription from '../../projectComponents/utilitiesAndPumpStations/Description';

export default function TunnelsAndShafts() {
    return (
        <div className='container'>
            <UtilitiesAndPumpStationsJumbo />
            <ProjectNavigation />
            <h1>Utilities & Pump Stations</h1>
            <UtilitiesAndPumpStationsDescription />
        </div>
    )
}