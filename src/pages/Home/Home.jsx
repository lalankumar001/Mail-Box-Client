import React from 'react'
import { Link } from 'react-router-dom';
import { MdLightMode } from "react-icons/md";
import styles from './Home.module.css';

const Home = () => {
  // Dark mode Toggle button handler
  const darkModeHandler = () => {
    var element = document.body;
    element.classList.toggle(styles["dark"]);
  };
  return (
    <div>
     <div className={styles.Header}>
      <h1>You're not logged in! Please login to experience full features.</h1>
     <h2><Link to='/Login' className='btn btn-info w-50 fs-3'>Login</Link> </h2>
     </div>
     <div>
     <h6 className={styles['darkModeToggle']} title='Theme Toggler' ><MdLightMode onClick={darkModeHandler} /></h6>
     </div>
     </div>
    )
}

export default Home