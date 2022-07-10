import React from 'react';
import ProjectNavigation from '../../projectComponents/ProjectNavigation';
import TunnelsAndShaftsJumbo from '../../projectComponents/tunnelsAndShafts/TunnelsAndShaftsJumbo';
import TunnelsAndShaftsDescription from '../../projectComponents/tunnelsAndShafts/Description';

export default function TunnelsAndShafts() {
    return (
        <div className='container'>
            <TunnelsAndShaftsJumbo />
            <ProjectNavigation />
            <h1>Tunnels & Shafts</h1>
            <TunnelsAndShaftsDescription />
            
        </div>
    )
}