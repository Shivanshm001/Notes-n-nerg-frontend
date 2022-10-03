import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { AiOutlineInfoCircle, AiOutlineDelete } from 'react-icons/ai'


export default function DeleteAndInfoButton(props) {
    const [isHidden, setIsHidden] = useState(true);
    const [isDeleting, setIsDeleting] = useState(false);
    const [error, setError] = useState(null);

    async function handleDelete(e) {
        setIsDeleting(true);
        try {
            const { data } = await axios.delete(`https://notes-n-berg.onrender.com/posts/delete/${props.id}`);
            setIsDeleting(false)
        } catch (error) {
            if(error) setError(error);
        }
    }

    return (
        <div className='flex  gap-1 items-center font-semibold '>
            <button className='ml-2' onClick={handleDelete}><AiOutlineDelete /></button>
            <button className='ml-2' onClick={() => { setIsHidden(prev => !prev) }}><AiOutlineInfoCircle /></button>
            <div className='max-w-[80vw] text-xs pl-2'>
                <p className={`text-gray-500 ${isHidden ? 'hidden' : ''} break-words max-w-full`}>ID : {props.id}</p>
                <p className={`text-gray-400 ${isHidden ? 'hidden' : ''}`}>{props.createdAt.slice(0, 10)}</p>
            </div>

        </div>
    )
}
