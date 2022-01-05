function Register() {
    return (
        <div className="register">
          <form className="formRegister">
              <label htmlFor="">Email</label>
              <input type="email" name="email"  placeholder="Enter email"/>

              <label htmlFor="">Password</label>
              <input type="password" name="password"  placeholder="Enter password"/>

              <label htmlFor="">Email</label>
              <input type="rePas" name="rePas"  placeholder="Repeat password"/>

              <input type="submit" value="Register" />
          </form>
        </div>
    )
}

export default Register
