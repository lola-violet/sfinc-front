import React, { useState } from 'react';

// Page Components
import ProjectsJumbo from '../projectComponents/ProjectsJumbo';
import ProjectsOverviewDesc from '../projectComponents/ProjectsOverviewDesc';
import ProjectIconBtns from '../projectComponents/ProjectIconBtns';

// import ShaCroPassPage from './projectPages/ShaCroPassPage';
// import FoundaExcaPage from './projectPages/FoundaExcaPage';

export default function Projects() {

    // const [currentCateg, setCurrentCateg] = useState('ShaCroPassPage');

    // const renderCateg = () => {
    //     if (currentCateg === 'ShaCroPassPage') {
    //         return <ShaCroPassPage />
    //     }
    //     if (currentCateg === 'FoundaExcaPage') {
    //         return <FoundaExcaPage />
    //     }
    // };

    // const handleCategChange = (categ) => setCurrentCateg(categ);

    return (
        // <div>
        //     <ProjectsJumbo />
        //     <div className='container'>
        //         <ProjectIconBtns currentCateg={currentCateg} handleCategChange={handleCategChange} />
        //         {renderCateg()}
        //     </div>
        // </div>


        <div>
            <ProjectsJumbo />
            <div className='container'>
                <ProjectIconBtns />
                <ProjectsOverviewDesc />
            </div>
        </div>
    )
}