import React from 'react';

// Page Components
// import ImageSlide from '../homeComponents/ImageSlide';
// import CompanyBio from '../homeComponents/CompanyBio';
// import ProjectIcons from '../homeComponents/ProjectIcons';
// import BannerNo1 from '../../assets/img/banners/banner_1.jpg';

import '../../styles/home.css';


export default function Home() {
    return (
        // <div className='container'>
        //     <h1>I'm the home page</h1>
        //     <ImageSlide />
        //     <CompanyBio />
        //     <ProjectIcons />
        // </div>
        // <>
        // <div>
        //     <img src={BannerNo1} alt='banner' className='img-fluid homeImg' />
        //     <div>
        //         <h1>Welcome to SoilFreeze</h1>
        //     </div>
        // </div>
        // </>
        <div>
            <div className='container-fluid bgImg'>
                <div className='container'>
                    <div className='welcomeBlock'>
                        <h1>Welcome to SoilFreeze</h1>
                        <h3>Applied Innovation. Proven Solutions.</h3>
                        <p>
                            SoilFreeze is the only U.S. construction company specializing exclusively in ground freezing services for the construction and environmental industries.
                        </p>
                        <p>
                            Since 1998, SoilFreeze has helped contractors and engineers successfully complete scores of public and privately owned projects safely, efficiently, and on schedule. We provide deep shaft and utility shoring, soil remediation, and ground stabilization in even the most difficult soil conditions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}