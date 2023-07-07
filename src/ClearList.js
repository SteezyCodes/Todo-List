const ClearList = (props) => {
  let clear = props.setList;
  function clearHandler() {
    clear([]);
  }
  return (
    <button onClick={clearHandler} className="clearAll">
      Clear All
    </button>
  );
};

export default ClearList;
