import {
  addTaskAction,
  markTaskCompleteAction,
  deleteTaskAction,
} from "./action";
import superListState from "./SuperState";

const taskReducer = (state = superListState.tasks, action) => {
  switch (action.type) {
    case addTaskAction: {
      const temp = state.slice(-1);
      const id = temp[0].id + 1;
      console.log(temp);
      const taskObj = {
        id: id,
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
