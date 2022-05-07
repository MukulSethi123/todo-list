import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";
import { LayoutGroup, motion } from "framer-motion";

function TaskList({ selectedList }) {
  const tasks = useSelector((state) => state.tasks);
  const todoList = tasks.filter((task) => task.listId === selectedList);
  // console.log(tasks);
  return (
    <LayoutGroup>
      <ul className="task-list-container">
        {todoList.length ? (
          todoList.map((task) => (
            <Task
              key={task.id}
              id={task.id}
              name={task.text}
              completed={task.completed}
            />
          ))
        ) : (
          <img
            src="https://us.123rf.com/450wm/valenty/valenty1802/valenty180200082/95020271-continuous-line-drawing-woman-sitting-with-book-in-chair-vector-illustration.jpg?ver=6"
            alt="free"
          />
        )}
      </ul>
    </LayoutGroup>
  );
}

export default TaskList;
