import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import {baseUrl} from '../../../websiteUrl';
const inputStyle = 'w-full rounded border border-gray-400 px-3 py-2 outline-none ring-blue-400 focus:ring-1'

const Label = (props) => {
    return <label htmlFor={props.for} className="text-sm mb-2 block font-medium">{props.text}</label>
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
            const response = await axios.post(`${baseUrl}/about`, feedback);
            if (response.status === 200) alert("Sent Succcessfully");
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
        <>
            <div className="mx-auto py-10 px-0 mb-20 flex w-full md:w-1/2 max-w-screen-lg flex-col flex-wrap  overflow-hidden rounded-md text-gray-900 md:flex-row md:border md:shadow-lg shadow-black bg-white">
                <h1 className='text-center text-lg font-semibold w-full md:my-4'>Give feedback or report a bug.</h1>
                <form onSubmit={handleForm} className="mx-auto w-full max-w-xl border-gray-200 px-10 py-8 md:px-8">
                    <div className="mb-4">
                        <Label for="name" text="Name:" />
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

                    <div className="mb-4">
                        <Label for="subject" text="Subject:" />
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

                    <div className="mb-4">
                        <Label for="message" text="Message:" />
                        <textarea
                            name="msg"
                            type="text"
                            id="msg"
                            onChange={handleInput}
                            value={feedback.msg}
                            className={`${inputStyle} sm:h-[8rem]`}
                            required={true}
                        ></textarea>
                    </div>
                    <div className="flex items-center">
                        <div className="flex-1"></div>
                        <button className="rounded-md bg-blue-500 px-6 py-2 text-center font-semibold text-white hover:bg-blue-600" type="submit">{isSending ? <h1>Sending...</h1> : <h1>Send</h1>}</button>
                    </div>
                </form>
            </div>
        </>
    )
}
