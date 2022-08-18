import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";
import { TodoForm } from "../TodoForm";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";

// Desescructuramos las nuevas props
function AppUI() {
    const {
        error, 
        loading, 
        searchedTodos, 
        toggleCompleteTodos, 
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
        <TodoCounter />
        <TodoSearch />
        
        <TodoList>
            {/* Mostramos un mensaje en caso de que ocurra algún error*/}
            {error && <TodosError error={error} />}
            {/* Mostramos un mensaje de cargando, cuando la aplicación está cargando los datos*/}
            {loading && <TodosLoading />}
            {/* Si terminó de cargar y no existen TODOs, se muestra un mensaje para crear el primer TODO*/}
            {!loading && !searchedTodos.length && <EmptyTodos />}

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

        {!!openModal && (
            <Modal>
                <TodoForm>

                </TodoForm>
            </Modal>
        )}
            
        <CreateTodoButton 
            setOpenModal={setOpenModal}
        />
        </React.Fragment>
  );
}

export { AppUI };