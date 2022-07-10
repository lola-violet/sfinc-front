import React from 'react';
import ProjectNavigation from '../../projectComponents/ProjectNavigation';
import MiningJumbo from '../../projectComponents/mining/MiningJumbo';
import MiningDescription from '../../projectComponents/mining/Description';

export default function TunnelsAndShafts() {
    return (
        <div className='container'>
            <MiningJumbo />
            <ProjectNavigation />
            <h1>Mining</h1>
            <MiningDescription />
        </div>
    )
}