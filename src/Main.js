import React, { useState } from "react";

function Main() {
  let [list, setList] = useState([]);

  function clearHandler() {
    setList([]);
  }
  function deleteTodo(id) {
    setList(list.filter(item => item.id !== id));
  }
  function newTodoName() {
    let newTodo = document.querySelector(".input").value;
    if (newTodo.length === 0) {
      return;
    } else {
      let newItem = { name: newTodo, id: Date.now() };
      setList((currentItems) => [...currentItems, newItem]);
      console.log(list);
    }
  }

  return (
    <div className="todo">
      <h1>ToDo App</h1>
      <div>
        <div className="add">
          <input placeholder="Add your new todo!" type="text" className="input" />
          <button onClick={newTodoName} className="addElement">
            <p>
            +
            </p>
          </button>
        </div>
        <div className="list">
          <div>{list.map((listek) => {
            return <div className="new" key={listek.id}><p>{listek.name}</p><button className="trash" onClick={() => deleteTodo(listek.id)}><i class="far fa-trash"></i></button></div>
          })}</div>
        </div>
        <div className="bottom">
          <p>You have {list.length} pending tasks</p>
          <button onClick={clearHandler} className="clearAll">Clear All</button>
        </div>
      </div>
    </div>
  );
}

export default Main;
