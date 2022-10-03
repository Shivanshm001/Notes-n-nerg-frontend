import React from 'react'
import DeleteAndInfoButton from './DeleteAndInfoButton'
function Tag(props) {
    return (
        <span className="rounded-md bg-orange-400 px-2 py-1 text-xs uppercase text-white">{props.tag}</span>
    )
}
export default function Card(props) {

    return (
        <>
            <article className="mx-2 my-10 max-w-screen-lg rounded-md border border-gray-100 text-gray-700 shadow-md md:mx-auto bg-white min-w-full md:min-w-[70vw]">
                <div className="flex flex-col md:flex-row">
                    <div className="p-5 md:w-full md:p-8">
                        <div className='flex gap-2'>
                            <div className="flex gap-2 justify-center items-center">
                                <Tag tag={props.type} />
                                <Tag tag={props.sem} />
                            </div>
                            <DeleteAndInfoButton createdAt={props.createdAt} id={props.id} />
                        </div>
                        <div>
                            <p className="mt-2 text-xl font-black md:mt-6 md:text-2xl">{props.title}</p>
                            <p className="mt-3 text-gray-600">{props.des}</p>
                        </div>
                        <button className=" rounded-md  text-center py-2 md:mb-0 text-white duration-150 mt-6 md:mt-12 hover:translate-y-[2px] bg-blue-500 hover:bg-blue-600"><a href={props.link} className='px-4 font-semibold py-2 '>Download</a></button>
                    </div>
                </div>
            </article>
        </>
    )
}
