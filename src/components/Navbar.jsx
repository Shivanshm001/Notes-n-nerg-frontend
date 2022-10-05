import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/Logo-2.png'

export default function Navbar() {
  return (
    <>
      <nav className='sticky top-0 bg-white nav-shadow-b-gray-400'>
        <div className=' w-full py-3 px-4 sm:px-8 flex flex-wrap justify-between  items-center '>
          <Link to="/" title='Home'>
            <span className='flex gap-2 justify-center items-center'>
              <img className='bg-green-400 py-1 px-2 rounded w-[2.5rem] bg-opacity-90 outline-gray-300 hover:outline' src={logo} alt="logo_bca_notes" /> <p className='text-lg font-semibold hidden sm:inline'>BCA NOTES</p>
            </span>
          </Link>

          <ul className='flex gap-3 items-center flex-wrap'>

            <li className=' hover:border-b-2 hover:text-blue-600  px-1 border-b-blue-600 active:text-blue-600 '><Link to="/">Home</Link></li>

            <li className=' hover:border-b-2 hover:text-blue-600  px-1 border-b-blue-600 active:text-blue-600 '><Link to="/about">About</Link></li>

            <Link to="/upload">
              <li className='font-semibold text-sm border py-2 tracking-wider px-3 rounded border-blue-400 hover:border-transparent hover:bg-blue-400 hover:text-white duration-150'>Upload</li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  )
}