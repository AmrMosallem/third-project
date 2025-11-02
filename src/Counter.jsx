import React, { useState } from 'react'

export default function Counter() {

    let [count, setCount] = useState(0)
    function increase() {
        setCount((prevCount) => {
            return prevCount + 1
        })
    }
    function reset() {
        setCount(5)
    }
    return (
        <div className='border p-4 flex gap-4 items-center'>
            <button onClick={increase}>Increase</button>
            <p>Count: {count} </p>
            <button>Decrease</button>
            <button onClick={reset}>Reset to 5</button>
        </div>
    )
}
// reconciliation
