import React from 'react'

import {Link} from 'react-router-dom'
function NavBar() {
  return (
     <>
     
     <Link to={'/'}>Home</Link>
              <Link to={'about'}>About</Link>
              <Link to={'dashboard'}>Dashboard</Link>
     
     </>

  )
}

export default NavBar