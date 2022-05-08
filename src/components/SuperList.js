import { useDispatch, useSelector } from "react-redux";
import {
  createListAction,
  changeSelectedListAction,
  deleteListAction,
  clearListTasksAction,
} from "../action";
import React, { useState } from "react";
import "./SuperList.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import CloseIcon from "@mui/icons-material/Close";
import RemoveIcon from "@mui/icons-material/Remove";
function SuperList({ selectedList }) {
  const superListState = useSelector((state) => state.superList.lists);
  const dispatch = useDispatch();
  const [list, setList] = useState("");
  function handleOnclick(id) {
    dispatch({ type: changeSelectedListAction, id: id });
  }

  function handleOnSubmit(event) {
    event.preventDefault();
    const listObj = {
      id: superListState.length ? superListState.slice(-1)[0].id + 1 : 1,
      title: list,
    };
    console.log(listObj);
    dispatch({ type: createListAction, listObj: listObj });
    setList("");
  }

  function handleDeleteClick(id) {
    console.log(id);
    dispatch({ type: deleteListAction, id: id });
    dispatch({ type: clearListTasksAction, listId: id });
  }
  return (
    <div className="list-container">
      <h1>All Lists</h1>
      <div className="lists">
        {superListState.map((list) => (
          <div className="selected-list-container">
            <p
              className={list.id === selectedList ? "selected-list" : ""}
              key={list.id}
              onClick={() => handleOnclick(list.id)}
            >
              {list.title}
            </p>
            {list.id === selectedList ? (
              <CloseIcon
                key={list.id + 1}
                className="delete-list-button"
                onClick={() => handleDeleteClick(list.id)}
              />
            ) : (
              ""
            )}
          </div>
        ))}
      </div>

      <div className="form-container">
        <form onSubmit={handleOnSubmit}>
          <input
            className="from-input"
            placeholder="task"
            onChange={(event) => {
              setList(event.target.value);
            }}
            value={list}
          ></input>
          <AddCircleIcon
            fontSize="large"
            className="form-button"
            onClick={handleOnSubmit}
          />
        </form>
      </div>
    </div>
  );
}

export default SuperList;
