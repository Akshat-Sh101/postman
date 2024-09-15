import React from 'react'

export default function home() {
  return (
    <div className='mainhome'>
        <div className="homepage-container">
      <div className="header">
        <h1 id='homehead'>Welcome to</h1>
        <h1>India Post</h1>
        <p>Connecting People, Delivering Trust</p>
      </div>

      <div className="button-container">
        <button className="animated-button" onClick={() => alert('Sender clicked')}>Sender</button>
        <button className="animated-button" onClick={() => alert('Receiver clicked')}>Receiver</button>
        <button className="animated-button" onClick={() => alert('Postman clicked')}>Postman</button>
      </div>
    </div>
    </div>
  )
}
