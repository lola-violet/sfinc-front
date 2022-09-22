import React from 'react';

// Horizontal Freezing
//// Cutsheets
import BrooksChannel from '../../../assets/cutsheets/horizFreeze/brooks_channel-1502.png';
import DcCleanRiversTunnel from '../../../assets/cutsheets/horizFreeze/dc_clean_rivers_tunnel.png';
import TruckeeMousehole from '../../../assets/cutsheets/horizFreeze/truckee_mousehole-1408.png';
import TulalipWaterLineHdd from '../../../assets/cutsheets/horizFreeze/tulalip_water_line_hdd.png';

export default function CutsheetCarousel() {
    return (
        <div>
            <div id='horizFreezeCarousel' className='carousel carousel-dark slide customCarou' data-bs-ride='carousel' data-bs-pause='false'>
                <div className='carousel-indicators'>
                    <button
                        type='button'
                        data-bs-target='#horizFreezeCarousel'
                        data-bs-slide-to='0'
                        className='active'
                        aria-current='true'
                        aria-label='slide 1'
                    ></button>
                    <button
                        type='button'
                        data-bs-target='#horizFreezeCarousel'
                        data-bs-slide-to='1'
                        aria-label='slide 2'
                    ></button>
                    <button
                        type='button'
                        data-bs-target='#horizFreezeCarousel'
                        data-bs-slide-to='2'
                        aria-label='slide 3'
                    ></button>
                    <button
                        type='button'
                        data-bs-target='#horizFreezeCarousel'
                        data-bs-slide-to='3'
                        aria-label='slide 4'
                    ></button>
                </div>
                <div className='carousel-inner'>
                    <div className='carousel-item active'>
                        <img 
                            className='d-block w-100 custCarouImg'
                            src={BrooksChannel} 
                            alt='Cutsheet for Brooks Channel 1502' 
                        />
                    </div>
                    <div className='carousel-item'>
                        <img
                            className='d-block w-100 custCarouImg'
                            src={DcCleanRiversTunnel}
                            alt='Cutsheet for DC Clean Rivers Tunnel' 
                        />
                    </div>
                    <div className='carousel-item'>
                        <img
                            className='d-block w-100 custCarouImg'
                            src={TruckeeMousehole}
                            alt='Cutsheet for Truckee Mousehole 1408' 
                        />
                    </div>
                    <div className='carousel-item'>
                        <img
                            className='d-block w-100 custCarouImg'
                            src={TulalipWaterLineHdd}
                            alt='Cutsheet for Tulalip Water Line HDD' 
                        />
                    </div>
                </div>
                <button
                    className='carousel-control-prev'
                    type='button'
                    data-bs-target='#horizFreezeCarousel'
                    data-bs-slide='prev'
                    >
                    <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                    <span className='visually-hidden'>Previous</span>
                </button>
                <button
                    className='carousel-control-next'
                    type='button'
                    data-bs-target='#horizFreezeCarousel'
                    data-bs-slide='next'
                    >
                    <span className='carousel-control-next-icon' aria-hidden='true'></span>
                    <span className='visually-hidden'>Next</span>
                </button>
            </div>
        </div>
    )
}