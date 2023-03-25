import React, { useState, useEffect } from 'react'
import InputBx from './InputBx'
import TodoItem from './TodoItem'
const Todosection = () => {
  const [todoList, setTodoList] = useState([])
  const [show, setShow] = useState(false)

  useEffect(() => {
    const data = localStorage.getItem('Tasklist');
    if (data) setTodoList(JSON.parse(data));
    if (data.length >= 0) {
      setShow(true)
    }
  }, [])
  const addList = (item) => {
    const existing = todoList.some(el => el.item === item.item);
    if(!existing){
      setTodoList([...todoList, item])
      localStorage.setItem("Tasklist", JSON.stringify(todoList))
    }
    else{
      alert("Already exist : " + item.item)
    }
  
  }
  const UpdateItem = (index , updateVal) =>{
    todoList[index].item = updateVal
    localStorage.setItem("Tasklist", JSON.stringify(todoList)) 
    setTodoList([...todoList])
  }
  const DeleteItem =(index) =>{
      const templist = todoList.filter(( e , i) => i !== index);
      localStorage.setItem("Tasklist", JSON.stringify(templist)) 
      setTodoList([...templist])
      window.location.reload();
  }

  return (
    <>
      <div className='todo-section'>
        <InputBx addList={addList} />
        {show ? <h3 className='heading'>All Tasks</h3> : ''}
        <div className='todo-items'>
          {
            todoList.map((obj, index) => {
              return <TodoItem task={obj.item} key={index} date={obj.date} index={index} DeleteItem={DeleteItem} UpdateItem={UpdateItem}/>
            })
          }
        </div>
      </div>
    </>
  )
}

export default Todosection