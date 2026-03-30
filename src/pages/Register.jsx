import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  console.log(name, email, password);

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      navigate("/");
      console.log(userCredential.user);
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
            <form onSubmit={handleRegister} className="fieldset">
              <label className="label">Name</label>
              <input type="text" name="name" className="input" placeholder="Name" />
              <label className="label">Email</label>
              <input type="email" name="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" name="password" className="input" placeholder="Password" />        
                <button  className="btn btn-neutral mt-4">Register</button>
            </form>
            <div>
              <Link to={"/auth/login"}>Login</Link>
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}

export default Register
