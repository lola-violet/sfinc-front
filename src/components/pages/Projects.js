import React from 'react';

// Page Components
import ProjectsJumbo from '../projectComponents/ProjectsJumbo';
import ProjectsOverviewDesc from '../projectComponents/ProjectsOverviewDesc';
import ProjectIconBtns from '../projectComponents/ProjectIconBtns';

export default function Projects() {
    return (
        <div>
            <ProjectsJumbo />
            <div className='container'>
                <ProjectIconBtns />
                <ProjectsOverviewDesc />
            </div>
        </div>
    )
}