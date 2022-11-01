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
      return {
        selectedList: action.listObj.id,
        lists: [...state.lists, action.listObj],
      };
    case deleteListAction: {
      const newList = state.lists.filter((list) => list.id !== action.id);
      const id = newList.slice(-1)[0].id;
      console.log(id);
      return {
        selectedList: id,
        lists: newList,
      };
    }
    default:
      return state;
  }
};

export default SuperListReducer;
