import React from "react";
import "./Task.css";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import "./TaskList.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteTaskAction, markTaskCompleteAction } from "../action";
import { Checkbox } from "@mui/material";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { style } from "@mui/system";
import { Book } from "@mui/icons-material";
import { motion } from "framer-motion";

function Task({ id, name, completed }) {
  const dispatch = useDispatch();

  function handleOnDelete() {
    dispatch({ type: deleteTaskAction, taskID: id });
  }
  function handleOnChecked() {
    dispatch({ type: markTaskCompleteAction, taskID: id });
  }

  return (
    <motion.div
      layout
      className="task"
      style={completed ? { borderColor: "#ACD1AF", color: "#ACD1AF" } : {}}
    >
      <Checkbox
        icon={<BookmarkIcon className="unchecked-bookmark" />}
        checkedIcon={<BookmarkAddedIcon className="checked-bookmark" />}
        onChange={handleOnChecked}
      />
      <p style={completed ? { textDecoration: "line-through" } : {}}>{name}</p>
      <DeleteRoundedIcon className="delete-icon" onClick={handleOnDelete} />
    </motion.div>
  );
}

export default Task;
