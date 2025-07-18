import React, { useState } from "react";

function TodoForm({onAddTask}) {
    const [taskText, setTaskText] = useState('');

    const handleSubmit = (e)=>{
        e.prevent.default();//Previene que la pagina se cargue vacia
        if (taskText.trim()){//Revisa que el texto no este vacio
            onAddTask(taskText);//Llamando a la funcion padre
            setTaskText('');
        }
    };
    return(
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Añadir nueva tarea"
            value={taskText}
            onChange={(e)=> setTaskText(e.target.value)}
            />
            <button type="submit">Añadir Tarea</button>

        </form>
    );
}

export default TodoForm;