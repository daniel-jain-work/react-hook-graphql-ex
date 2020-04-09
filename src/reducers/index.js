import { combineReducers } from 'redux'
import todosReducer from './todos'

const todos_initial_state = {
  todoLists: [],
  flag: true
};

export const global_state = {
  todos: todos_initial_state
}

export default combineReducers({
  todos: todosReducer
})
