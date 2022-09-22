import React from 'react';

// Foundation Excavations
//// Cutsheets
import NewarkShaftRepair1201 from '../../../assets/cutsheets/shaCroPass/newark_shaft_repair-1201.png';
import NewarkTbmReceivingShaft from '../../../assets/cutsheets/shaCroPass/newark_tbm_receiving_shaft.png';
import PierSLongBeach from '../../../assets/cutsheets/shaCroPass/pier-s_long_beach.png';
import TurkeyCreekTunnel from '../../../assets/cutsheets/shaCroPass/turkey_creek_tunnel.png';

export default function CutsheetCarousel() {
    return (
        <div>
            <div id='shaCroPassCarousel' className='carousel carousel-dark slide customCarou' data-bs-ride='carousel' data-bs-pause='false'>
                <div className='carousel-indicators'>
                    <button
                        type='button'
                        data-bs-target='#shaCroPassCarousel'
                        data-bs-slide-to='0'
                        className='active'
                        aria-current='true'
                        aria-label='slide 1'
                    ></button>
                    <button
                        type='button'
                        data-bs-target='#shaCroPassCarousel'
                        data-bs-slide-to='1'
                        aria-label='slide 2'
                    ></button>
                    <button
                        type='button'
                        data-bs-target='#shaCroPassCarousel'
                        data-bs-slide-to='2'
                        aria-label='slide 3'
                    ></button>
                    <button
                        type='button'
                        data-bs-target='#shaCroPassCarousel'
                        data-bs-slide-to='3'
                        aria-label='slide 4'
                    ></button>
                </div>
                <div className='carousel-inner'>
                    <div className='carousel-item active'>
                        <img 
                            className='d-block w-100 custCarouImg'
                            src={NewarkShaftRepair1201} 
                            alt='Cutsheet for Newark Shaft Repair' 
                        />
                    </div>
                    <div className='carousel-item'>
                        <img
                            className='d-block w-100 custCarouImg'
                            src={NewarkTbmReceivingShaft}
                            alt='Cutsheet for Newark TBM Receiving Shaft' 
                        />
                    </div>
                    <div className='carousel-item'>
                        <img
                            className='d-block w-100 custCarouImg'
                            src={PierSLongBeach}
                            alt='Cutsheet for Pier-S Long Beach' 
                        />
                    </div>
                    <div className='carousel-item'>
                        <img
                            className='d-block w-100 custCarouImg'
                            src={TurkeyCreekTunnel}
                            alt='Cutsheet for Turkey Creek Tunnel' 
                        />
                    </div>
                </div>
                <button
                    className='carousel-control-prev'
                    type='button'
                    data-bs-target='#shaCroPassCarousel'
                    data-bs-slide='prev'
                    >
                    <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                    <span className='visually-hidden'>Previous</span>
                </button>
                <button
                    className='carousel-control-next'
                    type='button'
                    data-bs-target='#shaCroPassCarousel'
                    data-bs-slide='next'
                    >
                    <span className='carousel-control-next-icon' aria-hidden='true'></span>
                    <span className='visually-hidden'>Next</span>
                </button>
            </div>
        </div>
    )
}