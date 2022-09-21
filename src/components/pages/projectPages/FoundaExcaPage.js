import React from 'react';

// CSS
import '../../../styles/projectCategory.css';

// Page Components
import ProjectsJumbo from '../../projectComponents/ProjectsJumbo';
import ProjectIconBtns from '../../projectComponents/ProjectIconBtns';
import CategoryDescription from '../../projectComponents/foundaExcaComp/CategoryDesc';
import CutsheetCarousel from '../../projectComponents/foundaExcaComp/CutsheetCarousel';

export default function FoundaExcaPage() {
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