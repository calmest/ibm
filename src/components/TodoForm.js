import React, { useState } from 'react';
import uuid from 'uuid/v4';

export default function TodoForm({ addTodo }) {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false,
    });

    function handleInputChange(e) {
        // the e.target should contain the new input value
        // this event is for input elements
        setTodo({ ...todo, task: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault(); // prevent browser from refreshing
        // trim() gets rid of whitespaces
        if (todo.task.trim()) {
            addTodo({  ...todo, id: uuid.v4() })
            setTodo({ ...todo, task: "" })
        }
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                type="text"
                label="Tasks"
                name="task"
                value={todo.task}
                onChange={handleInputChange}
            />
            <button type="submit" >Submit</button>
        </form>
    )
}


