/* eslint-disable no-unused-vars */
import { useState } from "react";

function ToDo(){

    const[tasks, setTask]=useState(["Eat lunch", "Shower", "Skincare"]);
    const[newTask, setNewTask]= useState([]);

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim()!==""){
            setTask(t=> [...t, newTask]);
            setNewTask("")
        }
    }

    function delTask(index){
        const updatedTask= tasks.filter((_, i) => i!==index)
        setTask(updatedTask)
    }

    function moveTaskUp(index){
        if(index>0){
            const updatedTask=[...tasks];
            [updatedTask[index], updatedTask[index-1]]=
            [updatedTask[index-1], updatedTask[index]];
            setTask(updatedTask)
        }
    }

    function moveTaskDown(index){
        if(index<tasks.length-1){
            const updatedTask=[...tasks];
            [updatedTask[index], updatedTask[index+1]]=
            [updatedTask[index+1], updatedTask[index]];
            setTask(updatedTask);
        }
    }

    return(
        <div className="to-do-list">
            <h1>To Do List</h1>
            <div>
                <input className="enter-a-task" type="text" placeholder="Enter a Task..." value={newTask} onChange={handleInputChange} />
                <button className="add-button" onClick={addTask}>
                    Add Task To List
                </button>
            </div>

            <ol className="list">
                {tasks.map((task,index) => <li key={index}> <span className="text"> {task}</span>  
                <button className="delete-button" onClick={()=>delTask(index)}> Delete </button>
                <button className="move-button" onClick={()=>moveTaskUp(index)}> Move Up </button>
                <button className="move-button" onClick={()=>moveTaskDown(index)}> Move Down </button>
                </li>)}
            </ol>
        </div>
    );
}

export default ToDo