import { Link } from "react-router-dom";
function Navigation() {
  return (
    <nav>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/">Home Page</Link>
      <Link to="/create">Create</Link>
      <Link to="/My profile">My items</Link>
    </nav>
  );
}

export default Navigation;
