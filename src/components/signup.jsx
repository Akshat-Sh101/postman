import React from 'react'
import Tilt from 'react-vanilla-tilt'
export default function signup() {
  return (
    <Tilt className='tilt' style={{width: '450px',background:'#5c57575e'}}>
        <form method="post" action="/signup" class="container">
        <h1>Sign Up</h1>
        <div class="box">
            <i class="fa-solid fa-envelope"></i>
            <input type="text" name="name" placeholder="Enter Your Name" id="username"/>
       </div>
        <div class="box">
            <i class="fa-solid fa-envelope"></i>
            <input type="text" name="username" placeholder="Enter Your Username" id="username"/>
       </div>
        <div class="box">
            <i class="fa-solid fa-envelope"></i>
            <input type="tel" name="contactinfo" pattern='[0-9{3}-[0-9]{2}-[0-9]{3}' placeholder="Enter Your Phone No." id="phone"/>
       </div>
        <div class="box">
            <i class="fa-solid fa-envelope"></i>
            <input type="email" name="email" placeholder="Enter Your E-mail" id="email"/>
       </div>
       <div class="box">
           <i class="fa-solid fa-key"></i>
           <input type="password" placeholder="Enter Your Password" name="password" id="password"/>
       </div>
       <button type="submit" class="btn">Sign up</button>
       <p class="travel"><a href="/"> Back to Login page</a></p>
        </form>
    </Tilt>
  )
}
