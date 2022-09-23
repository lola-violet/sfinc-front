import React from 'react';
import { Button } from 'react-bootstrap';

// CSS
import '../../styles/about.css';

export default function AboutNavigation({ currentPage, handlePageChange }) {
    return (
        <div>
            <div className='d-flex flex-wrap abtNav'>
                <Button 
                    href='#overview' 
                    onClick={() => handlePageChange('AboutOverview')}
                    className='flex-fill abtNavBox'
                    >Overview
                </Button>
                <Button 
                    href='#leadership' 
                    onClick={() => handlePageChange('Leadership')}
                    className='flex-fill abtNavBox'
                    >Leadership
                </Button>
                <Button 
                    to='#company-history' 
                    onClick={() => handlePageChange('CompanyHistory')} 
                    className='flex-fill abtNavBox'
                    >Company History & Patents
                </Button>
                <Button 
                    to='#freezing-history' 
                    onClick={() => handlePageChange('FreezingHistory')} 
                    className='flex-fill abtNavBox'
                    >Ground Freezing History
                </Button>
                <Button 
                    to='#safety' 
                    onClick={() => handlePageChange('Safety')} 
                    className='flex-fill abtNavBox'
                    >Safety
                </Button>
            </div>
        </div>
    )
}