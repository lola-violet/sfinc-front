import React from 'react';

// Page Components
import AdvantageJumbo from '../advantageComponents/AdvantageJumbo';
import AdvantageNavigation from '../advantageComponents/AdvantageNavigation';
import WhySoilFreeze from '../advantageComponents/WhySoilFreeze';
import EngineeredStructure from '../advantageComponents/EngineeredStructure';
import CostEfficient from '../advantageComponents/CostEfficient';
import EliminateDewatering from '../advantageComponents/EliminateDewatering';
import AllSoilTypes from '../advantageComponents/AllSoilTypes';
import ShoringBeforeExcavation from '../advantageComponents/ShoringBeforeExcavation';
import FlexibleAdaptable from '../advantageComponents/FlexibleAdaptable';
import EnvironmentallyFriendly from '../advantageComponents/EnvironmentallyFriendly';

export default function SoilFreezeAdvantage() {
    return (
        <div className='container'>
            <AdvantageJumbo />
            <AdvantageNavigation />
            <WhySoilFreeze />
            <EngineeredStructure />
            <CostEfficient />
            <EliminateDewatering />
            <AllSoilTypes />
            <ShoringBeforeExcavation />
            <FlexibleAdaptable />
            <EnvironmentallyFriendly />
        </div>
    )
}