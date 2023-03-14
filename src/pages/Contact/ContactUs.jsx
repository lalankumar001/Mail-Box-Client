import React, { useState } from "react";
import "./ContactUs.css";
import img from "../../assets/queryLogo.png";

const ContactUs = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  let name, value;
  const postUserdata = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };
  // connect with firebase
  const submitdata = (event) => {
    event.preventDefault();
    const { name, email, phone, message } = userData;
    if (name && email && phone && message) {
      const res = fetch(
        "https://expensetracker-30ad5-default-rtdb.firebaseio.com/.json",
        {
          method: "POST",
          Headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            message,
          }),
        }
      );
      if (res) {
        alert("Message has been sent");
        setUserData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        alert("Please fill the data");
      }
    } else {
      alert("Please fill the data");
    }
  };

  return (
    <div className="ContactHeader">
      <div className="container">
        <h1>
          Have Any Query <img src={img} alt="" width="100" />
        </h1>
        <h2>"We're just a click away. Get in touch with us now." </h2>
      </div>

      <div className="contact-form">
        <span className="heading">Contact Us</span>
        <form>
          <label>Name:</label>
          <input
            type="text"
            id="text"
            name="name"
            required=""
            placeholder="Name"
            value={userData.name}
            onChange={postUserdata}
          />
          <label>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required=""
            placeholder="@"
            value={userData.email}
            onChange={postUserdata}
          />
          <label>Phone No:</label>
          <input
            type="number"
            id="number"
            name="phone"
            required=""
            placeholder="Phone No.."
            value={userData.phone}
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

export default ContactUs;
