import superListState from "./SuperState";
const SuperListReducer = (state = superListState, action) => {
  switch (action.type) {
    case "createList":
      console.log("create list");
      return;
    case "deleteList":
      console.log("delete list");
      return;
    default:
      return;
  }
};
