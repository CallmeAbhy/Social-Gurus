import React, { useState } from 'react';
import axios from 'axios';
import './Sign_in.css';
import { Link } from 'react-router-dom';
import Sign_in2 from './Sign_in2';
import NavBar from './NavBar';
import { Form } from 'react-bootstrap';

const Sign_in = () => {

const loginHandler = (event) => {
  
  event.preventDefault();
  
  const email = event.target.email.value;
  const password = event.target.password.value;
  const field = {email, password};
  console.log(field);
  axios.post("http://34.205.65.36:4000/employee/login", 
field)
.then(response => {
  console.log(response);
  // event.target.reset();
  window.alert("Welcome to Social gurus");
  
  

})
.catch(error =>{
  console.log(error);
  window.alert("Something went wrong");
})
};

  return (
   <>
<div className="bd">

<NavBar />
<div class="section">
		<div class="container">
			<div class="row full-height justify-content-center">
				<div class="col-12 text-center align-self-center py-5">
					<div class="section pb-5 pt-5 pt-sm-2 text-center">
            
						<h6 class="mb-0 pb-3"><span>Employee </span><span>Organization</span></h6>
            
			          	<input class="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
			          	<label for="reg-log"></label>
						<div class="card-3d-wrap mx-auto">
							<div class="card-3d-wrapper">
								<div class="card-front">
									<div class="center-wrap">
										            <form id="logInForm" onSubmit={loginHandler} >
                <div class="details1">
                    <label>Email</label>
                    <input className='inp-field' placeholder="vivek@example.com" name='email'/>
                 
                </div>
                <div class="details1">
                    <label>Password</label>
                    
                    <input className='inp-field' placeholder="Must be at least 6 characters" type="password" name='password'  />
                    
                </div>
               
                <p id="tc2"><span>Forgot password?</span></p>
                <button class="textCenter2" type="submit">Login</button>
            </form>
						
<button type="button" class="login-with-google-btn" >
  Sign in with Google
</button>
            <p id="msg">New to Social-Gurus? <Link as={Link} to='/Employee'>Register</Link> (<span>Student</span> / <span>Company</span>)</p>
			      					</div>
			      				</div>
								    <Sign_in2 />
			      			</div>
			      		</div>
			      	</div>
		      	</div>
	      	</div>
	    </div>
		</div>
	</div>
   </>
  )
}

export default Sign_in
