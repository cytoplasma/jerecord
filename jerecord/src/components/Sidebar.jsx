import React from 'react'
import Navbar from '../components/Navbar'
import Users from '../components/Users'
import Chats from '../components/Chats'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Navbar />
      <Users />
      <Chats />
    </div>
  )
}

export default Sidebar