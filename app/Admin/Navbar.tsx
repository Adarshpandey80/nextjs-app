import React from 'react'

function Navbar() {
  return (
    <>
    <nav className='w-full h-16 bg-blue-950 text-white flex items-center justify-between px-4'>
        <div>
            <h2 className='text-2xl font-bold'>Admin Panel</h2>
        </div>
        <ul className='flex space-x-4'>
            <li>Dashboard</li>
            <li>Users</li>
            <li>Settings</li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar