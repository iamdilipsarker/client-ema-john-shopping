import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import "./Login.css";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id=""
            placeholder="Enter Your Email"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id=""
            placeholder="Enter Your Password"
            required
          />
        </div>
        <input className="btn-submit" type="submit" value="Login" />
      </form>
      <p>
        <small>
          New to ema john? <Link to="/signup">Create a New Account</Link>
        </small>
      </p>
    </div>
  );
};

export default Login;
