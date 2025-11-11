import { useEffect } from 'react'
//import "../App.css"
import { TaskContext, TaskForm, TaskList } from "../components"
import axios from 'axios'
import { tasksSlice } from '../redux/tasksSlice'
import { useDispatch, useSelector } from 'react-redux'

import { Button, Box , Stack, Typography } from '@mui/material'
import ListAltIcon from '@mui/icons-material/ListAlt'
import { Link } from 'react-router-dom'

function TasksPage() {
  // const [taskList, setTaskList] = useState([])
  const taskList = useSelector ((state) => state.tasks)

  const dispatch = useDispatch()
  const actions = tasksSlice.actions

  useEffect(() => {
    getTasks()
  }, [])

  async function getTasks() {
    try {
      const response = await axios.get('http://68ebf9e7eff9ad3b14010278.mockapi.io/api/tasks'
      )
    const {data} = response

    // dispatch({
    //   type: 'set_tasks', 
    //   tasks: data,
    // })
    dispatch(actions.setTasks (data))

    } catch (error) {
      console.error("Something went wrong", error)
      dispatch(actions.setTasks([]))
    }
  }


  // const tasks = [
  //   {
  //     completed: true,
  //     description: "Buy eggs",
  //   },
  //   {
  //     completed: false,
  //     description: "Eat lunch",
  //   },
  //   {
  //     completed: false,
  //     description: "Do Homework",
  //   },
  //   {
  //     completed: true,
  //     description: "Drink water",
  //   }

  // ]
  // const [taskList, setTaskList] = useState(tasks)

  function deleteTask(index) {
    dispatch(actions.deleteTask(index))
  }

  function addTask(description) {
    dispatch(actions.addTask(description))
  }

  function updateTaskField(index, field, value) {
    // dispatch ({
    //   type: 'update_task',
    //   index,
    //   field,
    //   value,
    // })
    dispatch (actions.updateTask ({ index, field, value }))
  }

  function updateCompleted(index, completed) {
    updateTaskField(index, 'completed', completed)
    }

  function updateDescription (index, description) {
    updateTaskField(index, 'description', description)
  }

  return (

    <Stack alignItems='center' marginTop={8}>

      <Stack spacing = {4} margin = {6}>
        <TaskContext
            value = {{
              tasks: taskList,
              addTask,
              deleteTask,
              updateCompleted,
              updateDescription,
            }}
            >
            <TaskForm />
            <TaskList/>
        </TaskContext>
      </Stack>

    </Stack>
    
    
  )
    
}

export default TasksPage