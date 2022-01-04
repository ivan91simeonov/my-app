import Navigation from './component/Navigation';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Home from './pages/Home';

function App() {
  return (
      <>
    <Router>
      <Navigation />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
