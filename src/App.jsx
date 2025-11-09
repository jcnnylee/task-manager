import { Route, Routes } from "react-router-dom"
import { TaskDetailPage, HomePage, TasksPage } from "./pages"


function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path='tasks' >
        <Route index element = {<TasksPage />} />
        <Route path = ':id' element = {<TaskDetailPage />} />
      </Route>
    </Routes>
  )
}

export default App