import Task from './Task';
import {useTaskContext} from './TaskContext'

function TaskList() {
    // tasks[0] = {
    //     completed:false,
    //     description: "Eat eggs",
    // }

    const {tasks, deleteTask, updateCompleted, updateDescription} = useTaskContext()

    return (
        <div>
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
                <p>No tasks to display!</p>
            )}
            {tasks.length > 0 && <p>There are {tasks.length} tasks in the list</p>}
        </div>
    );
}
export default TaskList;