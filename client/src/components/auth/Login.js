import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./Login.css";
import img from "./clip.png"

function Login() {
  


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();
  async function login(e) {
    e.preventDefault();
 setErrorMessage("");
    try {

      
      const loginData = {
        email,
        password,
      };
     
       await axios.post("http://localhost:5000/auth/login", loginData)
       
      
      // await axios.post(
      //   "https://mern-auth-template-tutorial.herokuapp.com/auth/login",
      //   loginData
      // );
      await getLoggedIn();
      history.push("/");
    } catch (err) {
      console.log(JSON.stringify(err.response.data.errorMessage));
      setErrorMessage(JSON.stringify(err.response.data.errorMessage));

    }
  }

  return (
    <div>
     
     <form onSubmit={login}>
     <div className="landing-container">
  <div className="landing-left">
    
    <div className="form-container">
      <div className="field">
        <h1 className="form-title">Login</h1>
        <p className="form-subtitle">Please enter your credentials to proceed.</p>
      </div>
      <div className="field">
        <h5 className="form-input-label">EMAIL ADDRESS</h5>
        <input className="form-input" 
          type="email"
          placeholder="Email" 
          onChange={(e) => setEmail(e.target.value)}
          value={email}/>
      </div>
      <div className="field">
        <h5 className="form-input-label ilb" style={{float: 'left'}}>PASSWORD</h5>


        <h5 className="form-input-label ilb" style={{float: 'right', color: '#8798AD', fontWeight: 300, cursor: 'pointer'}}><a href="/login">Forgot Password?</a></h5>
        <input className="form-input" 
          type="password" 
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <strong className="errMsg">{errorMessage}</strong>
      <div className="field">
        <button className="submit-button" type="submit">Sign in</button>
        <p className="form-info-text">Don't have an account? <a href="/register">Register</a></p>
       
      </div>
    </div>
  </div>

  <img src={img} className="landing-image" alt="landing"/>
</div>
</form>
     
     
     
     
     
     </div>
     
      /* <h1>Log in to your account</h1>
      <strong id="errMsg">{errorMessage}</strong>
      <form onSubmit={login}>
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
        <button type="submit">Log in</button>
      </form> */
    
  );
}

export default Login;
