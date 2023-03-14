import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaToggleOn, FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import { getAuth, signOut } from "firebase/auth";
import { authActions } from "../../GlobalStore/Reducer/Auth";

const Navbar = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const LogoutHandler = () => {
    dispatch(authActions.logout());
    navigate("/Home")
    signOut(auth).then(() => {
      alert('Sign-out successful')
    }).catch((error) => {
      alert('An error occurred');
    });
  };

  // Dark mode Toggle button handler 
  const darkModeHandler = () => {
    var element = document.body;
    element.classList.toggle(styles['dark']);
  }

  return (
    <div className={styles.navbaritems}>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid ">
          <Link to="/about" className="navbar-brand fs-2 fw-2 text-info">
            My-Expense
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center fs-3 fw-1"
            id="navbarNav"
          >
            {isAuth &&
              <ul className="nav navbar">
                <li className="nav-item">
                  <Link to="/Home/UpdateUser" className="nav-link active" aria-current="page" >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Expenses" className="nav-link">
                    Expenses
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/About" className="nav-link">
                    Aboutus
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Contact" className="nav-link">
                    Contactus
                  </Link>
                </li>

                <li className="nav-item dropdown mx-5">
                  <a className="nav-link dropdown mx-5" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false"><FaUserCircle /></a>
                  <ul className="dropdown-menu bg-dark">
                    <li><Link to="/Home/UpdateUser" className="dropdown-item rounded-pill shadow text-center">Update you profile!</Link></li>
                    <li><Link to="/Expenses" className="dropdown-item rounded-pill shadow text-center">Your Expense!</Link></li>
                    <li className="nav-item nav-link btn btn-info text-dark rounded-pill shadow" onClick={LogoutHandler}>
                      Logout
                    </li>
                  </ul>
                </li>
              </ul>
            }
          </div>
        </div>
        {/* Dark item toggler */}
        <div className="nav-item fs-1 btn btn-dark mx-5"> <FaToggleOn onClick={darkModeHandler} />
        </div>
      </nav>





    </div>
  );
};

export default Navbar;
