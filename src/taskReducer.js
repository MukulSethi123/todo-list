import {
  addTaskAction,
  markTaskCompleteAction,
  deleteTaskAction,
  clearListTasksAction,
} from "./action";
import superListState from "./SuperState";

const taskReducer = (state = superListState.tasks, action) => {
  switch (action.type) {
    //error with fixing ID when tasks are empty
    case addTaskAction: {
      const temp = state ? state.slice(-1) : [{ id: 0 }];
      let id = temp[0].id + 1;
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
    case clearListTasksAction: {
      const newState = state.filter((task) => task.listId !== action.listId);
      return newState;
    }
    default: {
      // console.log("action not found");
      return state;
    }
  }
};

export default taskReducer;
