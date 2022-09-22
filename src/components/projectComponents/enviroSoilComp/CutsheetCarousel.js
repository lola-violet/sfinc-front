import React from 'react';

// Environmental & Soil Remediation
//// Cutsheets
import ElliotBaySeawall from '../../../assets/cutsheets/enviroSoil/elliot_bay_seawall.png';
import GeorgetownSteamPlant from '../../../assets/cutsheets/enviroSoil/georgetown_steam_plant_rem.png';
import PsegRemediationHoboken from '../../../assets/cutsheets/enviroSoil/pseg_remediation_hoboken.png';
import ShuffletonSubstation from '../../../assets/cutsheets/enviroSoil/shuffleton_substation_rem.png';

export default function CutsheetCarousel() {
    return (
        <div>
            <div id='enviroSoilCarousel' className='carousel carousel-dark slide customCarou' data-bs-ride='carousel' data-bs-pause='false'>
                <div className='carousel-indicators'>
                    <button
                        type='button'
                        data-bs-target='#enviroSoilCarousel'
                        data-bs-slide-to='0'
                        className='active'
                        aria-current='true'
                        aria-label='slide 1'
                    ></button>
                    <button
                        type='button'
                        data-bs-target='#enviroSoilCarousel'
                        data-bs-slide-to='1'
                        aria-label='slide 2'
                    ></button>
                    <button
                        type='button'
                        data-bs-target='#enviroSoilCarousel'
                        data-bs-slide-to='2'
                        aria-label='slide 3'
                    ></button>
                    <button
                        type='button'
                        data-bs-target='#enviroSoilCarousel'
                        data-bs-slide-to='3'
                        aria-label='slide 4'
                    ></button>
                </div>
                <div className='carousel-inner'>
                    <div className='carousel-item active'>
                        <img 
                            className='d-block w-100 custCarouImg'
                            src={ElliotBaySeawall} 
                            alt='Cutsheet for Elliot Bay Seawall' 
                        />
                    </div>
                    <div className='carousel-item'>
                        <img
                            className='d-block w-100 custCarouImg'
                            src={GeorgetownSteamPlant}
                            alt='Cutsheet for Georgetown Steam Plant' 
                        />
                    </div>
                    <div className='carousel-item'>
                        <img
                            className='d-block w-100 custCarouImg'
                            src={PsegRemediationHoboken}
                            alt='Cutsheet for PSEG Remediation in Hoboken' 
                        />
                    </div>
                    <div className='carousel-item'>
                        <img
                            className='d-block w-100 custCarouImg'
                            src={ShuffletonSubstation}
                            alt='Cutsheet for Shuffleton Stubstation' 
                        />
                    </div>
                </div>
                <button
                    className='carousel-control-prev'
                    type='button'
                    data-bs-target='#enviroSoilCarousel'
                    data-bs-slide='prev'
                    >
                    <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                    <span className='visually-hidden'>Previous</span>
                </button>
                <button
                    className='carousel-control-next'
                    type='button'
                    data-bs-target='#enviroSoilCarousel'
                    data-bs-slide='next'
                    >
                    <span className='carousel-control-next-icon' aria-hidden='true'></span>
                    <span className='visually-hidden'>Next</span>
                </button>
            </div>
        </div>
    )
}