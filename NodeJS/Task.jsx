import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const Task = () => {
  let [name, setName] = useState();
  let [price, setPrice] = useState();
  let [data, setData] = useState([]);
  let [editable, setEditable] = useState(false);
  let [id, setId] = useState();
  let [file, setFile] = useState(null);
 let fileRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const items = {
      id: uuidv4(),
      name: name,
      price: price,
    };
    if (editable) {
      const upadting = { id: id, name: name, price: price };
      try {
        const updated = await axios.put(
          "http://localhost:8000/update",
          upadting
        );
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        let data = await axios.post("http://localhost:8000/adding", items);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    setEditable(false);

    setName("");
    setPrice("");
  };

  const getItems = async () => {
    try {
      const response = await axios.get("http://localhost:8000/getting");
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getItems();
  }, [data]);

  const deleteButton = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8000/delete/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const updateButton = async (e) => {
    setId(e.id);
    setEditable(true);
    console.log(e.id);
    setName(e.name);
    setPrice(e.price);
  };

  const handleFileSubmit = async () => {
    const formData = new FormData();
    formData.append("file", file);
    console.log('file submit')
    try {
      const response = await axios.post(
        `http://localhost:8000/image/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if(fileRef.current){
        fileRef.current.value ="";
      }
      console.log("File uploaded successfully")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <center>
        <br></br>
        <br></br>
        <form onSubmit={(e) => handleSubmit(e)}>
          Enter the Name :{" "}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br></br>
          <br></br>
          Enter the Price :{" "}
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <br></br>
          <br></br>
          <button>Submit</button>
        </form>
        <br></br>
        <br></br>
        Select File :{" "}
        <input
          type="file"
          // value={file}
          ref={fileRef}
          onChange={(e) => setFile(e.target.files[0])}
        />
        <br></br>
        <br></br>
        <button onClick={handleFileSubmit} >File</button>
      </center>

      <p>{name}</p>

      <ul>
        {data &&
          data.map((dt) => (
            <pre>
              <li>
                {dt.id} {dt.name} {dt.price}{" "}
                <button onClick={() => deleteButton(dt.id)}>Delete</button>{" "}
                <button onClick={() => updateButton(dt)}>Update</button>
              </li>
            </pre>
          ))}
      </ul>
    </div>
  );
};

export default Task;
