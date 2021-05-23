import React from 'react'
import { useSelector } from 'react-redux'
import Task from './Task';

function TaskList() {
    let todos = useSelector(state=>state);

    return (
        <div className="my-4">
            {todos.map((todo)=>   {
                return <Task key={todos.id} todo={todo}/>;
            })}
        </div>
    )
}

export default TaskList
