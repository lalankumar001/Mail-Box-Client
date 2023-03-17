// below code is for geting and deleting the expense from the firebase realtime database.
import React, { useEffect, useState } from "react";
import { FaPencilAlt} from "react-icons/fa";
import { useSelector } from "react-redux";
import ComposeMail from "./ComposeMail/ComposeMail";


const Mail = () => {
 
  const [isShown, setIsShown] = useState(false);
  const [Mail, setMail] = useState({});

  const userEmail = useSelector((state) => state.auth.email);
  useEffect(() => {
    const url = `https://clientmailbox-87dff-default-rtdb.firebaseio.com/${userEmail}.json`;
    fetch(url, { method: "get" })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          alert(Error(data.message));
        }
      })
      .then((data) => {
        setMail(data);
      })
      .catch((err) => console.error(err));
  }, [isShown]);

  return (

    
// Compose Mail toggler here
<div className="p-5 mt-5 container">
<button type="button" className="btn btn-primary fs-3 p-2 rounded-pill" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Compose you mail <FaPencilAlt />
</button>
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-4 text-dark rounded-pill p-2" id="exampleModalLabel">Compose <FaPencilAlt /> </h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        {/* Compose mail component call here */}
        <ComposeMail />
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
    </div>
  </div>
  </div>
  

  );
};

export default Mail;
