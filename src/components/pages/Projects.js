import React from 'react';
import ProjectJumbo from '../projectComponents/ProjectJumbo';
import ProjectNavigation from '../projectComponents/ProjectNavigation';
import ProjectOverviewDescription from '../projectComponents/ProjectOverviewDescription';

export default function Projects() {
    return (
        <div className='container'>
            <ProjectJumbo />
            <ProjectNavigation />
            <ProjectOverviewDescription />
        </div>
    )
}