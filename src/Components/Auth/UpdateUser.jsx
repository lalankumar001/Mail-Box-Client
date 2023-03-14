import React from 'react'
import { FaGithub,FaGlobe } from "react-icons/fa";
import { Link } from 'react-router-dom';

const UpdateUser = () => {
  return (
    <div>
    <button className='btn btn-dark mx-5 mb-5 w-25'>Your profile is 64% incompleted A Complet Profile has higher chance of landing a job <b className='text-decoration-underline text-danger'>Complete Now</b></button>
     
      <div className='container card p-5 bg-secondary'> 
        <div className='row'>
         <h1>Contact Details</h1>
         <div className='row'>
       <div className='col'><h3> <FaGithub /> Full Name :</h3><input type='text'  className='border border-dark rounded-pill w-50 h-75'/></div>
       <div className='col'><h3><FaGlobe /> Profile Photo URL</h3><input type='text'  className='border border-dark rounded-pill w-50 h-75'/></div>
         </div>
      </div>
      <button className='btn btn-danger p-3 mt-5'>Update Profile!</button>

    </div>
    </div>
  )
}

export default UpdateUser