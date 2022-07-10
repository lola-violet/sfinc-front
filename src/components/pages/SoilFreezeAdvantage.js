import React from 'react';
import AdvantageJumbo from '../advantageComponents/AdvantageJumbo';
import AdvantageNavigation from '../advantageComponents/AdvantageNavigation';
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