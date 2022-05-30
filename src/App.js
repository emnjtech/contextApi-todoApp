import React from "react";
import './App.css'

import TodoInput from "./todoinput/todoInput";
import TodoList from './todolist/todoList'





function App() {

  
  
  return (
    <div className="container">
      <div className="textwrap">
         <TodoInput />
        <TodoList />

      </div>
    </div>
  


  );
}

export default App;
