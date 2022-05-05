import {
  addTaskAction,
  markTaskCompleteAction,
  deleteTaskAction,
} from "./action";

const initialState = [];

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case addTaskAction: {
      const taskObj = {
        id: state.length + 1,
        taskName: action.taskName,
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
    default:
      return state;
  }
};

export default rootReducer;
