import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase/firebase.init';
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
const Login = () => {
  const { googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();


  const handleLogin = (e) =>{
    e.preventDefault();
  const formData = new FormData(e.target);
 
  const email = formData.get("email");
  const password = formData.get("password");
  // console.log(name email, password);

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
      navigate("/");
      console.log(userCredential.user);
    })
    .catch((error) => {
      console.log(error.message);
    });

  }
  const handleGoogleLogin = () => {
  googleLogin()
    .then((result) => {
      console.log(result.user);
      navigate("/");
    })
    .catch((error) => {
      console.log(error.message);
    });
};
  return (
   
      <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleLogin} className="fieldset">
          <label className="label">Email</label>
              <input type="email" name="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
              <input type="password" name="password" className="input" placeholder="Password" />        
          <div><a className="link link-hover">Forgot password</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        <button onClick={handleGoogleLogin} className="btn btn-outline mt-2 w-full">
  Google দিয়ে Login
</button>
                  <div>
                  <Link to={"/auth/register"}>Register</Link>
                  </div>


      </div>
    </div>
  </div>
</div>
    
  )
}

export default Login
