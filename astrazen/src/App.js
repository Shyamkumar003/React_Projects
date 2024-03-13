import './App.css';
import { useState } from 'react';
import Child from './Child';

function App() {

  let [add,setAdd] = useState([]);
  let [todoInput, setTodoInput] = useState([])

  const handlesubmit = (e) => {

    e.preventDefault();
        let count =0;
      if(todoInput != undefined && todoInput != "") {
        const addTodo = {
          id: count+1,
          Task: todoInput,
          };

        add.push(addTodo);
        setAdd([...add]);

        console.log(add)
      }
         }

  return (

    <div className="App">

       <form onSubmit={handlesubmit}>
        <label htmlFor="task"> Enter the task </label>
        <input
          type="text"
          id="task"
          // value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        ></input>
      </form>

        
        { add.map((todolist,index)=>

              // {todolist.Task}
              <Child  add={todolist}></Child>
        
        )}
        

        
        

    </div>
  );
}

export default App;
