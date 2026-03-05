import React from "react";
import axios from "axios";
function register() {
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const formData = new FormData(e.target);

   async()=>{ await axios
      .post("http://localhost:8000/api/register", {
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };}
  return (
    <>
      <h1>register</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">register</button>
      </form>
    </>
  );
}

export default register;
