import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";
import { LayoutGroup, motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
function TaskList({ isVisible }) {
  const todoList = useSelector((state) => state);
  // console.log(useSpring);
  //li should be within a map fuction that goes through each task in state

  return (
    <LayoutGroup>
      <ul className="task-list-container">
        {todoList.length ? (
          todoList.map((task) => (
            <Task
              key={task.id}
              id={task.id}
              name={task.taskName}
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
