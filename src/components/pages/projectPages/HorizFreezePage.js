import React from 'react';

// CSS
import '../../../styles/projectCategory.css';

// Page Components
import ProjectsJumbo from '../../projectComponents/ProjectsJumbo';
import ProjectIconBtns from '../../projectComponents/ProjectIconBtns';
import CategoryDescription from '../../projectComponents/horizFreezeComp/CategoryDesc';
import CutsheetCarousel from '../../projectComponents/horizFreezeComp/CutsheetCarousel';

export default function HorizFreezePage() {
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