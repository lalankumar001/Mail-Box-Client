import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./ComposeMail.css";

const ComposeMail = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const userEmail = useSelector((state) => state.auth.email);

  let name, value;
  const postUserdata = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };
  // connect with firebase
  const submitdata = (event) => {
    event.preventDefault();
    const { name, email, message } = userData;
    if (name && email && message) {
      const res = fetch(
        `https://clientmailbox-87dff-default-rtdb.firebaseio.com/${userEmail}/sentMail.json`,
        {
          method: "POST",
          Headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
          }),
        }
      );
      if (res) {
        alert("Message has been sent");
        setUserData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        alert("Please fill the data");
      }
    } else {
      alert("Please fill the data");
    }

    const formattedEmail = email.replace("@", "").replace(".", "");
    fetch(
      `https://clientmailbox-87dff-default-rtdb.firebaseio.com/${formattedEmail}/inboxMail.json`,
      {
        method: "POST",
        Headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      }
    );
  };

  return (
    <div className="ContactHeader">
      <div className="contact-form">
        <form>
          <label>Recipient</label>
          <input
            type="email"
            id="email"
            name="email"
            required=""
            placeholder="To"
            value={userData.email}
            onChange={postUserdata}
          />
          <label>Subject</label>
          <input
            type="text"
            id="text"
            name="name"
            required=""
            placeholder="Subject"
            value={userData.name}
            onChange={postUserdata}
          />
          <label>Message:</label>
          <textarea
            id="message"
            name="message"
            required=""
            placeholder="Message..."
            value={userData.message}
            onChange={postUserdata}
          ></textarea>
          <button type="submit" onClick={submitdata}>
            Submit
          </button>
        </form>
      </div>
      <br />
    </div>
  );
};

export default ComposeMail;
