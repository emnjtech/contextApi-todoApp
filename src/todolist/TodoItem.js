import React from 'react'


export default function TodoItem({text,clicktoggle, clickdelete, complete}) {
    return (
      <div className="TodoItems">
        <div className="TodoItems__items" style={{color: complete? 'green' : ''}}>
          <p>{text}</p>
        </div>
        <div className="TodoItems__buttons">
          <button onClick={clickdelete }>Delete</button>
          <button onClick={clicktoggle}>Toggle</button>
        </div>
        </div>
  )
}
