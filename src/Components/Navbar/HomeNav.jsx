import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import Home from '../../pages/Home/Home'

import { Link } from 'react-router-dom'
import { MdCalendarViewDay } from "react-icons/md";

const HomeNav = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  
  return (
    <div className=''>
    
      <div className='row w-100'>
      
        <div className='col p-3'><a className="rounded-pill shadow p-3 w-50 m-5" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
          {/* below is Logo svg */}
          <MdCalendarViewDay className='fs-1 text-info h-25 w-25' /></a>
        </div>
        <div className='col nav-item p-3'>
          <input type="search" name="search" id="search" placeholder=' Search Mail' className='nav-link w-100 h-25 text-center rounded-pill shadow' />
        </div>

        <div className='col nav-item p-3'>
          <svg viewBox="0 0 128 128" className='w-25 h-25 mx-5'>
            <defs><linearGradient id="maya-original-a" gradientUnits="userSpaceOnUse" x1="100.777" y1="85.094" x2="86.576" y2="91.058"><stop offset=".09" stop-color="#1A5964"></stop><stop offset=".3" stop-color="#137078"></stop><stop offset=".5" stop-color="#0E8085"></stop><stop offset=".66" stop-color="#0C858A"></stop><stop offset="1" stop-color="#0A8B8F"></stop></linearGradient><linearGradient id="maya-original-b" gradientUnits="userSpaceOnUse" x1="99.581" y1="56.123" x2="130.166" y2="75.523"><stop offset="0" stop-color="#079EA0"></stop><stop offset=".43" stop-color="#14878E"></stop><stop offset="1" stop-color="#256A77"></stop></linearGradient><linearGradient id="maya-original-c" gradientUnits="userSpaceOnUse" x1="112" y1="16.835" x2="112" y2="120.497"><stop offset="0" stop-color="#B4B4B4"></stop><stop offset=".8" stop-color="#03ABAB"></stop><stop offset="1" stop-color="#137980"></stop></linearGradient><linearGradient id="maya-original-d" gradientUnits="userSpaceOnUse" x1="59.349" y1="57.417" x2="135.485" y2="42.575"><stop offset="0" stop-color="#0F5D64"></stop><stop offset=".1" stop-color="#097A7E"></stop><stop offset=".23" stop-color="#049395"></stop><stop offset=".34" stop-color="#01A3A3"></stop><stop offset=".43" stop-color="#00A8A8"></stop><stop offset="1" stop-color="#4EBCC1"></stop></linearGradient><linearGradient id="maya-original-e" gradientUnits="userSpaceOnUse" x1="-10.003" y1="72.033" x2="26.772" y2="50.748"><stop offset="0" stop-color="#00A9A9"></stop><stop offset=".65" stop-color="#049496"></stop><stop offset="1" stop-color="#088286"></stop></linearGradient><linearGradient id="maya-original-f" gradientUnits="userSpaceOnUse" x1="2.06" y1="91.643" x2="32.014" y2="89.985"><stop offset="0" stop-color="#20626E"></stop><stop offset="1" stop-color="#069D9F"></stop></linearGradient><linearGradient id="maya-original-g" gradientUnits="userSpaceOnUse" x1="41.036" y1="5.266" x2="36.336" y2="101.578"><stop offset="0" stop-color="#99CBD2"></stop><stop offset=".9" stop-color="#498F93"></stop><stop offset="1" stop-color="#2E7B7D"></stop></linearGradient></defs><path fill="url(#maya-original-a)" d="M98 121h3V49l-6 9v56l3 7z"></path><path fill="url(#maya-original-b)" d="M98 121V51l23-44h5v54l-22 60h-6"></path><path fill="url(#maya-original-c)" d="M126 121H98c2.9-5.7 14.1-29.2 19-48 8.5-33.1 9-58 9-58v106z"></path><path fill="url(#maya-original-d)" d="M126 7H89L63 69l11 30h1c.4 0 1-.3 2-2 4.1-7.6 49-90 49-90z"></path><path fill="url(#maya-original-e)" d="M2 121.7l3-.7 27-49V56L5 9 2 7.4v114.3z"></path><path fill="url(#maya-original-f)" d="M32 59.1c-2.3 6.9-7.9 23.6-13.6 34.3C8.2 113 2 121.7 2 121.7s23.7 2 30-5.7V60v-.9z"></path><path fill="url(#maya-original-g)" d="M52 97c1 1.8 1.6 2 2 2h21c.2-.2.4-.4.4-.7-.1-.4-.2-.9-.4-1.3L38 4 2 7.4S47.7 89.2 52 97z"></path></svg>
        </div>
      </div>
      <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title"  id="offcanvasExampleLabel">Client Mail</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <h1 className='fs-1 fw-bold '>Hey Guys !</h1>
          <h2 className='fs-4 p-2 fw-bold'>Welcome to Client Mail Box</h2>
        <p className='text-info'> " you can share your thought with your client in one Click "</p>
    
        {/*Login button  */}
        <div className='w-100 mt-5 p-4'>
      {!isAuth && <h1 className='btn btn-info w-75 fs-3 fw-bold '><Link to="/Login"> Login</Link></h1>}
        </div>

        </div>
      </div>
      {/* HOme page component call below */}
      <Home />
      </div>
  )
}

export default HomeNav