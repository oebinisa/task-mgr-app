import './App.css'
import TaskItem from './components/TaskItem';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
  const sampleTask = { id: 1, text: "Learn React", completed: false };

  return (
    <>
      <h1>Task Manager App</h1>
     <ThemeSwitcher />
    </>
  );
}

export default App
