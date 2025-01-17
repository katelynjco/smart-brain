import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl, box}) => {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div className='center absolute mt2'>
                <img id='inputimage' alt='' src= {imageUrl} width='500px' height='auto' />
                <div className='bounding-box' style= {{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
        </div>
    );
}

export default FaceRecognition;