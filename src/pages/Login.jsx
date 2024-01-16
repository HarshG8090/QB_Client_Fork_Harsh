
import React, { useState } from 'react';
import '../App.css';
import Navbar from '../Component/Navbar';
import Loginimg from '../images/login-bg.png';
import { useNavigate,Link } from 'react-router-dom';




const Login = () => {

const navigate = useNavigate()

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }

    navigate("/")
    setUsername('');
    setPassword('');
    setError('');
  };

  const handleGoogleSignIn = () => {
    console.log('Signing in with Google...');
  };

  return (
    <>
   

<section class="bg-login">
  <div class="container py-5">
    <div class="row d-flex align-items-center justify-content-center login-bg">
      <div class="col-md-6">
      <img src={Loginimg} alt="login-img"className='img-fluid' />
      </div>
        <div className="box col-md-6">
          <div className="card-body text-center py-3">
            <h3 className="card-title mb-4">Login Donor Profile</h3>
            {error && <p className="text-danger">{error}</p>}
            <form onSubmit={handleLogin}>
              <div className=" mb-3 px-3">
                <label htmlFor="username" className="form-label">
                  Email id/ Phone no.
                </label>
                <input
                  type="text"
                  className="form-control mb-2"
                  id="username"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="mb-3 px-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control mb-2"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="or text-center">
                <p>or</p>
              </div>

              <div className="text-dark  col-12">
                <button
                  type="button"
                  className="btn px-4 btn-secondary"
                  onClick={handleGoogleSignIn}
                >   <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 48 48" className='mx-2'>
                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                  </svg>
                  Sign In with Google
                </button>
              </div>
              <div className="pt-4">
                <button type="submit" className="btn btn-danger rounded">
                  Login
                </button>
              </div>
            </form>
          
          </div>
        </div>
        </div>
  </div>
</section>
    </>
  );
};

export default Login;
