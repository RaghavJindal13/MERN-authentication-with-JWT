import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import img from "./clip2.png"
import "./Login.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  async function register(e) {
    e.preventDefault();
    setErrorMessage("");

    try {
      const registerData = {
        email,
        password,
        passwordVerify,
      };

       await axios.post("http://localhost:5000/auth/", registerData);
      // await axios.post(
      //   "https://mern-auth-template-tutorial.herokuapp.com/auth/",
      //   registerData
      // );
      await getLoggedIn();
      history.push("/");
    } catch (err) {
      console.error(err);
      setErrorMessage(JSON.stringify(err.response.data.errorMessage));
    }
  }

  return (
    <div>
     

     <form onSubmit={register}>
     <div className="landing-container">
  <div className="landing-left">
    
    <div className="form-container">
      <div className="field">
        <h1 className="form-title">Register</h1>
        <p className="form-subtitle">Please enter your credentials to proceed.</p>
        
      </div>
      <div className="field">
        <h5 className="form-input-label">EMAIL ADDRESS</h5>
        <input className="form-input" 
          type="email" 
          placeholder="Email" 
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className="field">
        <h5 className="form-input-label ilb" style={{float: 'left'}}>PASSWORD</h5>
        
        <input className="form-input" 
          type="password" 
          placeholder="Password" 
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <h5 className="form-input-label ilb" style={{float: 'left'}}>VERIFY PASSWORD</h5>
        <input className="form-input"
          type="password"
          placeholder="Verify your password"
          onChange={(e) => setPasswordVerify(e.target.value)}
          value={passwordVerify}
        />
      </div>
      <strong className="errMsg">{errorMessage}</strong>
      <div className="field">
        <button className="submit-button">Create Account</button>
        <p className="form-info-text">Alreadt have an Account?  <a href="/login">Signin</a> </p>
      </div>
    </div>
  </div>

  <img src={img} className="landing-image" alt="landing"/>
</div>

</form>




    </div>


 /* <h1>Register a new account</h1>
      <strong id="errMsg">{errorMessage}</strong>
      <form onSubmit={register}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <input
          type="password"
          placeholder="Verify your password"
          onChange={(e) => setPasswordVerify(e.target.value)}
          value={passwordVerify}
        />
        <button type="submit">Register</button>
      </form> */




  );
}

export default Register;
