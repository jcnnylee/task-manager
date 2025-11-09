import Task from './Task';
import {useTaskContext} from './TaskContext'

function TaskList() {
    // tasks[0] = {
    //     completed:false,
    //     description: "Eat eggs",
    // }

    const {tasks} = useTaskContext()

    return (
        <div>
            {tasks.length > 0 ? (
                tasks.map((task, index) => (
                <Task 
                    key={index} 
                    description={task.description}
                    completed = {task.completed} 
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