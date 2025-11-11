import { useState } from 'react'
import EditDescription from './EditDescription'
import { Link } from 'react-router-dom'
//import { tasksSlice } from '../redux/tasksSlice'

//styling imports
import { Checkbox, Button, Typography, Box, Divider } from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'


/**
 * This renders a single Task
 * It's purpose is to show the checkbox, the description, and the edit and delete buttons
 * All the logic of the buttons are passed down from App.jsx
 */
function Task({
  id,
  description = '',
  completed = false,
  deleteTask,
  index,
  updateCompleted,
  updateDescription,
}) {
  // Create a state to conditionally render the edit input
  const [editing, setEditing] = useState(false)

  // after editing, update the description, and then turn off editing
  const handleEdit = (index, description) => {
    updateDescription(index, description)
    setEditing(false)
  }

  // cancel editing
  const handleCancelEdit = () => {
    setEditing(false)
  }

  // on delete, delete the task and then turn off editing (if there is)
  const handleDelete = () => {
    deleteTask(index)
    setEditing(false)
  }

  return (
    <Box>
      <Box
        // The style prop is similar to CSS syntax
        sx ={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 30,
          padding: 1,
       
        }}
        >
          
          <Box
            sx = {{
              display: 'flex', 
              alignItems: 'center', 
              gap: 2,
              flex: 1,
              minWidth: 0,
              
            }}>

              <Checkbox sx = {{'&.Mui-checked': {color: '#505081'}}}
                //type='checkbox'
                checked={completed}
                onChange={(e) => {
                  updateCompleted(index, e.target.checked)
                }}
              />


            {editing ? (
              <EditDescription
                index={index}
                description={description}
                onEdit={handleEdit}
                onCancel={handleCancelEdit}
              />
            ) : (
              <Typography variant = 'body2'
             
                sx={{

                  // optional syntax: if true ? this value : otherwise this value
                  textDecoration: completed ? 'line-through' : 'none',
                }}
              >
                {description}
              </Typography>
            )}
          </Box>

        <Box sx = {{display: 'flex', alignItems: 'center', gap: 1,}}>
          {!completed && 
            <EditOutlinedIcon size = 'small' cursor = 'pointer'
              onClick={() => setEditing(true)}>
              Edit
            </EditOutlinedIcon>}

          <DeleteOutlineIcon size = 'small' cursor = 'pointer'
              onClick={handleDelete}>
              Delete
          </DeleteOutlineIcon>

          <Link to={`/tasks/${id}`}
            //gets rid of the blue hyperlink styling
            style={{ textDecoration: 'none', color: 'inherit' }}>

            <OpenInNewIcon variant = 'contained' color = 'grey' size = 'small'>
              View
            </OpenInNewIcon>

          </Link>
        </Box>

      </Box>
      <Divider sx = {{oppacity: 0.5, width: '100%'}}/>
    </Box>
    
  )
}

export default Task