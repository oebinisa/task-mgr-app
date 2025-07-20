import './App.css'
import TaskList from './components/TaskList'

const sampleTasks = [
  {id: 1, text: "Complete React Tutorial"},
  {id: 2, text: "Build a To-Do app"},
  {id: 3, text: "Learn NextJS"},
];

function App() {
  return (
    <>
      <h1>Task Manager App</h1>
      <TaskList tasks={sampleTasks} />
    </>
  );
}

export default App
