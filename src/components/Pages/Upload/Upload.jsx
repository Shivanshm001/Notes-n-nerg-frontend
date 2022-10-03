import React, { useState } from 'react'
import Form from './Form'

export default function Upload() {
  const [fileType, setFileType] = useState("image");
  return (
    <>
      <main className="flex flex-col items-center min-h-screen px-4 sm:px-0 bg-gray-50" >

        <div className='py-4 text-center'>
          <h1 className='font-bold'>Upload any image pdf or url.</h1>
          <h1 className='font-bold'>Maximum supported size 50mb.</h1>
        </div>
        <hr className='border border-gray-300 px-4 w-full m-2' />
        <div className='grid grid-cols-3 w-full sm:w-[60vw] gap-10 sm:gap-20 border-b mb-4 border-gray-200'>
          <button className={`px-2 py-1 border-b-2 ${fileType === "image" ? "border-blue-500" : "border-none"}`} onClick={() => setFileType("image")}>IMAGE</button>
          <button className={`px-2 py-1 border-b-2 ${fileType === "pdf" ? "border-blue-500" : "border-none"}`} onClick={() => setFileType("pdf")}>PDF</button>
          {/* <button className={`px-2 py-1 border-b-2 ${fileType === "link"?"border-blue-500":"border-none"}`} onClick={()=> setFileType("link")}>LINK</button> */}
        </div>
        <Form filetype={fileType} />
      </main>
    </>
  )
}
