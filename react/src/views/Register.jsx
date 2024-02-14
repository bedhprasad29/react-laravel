import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import axiosClient from '../axios-client';
import { useStateContext } from '../contexts/ContextProvider';

export default function Register() {
  const nameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()
  const { setToken, setUser } = useStateContext();

  const onSubmit = (ev) => {
    ev.preventDefault();

    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      confirm_password: confirmPasswordRef.current.value,
    }

    console.log(payload);

    axiosClient.post('/signup', payload)
      .then(({ data }) => {
        setToken(data.token)
        setUser(data.user)
      })
      .catch((error) => {
        const response = error.response;

        if (response && response.status == 422) {
          console.log(response.data.erros);
        }
      })

  }

  return (
    <div className="login-signup-form animated fadeInDown">
      <div className="form">
        <form onSubmit={onSubmit}>
          <h1 className="title">Create your account</h1>
          <input ref={nameRef} type="name" placeholder="Full Name" />
          <input ref={emailRef} type="email" placeholder="Email Address" />
          <input ref={passwordRef} type="password" placeholder="Password" />
          <input ref={confirmPasswordRef} type="password" placeholder="Confirm Password" />
          <button className="btn btn-block">Signup</button>
          <p className="message">Already registered? <Link to="/login">Login to your account</Link></p>
        </form>
      </div>
    </div>
  )
}
