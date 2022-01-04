import {useLocation , useNavigate} from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import Profile from '../pages/Profile';

function Navigation() {
  const navigation = useNavigate()
  const location = useLocation()
  
  return (
 
    <nav>
      <button className='loginBtn' onClick={()=> navigation('/login')}>Login</button>
      <button className='registerBtn' onClick={()=> navigation('/register')}>Register</button>
      <button className='profile' onClick={()=> navigation('/profile')}>Profile</button>
      <button className='homePage' onClick={()=> navigation('/')}>Home Page</button>
    </nav>
    
  );
}

export default Navigation;
