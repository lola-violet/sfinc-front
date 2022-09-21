import React from 'react';
import { Link } from 'react-router-dom';

// Icon Image Imports
import ShaCrossPassIcon from '../../assets/img/pj_icons_blue/tunneling_cross_passages_icon.png';
import FoundaExcaIcon from '../../assets/img/pj_icons_blue/foundation_excavations_icon.png';
import UtilPumpStaIcon from '../../assets/img/pj_icons_blue/utilities_pump_stations_icon.png';
import EnviroSoilIcon from '../../assets/img/pj_icons_blue/environmental_remediation_icon.png';
import HorizFreezeIcon from '../../assets/img/pj_icons_blue/horizontal_freezing_icon.png';


export default function ProjectIconBtns() {
    return (
        <div className='row'>
            <div className='d-inline col-sm-12 col-lg-2'>
                <Link to='/projects/shafts-cross-passages' ><img src={ShaCrossPassIcon} alt='Shafts and Cross-Passages Icon' /></Link>
                <Link to='/projects/shafts-cross-passages' ><h5>Shafts & Cross-Passages</h5></Link>
            </div>
            <div className='d-inline col-sm-12 col-lg-2'>
                <Link to='/projects/foundation-excavations' ><img src={FoundaExcaIcon} alt='Foundation Excavations Icon' /></Link>
                <Link to='/projects/foundation-excavations' ><h5>Foundation Excavations</h5></Link>
            </div>
            <div className='d-inline col-sm-12 col-lg-2'>
                <Link to='/projects/utilities-pump-stations' ><img src={UtilPumpStaIcon} alt='Utilities and Pump Stations Icon' /></Link>
                <Link to='/projects/utilities-pump-stations' ><h5>Utilities & Pump Stations</h5></Link>
            </div>
            <div className='d-inline col-sm-12 col-lg-2'>
                <Link to='/projects/environmental-soil-remediation' ><img src={EnviroSoilIcon} alt='Environmental and Soil Remediation Icon' /></Link>
                <Link to='/projects/environmental-soil-remediation' ><h5>Environmental & Soil Remediation</h5></Link>
            </div>
            <div className='d-inline col-sm-12 col-lg-2'>
                <Link to='/projects/horizontal-freezing' ><img src={HorizFreezeIcon} alt='Horizontal Freezing Icon' /></Link>
                <Link to='/projects/horizontal-freezing' ><h5>Horizontal Freezing</h5></Link>
            </div>
        </div>
    )
}