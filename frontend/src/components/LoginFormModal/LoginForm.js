import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  return (
    <form className="form-form" onSubmit={handleSubmit}>
      <h3>Log In</h3>
      {errors.length > 0 && (
        <ul className="errors-ul">
        <p>Invalid Entries</p>
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
    )}
      <div className="form-div">
      <label>
        Username or Email
        <input
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
        />
      </label>
      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        </label>
        </div>
        <div id='buttons-form'>
      <button className="submit-bttn" type="submit">Log In</button>
      <button onClick={e => {
        setCredential("demo@user.io");
        setPassword("password");
      }} className="submit-bttn" type="submit">Demo User</button>
      </div>
    </form>
  );
}

export default LoginForm;
