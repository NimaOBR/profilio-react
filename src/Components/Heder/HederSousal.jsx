import React from 'react';

import {FiInstagram} from 'react-icons/fi'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'

import './Heder.css'
const HederSousal = () => {
    return (
        <div className='heder-soushalmedia'>
            <a href="https://instagram.com/nemavo?igshid=YmMyMTA2M2Y=" target='_blank' ><FiInstagram /></a>
            <a href="https://github.com/NimaOBR?tab=repositories"  target='_blank' ><AiFillGithub /></a>
            <a href="https://www.linkedin.com/in/nima-mohammadi-b5880122b/"  target='_blank' ><AiFillLinkedin /></a>
        </div>
    );
};

export default HederSousal;