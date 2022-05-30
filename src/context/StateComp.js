import React from 'react'
import ContextComp from './ContextComp'
import { useReducer } from 'react'
import { ftnReducer } from './ReducerComp'
import { ADD_TODO,DELETE_TODO,TOGGLE_TODO, } from './todo.actions'




export default function StateComp(props) {
  const initialState = {
    todos:[] //id, text, toggleValue
  }

 function addTodo(todo) {
    dispatch({
      type: ADD_TODO,
      payload: todo
    })
  }

  function deleteTodo(todoID) {
    dispatch({
      type: DELETE_TODO,
      payload: todoID
    })
  }


  function toggleTodo(todoID) {
    dispatch({
      type: TOGGLE_TODO,
      payload: todoID
    })
  } 



  

  const [state,dispatch] = useReducer(ftnReducer,initialState)
  return (
    <ContextComp.Provider value={{
      todos: state.todos,
      deleteTodo,
      addTodo,
      toggleTodo,
      
    }} >
      {props.children}
    </ContextComp.Provider>
  )
}
