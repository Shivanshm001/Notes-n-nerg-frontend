import React from 'react'
import toolsData from './toolsUsedData';
import html from '../../../img/html.png'

function ToolsCard({name,image}){
    return (
        <div className='bg-transparent min-w-[9rem] h-auto border border-black'>
            <img src={image} alt={name} />
            <p className='uppercase text-center font-bold'>{name}</p>
        </div>
    )
}

export default function ToolsUsed() {
    return (
        <div className='py-4 flex flex-col justify-center'>
            <p className='font-semibold text-2xl px-2 underline text-center sm:text-start'>TOOLS USED</p>
            <div className='w-full flex overflow-y-hidden overflow-x-scroll gap-10 py-8'>
                {
                    toolsData.map(tool => {
                        return <ToolsCard name={tool.name} image={tool.imgUrl} key={tool.name} />
                    })
                }
            </div>
        </div>
    )
}
