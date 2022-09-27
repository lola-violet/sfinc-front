import React from 'react';

// Page Components
// import ImageSlide from '../homeComponents/ImageSlide';
import CompanyBio from '../homeComponents/CompanyBio';
// import ProjectIcons from '../homeComponents/ProjectIcons';

import '../../styles/home.css';


export default function Home() {
    return (
        <div>
            <div className='container-fluid bgImg'>
                <CompanyBio />
            </div>
        </div>
    )
}