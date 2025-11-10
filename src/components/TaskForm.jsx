import { useEffect, useRef, useState} from "react"
import { useTaskContext } from "./TaskContext.jsx"
import { Button , Typography , Box, TextField } from "@mui/material"
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
            <form onSubmit = {handleSubmit}
                style = {{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                }}>

                {/* <Typography variant = 'subtitle1'>
                    Description
                </Typography> */}

              
                <TextField variant = 'outlined' size = 'small'
                
                    type = "text" 
                    id = "description" 
                    name = "description"
                    value = {description}
                    ref = {inputRef}
                    onChange = {(e) => {setDescription (e.target.value)}}
                    placeholder = "Enter task description"

                    sx = {{
                        width: '600px',
            
                    }}
                    
                />
            
                <Button
                    type = 'submit' variant = 'contained' color = 'primary' size = 'small'
                    sx = {{
                        height: '38px',
                        borderRadius: '50px'
                    }}
                >
                    Add Task
                </Button>
                        
            </form>
        </Box>
    )
}
export default TaskForm;