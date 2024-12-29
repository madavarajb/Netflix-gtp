import React from 'react'
import {ImageLinks} from '../Images/ImageLinks'

const Header = () => {
  return (
    <div className='absolute w-44 z-20  m-7 ml-36' >
        <img src={ImageLinks.Logo} alt='logo'/>
    </div>
  )
}

export default Header