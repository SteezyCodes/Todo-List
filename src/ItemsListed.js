const ItemsListed = (props) => {
  let deleteId = props.setList;
  let allItems = props.list;
  function deleteTodo(id) {
    deleteId(allItems.filter((item) => item.id !== id));
  }
  return (
    <>
      {allItems.map((todo) => {
        return (
          <div className="new" key={todo.id}>
            <p>{todo.name}</p>
            <button className="trash" onClick={() => deleteTodo(todo.id)}>
              <i className="far fa-trash"></i>
            </button>
          </div>
        );
      })}
    </>
  );
};

export default ItemsListed;
