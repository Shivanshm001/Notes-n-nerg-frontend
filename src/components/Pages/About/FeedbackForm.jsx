import React from 'react'
import { useState } from 'react'
import axios from 'axios';

const inputStyle = 'border border-gray-500 px-4 py-2 placeholder:text-gray-400 placeholder:text-sm w-full focus:placeholder:text-gray-300 rounded'

const Label = (props) => {
    return <label htmlFor={props.for} className="font-semibold text-xs pl-2 pb-2">{props.text}</label>
}

export default function FeedbackForm() {
    const [feedback, setFeedback] = useState({
        name: "",
        subject: "",
        msg: ""
    });
    const [isSending, setIsSending] = useState(false);
    const handleInput = (event) => {
        const { name, value } = event.target;
        setFeedback(prevFeedback => {
            return {
                ...prevFeedback,
                [name]: value
            }
        });
    }

    const handleForm = async (event) => {
        setIsSending(true);
        event.preventDefault();
        try {
            // https://notes-n-berg.onrender.com
            const response = await axios.post("https://notes-n-berg.onrender.com/about", feedback);
            if(response.status === 200) alert("Sent Succcessfully");
            setFeedback({
                name: "",
                subject: "",
                msg: ""
            });
        } catch (error) {
            console.log(error);
            alert("Something went wrong")
        }
        setIsSending(false);
    }
    return (
        <div className=' flex flex-col justify-end gap-3 border-t border-gray-400 px-4'>
            <h1 className='mt-10 font-semibold text-sm'>Give a feedback or report a bug.</h1>
            <form onSubmit={handleForm} className="flex flex-col gap-4 my-4">
                    <div>
                        <Label for="name" text="Name*" />
                        <input
                        type="text"
                        name='name'
                        id='name'
                        onChange={handleInput}
                        value={feedback.name}
                        className={`${inputStyle}`}
                        required={true}
                    />
                    </div>

                    <div>
                       <Label for="subject" text="Subject*"/>
                        <input
                        type="text"
                        name="subject"
                        id="subject"
                        onChange={handleInput}
                        value={feedback.subject}
                        className={`${inputStyle}`}
                        required={true}
                    />
                    </div>

                <div>
                    <Label for="msg" text="Message*" />
                    <textarea
                    name="msg"
                    type="text"
                    id="msg"
                    onChange={handleInput}
                    value={feedback.msg}
                    className={`${inputStyle} sm:h-[8rem]`}
                    required={true}
                />
                </div>
                <div className='px-1 sm:px-2'>
                    <button className='bg-blue-500 font-semibold hover:bg-blue-700 rounded max-w-min text-white py-2 px-4 float-right'>{isSending ? <h1>Sending...</h1> : <h1>Send</h1>}</button>
                </div>
            </form>
        </div>
    )
}
