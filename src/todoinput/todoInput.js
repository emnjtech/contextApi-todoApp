import React, { useReducer } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import ContextComp from '../context/ContextComp'



export default function TodoInput() {
    const [inputxt, SetInputxt] = useState("")
    const {addTodo} = useContext (ContextComp)

    const onChangeHandler = (e) => SetInputxt(e.target.value)

    const newtodo = {
        id: Math.random(),
        text: inputxt,
        complete: false
    }
    
    function onSubmitHandler(e) {
        if (inputxt === "") {
            alert("Text box can not be empty")
        }
        else {

        
        e.preventDefault()
        
        addTodo(newtodo)
        
            SetInputxt("")
        }

    }
    

  return (
      <div>
          <form onSubmit={onSubmitHandler}>
          <input type="text"
                  placeholder="Enter Your Todo"
                  value={inputxt}
                  onChange={onChangeHandler}
              

          />
          
              <div className="buttonDiv">
                  <button className="button" >Add Todo</button>
                   <br />
              </div>
          </form>
          </div>
          
  )
}
