import React ,{useState , useEffect} from 'react'
import InputBx from './InputBx'
import TodoItem from './TodoItem'
const Todosection = () => {
   const[todoList , setTodoList] = useState([])
   const[show , setShow] = useState(false)
useEffect(()=>{
  const data = localStorage.getItem('Tasklist');
  if(data!==null)setTodoList(JSON.parse(data));
  if(data.length>=0){
    setShow(true)
  }
},[])
   useEffect(()=>{
    localStorage.setItem("Tasklist" , JSON.stringify(todoList))
   } , [todoList])
   
   const addList = (item) =>{
        setTodoList([...todoList , item])
   }
   

   
  return (
    <>
      <div className='todo-section'>
      <InputBx addList={addList}/>
       { show ? <h3 className='heading'>All Tasks</h3>: '' }
       <div className='todo-items'>
         {
          todoList.map((obj , index)=>{
            return <TodoItem task={obj.item} key={index} date={obj.date} />
          })
         }
       </div>
      </div>
    </>
  )
}

export default Todosection