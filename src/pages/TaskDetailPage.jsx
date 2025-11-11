import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { shadows } from '@mui/system'


//styling imports
import { Button, Box , Stack, Typography, } from '@mui/material'
import ListAltIcon from '@mui/icons-material/ListAlt'
import { Link } from 'react-router-dom'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { SocialDistance } from "@mui/icons-material";

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
        
        <Stack alignItems='center' marginTop={10}>
            {/*Box container that wraps the entire taskDescription in a white background */}
            <Box
                sx = {{

                    width: "400px",
                    margin: 4,
                    backgroundColor: "white",
                    borderRadius: 3,
                    boxShadow: 3,
                    position: "relative",
                    padding: 8,
                    display: 'flex',
                    flexDirection: 'column',
        

                }}> 

                {/*The cancel icon that links itself back to the tasks page */}
                <Link to = '/tasks' 
                    style = {{
                        textDecoration: 'none',
                        color: 'inherit'
                }}>
                <HighlightOffIcon fontSize="medium" 
                    sx = {{
                        position: 'absolute',
                        top: 15,
                        left: 15,
                        cursor: 'pointer',
                    }}
                ></HighlightOffIcon>
                </Link>
                

                
                    <Typography variant = 'h6' sx ={{marginBottom: 1}}>Task Detail</Typography>
                    <Typography variant = 'subtitle2'>Description</Typography>
                        <Box
                            sx ={{
                                backgroundColor: '#f0f0f0',
                                border: '1px solid',
                                borderColor: 'black',
                                borderRadius: 3,
                                padding: 1,
                                paddingLeft: 2,
                            }}>
                            <Typography variant = 'subtitle2'> {task.description}</Typography>
                        </Box>
                   
                    <Typography variant = 'subtitle2'>{task.completed ? 'Completed' : 'Not Completed'}</Typography>
              

            </Box>
        </Stack>
    )
}

export default TaskDetailPage