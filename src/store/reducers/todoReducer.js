import * as actionTypes from "../actions/actionTypes";
const initialState = {
  todos: [],
};

const toDoReducer = (state = initialState, action) => {
  switch (action.type) {


    case actionTypes.ADD_TODO: {
      console.log(action.title);
      const todoItem = {
        id: state.todos.length + 1,
        title: action.title,
        completed: false,
        starred: false,
      };

      return {
        ...state,
        todos: state.todos.concat(todoItem),
      };
    }
    case actionTypes.COMPLETE_TODO: {
      const item = state.todos.filter((item) => item.id === action.id);
      item[0].completed = !item[0].completed;
      return {
        ...state,
        todos: [...state.todos],
      };
    }

    case actionTypes.STAR_TODO: {
      const item = state.todos.filter((item) => item.id === action.id);
      item[0].starred = !item[0].starred;
      console.log(item);
      return {
        ...state,
        todos: [...state.todos],
      };
    }

    case actionTypes.REMOVE_TODO:{
      const items=state.todos.filter(item=>item.id!==action.id);
      return{
        ...state,
        todos:[...items]
      }
    }

    

    default:
      return state;
  }
};
export default toDoReducer;
