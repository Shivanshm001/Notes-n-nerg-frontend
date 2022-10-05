import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { AiOutlineInfoCircle, AiOutlineDelete } from 'react-icons/ai'
import {baseUrl} from '../../../websiteUrl';

export default function DeleteAndInfoButton({id,createdAt}) {
    const [isHidden, setIsHidden] = useState(true);
    const [error, setError] = useState(null);

    async function handleDelete(e) {
        try {
            const response = await axios.delete(`${baseUrl}/posts/delete/${id}`);
            if(response.status === 200) {
                alert("Deleted Successfully.");
                window.location.reload();
            }
        } catch (err) {
            if(err) setError(err);
            console.log(error);
            alert("Something went wrong!");
        }
    }

    return (
        <div className='flex  gap-1 items-center font-semibold '>
            <button className='ml-2' onClick={handleDelete}><AiOutlineDelete /></button>
            <button className='ml-2' onClick={() => { setIsHidden(prev => !prev) }}><AiOutlineInfoCircle /></button>
            <div className='max-w-[80vw] text-xs pl-2'>
                <p className={`text-gray-500 ${isHidden ? 'hidden' : ''} break-words max-w-full`}>ID : {id}</p>
                <p className={`text-gray-400 ${isHidden ? 'hidden' : ''}`}>{createdAt.slice(0, 10)}</p>
            </div>

        </div>
    )
}
