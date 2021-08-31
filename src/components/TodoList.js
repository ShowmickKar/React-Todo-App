import React from "react";
import Todo from "./Todo";

const TodoList = ({ todoList, modifyTodoList }) => {
  return (
    <ul>
      {todoList.map((todo) => (
        <Todo key={todo.id} todo={todo} todoList={todoList} modifyTodoList={modifyTodoList} />
      ))}
    </ul>
  );
};

export default TodoList;
