    import { useState } from 'react'

export default function TodoList() {

    const [tasksList, setTasksList] = useState([]);

    function addTask(formData) {
        const newTaskText = formData.get("task-inpt")
        const createdAt = new Date().toLocaleString();
        const newTaskObj = {
            task: newTaskText,
            createdAt: createdAt,
            isCompleted: false,
        }
        setTasksList(function (prevTasksList) {
            const newTasksList = [...prevTasksList, newTaskObj]
            return newTasksList
        })

    }

    return (
        <div className='bg-white p-4 rounded-lg shadow-lg'>
            <h1 className='text-xl'>To Do List</h1>
            <form action={addTask} className='flex gap-4 items-center' >
                <input name="task-inpt" type="text" placeholder='Enter Task' />
                <button>Add Task</button>
            </form>

            <h1 className='text-xl'>Current Tasks</h1>
            <div className='flex flex-col gap-4'>
                {tasksList.map(function (taskObj, index) {
                    return <div className='flex gap-4 p-4 border rounded-md items-center shadow-lg'>
                        <div className='flex flex-col flex-1'>
                            <p className='text-lg font-bold'>{taskObj.task}</p>
                            <p className='self-end'>{taskObj.createdAt}</p>
                        </div>
                    </div>
                })}
            </div>

        </div>
    )
}


const tasksList = ["awdawd", 'dwadawd'];
const newTasksList = tasksList;


newTasksList.push("dawdawd");