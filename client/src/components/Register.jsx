import React from 'react'

function register() {
  return (
<>
  <h1>register</h1>
        <form>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" />
            </div>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" />
            </div>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" />
            </div>
            <button type="submit">register</button>
        </form>

</>  
)
}

export default register