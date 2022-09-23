import React from 'react';

// CSS
import '../../styles/jumbo.css';

// Components
import Jumbo1 from '../../assets/img/banners/jumbo_1.png';


export default function AdvantageJumbo() {
    return (
        <div className=''>
            <img src={Jumbo1} alt='Jumbotron of pipes in construction site' className='w-100 customJumbo' ></img>
        </div>
    )
}