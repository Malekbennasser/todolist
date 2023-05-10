import Task from "./task";
import { useState } from "react";
function App() {
  const [newTask, setNewTask] = useState("");
  const [taskListe, setTaskListe] = useState([]);
  const handleButton = (e) => {
    setNewTask({ status: "a faire", task: e.target.value });
  };

  function addTask() {
    console.log("newTask", newTask);
    setTaskListe([...taskListe, newTask]);
  }
  const handleBtn = (index) => {
    console.log("modif ");
  };

  const renderTask = () => {
    return taskListe.map((item, index) => {
      return (
        <div key={index}>
          <Task content={item.task} status={item.status} action={handleBtn()} />
        </div>
      );
    });
  };

  return (
    <>
      <div>
        <input type="text" onChange={handleButton}></input>
        <button onClick={addTask}>add Task</button>
        {renderTask()}
      </div>
    </>
  );
}

export default App;
