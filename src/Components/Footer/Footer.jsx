import React from "react";
import { FaYoutube,FaFacebook,FaSpotify} from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerPage}>
      <footer className="container">
           <div className="row justify-content-end">
          <a href="https://www.youtube.com/" className="col-1 my-4 fs-2 btn btn"><FaYoutube /></a>
          <a href="https://open.spotify.com/" className="col-1 my-4 fs-2 btn btn"><FaSpotify /></a>
          <a href="https://www.facebook.com/" className="col-1 my-4 fs-2 btn btn"><FaFacebook /></a>
          </div>
        <h1 className="">The Generics</h1>
      </footer>
    </div>
  );
};

export default Footer;
