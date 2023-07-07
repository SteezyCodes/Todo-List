import React, { useState } from "react";
import CountList from "./CountList";
import ClearList from "./ClearList";
import ItemsListed from "./ItemsListed";
import AddItem from "./AddItem";

function Main() {
  let [list, setList] = useState([]);

  return (
    <div className="todo">
      <h1>ToDo App</h1>
      <div>
        <AddItem setList={setList} />
        <div className="list">
          <div>
            <ItemsListed setList={setList} list={list} />
          </div>
        </div>
        <div className="bottom">
          <CountList list={list} />
          <ClearList setList={setList} />
        </div>
      </div>
    </div>
  );
}

export default Main;
