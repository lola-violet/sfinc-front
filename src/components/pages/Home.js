import React from 'react';

// Page Components
// import ImageSlide from '../homeComponents/ImageSlide';
// import CompanyBio from '../homeComponents/CompanyBio';
// import ProjectIcons from '../homeComponents/ProjectIcons';
import BannerNo1 from '../../assets/img/banners/banner_1.jpg';

import '../../styles/home.css';


export default function Home() {
    return (
        // <div className='container'>
        //     <h1>I'm the home page</h1>
        //     <ImageSlide />
        //     <CompanyBio />
        //     <ProjectIcons />
        // </div>
        <>
        <div>
            <img src={BannerNo1} alt='banner' className='img-fluid homeImg' />
        </div>
        </>
        
    )
}