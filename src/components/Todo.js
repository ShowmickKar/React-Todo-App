import React, { useState, useEffect } from "react";

const Todo = ({ todo, todoList, modifyTodoList }) => {
  const completeHandler = (e) => {
    const modifiedTodoList = [...todoList];
    modifiedTodoList.map((item) => {
      if (item.id === todo.id) {
        item.complete = !item.complete;
        modifyTodoList(modifiedTodoList);
        return;
      }
    });
  };

  const deleteTodoHandler = (e) => {
    modifyTodoList(todoList.filter((item) => item.id !== todo.id));
  };

  return (
    <li>
      <div
        className='todo'
        style={{
          textDecoration: todo.complete ? "line-through" : "none",
        }}>
        {todo.text}
      </div>
      <button className='complete-btn' onClick={completeHandler}>
        {todo.complete ? "Unmark" : "Complete"}
      </button>
      <button className='delete-btn' onClick={deleteTodoHandler}>
        Delete
      </button>
    </li>
  );
};

export default Todo;
