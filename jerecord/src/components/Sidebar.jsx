import React from 'react'
import Navbar from '../components/Navbar'
import Info from '../components/Info'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Navbar />
      <Info />
    </div>
  )
}

export default Sidebar