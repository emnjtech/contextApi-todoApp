import {ADD_TODO, DELETE_TODO, TOGGLE_TODO,EDIT_TODO} from './todo.actions'

export function ftnReducer(state, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos,action.payload]
            }
        case TOGGLE_TODO:
            return {
                ...state,
                todos:state.todos.map(todo => todo.id === action.payload? {...todo,complete:!todo.complete} : {...todo})
            }
        case DELETE_TODO:
            return {
                ...state,
                todos:state.todos.filter(todo => todo.id !== action.payload)
            }
       
        default:
            return state
            
    }
}