import React , {useState} from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import {auth}from '../../../firebase';
import { Link,useNavigate } from 'react-router-dom'
import styles from './SignUp.module.css'


const SignUp = () => {
  const navigate = useNavigate();
 
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault()
   
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          alert('User signed up successfully');
          navigate("/login")
          // ...
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorCode, errorMessage);
          // ..
      });
  }
  return (
    <div className={styles.SignupPage}>
      <div className={styles['container']}>
        <div>
            <h2>Create An Account</h2>
            <div>
              <p>or use your email for registration.</p>
            </div>
          </div>
          <form className='container' onSubmit={onSubmit}>
            <div className="form-group ">
              <label>Name:</label>
              <input className="form-control" name="name" id="name" type="name" required placeholder='Name'  />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input className="form-control" name="email" id="email" type="email" required  placeholder='@' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input className="form-control" name="password" id="password" type="password" required  placeholder='*****' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="form-group">
              <label>Confirm Password:</label>
              <input className="form-control" name="confirmPassword" id="confirmPassword" type="password" required  placeholder='*****' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-primary">Sign Up</button>
            <Link to='/Login'> <button type="submit" className="btn btn-primary">Have an account?Login</button></Link> 
          </form>

        </div>
      </div>
  

  )
}
 
export default SignUp;
