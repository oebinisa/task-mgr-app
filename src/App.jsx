import './App.css'
import TaskList from './components/TaskList'
import TaskManager from './components/TaskManager';

// const sampleTasks = [
//   {id: 1, text: "Complete React Tutorial"},
//   {id: 2, text: "Build a To-Do app"},
//   {id: 3, text: "Learn NextJS"},
// ];

function App() {
  return (
    <>
      <h1>Task Manager App</h1>
      <TaskManager />
    </>
  );
}

export default App
