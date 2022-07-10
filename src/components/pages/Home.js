import React from 'react';
import ImageSlide from '../homeComponents/ImageSlide';
import CompanyBio from '../homeComponents/CompanyBio';
import ProjectIcons from '../homeComponents/ProjectIcons';

export default function Home() {
    return (
        <div className='container'>
            <h1>I'm the home page</h1>
            <ImageSlide />
            <CompanyBio />
            <ProjectIcons />
        </div>
    )
}