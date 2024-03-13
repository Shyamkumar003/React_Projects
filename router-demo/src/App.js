import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Login from "./Login";
import { useState } from "react";
import Logout from "./Logout";
import Products from "./Products";
import PRds from "./PRds";
import Layout from "./Layout";
import ProductID from "./PRds";

function App() {
  // let services = ["Service A", "Service B", "Service C"]
  // let [user, setUser] = useState({})       1example

  let [user, setUser] = useState(null); //2type

  const handleLogin = (user) => {
    console.log(user);
    setUser(user);
    console.log(user);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <nav id="nav">
          <Link to="/home">
            <h1>Home</h1>
          </Link>
          <br />
          <Link to="/services">
            <h1>Services</h1>
          </Link>
          <br />
          <Link to="/about">
           
            <h1>About</h1>
          </Link>
          <br />
          {user ? (
            <>
              <Link> <h2>Welcome {user.username}</h2></Link>
              {/* <Link onClick={()=> setUser(null)}>LogOut</Link> */}
              <Link to="/logout">
                <h1>LogOut</h1>
              </Link>
              <br />
              <Link to="/products">
                <h1>Products</h1>
              </Link>
            </>
          ) : (
            <Link to="/login">
              <h1>Login</h1>
            </Link>
          )}
        </nav>

        <Routes>
          <Route path="/" element={<Layout></Layout>}>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/services" element={<Services></Services>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route
              path="/login"
              element={<Login handleLogin={handleLogin}></Login>}
            ></Route>
            <Route
              path="/logout"
              element={<Logout handleLogout={handleLogout}></Logout>}
            ></Route>

            <Route path="/products" element={<Products></Products>}></Route>

            <Route
              path="/products/:productid"
              element={<ProductID></ProductID>}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
