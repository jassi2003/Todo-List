import React, { useState } from 'react';
import { useTodo } from '../contexts/todoContext';

const TodoItem = ({ todo }) => {
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.todo);
    const { updateTodo, deleteTodo, toggleComplete } = useTodo();

    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: todoMsg });
        setIsTodoEditable(false);
    };

    const toggleCompleted = () => {
        toggleComplete(todo.id);
    };

    return (
        <div className="todo-item">
            <div className={` todo-status ${todo.completed ? "bg-[black]" : 'bg-[#ccbed7]' }`} />
            <input
                type="checkbox"
                className="cursor"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
               className={ ` text-box ${isTodoEditable ? 'border-black' : 'border-transparent'} ${todo.completed ? 'line-through' : ''}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            <button
             className="btn"
                onClick={() => {
                    if (todo.completed) return;
                    if (isTodoEditable) {
                        editTodo();
                    } else {
                        setIsTodoEditable((prev) => !prev);
                    }
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? '📁' : '✏️'}
            </button>
            <button className="btn-btn" onClick={() => deleteTodo(todo.id)}>
                ❌
            </button>
        </div>
    );
};

export default TodoItem;
