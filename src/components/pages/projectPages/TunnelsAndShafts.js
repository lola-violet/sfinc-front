import React from 'react';
import ProjectNavigation from '../../projectComponents/ProjectNavigation';
import TunnelsAndShaftsJumbo from '../../projectComponents/tunnelsAndShafts/TunnelsAndShaftsJumbo';

export default function TunnelsAndShafts() {
    return (
        <div className='container'>
            <TunnelsAndShaftsJumbo />
            <ProjectNavigation />
            <h1>Tunnels & Shafts</h1>
            
        </div>
    )
}