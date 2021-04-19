import { Button, ListItem, ListItemText } from '@material-ui/core'
import React from 'react'
import { db } from './firebase_config'

export default function TodoListItem({ todo, inprogess, id }) {

    function toggleInProgess() {
        db.collection("todos").doc(id).update({
            inprogess: !inprogess
        })
    }

    function deleteTodo() {
        db.collection("todos").doc(id).delete();
    }

    return (
        <div style={{ display: "flex" }}>
            <ListItem>
                <ListItemText primary={todo} secondary={inprogess ? "In Progess" : "Completed"} />
            </ListItem>

            <Button onClick={toggleInProgess}>{inprogess ? "DONE" : "UNDONE"}</Button>
            <Button onClick={deleteTodo}>X</Button>
        </div>
    )
}
