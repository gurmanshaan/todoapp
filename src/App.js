import './App.css';
import TextField from "@material-ui/core/TextField";
import { useState, useEffect } from "react";
import { Button } from '@material-ui/core';
import { db } from './firebase_config';
import firebase from "firebase";
import TodoListItem from './Todo';

function App() {
    const [todos, setTodos] = useState([]);
    const [todoInput, setTodoInput] = useState("");

    useEffect(() => {
        getTodos();
    }, [])  //blank to run only on first launch

    function getTodos() {
        db.collection("todos").onSnapshot(function (querySnapshot) {
            setTodos(
                querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    todo: doc.data().todo,
                    inprogess: doc.data().inprogess
                })),
            )
        })
    }

    function addTodo(e) {
        e.preventDefault();
        if (todoInput === "") {
            alert("Please fill TO DO")
        }
        else {
            db.collection("todos").add({
                inprogess: true,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                todo: todoInput,
            });
            setTodoInput("");
        }
    }


    return (
        <div className="App" >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%"
                }}>
                <h1>Gurmanshaan Singh's Todo App 🙂</h1>
                <form>
                    <TextField
                        id="standard-basic"
                        label="Write a Todo"
                        value={todoInput}
                        style={{ width: "90vw", maxWidth: "500px" }}
                        onChange={(e) => setTodoInput(e.target.value)}
                    />
                    <Button type="submit" variant="contained" onClick={addTodo} style={{ display: "none" }}>
                        Default
                    </Button>
                </form>
                <div style={{ width: "90vw", maxWidth: "500px", marginTop: "24px" }}>
                    {todos.map((todo) => (
                        <TodoListItem todo={todo.todo} inprogess={todo.inprogess} id={todo.id} />
                    ))}
                </div>

            </div>
        </div>
    )
}

export default App;