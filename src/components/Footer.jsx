import React from 'react'
export default function Footer() {
    function takeToTop(){
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
          });
    }
    return (
        <footer className='shadow-md w-full py-2 border-t border-gray-300'>
            <div className='flex justify-between items-center px-4 sm:px-8 text-sm font-medium '>
            <h1 className=' '><a href="https://shivansh-mishra.onrender.com/" className="hover:border-b-2 text-blue-600 duration-75 border-b-blue-600 active:text-blue-600 " target="_blank" >Shivansh Mishra</a></h1>
                <button className='text-xs hover:border-b-2 duration-75 border-black' onClick={takeToTop}>Back to top</button>
            </div>
        </footer>
    )
}
