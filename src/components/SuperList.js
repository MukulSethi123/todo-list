import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createListAction, changeSelectedListAction } from "../action";
import "./SuperList.css";

function SuperList({ selectedList }) {
  const superListState = useSelector((state) => state.superList.lists);
  const dispatch = useDispatch();
  // console.log(superListState);
  function handleOnclick(id) {
    dispatch({ type: changeSelectedListAction, id: id });
  }
  return (
    <div>
      {superListState.map((list) => (
        <p
          className={list.id === selectedList ? "selected-list" : ""}
          key={list.id}
          onClick={() => handleOnclick(list.id)}
        >
          {list.title}
        </p>
      ))}
    </div>
  );
}

export default SuperList;
