import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import TaskList from "./components/TaskList";
import { useDispatch } from "react-redux";
function App() {
  return (
    <div className="App">
      <h1>to-do-list</h1>
      <div className="main-app">
        <Form />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
