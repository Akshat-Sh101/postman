import React, { useState } from 'react';

export default function sender() {
  const [orders, setOrders] = useState([]);
  const [formData, setFormData] = useState({
    senderId: '',
    senderName: '',
    contactNumber: '',
    email: '',
    address: '',
    postOffice: '',
    pinCode: '',
    date: '',
    time: '',
  });

  // Generate a random 4-digit code
  const generateCode = () => {
    return Math.floor(1000 + Math.random() * 9000).toString(); // Random 4-digit number
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Create new order object with form data and generated code
    const newOrder = {
      id: orders.length + 1, // Incremental ID
      name: `Order ${orders.length + 1}`,
      date: formData.date,
      time: formData.time,
      code: generateCode(),
    };

    // Add the new order to the list of orders
    setOrders([...orders, newOrder]);

    // Clear the form
    setFormData({
      senderId: '',
      senderName: '',
      contactNumber: '',
      email: '',
      address: '',
      postOffice: '',
      pinCode: '',
      date: '',
      time: '',
    });
  };

  // Handle removing an order when the correct code is entered
  const handleCodeSubmit = (id, enteredCode) => {
    const order = orders.find((order) => order.id === id);
    if (order && order.code === enteredCode) {
      setOrders(orders.filter((order) => order.id !== id));
    } else {
      alert('Incorrect code!');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className='senderdiv'>
      <h1>Sender Page</h1>
      
      {/* Form to send parcel */}
      <form onSubmit={handleFormSubmit} className='senderform'>
        <div>
          <label>Sender ID:</label>
          <input
            type="text"
            name="senderId"
            value={formData.senderId}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label>Sender Name:</label>
          <input
            type="text"
            name="senderName"
            value={formData.senderName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label>Contact Number:</label>
          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label>Post Office:</label>
          <input
            type="text"
            name="postOffice"
            value={formData.postOffice}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label>Pincode:</label>
          <input
            type="text"
            name="pinCode"
            value={formData.pinCode}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label>Time:</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
      
      {/* List of Orders */}
      <div className='orderlist'>
      <h2>Your Orders</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            <div>
              <strong>Order ID:</strong> {order.id} <br />
              <strong>Order Name:</strong> {order.name} <br />
              <strong>Date of Order:</strong> {order.date} <br />
              <strong>Time of Order:</strong> {order.time} <br />
              <strong>Order Code:</strong> {order.code} <br /> {/* Display the generated code */}
            </div>
            <input
              type="text"
              placeholder="Enter code"
              onBlur={(e) => handleCodeSubmit(order.id, e.target.value)}
            />
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}
