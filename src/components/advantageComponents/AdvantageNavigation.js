import React from 'react';
import { Button } from 'react-bootstrap';

// CSS
import '../../styles/advantage.css';

export default function AdvantageNavigation() {
    return (
        <div className='d-flex flex-wrap advNav'>
            {/* <Button
                href='/advantage'
                className='flex-fill advNavBox'
                >Why SoilFreeze?
            </Button> */}
            <Button
                href='#engineered-structure'
                className='flex-fill advNavBox'
                >Engineered Structure
            </Button>
            <Button
                href='#cost-efficient'
                className='flex-fill advNavBox'
                >Cost Efficient
            </Button>
            <Button
                href='#eliminate-dewatering'
                className='flex-fill advNavBox'
                >Eliminate Dewatering
            </Button>
            <Button
                href='#all-soil-types'
                className='flex-fill advNavBox'
                >Effective in All Soil Types
            </Button>
            <Button
                href='#shoring-before-excavation'
                className='flex-fill advNavBox'
                >Shoring Completely Formed Before Excavation Begins
            </Button>
            <Button
                href='#flexible-adaptable'
                className='flex-fill advNavBox'
                >Flexible & Adaptable
            </Button>
            <Button
                href='#environmentally-friendly'
                className='flex-fill advNavBox'
                >Friendly to the Community & Environment
            </Button>
        </div>

    )
}