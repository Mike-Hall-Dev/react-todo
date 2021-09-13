import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

function NewTodoForm({ addTodo }) {
    const [formData, setFormData] = useState("");

    const trackChange = e => {
        setFormData(e.target.value)
    }
    const grabInput = e => {
        e.preventDefault();
        addTodo({ formData, id: uuid() });
        console.log(formData)
        setFormData("");
    }

    return (
        <div>
            <form onSubmit={grabInput}>
                <label htmlFor="task">Task:</label>
                <input
                    id="task"
                    name="task"
                    type="text"
                    onChange={trackChange}
                    value={formData}
                />
                <button onClick={addTodo}>Add Todo</button>
            </form>
        </div>
    )
}

export default NewTodoForm;