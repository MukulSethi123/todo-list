import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import TaskList from "./components/TaskList";
import { useDispatch, useSelector } from "react-redux";
import SuperList from "./components/SuperList";
function App() {
  const selectedList = useSelector((state) => state.superList.selectedList);
  return (
    <div className="App">
      <h1>to-do-list</h1>
      <div className="app-container">
        <div className="super-list">
          <h1>All Lists</h1>
          <SuperList />
        </div>
        <div className="main-app">
          <Form selectedList={selectedList} />
          <TaskList selectedList={selectedList} />
        </div>
      </div>
    </div>
  );
}

export default App;
