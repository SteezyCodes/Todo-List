const CountList = (props) => {
    let propsLength = props.list.length;
    return ( 
        <p>You have {propsLength} pending tasks</p>
     );
}
 
export default CountList;