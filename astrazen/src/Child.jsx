import React, { useEffect, useState } from "react";

const Child = ({ add }) => {
  let [count, setcount] = useState(1);
  let [apiData, setApiData] = useState([]);
  let [sorting, setSorted] = useState([]);

  async function todosData() {
    try {
      const response = await fetch(
        "https://65eb297643ce1641893360e5.mockapi.io/todoList/tasks"
      );
      const data = await response.json();
      console.log(data);

      data.push(add);

      setApiData([...data]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    todosData();
  }, []);

  count = apiData.length;

  const sortByPriority = (e) => {
    const sorted = apiData.sort((u1, u2) => u1.Priority - u2.Priority);
    setSorted([...sorted]);
  };

  const sortById = (e) => {
    const sorted = apiData.sort((u1, u2) => (u2.Priority - u1.Priority));
    setSorted([...sorted]);
  };

  const sortByTask = (e) => {
    const sorted = apiData.sort((u1, u2) => u1.Task.localeCompare(u2.Task));
    setSorted([...sorted]);
  };

  const handleChange = (e) => {
    setSorted(e.target.value);
    if (e.target.value === "Priority") sortByPriority();

    if (e.target.value === "id") sortById();

    if (e.target.value === "Task") sortByTask();
  };

  return (
    <div>
        <center>
      <table id="tab">
        <thead>
          <tr>
            <th>Id</th>
            <th>Priority</th>
            <th>Task</th>
          </tr>
        </thead>

        {apiData.map((data) => (
          <tr>
            <td>{data.id}</td>
            <td>{data.Priority}</td>
            <td>{data.Task}</td>
          </tr>
        ))}
      </table>
      </center>

      <br></br>
      <br></br>

      <select onChange={(e) => handleChange(e)}>
        <option value="Priority">Sort By Priority </option>
        <option value="id">Sort By Id</option>
        <option value="Task">Sort By Task</option>
      </select>

      <br></br>
      <br></br>

      <b>The api contains this much of data {count}</b>
    </div>
  );
};

export default Child;
