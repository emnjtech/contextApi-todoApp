import React from 'react'
import TodoItem from './TodoItem'
import { useContext } from 'react'
import ContextComp from '../context/ContextComp'



export default function TodoList() {
  const {todos,deleteTodo,toggleTodo} = useContext(ContextComp)
  

    return (    
      <div>
     
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            complete={todo.complete}
            clicktoggle={() => toggleTodo(todo.id)}
            clickdelete={() => deleteTodo(todo.id)} />
          ))}
   
        </div>
  )
}
