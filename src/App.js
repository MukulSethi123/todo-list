import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import TaskList from "./components/TaskList";
import { useDispatch } from "react-redux";
import SuperList from "./components/SuperList";
function App() {
  return (
    <div className="App">
      <h1>to-do-list</h1>
      <div className="app-container">
        <div className="super-list">
          <h1>All Lists</h1>
          <SuperList />
        </div>
        <div className="main-app">
          <Form />
          <TaskList />
        </div>
      </div>
    </div>
  );
}

export default App;
