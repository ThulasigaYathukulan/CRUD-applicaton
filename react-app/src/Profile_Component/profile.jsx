import React, { Component } from 'react';
 
class Profile extends Component {
    render() {
        return (
            <div>
                <h2>Login Form</h2>

<form action="/action_page.php" method="post">
  <div className="imgcontainer">
   
  </div>

  <div className="container9">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/>
        
    <button type="submit">Login</button>
    <label>
      <input type="checkbox" checked="checked" name="remember"/> Remember me
    </label>
  </div>

  <div className="container9" >
    <button type="button" className="cancelbtn">Cancel</button>
    <span className="psw">Forgot <a href="#">password?</a></span>
  </div>
</form>

            </div>
        );
    }
}

export default Profile;