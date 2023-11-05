import React ,{useState }from "react";
import {useDispatch} from "react-redux";
import { addTodo } from "../redux/todoSlice";

const AddTodo = () => {
    const [id,setId] = useState("");
    const [text,setText] = useState("");

    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo({id,text}));
        setId("");
        setText("");

    }
    return(
        <form onSubmit={addTodoHandler}>
            <input type="text" placeholder="ID" onChange={(e) => setId(e.target.value)}/>
            <input type="text" placeholder="name" onChange={(e) => setText(e.target.value)}/>
            <button type="submit" />
        </form>
    )
}

export default AddTodo;