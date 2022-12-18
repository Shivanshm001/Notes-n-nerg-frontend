import React from 'react'
import FeedbackForm from './FeedbackForm'
import ToolsUsed from './ToolsUsed'

export default function About() {
    return (
        <>
            <main className='px-4 min-h-screen bg-gray-100'>
                <div className='p-8'>
                    <div>
                        <h1 className='text-center text-4xl'>Made By <a href="https://shivansh-mishra.onrender.com/" className='font-semibold transform rotate-45 hover:border-b border-black' referrerPolicy='' rel='noopener'>Shivansh Mishra</a></h1>
                    </div>
                </div>
                <FeedbackForm />

                <ul className='list-disc flex items-center justify-center py-4'>
                    <div className='flex flex-col gap-4'>
                        <li>This website was made to make sharing notes, images, pdf easy among classmates.</li>
                        <li>Make it accessable anywhere on any device, just open the website and download the required notes.</li>
                        <li>Maximum file size supported for is 100mb.</li>
                        <li><strong>Anyone</strong> can upload, download, and delete the resources, so please keep it releated to studies only.</li>
                    </div>
                </ul>
                <ToolsUsed />
            </main>
        </>
    )
}
