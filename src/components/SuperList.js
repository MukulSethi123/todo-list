import React from "react";
const superListState = [
  {
    id: 1,
    title: "groceries",
    tasks: [],
  },
  {
    id: 2,
    title: "work",
    tasks: [],
  },
  {
    id: 3,
    title: "study",
    tasks: [],
  },
];

function SuperList() {
  function handleOnclick(id) {
    console.log("evet:", id);
  }
  return (
    <div>
      {superListState.map((list) => (
        <p key={list.id} onClick={() => handleOnclick(list.id)}>
          {list.title}
        </p>
      ))}
    </div>
  );
}

export default SuperList;
