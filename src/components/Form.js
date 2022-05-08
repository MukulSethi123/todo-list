import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTaskAction } from "../action";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import "./Form.css";

function Form({ selectedList }) {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: addTaskAction,
      text: task,
      listId: selectedList,
    });
    setTask("");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleOnSubmit}>
        <input
          className="from-input"
          placeholder="task"
          onChange={(event) => {
            setTask(event.target.value);
          }}
          value={task}
        ></input>
        <AddCircleIcon
          fontSize="large"
          className="form-button"
          onClick={handleOnSubmit}
        />
      </form>
    </div>
  );
}

export default Form;
