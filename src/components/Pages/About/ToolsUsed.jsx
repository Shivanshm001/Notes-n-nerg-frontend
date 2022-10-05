import React from 'react'

import html from '../../../img/html.png'
import css from "../../../img/css.png"
import tailwindcss from "../../../img/tailwind.png"
import js from "../../../img/js.png"
import reactjs from "../../../img/reactjs.png"
import nodejs from "../../../img/nodejs.png"
import expressjs from "../../../img/expressjs.png"
import mongodb from "../../../img/mongodb.png"
import multer from "../../../img/multer.png"
import s3 from "../../../img/s3.png"
import emailjs from "../../../img/emailjs.png"

function ToolsCard({ name, image }) {
    return (
        <div className='bg-white min-w-[9rem] h-auto rounded shadow-md shadow-gray-500'>
            <div className='gap-2 flex flex-col justify-between items-center py-2'>
                <img src={image} alt={name} className="w-1/2 h-auto"/>
                <p className='uppercase text-center font-bold'>{name}</p>
            </div>
        </div>
    )
}

export default function ToolsUsed() {
    return (
        <div className='py-4 flex flex-col justify-center '>
            <h1 className='text-center font-semibold text-xl'>TOOLS AND APIS USED</h1>
            <div className='w-full flex overflow-y-hidden overflow-x-scroll gap-10 py-8 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-300'>
                <ToolsCard name="html" image={html} />
                <ToolsCard name="css" image={css} />
                <ToolsCard name="tailwindcss" image={tailwindcss} />
                <ToolsCard name="Javascript" image={js} />
                <ToolsCard name="reactjs" image={reactjs} />
                <ToolsCard name="nodejs" image={nodejs} />
                <ToolsCard name="expressjs" image={expressjs} />
                <ToolsCard name="mongodb" image={mongodb} />
                <ToolsCard name="multer" image={multer} />
                <ToolsCard name="Aws s3" image={s3} />
                <ToolsCard name="emailjs" image={emailjs} />
            </div>
        </div>
    )
}
