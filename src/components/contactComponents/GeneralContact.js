import React from 'react';


// Page Components
// import transparentLogo from  '../../assets/img/logo_transparentback.png';


export default function GeneralContact() {
    return (
        <div>
            <h1>Contact Us</h1>
            <div className='genContactBox'>
                {/* <img src={transparentLogo} alt='SoilFreeze Logo' /> */}
                <div className='addressBox'>
                    <a
                        href='https://www.google.com/maps/place/SoilFreeze,+Inc/@47.7823445,-122.1571871,17z/data=!3m1!4b1!4m5!3m4!1s0x54900ec702b1fcfd:0x42be16d0b5514d3a!8m2!3d47.7822931!4d-122.1527'
                        target='_blank'
                        rel='noreferrer noopener'
                        >
                        <p>
                            5931 238th St SE, Suite 201
                            <br></br>
                            Woodinville, WA 98072
                        </p>
                    </a>
                </div>
                <div className='officeDirectBox'>
                    <a
                        href='tel:+1-206-420-2759'
                        >
                        <p>
                            Office: 206.420.2759
                        </p>
                    </a>
                    <a
                        href='fax:+4259498467'
                        >
                        <p>
                            Fax: 425.949.8467
                        </p>
                    </a>
                    <a
                        href='mailto:info@soilfreeze.com'
                        >
                        <p>
                            Email: info@soilfreeze.com
                        </p>
                    </a>
                </div>
            </div>
        </div>
    )
}