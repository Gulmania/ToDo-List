import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
    const [activity, setActivity]= useState("");
    const [listData, setlistData] = useState([]);

    const removeActivity=(i)=>{
        const updatedListData= listData.filter((elem, id)=>{
            return i!=id;
        })
        setlistData(updatedListData);
    }
  return (
    <div className='container'>
        <div className='header'>ToDo List</div>
        <input type='text' placeholder='Enter an Item or Activity' value={activity} onChange={(e)=>{
            setActivity(e.target.value);
        }}/>
        <button onClick={()=>{
            // setlistData([...listData, activity]);
            // console.log(listData);
            setlistData((listData)=>{
                const updatedList = [...listData, activity];
                // console.log(updatedList);
                setActivity('');
                return updatedList;
            })
        }} className='add-item'><i class="fa-solid fa-plus"></i></button>
        <p className='list-heading'>Here is your list 📆</p>
        {listData!=[] && listData.map((data, i)=>{
            return (
            <>
                <p key={i}>
               
                    <li className='listData'>{data}</li>
                    <div className='btn-Position'>
                    <button onClick={()=>removeActivity(i)} className='delete-Items'><i class="fa-solid fa-trash"></i></button>
                    </div>
                </p>
            </>
            );
        })}
        {listData.length>=1 && <button onClick={()=>{
            setlistData([]);
        }} className='removeAll-btn'>Remove All</button>}
        
    </div>
  )
}

export default TodoList