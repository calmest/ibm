import React from 'react';
import Todo from './Todo'

export default function TodoList({ todos, removeTodo, toggleComplete }) {
    return (
        <ul>
            <li>
            {todos.map(todo => (
                <Todo
                    key={todo.id}
                    todo={todo}
                    removeTodo={removeTodo}
                    toggleComplete={toggleComplete}
                    />
            ))}
            </li>
            
        </ul>
    )
}


