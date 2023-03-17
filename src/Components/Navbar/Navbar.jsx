import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  FaToggleOn,
  FaUserCircle,
  FaHome,
  FaPlusCircle,
  FaInbox,
  FaPaperPlane,FaUserLock
} from "react-icons/fa";
import { MdNightsStay } from "react-icons/md";
import MiniNav from './HomeNav'
import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import { getAuth, signOut } from "firebase/auth";
import { authActions } from "../../GlobalStore/Reducer/Auth";


const Navbar = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const dispatch = useDispatch();
// BELOW LINE IS FOR AUTHENTICATION COMMING FROM AUTHFILE MADE WITH REDUX
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  // BELOW LINE IS FOR GETTING USER MAIL ID 
  const userEmail = useSelector((state) => state.auth.email);


  const LogoutHandler = () => {
    dispatch(authActions.logout());
    navigate("/");
    signOut(auth)
    .then(() => {
      alert("Sign-out successful");
    })
    .catch((error) => {
      alert("An error occurred");
    });
  };
  
  // Dark mode Toggle button handler
  const darkModeHandler = () => {
    var element = document.body;
    element.classList.toggle(styles["dark"]);
  };
  
  return (
    <div className={styles.navbaritems}>

    {isAuth && 
      <nav className="navbar fixed-top bg-dark">
        <div className="">
          {/* Below button for toggle icon which is shown in left side ... dot */}
          <button
            className="navbar-toggler w-75 h-100 bg-danger fs-3"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            >
            <span className="navbar-toggler-icon navbar-brand"></span>
          </button>
          
          {/* below code is responsibale when we click on toggle the the model is shown */}
          <div
            className="offcanvas offcanvas-start w-25"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            >
            {/* user section code which is top of the page */}
            <div className="offcanvas-header bg-dark"> 
              <li className="nav-item dropdown fs-2">
                <a
                  className="nav-link dropdown mx-5"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-expanded="false"
                  >
                  <FaUserCircle />
                </a>
                <ul className="dropdown-menu bg-dark">
                  <li>
                    <Link
                      to="/Home/UpdateUser"
                      className="dropdown-item rounded-pill shadow text-center"
                      >
                      Update you profile!
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Mail"
                      className="dropdown-item rounded-pill shadow text-center"
                      >
                      Compose a Mail!
                    </Link>
                  </li>
                  <li
                    className="nav-item nav-link btn btn-info text-dark rounded-pill shadow"
                    onClick={LogoutHandler}
                    >
                    Logout
                  </li>
                </ul>
              </li>
              <h6
                className="offcanvas-title text-primary mt-5 fs-4"
                id="offcanvasNavbarLabel"
              >
              {userEmail}
              </h6>
              <button
                type="button"
                className="btn-close bg-danger fs-3"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            <div className="offcanvas-body bg-dark">
              {/* Mail compose section here */}
              <li className="container fs-3 nav-item" title="Compose a Mail">
                <Link
                  to="/Mail"
                  className="nav-link btn btn-primary p-3 rounded-pill shadow"
                >
                  {" "}
                  <FaPlusCircle /> Compose
                </Link>
              </li>
              <br />
              <hr className="text-white" />
              {/* HOme , INbox and Sent section */}
              <ul className="navbar-nav container w-75">
                <li className="container fs-3 nav-item mb-3" title="Home">
                  <Link
                    to="/Home/UpdateUser"
                    className="nav-link btn btn-secondary p-3 rounded-pill shadow"
                  >
                    {" "}
                    <FaHome /> Home
                  </Link>
                </li>
                <li className="container fs-3 nav-item mb-3" title="Inbox">
                  <Link
                    to="/Inbox"
                    className="nav-link btn btn-secondary p-3 rounded-pill shadow"
                  >
                    {" "}
                    <FaInbox /> Inbox
                  </Link>
                </li>
                <li className="container fs-3 nav-item" title="Sent">
                  <Link
                    to="/SentMail"
                    className="nav-link btn btn-secondary p-3 rounded-pill shadow"
                  >
                    {" "}
                    <FaPaperPlane /> Sent
                  </Link>
                </li>
                <hr className="text-white" />
              </ul>
            </div>
            <div className="bg-dark">
              {/* dark mode toggler */}
              <div className="container row mb-4 text-info">
                {" "}
                <h6 className="col fw-bold fs-2" title="Night Mode toggler">
                  {" "}
                  <MdNightsStay /> Night Mode{" "}
                </h6>{" "}
                <h6 className="col fw-bold fs-2" title="Them toggler">
                  <FaToggleOn onClick={darkModeHandler} />
                </h6>
              </div>
              {/* Logout btn */}
              <li
                className="nav-item nav-link btn btn-danger text-dark rounded-pill shadow mb-3 p-3 fs-3" title="Logout"
                onClick={LogoutHandler}
              >
          <FaUserLock /> Logout
              </li>
            </div>
          </div>
        </div>
      </nav>
}
</div>
  );
};

export default Navbar;
