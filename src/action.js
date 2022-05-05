export const addTaskAction = "ADDTASK";
export const markTaskCompleteAction = "MARKTASKCOMPLETE";
export const deleteTaskAction = "DELETETASK";

export function addTask(dispatch, taskObj) {
  dispatch({ type: addTaskAction, taskObj });
}

export function markTaskComplete() {}

export function deleteTask() {}
