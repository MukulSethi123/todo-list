const superListState = {
  superList: {
    selectedList: 1,
    lists: [
      {
        id: 1,
        title: "groceries",
      },
      {
        id: 2,
        title: "work",
      },
      {
        id: 3,
        title: "study",
      },
    ],
  },
  tasks: [
    {
      id: 1,
      listId: 1,
      text: "get milk",
      completed: false,
    },
    {
      id: 2,
      listId: 1,
      text: "get eggs",
      completed: false,
    },
    {
      id: 3,
      listId: 1,
      text: "get bread",
      completed: false,
    },
    {
      id: 4,
      listId: 2,
      text: "complete app",
      completed: false,
    },
    {
      id: 5,
      listId: 3,
      text: "study for gre",
      completed: false,
    },
  ],
};
export default superListState;
