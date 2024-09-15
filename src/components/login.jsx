import React from 'react'
import Tilt from 'react-vanilla-tilt'
export default function login() {
  
  return (
    <Tilt className='tilt' style={{width: '450px',background:'#5c57575e'}}>
      <form method="post" action="/login" className="container">
          <h1>Login to IndiaPost</h1>
          <div className="box">
              <i className="fa-solid fa-envelope"></i>
              <input type="text" name="username" placeholder="Enter Your Username" id="email"/>
        </div>
        <div className="box">
            <i className="fa-solid fa-key"></i>
            <input type="password" placeholder="Enter Your Password" name="password" id="password"/>
        </div>
        <button type="submit" className="btn">Sign in</button>
        <p className="travel">Don't have an account? <a href="/signup"> Sign Up</a></p>
      </form>
    </Tilt>
  )
}
