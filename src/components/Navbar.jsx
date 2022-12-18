import React from 'react'
import { Link } from 'react-router-dom'
import { GrAdd, GrHomeRounded } from 'react-icons/gr'
export default function Navbar() {
  return (
    <>
      <nav className='sticky top-0 bg-white nav-shadow-b-gray-400'>
        <div className=' w-full py-3 px-4 sm:px-8 flex flex-wrap justify-between  items-center '>
          <Link to="/" title='Home'>
            <span className='flex gap-2 justify-center items-center'>
              <p className='text-2xl font-semibold sm:inline' style={{fontFamily: 'Dancing Script'}}>Pictogram</p>
            </span>
          </Link>

          <ul className='flex gap-3 items-center flex-wrap'>
            <Link to="/">
              <li className=' font-semibold text-sm border py-2 tracking-wider px-3 rounded shadow-sm shadow-blue-300 active:border-transparent active:shadow-blue-200 duration-100'>{<GrHomeRounded />}</li>
            </Link>

            <Link to="/upload">
              <li className='font-semibold text-sm border py-2 tracking-wider px-3 rounded shadow-sm shadow-blue-300 active:border-transparent active:shadow-blue-200 duration-100'>{<GrAdd />}</li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  )
}