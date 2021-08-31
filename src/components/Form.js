import React from "react";

const Form = ({ todoList, modifyTodoList, inputText, setInputText }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const todoSubmitHandler = (e) => {
    e.preventDefault();
    if (inputText.length < 1) {
      return;
    }
    modifyTodoList([
      ...todoList,
      {
        text: inputText,
        complete: false,
        id: Math.random() * 1000,
      },
    ]);
    setInputText("");
  };

  return (
    <form>
      <input value={inputText} onChange={inputTextHandler} placeholder="Task Name"></input>
      <button onClick={todoSubmitHandler}>Add Todo</button>
    </form>
  );
};

export default Form;
