import {
  addTaskAction,
  markTaskCompleteAction,
  deleteTaskAction,
} from "./action";
import superListState from "./SuperState";

const taskReducer = (state = superListState.tasks, action) => {
  switch (action.type) {
    case addTaskAction: {
      console.log(action.listId);
      const taskObj = {
        id: state.length + 1,
        listId: action.listId,
        text: action.text,
        completed: false,
      };
      return [...state, taskObj];
    }
    case markTaskCompleteAction: {
      const newState = state.map((task) =>
        task.id === action.taskID
          ? { ...task, completed: !task.completed }
          : task
      );
      return newState;
    }
    case deleteTaskAction: {
      const updatedState = state.filter((task) => task.id !== action.taskID);
      return updatedState;
    }
    default: {
      // console.log("action not found");
      return state;
    }
  }
};

export default taskReducer;
