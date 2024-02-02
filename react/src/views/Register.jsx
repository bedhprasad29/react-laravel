import React from 'react'
import { Link } from 'react-router-dom';

export default function Register() {
  const onSubmit = (ev) => {
    ev.preventDefault();
  }

  return (
    <div className="login-signup-form animated fadeInDown">
      <div className="form">
        <form onSubmit={onSubmit}>
          <h1 className="title">Create your account</h1>
          <input type="name" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button className="btn btn-block">Signup</button>
          <p className="message">Already registered? <Link to="/login">Login to your account</Link></p>
        </form>
      </div>
    </div>
  )
}
