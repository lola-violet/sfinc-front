import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

// Icon Image Imports
import ShaCrossPassIcon from '../../assets/img/pj_icons_blue/tunneling_cross_passages_icon.png';
import FoundaExcaIcon from '../../assets/img/pj_icons_blue/foundation_excavations_icon.png';
import UtilPumpStaIcon from '../../assets/img/pj_icons_blue/utilities_pump_stations_icon.png';
import EnviroSoilIcon from '../../assets/img/pj_icons_blue/environmental_remediation_icon.png';
import HorizFreezeIcon from '../../assets/img/pj_icons_blue/horizontal_freezing_icon.png';


export default function ProjectIconBtns() {
    return (
        <div className='d-flex flex-wrap' >
            <Link 
                to='/projects/shafts-cross-passages' 
                className='d-flex flex-fill'
                >
                <Button
                    className='flex-fill'
                    >
                    <img src={ShaCrossPassIcon} alt='Shafts and Cross-Passages Icon' />
                    <p>Shafts & Cross-Passages</p>
                </Button>
            </Link>
            <Link 
                to='/projects/foundation-excavations' 
                className='d-flex flex-fill'
                >
                <Button
                    className='flex-fill'
                    >
                    <img src={FoundaExcaIcon} alt='Foundation Excavations Icon' />
                    <p>Foundation Excavations</p>
                </Button>
            </Link>
            <Link 
                to='/projects/utilities-pump-stations' 
                className='d-flex flex-fill'
                >
                <Button
                    className='flex-fill'
                    >
                    <img src={UtilPumpStaIcon} alt='Utilities and Pump Stations Icon' />
                    <p>Utilities & Pump Stations</p>
                </Button>
            </Link>
            <Link 
                to='/projects/environmental-soil-remediation' 
                className='d-flex flex-fill'
                >
                <Button
                    className='flex-fill'
                    >
                    <img src={EnviroSoilIcon} alt='Environmental and Soil Remediation Icon' />
                    <p>Environmental & Soil Remediations</p>
                </Button>
            </Link>
            <Link 
                to='/projects/horizontal-freezing' 
                className='d-flex flex-fill'
                >
                <Button
                    className='flex-fill'
                    >
                    <img src={HorizFreezeIcon} alt='Horizontal Freezing Icon' />
                    <p>Horizontal Freezing</p>
                </Button>
            </Link>
        </div>
    )
}
