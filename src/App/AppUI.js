import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";

// Desescructuramos las nuevas props
function AppUI() {
    const {
        error, 
        loading, 
        searchedTodos, 
        toggleCompleteTodos, 
        deleteTodo
    } = React.useContext(TodoContext);
    return (
        <React.Fragment>
        <TodoCounter />
        <TodoSearch />
        
        <TodoList>
        {/* Mostramos un mensaje en caso de que ocurra algún error*/}
        {error && <p>Desespérate, hubo un error...</p>}
        {/* Mostramos un mensaje de cargando, cuando la aplicación está cargando los datos*/}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {/* Si terminó de cargar y no existen TODOs, se muestra un mensaje para crear el primer TODO*/}
        {!loading && !searchedTodos.length && <p>¡Crea tu primer TODO!</p>}
        {searchedTodos.map((todo) => (
            <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => toggleCompleteTodos(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            />
        ))}
        </TodoList>
        <Modal>
            <p>Teletransportacion</p>
        </Modal>
            
        <CreateTodoButton />
        </React.Fragment>
  );
}

export { AppUI };