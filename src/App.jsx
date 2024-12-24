import { useState } from "react";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  console.log("input => ", input);
  console.log("todos => ", todos);

  function Addtodo() {
    let newarray = [...todos];
    newarray.push(input);
    setTodos(newarray);
    setInput("");
  }
  return (
    <>
      <div>
        <h1>Todo app</h1>
      </div>
      <div>
        <input
          type="text"
          value={input}
          placeholder="Enter a task"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></input>
        <button onClick={Addtodo}>Add Task</button>
      </div>

      {/* <div><h1>Todos</h1>
<h2>{todos.map(<h4>{todos}</h4>)}</h2> */}

      {/* </div> */}
    </>
  );
}

export default App;
