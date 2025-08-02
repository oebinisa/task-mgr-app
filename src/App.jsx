import './App.css'
import TaskItem from './components/TaskItem';

function App() {
  const sampleTask = { id: 1, text: "Learn React", completed: false };

  return (
    <>
      <h1>Task Manager App</h1>
      <TaskItem task={sampleTask}/>
    </>
  );
}

export default App
