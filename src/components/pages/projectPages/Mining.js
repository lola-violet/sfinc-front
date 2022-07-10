import React from 'react';
import ProjectNavigation from '../../projectComponents/ProjectNavigation';
import MiningJumbo from '../../projectComponents/mining/MiningJumbo';
import MiningDescription from '../../projectComponents/mining/Description';
import CaseExamplesHeader from '../../projectComponents/CaseExamplesHeader';

export default function TunnelsAndShafts() {
    return (
        <div className='container'>
            <MiningJumbo />
            <ProjectNavigation />
            <h1>Mining</h1>
            <MiningDescription />
            <CaseExamplesHeader />
        </div>
    )
}