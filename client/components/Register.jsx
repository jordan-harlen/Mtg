import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { loginError, registerUserRequest } from '../actions/auth'

function Register() {
  const navigateTo = useNavigate()
  const dispatch = useDispatch()
  const auth = useSelector((redux) => redux.auth)

  const [formData, setFormData] = useState({
    username: '',
    email_address: '',
    password: '',
    confirm_password: '',
  })

  useEffect(() => {
    dispatch(loginError(''))
  }, [])

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/
    return re.test(email)
  }

  const handleChange = (e) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    e.target.reset()

    const { password, confirm_password } = formData

    if (confirm_password != password) {
      dispatch(loginError("Passwords don't match"))
    } else if (validateEmail(formData.email_address) === false) {
      dispatch(loginError('Please enter a valid email'))
    } else {
      const confirmSuccess = () => navigateTo('/')
      const userInfo = { ...formData }
      delete userInfo.confirm_password
      dispatch(registerUserRequest(userInfo, confirmSuccess))
    }
  }

  return (
    <>
      <h2 className="register-title">Register</h2>
      <div className="register-form">
        <form onSubmit={handleSubmit}>
          {auth.errorMessage && (
            <span className="register-error">{auth.errorMessage}</span>
          )}

          <label>
            Username:
            <input
              className="username"
              required
              placeholder="User Name"
              type="text"
              name="username"
              autoComplete="username"
              onChange={handleChange}
              value={formData.username}
            />
          </label>
          <label>
            Email Address:
            <input
              className="email"
              required
              placeholder="Email Adress"
              type="text"
              name="email_address"
              onChange={handleChange}
              value={formData.email_address}
            />
          </label>
          <label>
            Password:
            <input
              className="password"
              required
              placeholder="Password"
              type="password"
              name="password"
              autoComplete="new-password"
              onChange={handleChange}
              value={formData.password}
            />
          </label>
          <label className="confirm-password">
            Confirm Password:
            <input
              required
              type="password"
              placeholder="Confirm Password"
              name="confirm_password"
              autoComplete="new-password"
              onChange={handleChange}
              value={formData.confirm_password}
            />
          </label>
          <input className="register-button" value="Register" type="submit" />
        </form>
      </div>
    </>
  )
}

export default Register
