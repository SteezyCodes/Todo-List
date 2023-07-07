const AddItem = (props) => {
    let addItem = props.setList;
    function newTodoName() {
        let newTodo = document.querySelector(".input").value;
        if (newTodo.length === 0) {
          return;
        } else {
          let newItem = { name: newTodo, id: Date.now() };
          addItem((currentItems) => [...currentItems, newItem]);
        }
      }
    return ( 
        <div className="add">
          <input placeholder="Add your new todo!" type="text" className="input" />
          <button onClick={newTodoName} className="addElement">
            <p>+</p>
          </button>
        </div>
     );
}
 
export default AddItem;