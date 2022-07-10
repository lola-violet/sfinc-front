import React from 'react';
import ProjectNavigation from '../../projectComponents/ProjectNavigation';
import FoundationExcavationsJumbo from '../../projectComponents/foundationExcavations/FoundationExcavationsJumbo';

export default function FoundationExcavations() {
    return (
        <div className='container'>
            <FoundationExcavationsJumbo />
            <ProjectNavigation />
            <h1>Foundation Excavations</h1>
            
        </div>
    )
}