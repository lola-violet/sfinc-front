import React from 'react';

// Foundation Excavations
//// Cutsheets
import BrickellCitiCentreTestSite from '../../../assets/cutsheets/foundaExca/brickell_citi-centre_test_site.png';
import HowellPlaceResidence from '../../../assets/cutsheets/foundaExca/howell_place_residence.png';
import I405StormwaterDetentionVault from '../../../assets/cutsheets/foundaExca/i405_stormwater_detention_vault.png';
import MadisonParkCondominiums from '../../../assets/cutsheets/foundaExca/madison_park_condominiums.png';
import MallardBayPumpStation from '../../../assets/cutsheets/foundaExca/mallard_bay_pump_station.png';

export default function CutsheetCarousel() {
    return (
        <div>
            <div id='foundaExcaCarousel' className='carousel carousel-dark slide customCarou' data-bs-ride='carousel' data-bs-pause='false'>
                <div className='carousel-indicators'>
                    <button
                        type='button'
                        data-bs-target='#foundaExcaCarousel'
                        data-bs-slide-to='0'
                        className='active'
                        aria-current='true'
                        aria-label='slide 1'
                    ></button>
                    <button
                        type='button'
                        data-bs-target='#foundaExcaCarousel'
                        data-bs-slide-to='1'
                        aria-label='slide 2'
                    ></button>
                    <button
                        type='button'
                        data-bs-target='#foundaExcaCarousel'
                        data-bs-slide-to='2'
                        aria-label='slide 3'
                    ></button>
                    <button
                        type='button'
                        data-bs-target='#foundaExcaCarousel'
                        data-bs-slide-to='3'
                        aria-label='slide 4'
                    ></button>
                    <button
                        type='button'
                        data-bs-target='#foundaExcaCarousel'
                        data-bs-slide-to='4'
                        aria-label='slide 5'
                    ></button>
                </div>
                <div className='carousel-inner'>
                    <div className='carousel-item active'>
                        <img 
                            className='d-block w-100 custCarouImg'
                            src={BrickellCitiCentreTestSite} 
                            alt='Cutsheet for Brickell Citi-Centre Test Site' 
                        />
                    </div>
                    <div className='carousel-item'>
                        <img
                            className='d-block w-100 custCarouImg'
                            src={HowellPlaceResidence}
                            alt='Cutsheet for Howell Place Residence' 
                        />
                    </div>
                    <div className='carousel-item'>
                        <img
                            className='d-block w-100 custCarouImg'
                            src={I405StormwaterDetentionVault}
                            alt='Cutsheet for I-405 Stormwater Detention Vault' 
                        />
                    </div>
                    <div className='carousel-item'>
                        <img
                            className='d-block w-100 custCarouImg'
                            src={MadisonParkCondominiums}
                            alt='Cutsheet for Madison Park Condominiums' 
                        />
                    </div>
                    <div className='carousel-item'>
                        <img
                            className='d-block w-100 custCarouImg'
                            src={MallardBayPumpStation}
                            alt='Cutsheet for Mallard Bay Pump Station' 
                        />
                    </div>
                </div>
                <button
                    className='carousel-control-prev'
                    type='button'
                    data-bs-target='#foundaExcaCarousel'
                    data-bs-slide='prev'
                    >
                    <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                    <span className='visually-hidden'>Previous</span>
                </button>
                <button
                    className='carousel-control-next'
                    type='button'
                    data-bs-target='#foundaExcaCarousel'
                    data-bs-slide='next'
                    >
                    <span className='carousel-control-next-icon' aria-hidden='true'></span>
                    <span className='visually-hidden'>Next</span>
                </button>
            </div>
        </div>
    )
}