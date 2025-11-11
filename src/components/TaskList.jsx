import Task from './Task';
import {useTaskContext} from './TaskContext'

//import styling components from MUI
import {Box, Stack, Typography,} from '@mui/material';

function TaskList() {
    // tasks[0] = {
    //     completed:false,
    //     description: "Eat eggs",
    // }

    const {tasks, deleteTask, updateCompleted, updateDescription} = useTaskContext()

    return (
        <Box
            sx = {{
                backgroundColor: 'white',
                borderRadius: 2,
                boxShadow: 3,
                paddingRight: 1
            }}
        >
            {tasks.length > 0 ? (
                tasks.map((task, index) => (
                <Task 
                    key={index} 
                    index = {index}
                    id = {task.id}
                    description={task.description}
                    completed = {task.completed} 
                    deleteTask = {deleteTask}
                    updateCompleted={updateCompleted}
                    updateDescription = {updateDescription}
                />
            ))
            ) : (
                <Typography variant = 'subtitle1'>No tasks to display!</Typography>
            )}
            {tasks.length > 0 && 
                <Typography variant = 'subtitle2' marginY = {2} textAlign = 'center' color = 'gray'>
                    There are {tasks.length} tasks in the list
                </Typography>}
        </Box>
    );
}
export default TaskList;