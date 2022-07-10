import React from 'react';
import ProjectNavigation from '../../projectComponents/ProjectNavigation';
import FoundationExcavationsJumbo from '../../projectComponents/foundationExcavations/FoundationExcavationsJumbo';
import FoundationExcavationsDescription from '../../projectComponents/foundationExcavations/Description';
import CaseExamplesHeader from '../../projectComponents/CaseExamplesHeader';

export default function FoundationExcavations() {
    return (
        <div className='container'>
            <FoundationExcavationsJumbo />
            <ProjectNavigation />
            <h1>Foundation Excavations</h1>
            <FoundationExcavationsDescription />
            <CaseExamplesHeader />
        </div>
    )
}