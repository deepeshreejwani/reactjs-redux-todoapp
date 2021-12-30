import './style/main.css';
import Todos from './components/Todos';
import Displaytodos from './components/Displaytodos';


function App() {
  return (
    <div>
      <div>
        <h1>Todo App</h1>
      </div>
      <Todos/>
      <Displaytodos />
    </div>
  );
}

export default App;
