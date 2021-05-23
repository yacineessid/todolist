import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App m-5">
      <AddTask></AddTask>
      <TaskList></TaskList>
    </div>
  );
}

export default App;
