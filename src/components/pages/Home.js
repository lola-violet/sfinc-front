import React from 'react';
import CompanyBio from '../homeComponents/CompanyBio';
import ProjectIcons from '../homeComponents/ProjectIcons';

export default function Home() {
    return (
        <div className='container'>
            <h1>I'm the home page</h1>
            <p>I will be a carousel of project images</p>
            <CompanyBio />
            <ProjectIcons />
        </div>
    )
}