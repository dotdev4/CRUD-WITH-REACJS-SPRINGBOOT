import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <nav className='flex flex-row justify-between border-b border-gray-600 h-14 '>
            <ul className='flex justify-center pt-3.5 pl-2'>
                <li><a href="#">CRUD</a></li>
            </ul>
            <ul className='mt-3'>
                <li><Link className='mr-2 p-1 rounded-md bg-blue-800' to='/adduser'>Add User</Link></li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar