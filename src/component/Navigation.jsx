import { Link } from "react-router-dom";
import Login from "./Login";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function Navigation() {
  return (
    
    <header>
      <nav>
        <h1>Welocome</h1>
        <ul>
          <li>
            <Link to='/login'>Login </Link>
          </li>
          <li>
            <a href="#">Register</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Logout</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
