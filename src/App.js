import "./App.css";
import react, { useState, useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, modifyTodoList] = useState([]);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    saveLocalTodos();
  }, [todoList]);

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  };

  const getLocalTodos = () => {
    console.log("breakpoint 2");
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      modifyTodoList(JSON.parse(localStorage.getItem("todos")));
    }
  };

  return (
    <div className='App'>
      <header className="Header">
        <h1>Todo List</h1>
      </header>
      <Form
        todoList={todoList}
        modifyTodoList={modifyTodoList}
        inputText={inputText}
        setInputText={setInputText}
      />
      <TodoList todoList={todoList} modifyTodoList={modifyTodoList} />
    </div>
  );
}

export default App;
