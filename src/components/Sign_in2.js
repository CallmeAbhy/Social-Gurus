import React, { useState } from 'react';
import axios from 'axios';
import './Sign_in.css';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


const Sign_in2 = () => {
  
let history = useHistory();
    const loginHandler2 = (event) => {
        event.preventDefault();
        
        const email = event.target.email.value;
        const password = event.target.password.value;
        const field2 = {email, password};
        console.log(field2);
        axios.post("http://34.205.65.36:4000/client/login", 
      field2)
      .then(response => {
        console.log(response);
        // event.target.reset();
        window.alert("Welcome to Social Gurus");
        history.push('/Posting');
      })
      .catch(error =>{
        console.log(error);
        window.alert("Something went wrong");
      })
      };
  return (
    <>
    
      <div className="bd">
        
      <div class="card-back">
									<div class="center-wrap">
									            <form id="logInForm" onSubmit={loginHandler2}>
                <div class="details1">
                    <label class="black-color">Email </label>
                    <input className='inp-field'  placeholder="vivek@example.com" name='email' />
                </div>
                <div class="details1">
                    <label>Password </label>
                    <input className='inp-field'  placeholder="Must be at least 6 characters" type="password" name='password'  />
                </div>
                <p id="tc2"><span>Forgot password?</span></p>
                <button class="textCenter2" type="submit">Login</button>
            </form>
			
<button type="button" class="login-with-google-btn" >
  Sign in with Google
</button>

            <p id="msg">New to Social-Gurus?  <Link as={Link} to='/Organization'>Register</Link> (<span>Student</span> / <span>Company</span>)</p>
			      					</div>
			      				</div>
                    </div>
    </>
  )
}

export default Sign_in2
