import React, { useState } from "react";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../firebase";
import { useDispatch } from "react-redux";
import { authActions } from "../../GlobalStore/Reducer/Auth";
import styles from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const userEmail = userCredential.user.email
          .replace("@", "")
          .replace(".", "");

        console.log(userEmail);

        navigate("/Expenses");
        dispatch(authActions.login(userEmail));
        alert("logged in successfully" + user.email);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
      });
  };

  return (
    <div className={styles.LoginPageBack}>
      <h5>Sign in to your Expense Manager</h5>
      <div className="container">
        <form>
          <div className="form-group">
            <label>Email:</label>
            <input
              className="form-control"
              name="email"
              id="email"
              type="email"
              required
              placeholder="@"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              className="form-control"
              name="password"
              id="password"
              type="password"
              required
              placeholder="*****"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary" onClick={onLogin}>
            Login{" "}
          </button>
          <Link to="/SignUp">
            <button type="submit" className="btn btn-primary">
              Don't have an account? Sign Up
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
