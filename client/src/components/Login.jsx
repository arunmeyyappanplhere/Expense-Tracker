import React from "react";
import axios from "axios";
function Login() {
  const loginHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const loginCredentials = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    await axios
      .post("http://localhost:8000/api/login", loginCredentials)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.message));
  };
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={(e) => loginHandler(e)}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email" autoComplete="true" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="true"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
