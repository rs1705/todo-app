import * as actionTypes from "./actionTypes";

export const addToDo = (title) => {
  return {
    type: actionTypes.ADD_TODO,
    title: title,
  };
};

export const completeToDo = (id) => {
  return {
    type: actionTypes.COMPLETE_TODO,
    id: id,
  };
};

export const starTodo = (id) => {
  return {
    type: actionTypes.STAR_TODO,
    id: id,
  };
};

export const deleteTodo = (id) => {
  return {
    type: actionTypes.REMOVE_TODO,
    id: id,
  };
};
