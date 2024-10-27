import React, { useState } from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { IoTrash } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, completeTodo, deleteTodo } from "../redux/todoSlice";

const TodoList = () => {
    const [text, setText] = useState('');
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const handleInput = () => {
        if (text !== '') {
            dispatch(addTodo(text));
            setText('');
        }
    }

    return (
        <div className="flex justify-center items-center h-80 flex-col">
            <div className="flex flex-row gap-2 w-96">
                <input
                    placeholder="Please input text here..."
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="border-2 border-gray-400 rounded-md w-full px-2 py-2 block"
                />
                <button
                    onClick={handleInput}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Add
                </button>

            </div>
            <div className="mt-4 w-96 select-none">
                {todos.map((todo) => (
                    <div key={todo.id} className={todo.completed ? 'flex justify-between items-center bg-blue-400 mb-4 py-4 px-2 rounded-md' : 'flex justify-between items-center bg-red-200 mb-4 py-4 px-2 rounded-md'}>
                        <h1 className={todo.completed ? 'line-through' : ''}>{todo.text}</h1>
                        <div className="flex flex-row gap-2">
                            {todo.completed ?
                                <IoCheckmarkCircleSharp size={25} onClick={() => dispatch(completeTodo(todo.id))}/>
                                :
                                <IoCheckmarkCircleOutline size={25} onClick={() => dispatch(completeTodo(todo.id))} />
                            }
                            <IoTrash size={25} onClick={() => dispatch(deleteTodo(todo.id))}/>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    )
}

export default TodoList