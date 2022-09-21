import React from 'react';

// CSS
import '../../../styles/projectCategory.css';

// Page Components
import ProjectsJumbo from '../../projectComponents/ProjectsJumbo';
import ProjectIconBtns from '../../projectComponents/ProjectIconBtns';
import CategoryDescription from '../../projectComponents/shaCroPassComp/CategoryDesc';
import CutsheetCarousel from '../../projectComponents/shaCroPassComp/CutsheetCarousel';

export default function ShaCroPassPage() {
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