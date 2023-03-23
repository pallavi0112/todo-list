import React, { useState } from 'react'

const InputBx = (props) => {


    const [todoItem, setTodoItem] = useState(
        {
            item : "",
            date : new Date().toLocaleDateString()
        }
    )
    const GetInputVal = (e) =>{
        const{ name , value } = e.target;
        setTodoItem((predata)=>{
            return{
                ...predata , 
                 [name] : value
            }
        })  
    }
    const AddItemBtn = () => {
       props.addList(todoItem)
       setTodoItem({
        item:" " ,
        date: new Date().toLocaleDateString()
       })
    }
    return (
        <div className='inputBx'>
            <input 
            type='text'
            placeholder='type your task..' 
            value={todoItem.item} 
            onChange={GetInputVal} 
            name="item" 
            />
            <button type='button' onClick={AddItemBtn}>+</button>
        </div>
    )
}

export default InputBx