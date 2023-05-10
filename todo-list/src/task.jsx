function Task(props) {
  return (
    <div>
      <li>
        {props.content}
        <button onClick={props.action}>{props.status}</button>
      </li>
    </div>
  );
}

export default Task;
