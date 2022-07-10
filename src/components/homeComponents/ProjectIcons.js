import React from 'react';
import TunnelingIcon from '../../assets/img/pj_icons_blue/tunneling_shafts_icon.png';
import FoundationIcon from '../../assets/img/pj_icons_blue/foundations_excavations_icon.png';
import UtilitiesIcon from '../../assets/img/pj_icons_blue/utilities_pump_stations_icon.png';
import EnviroIcon from '../../assets/img/pj_icons_blue/environmental_remediation_icon.png';
import MiningIcon from '../../assets/img/pj_icons_blue/mining_icon.png';

export default function ProjectIcons() {
    return (
        <div>
            <img src={TunnelingIcon} alt='Tunneling and Shafts Icon' />
            <img src={FoundationIcon} alt='Foundation Excavations Icon' />
            <img src={UtilitiesIcon} alt='Utilities and Pump Stations Icon' />
            <img src={EnviroIcon} alt='Environmental / Soil Remediation Icon' />
            <img src={MiningIcon} alt='Mining Icon' />
        </div>
    )
}