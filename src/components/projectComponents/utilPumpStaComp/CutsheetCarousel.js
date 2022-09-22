import React from 'react';

// Utilities & Pump Stations
//// Cutsheets
import BnsfPipelineCasingTrench from '../../../assets/cutsheets/utilPumpSta/bnsf_pipeline_casing_trench.png';
import CedarLandingPumpStation from '../../../assets/cutsheets/utilPumpSta/cedar_landing_pump_station.png';
import MallardBayPumpStationFoundations from '../../../assets/cutsheets/utilPumpSta/mallard_bay_pump_station-foundations.png';
import MinnesotaOilPipelineRepair from '../../../assets/cutsheets/utilPumpSta/minnesota_oil_pipeline_repair.png';
import OlympicPipelineRelocation from '../../../assets/cutsheets/utilPumpSta/olympic_pipeline_relocation.png';
import Terminal5PipeRepair from '../../../assets/cutsheets/utilPumpSta/terminal_5_pipe_repair.png';
import TurlockCaRawWaterPumpStation from '../../../assets/cutsheets/utilPumpSta/turlock_ca_raw_water_pump_station.png';

export default function CutsheetCarousel() {
    return (
        <div>
            <div id='utilPumpStaCarousel' className='carousel carousel-dark slide customCarou' data-bs-ride='carousel' data-bs-pause='false'>
                <div className='carousel-indicators'>
                    <button
                        type='button'
                        data-bs-target='#utilPumpStaCarousel'
                        data-bs-slide-to='0'
                        className='active'
                        aria-current='true'
                        aria-label='slide 1'
                    ></button>
                    <button
                        type='button'
                        data-bs-target='#utilPumpStaCarousel'
                        data-bs-slide-to='1'
                        aria-label='slide 2'
                    ></button>
                    <button
                        type='button'
                        data-bs-target='#utilPumpStaCarousel'
                        data-bs-slide-to='2'
                        aria-label='slide 3'
                    ></button>
                    <button
                        type='button'
                        data-bs-target='#utilPumpStaCarousel'
                        data-bs-slide-to='3'
                        aria-label='slide 4'
                    ></button>
                    <button
                        type='button'
                        data-bs-target='#utilPumpStaCarousel'
                        data-bs-slide-to='4'
                        aria-label='slide 5'
                    ></button>
                    <button
                        type='button'
                        data-bs-target='#utilPumpStaCarousel'
                        data-bs-slide-to='5'
                        aria-label='slide 6'
                    ></button>
                    <button
                        type='button'
                        data-bs-target='#utilPumpStaCarousel'
                        data-bs-slide-to='6'
                        aria-label='slide 7'
                    ></button>
                </div>
                <div className='carousel-inner'>
                    <div className='carousel-item active'>
                        <img 
                            className='d-block w-100 custCarouImg'
                            src={BnsfPipelineCasingTrench} 
                            alt='Cutsheet for BNSF Pipeline Casing Trench' 
                        />
                    </div>
                    <div className='carousel-item'>
                        <img
                            className='d-block w-100 custCarouImg'
                            src={CedarLandingPumpStation}
                            alt='Cutsheet for Cedar Landing Pump Station' 
                        />
                    </div>
                    <div className='carousel-item'>
                        <img
                            className='d-block w-100 custCarouImg'
                            src={MallardBayPumpStationFoundations}
                            alt='Cutsheet for Mallard Bay Pump Station Foundations' 
                        />
                    </div>
                    <div className='carousel-item'>
                        <img
                            className='d-block w-100 custCarouImg'
                            src={MinnesotaOilPipelineRepair}
                            alt='Cutsheet for Minnesota Oil Pipeline Repair' 
                        />
                    </div>
                    <div className='carousel-item'>
                        <img
                            className='d-block w-100 custCarouImg'
                            src={OlympicPipelineRelocation}
                            alt='Cutsheet for Olympic Pipeline Relocation' 
                        />
                    </div>
                    <div className='carousel-item'>
                        <img
                            className='d-block w-100 custCarouImg'
                            src={Terminal5PipeRepair}
                            alt='Cutsheet for Terminal 5 Pipe Repair' 
                        />
                    </div>
                    <div className='carousel-item'>
                        <img
                            className='d-block w-100 custCarouImg'
                            src={TurlockCaRawWaterPumpStation}
                            alt='Cutsheet for Turlock CA Raw Water Pump Station' 
                        />
                    </div>
                </div>
                <button
                    className='carousel-control-prev'
                    type='button'
                    data-bs-target='#utilPumpStaCarousel'
                    data-bs-slide='prev'
                    >
                    <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                    <span className='visually-hidden'>Previous</span>
                </button>
                <button
                    className='carousel-control-next'
                    type='button'
                    data-bs-target='#utilPumpStaCarousel'
                    data-bs-slide='next'
                    >
                    <span className='carousel-control-next-icon' aria-hidden='true'></span>
                    <span className='visually-hidden'>Next</span>
                </button>
            </div>
        </div>
    )
}