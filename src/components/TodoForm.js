import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

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
        // trim() gets rid of white spaces
        if (todo.task.trim()) {
            addTodo({  ...todo, id: uuidv4() })
            setTodo({ ...todo, task: "" })
        }
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <TextField
                type="text"
                label="Tasks"
                name="task"
                value={todo.task}
                onChange={handleInputChange}
            />
            <Button type="submit" >Submit</Button>
        </form>
    );
}


