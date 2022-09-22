import React from 'react';

// CSS
import '../../../styles/projectCategory.css';

// Page Components
import ProjectsJumbo from '../../projectComponents/ProjectsJumbo';
import ProjectIconBtns from '../../projectComponents/ProjectIconBtns';
import CategoryDescription from '../../projectComponents/utilPumpStaComp/CategoryDesc';
import CutsheetCarousel from '../../projectComponents/utilPumpStaComp/CutsheetCarousel';

export default function UtilPumpStaPage() {
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