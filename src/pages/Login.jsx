import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    // const [showPassword , setShowPassword] = useState(false);
    // const [formData , setFormData] = useState({
    //     email: '',
    //     password
    // })
    // const {email , password} = formData ;
    // const navigate = useNavigate();

  return (
    <div className="login">
      <header>
          <p>Welcome Back</p>
      </header>
      <form className='formLogin'>
        <label htmlFor="">Email</label>
        <input type="email" name="email" placeholder="email" />

        <label htmlFor="">Password</label>
        <input type="password" name="password" placeholder="password" />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Login;
