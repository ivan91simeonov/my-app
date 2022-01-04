function Login() {
    return (
        <div>
            <h1>Login</h1>
        <form>
            <label htmlFor="">Email</label>
            <input type="text" name="email" placeholder="email" />

            <label htmlFor="">Password</label>
            <input type="text" name="password" placeholder="password" />


           <input type="submit" value="Submit" />
        </form>
        </div>
    )
}

export default Login
