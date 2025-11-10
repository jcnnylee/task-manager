import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

//styling imports
import { Button, Box , Stack, Typography } from '@mui/material'
import ListAltIcon from '@mui/icons-material/ListAlt'
import { Link } from 'react-router-dom'

function TaskDetailPage() {
    // useParams from React router to get the id from the URL
    const {id} = useParams()

    // Create a state to store the task we want to display
    const [task, setTask] = useState(null)

    // Runs on mount and fetches API to get data for the single task
    useEffect(() => {
        getTask()
    }, [])

    async function getTask() {
        try {
            //API call
            const response = await axios.get(`http://68ebf9e7eff9ad3b14010278.mockapi.io/api/tasks/${id}`
            )

            //destruct data
            const {data} = response

            //set the state to task we got back
            setTask(data) 
        } catch (error) {

            //in the case of an error, console.error and reset task to null
            console.error(error)
            setTask(null)

        }
    }
    
    if (!task) return null

    return (
        
        <Stack alignItems='center' marginTop={4}>
            <Stack direction = 'row' spacing={1} alignItems = 'center'>
                <ListAltIcon/>
                <Typography variant = 'h6' fontweight = 'medium'>
                    Task Manager
                </Typography>
            </Stack>

            <h1>Task Detail</h1>
            <p>Description: {task.description}</p>
            <p>Completed: {task.completed ? 'Yes' : 'No'}</p>
        </Stack>
    )
}

export default TaskDetailPage