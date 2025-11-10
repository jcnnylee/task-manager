import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

//styling imports
import { Button, Box , Stack, Typography } from '@mui/material'
import ListAltIcon from '@mui/icons-material/ListAlt'
import { Link } from 'react-router-dom'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

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
            
            <Box
                sx = {{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '400px',
                    aspectRatio: '1 / 1',
                    backgroundColor: 'lightgray',
                    margin: 8,
                    borderRadius: 10,
                    //padding: 5,

                }}> 

                <Link to = '/tasks' 
                    style = {{
                        textDecoration: 'none',
                        color: 'inherit'
                }}>
                <HighlightOffIcon fontSize="large" 
                    sx = {{
                        position: 'absolute',
                        top: 20,
                        left: 20,
                        cursor: 'pointer',
                    }}
                ></HighlightOffIcon>
                </Link>

                <Stack direction = 'column' spacing={3} alignItems = 'center'>
                    <Typography variant = 'h4'>Task Detail</Typography>
                    <Typography variant = 'h6'>Description: {task.description}</Typography>
                    <Typography variant = 'subtitle1'>Completed: {task.completed ? 'Yes' : 'No'}</Typography>
                </Stack>

            </Box>
        </Stack>
    )
}

export default TaskDetailPage