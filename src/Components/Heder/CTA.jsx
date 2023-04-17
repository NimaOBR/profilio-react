import React from 'react';
import CTVDownload from '../../img/ctv/english3.pdf'
const CTA = () => {
    return (
        <div className='cta'>
            <a className='btn' href={CTVDownload} download>Download CV</a>
            <a className='btn btn-primary' href="#Contact">Let`s Talk</a>
        </div>
    );
};

export default CTA;