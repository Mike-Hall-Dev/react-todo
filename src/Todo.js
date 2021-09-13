import React from "react"

function Todo({ remove, id, task }) {
    const handleRemove = () => remove(id);

    return (
        <div>
            <li>{task}</li>
            <button onClick={handleRemove}>X</button>
        </div>
    )
}

export default Todo;