import React from 'react';
import ProjectJumbo from '../projectComponents/ProjectJumbo';
import ProjectNavigation from '../projectComponents/ProjectNavigation';

export default function Projects() {
    return (
        <div className='container'>
            <ProjectJumbo />
            <ProjectNavigation />
        </div>
    )
}