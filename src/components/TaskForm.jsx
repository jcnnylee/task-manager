import { useEffect, useRef, useState} from "react"
import { useTaskContext } from "./TaskContext.jsx"
// import { useSelector } from "react-redux"

function TaskForm() {
    const [description, setDescription] = useState('')
    const { addTask } = useTaskContext()
    const inputRef = useRef (null)

    // const tasks = useSelector ((state) => state.tasks)

    // console.log('FROM TASK FORM. I GOT TASKS HERE: ', tasks)

    useEffect (() => {
        inputRef?.current?.focus()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(description)
        setDescription('')
    }

    return (
        <form onSubmit = {handleSubmit}>
            <label htmlFor = "description">
                Description
            </label>
            <input 
                type = "text" 
                id = "description" 
                name = "description"
                value = {description}
                ref = {inputRef}
                onChange = {(e) => {setDescription (e.target.value)}}
            />
            <button type = "submit">Add Task</button>
        </form>
    )
}
export default TaskForm;