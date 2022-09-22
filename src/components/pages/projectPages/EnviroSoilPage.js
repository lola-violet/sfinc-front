import React from 'react';

// CSS
import '../../../styles/projectCategory.css';

// Page Components
import ProjectsJumbo from '../../projectComponents/ProjectsJumbo';
import ProjectIconBtns from '../../projectComponents/ProjectIconBtns';
import CategoryDescription from '../../projectComponents/enviroSoilComp/CategoryDesc';
import CutsheetCarousel from '../../projectComponents/enviroSoilComp/CutsheetCarousel';

export default function EnviroSoilPage() {
    return (
        <div>
            <ProjectsJumbo />
            <div className='container'>
                <ProjectIconBtns />
                <CategoryDescription />
                <CutsheetCarousel />
            </div>
        </div>
    )
}