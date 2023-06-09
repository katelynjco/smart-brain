import React from 'react';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className='f3'>
                {'This Magic Brain will detect faces in your pictures. Give it a try!'}
            </p>
            <div className='center' style={{ width: '650px'}}>
                <div className='center pa4 br3 shadow-5' style={{backgroundColor: 'linear-gradient(89deg, #FF5EDF 0%, #04C8DE)', opacity: '0.8', backgroundImage: 'linear-gradient(135deg, #04C8DE 25%, transparent 25%), linear-gradient(225deg, #04C8DE 25%, transparent 25%), linear-gradient(45deg, #04C8DE 25%, transparent 25%), linear-gradient(315deg, #04C8DE 25%, #FF5EDF 25%)', backgroundPosition: '10px 0, 10px 0, 0 0, 0 0', backgroundSize: '20px 20px', backgroundRepeat: 'repeat'}}>
                    <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
                    <button 
                    className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
                    onClick={onButtonSubmit}
                    >Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;