// frontend/src/components/SignupFormPage/index.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

function SignupFormPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  const handleDemo = () => {
    const credential = 'demo@user.io'
    const password = 'password'
    return dispatch(sessionActions.login({ credential, password }))
      .then(() => history.push('/images'))
  }

  return (
    <div className="signup-container-div">
      <form className="signup-form" onSubmit={handleSubmit}>
        <ul style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0px', width: '500px', textAlign: 'center' }}>
          {errors.map((error, idx) => <li style={{ backgroundColor: 'red' }} key={idx}>{error}</li>)}
        </ul>
        <label>
          Email*
          <input
            type="text"
            value={email}
            placeholder="Enter your Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Username*
          <input
            type="text"
            value={username}
            placeholder="Enter your Username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          Password*
          <input
            type="password"
            value={password}
            placeholder="Create Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <label>
          Confirm Password*
          <input
            type="password"
            value={confirmPassword}
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        {/* <div className="required-aster-text">Fields marked with * are required</div> */}
        <button style={{ marginBottom: '15px', marginTop: '15px', width: "99px" }} className="nav-buttons" type="submit">Sign Up</button>
      </form>
      <div className="demo-signup-div">
        <button style={{ marginTop: '5px' }} className='nav-buttons' onClick={() => handleDemo()}>Demo User</button>
      </div>
    </div>
  );
}

export default SignupFormPage;
