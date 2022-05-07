import superListState from "./SuperState";

import {
  changeSelectedListAction,
  createListAction,
  deleteListAction,
} from "./action";

const SuperListReducer = (state = superListState.superList, action) => {
  switch (action.type) {
    case changeSelectedListAction: {
      const newState = {
        selectedList: action.id,
        lists: [...state.lists],
      };
      return newState;
    }
    case createListAction:
      console.log(action.title);
      return state;
    case deleteListAction:
      console.log("delete list");
      return state;
    default:
      return state;
  }
};

export default SuperListReducer;
