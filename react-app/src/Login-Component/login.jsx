import React, { Component } from 'react';
import './login.css';
class Login extends Component {
    render() {
        return (
            <div>
              <form>
  <div className="container8"/>
    <h1>Register</h1>
    <p>Please fill in this form to create an account.</p>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/>

    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" required/>
    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

    <button type="submit" className="registerbtn">Register</button>
  

  <div className="container8 signin"/>
    <p>Already have an account? <a href="#">Sign in</a>.</p>

</form>
            </div>
        
        );
    }
}

export default Login;