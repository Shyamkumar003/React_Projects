import React, { useEffect, useState } from "react";
import axios from "axios";
const Compo1 = () => {
  const [inputs, setInputs] = useState([]);

  const [getData, setGetData] = useState([]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/get")
      .then((response) => {
        console.log(response.data);
        setGetData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event)

    try {
      const res = await axios.post("http://localhost:8000/add", inputs);
      console.log(res);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };


const handletes = async() => {
    try {
        const res = await axios.post("http://localhost:8000/test", inputs);
      console.log(res.data);
      setGetData(res.data.result);
    } catch (error) {
        console.error("Error submitting form:", error); 
    }
}

  return (
    <div>
      <br></br>
      <center>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" onChange={handleChange} />
          </label>
          <br></br>
          <br></br>

          <label>
            Age:
            <input type="text" name="age" onChange={handleChange} />
          </label>
          <br></br>
          <br></br>

          <label>
            Address:
            <input type="text" name="address" onChange={handleChange} />
          </label>
          <br></br>
          <br></br>

          <button onClick={handletes}>test</button>

        </form>
        <br></br>
        <br></br>

        {JSON.stringify(getData)}

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {getData.map((val, index) => (
              <tr key={index}>
                <td>{val.name}</td>
                <td>{val.age}</td>
                <td>{val.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </div>
  );
};

export default Compo1;
