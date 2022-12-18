import React from 'react'
import { Link } from 'react-router-dom';
export default function Footer() {
    // function moveToTop() {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'smooth'
    //     });
    // }
    return (
        <footer className='shadow-md w-full py-2 border-t border-gray-300'>
            <ul className='flex justify-between items-center px-4 sm:px-8 text-sm font-medium '>
                <li className=' '><a href="https://shivansh-mishra-t1vo.onrender.com" rel='noreferrer' className="hover:border-b-2 text-blue-600 duration-75 border-b-blue-600 active:text-blue-600 " target="_blank" >Shivansh Mishra</a></li>
                <li className=' hover:border-b-2 hover:text-blue-600  px-1 border-b-blue-600 active:text-blue-600 '><Link to="/about">About</Link></li>
            </ul>

        </footer>
    )
}


{/* <button className='text-xs hover:border-b-2 duration-75 border-black' onClick={moveToTop}>Back to top</button> */}