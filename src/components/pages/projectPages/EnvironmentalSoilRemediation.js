import React from 'react';
import ProjectNavigation from '../../projectComponents/ProjectNavigation';
import EnvironmentalSoilRemediationJumbo from '../../projectComponents/environmentalSoilRemediation/EnvironmentalSoilRemediationJumbo';
import EnvironmentalSoilRemediationDescription from '../../projectComponents/environmentalSoilRemediation/Description';
import CaseExamplesHeader from '../../projectComponents/CaseExamplesHeader';

export default function TunnelsAndShafts() {
    return (
        <div className='container'>
            <EnvironmentalSoilRemediationJumbo />
            <ProjectNavigation />
            <h1>Environmental / Soil Remediation</h1>
            <EnvironmentalSoilRemediationDescription />
            <CaseExamplesHeader />
        </div>
    )
}