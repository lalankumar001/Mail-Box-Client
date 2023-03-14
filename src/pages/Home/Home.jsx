import React from 'react'
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
     <div className={styles.Header}>
      <h1>You're not logged in! Please login to experience full features.</h1>
     <h2><Link to='/Login' className='btn btn-info w-50 fs-3'>Login</Link> </h2>
     </div>
    )
}

export default Home