import React from "react";
import { UseSelector  , useDispatch, useSelector} from "react-redux";
import { removeTodo } from "../redux/todoSlice";

const Todos = () => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch();
    return (
    <><div>
        <h1>Todos</h1>
        {todos.map((todo) => <div key={todo.id}>
        <li ><p>{todo.id}</p><h1>{todo.text}</h1></li>
            <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
            </div>)}
    </div>
    </>)
}

export default Todos;