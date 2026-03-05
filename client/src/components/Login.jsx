import React from 'react'

function Login() {
  return (
    <>
        <h1>Login</h1>
        <form>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" />
            </div>
            <button type="submit">Login</button>
        </form>
    </>
  )
}

export default Login