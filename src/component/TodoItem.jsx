import React , {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
const  TodoItem = (props) => {
  const index = props.index;
  const [taskShow , setTaskShow] = useState(false) ;
  const [updateVal , setUpdateVal] = useState(props.task);
  const Colors = [
    {
      "bold" : "#FBB701",
      "light" : "rgba(255, 153, 0, 0.14)"
    },
    {
      "bold" : "#009d90",
      "light" : "rgba(0, 157, 144, 0.14)"
    },
    {
      "bold": "#0156DD",
      "light": "rgba(1, 86, 221, 0.14)"
    },
    {
      "bold": "#AC0000",
      "light": "rgba(172, 0, 0, 0.14)"
    },
    {
      "bold": "#A801BF",
      "light": "rgba(168, 1, 191, 0.14)"
    },
    {
      "bold": "#01BF09",
      "light": "rgba(1, 191, 9, 0.14)"
    },
    {
      "bold": "#EE6657",
      "light": "rgba(238, 102, 87, 0.14)"
    },
  ]
  const EditTask = ()=>{
      setTaskShow(true) 
  }
  const SaveTask = ()=>{
    setTaskShow(false) 
    props.UpdateItem(index , updateVal )
  }
  const DeleteTask = () =>{
    props.DeleteItem(index)
  }
  return (
    <>
      <div className='todo-item' style={{"border-top-color": Colors[index%(Colors.length)].bold}}>
        <span className='date' style={{"background-color":Colors[index%(Colors.length)].light}}>{props.date}</span>
        {!taskShow ? <p className='task'>{props.task}</p> : <input value={updateVal} onChange={(e)=>setUpdateVal(e.target.value)}  className="UpdateInputBx"/>}
        <div className='edit_delete' style={{"color": Colors[index%(Colors.length)].bold}}>
          {!taskShow ? '' : <FontAwesomeIcon icon={faCheckCircle}  onClick={SaveTask}/> }
           <FontAwesomeIcon icon={faPenToSquare} onClick={EditTask}/>
           <FontAwesomeIcon icon={faTrash}  onClick={DeleteTask}/>
        </div>
      </div> 
    </>
  )
}

export default TodoItem
