import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
const  TodoItem = (props) => {

  return (
    <>
      <div className='todo-item'>
        <span className='date'>{props.date}</span>
        <p className='task'>{props.task}</p>
        <div className='edit_delete'>
           <FontAwesomeIcon icon={faPenToSquare}/>
           <FontAwesomeIcon icon={faTrash}/>
        </div>
      </div> 
    </>
  )
}

export default TodoItem
