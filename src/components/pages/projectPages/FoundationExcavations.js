import React from 'react';
import ProjectNavigation from '../../projectComponents/ProjectNavigation';
import FoundationExcavationsJumbo from '../../projectComponents/foundationExcavations/FoundationExcavationsJumbo';
import FoundationExcavationsDescription from '../../projectComponents/foundationExcavations/Description';

export default function FoundationExcavations() {
    return (
        <div className='container'>
            <FoundationExcavationsJumbo />
            <ProjectNavigation />
            <h1>Foundation Excavations</h1>
            <FoundationExcavationsDescription />
        </div>
    )
}