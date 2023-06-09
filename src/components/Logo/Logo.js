import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';

const Logo = () => {
    return (
       <div className='ma4 mt0'>
            <Tilt className="br2 shadow-5" style={{ height: '150px', width: '150px', background: 'linear-gradient(89deg, #04C8DE 0%, #FF5EDF)'}}>
                <div className='Tilt-inner pa3'>
                    <img style={{paddingTop: '3px'}} alt='logo' src={ brain }/>
                </div>
            </Tilt>
       </div>
    );
}

export default Logo;