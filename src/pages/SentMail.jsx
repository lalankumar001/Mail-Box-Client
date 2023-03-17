// below code is for geting and deleting the expense from the firebase realtime database.
import React, { useEffect, useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import {
  MdStarBorder,
  MdDelete,
  MdBrightness1,
  MdOutgoingMail,
} from "react-icons/md";
import { useSelector } from "react-redux";
import styles from "./MailsCard.module.css";

const SentMail = () => {
  const [isShown, setIsShown] = useState(false);
  const [Mail, setMail] = useState({});

  const userEmail = useSelector((state) => state.auth.email);

  const expenseToggleHandler = () => {
    setIsShown((prev) => !prev);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const url = `https://clientmailbox-87dff-default-rtdb.firebaseio.com/${userEmail}/sentMail.json`;
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
    }, 2000);

    return () => clearInterval(interval);
  }, [userEmail]);

  const deleteHandler = (key) => {
    const url = `https://clientmailbox-87dff-default-rtdb.firebaseio.com/${userEmail}/sentMail/${key}.json`;
    fetch(url, { method: "delete" })
      .then((res) => res.json())
      .then(() => {
        setMail((prev) => {
          const updatedState = { ...prev };
          delete updatedState[key];
          return updatedState;
        });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="w-100 mt-5">
      <h1 className="text-center p-4 rounded shadow bg-info fw-bold">
        {" "}
        <MdOutgoingMail /> Sent Mail
      </h1>
      {!isShown && Mail && (
        <div className="p-1">
          {Object.keys(Mail).map((item) => (
            <div className="card m-2" key={userEmail}>
              <h6 className={styles.ExpenseHeading}>
                <input type="checkbox" name="checkbox" id="checkbox" /> &nbsp;
                &nbsp; &nbsp; <MdBrightness1 className="text-info" /> &nbsp;{" "}
                {Mail[item].email} &nbsp; &nbsp; &nbsp;{" "}
                <MdStarBorder className="text-secondary" /> &nbsp; &nbsp; &nbsp;{" "}
                {Mail[item].message} &nbsp; &nbsp; {Mail[item].name} &nbsp;
                &nbsp; &nbsp; &nbsp;{" "}
                <button
                  onClick={() => {
                    deleteHandler(item);
                  }}
                  className="btn btn- rounded-pill shadow mb-1"
                >
                  <MdDelete />
                </button>
              </h6>
            </div>
          ))}
        </div>
        // isShown closing tag below
      )}
    </div>
  );
};

export default SentMail;
