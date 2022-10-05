import React from 'react'
import FeedbackForm from './FeedbackForm'
import TextContent from './TextContent'
import ToolsUsed from './ToolsUsed'

export default function About() {
    return (
        <>
            <main className='px-4 min-h-screen bg-gray-100'>
                <TextContent />
                <FeedbackForm />
                <ToolsUsed />
            </main>
        </>
    )
}
