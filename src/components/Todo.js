import { ListItem, Checkbox, IconButton, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react'

export default function Todo({ todo, removeTodo, toggleComplete }) {
    function handleCheckboxClick() {
        toggleComplete(todo.id);
    }

    function handleRemoveClick() {
        removeTodo(todo.id)
    }

    return (
        <ListItem style={{ display: 'flex' }}>
            <Checkbox checked={todo.completed} onClick={handleCheckboxClick} />
            <Typography
                variant="body1"
                style={{ 
                    textDecoration: todo.completed ? "line-through" : null
                }}
            >
                {todo.task}
            </Typography>
            <IconButton>
                <CloseIcon />
            </IconButton>
        </ListItem>
    );
}


