import { useEffect, useRef, useState} from "react"
import { useTaskContext } from "./TaskContext.jsx"
import { Button , Typography , Box } from "@mui/material"
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
        //users should be unable to add an empty task
        if (description.trim() === '') return
        addTask(description)
        setDescription('')
    }

    return (
        <Box>
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
                <Button type = 'submit' variant = 'contained' color = 'inherit' size = 'small'>Add Task</Button>
            </form>
        </Box>
    )
}
export default TaskForm;