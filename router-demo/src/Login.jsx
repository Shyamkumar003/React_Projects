import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ handleLogin }) => {
    let initValue = {'username': '', 'password': ''}
  const [loginUser, setLoginUser] = useState(initValue);

  let navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name)
    setLoginUser({ ...loginUser, [name]: value });
    console.log(loginUser)
  };
  // console.log("hai");

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you can add your logic to authenticate the user
    // console.log("Username:", loginUser.username);
    // console.log("Password:", loginUser.password);
    
    handleLogin(loginUser);

    navigate('/home')

    // Reset the form
    setLoginUser(initValue);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            value={loginUser.username}
            onChange={(e) => handleChange(e)}
            
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={loginUser.password}
            onChange={(e) => handleChange(e)}
            
          />
        </div>
        <button type="submit">Login</button>
      </form>

       
       {/* <ul>
       {loginUser.map((lu) => {
          const {username,password} = lu;
        return(
         <li>{username} and {password}</li>
        )
         }
       )}
     </ul> */}
     

    {/* { (Array.isArray(loginUser)) ?
  loginUser.forEach(item => {
    // Your logic for each item
    console.log(item);
    <b>{item}</b>
  }):
  (
  console.error("loginUser is not an array")
  )
} */}

    </div>
  );
};

export default Login;