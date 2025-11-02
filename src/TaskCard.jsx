import React from 'react'

export default function TaskCard({ task, createdAt, handleDeleteTask }) {
    return (
        <div className='flex gap-4 p-4 border rounded-md items-center shadow-lg'>
            <div className='flex flex-col flex-1'>
                <p className='text-lg font-bold'>{task}</p>
                <p className='self-end'>{createdAt}</p></div>
            <button onClick={handleDeleteTask}>Delete</button>
        </div>
    )
}
