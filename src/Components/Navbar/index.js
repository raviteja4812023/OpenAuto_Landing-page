import React from 'react'
import {IoIosCall} from 'react-icons/io'
import {CiMail} from 'react-icons/ci'

import './index.css';

const Navbar=()=> {
  return (
    <div className='nav-main'>
      <h1 className='nav-heading'>PENAUTO</h1>
      <div className='nav-child'>
    <div className='call-cont'>
    <IoIosCall className='call-icon'/>
    <p className='service'>+769 586 4558</p>
    </div>
    <div className='call-cont'>
    <CiMail className='call-icon'/>
    <p className='service'>service@openauto.ca</p>
    </div>
    <div><button className='button'>Download the mobile app</button></div>
    
    </div>

    </div>
  )
}

export default Navbar