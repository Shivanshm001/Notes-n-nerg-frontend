import React from 'react'
import Posts from './Posts'
export default function Root() {
  return (
    <main className="flex flex-col justify-center items-center px-2 min-h-screen bg-gray-200">
        <Posts />
    </main>
  )
}
