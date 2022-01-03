import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { homepage } from "../../contexts/homePage";
import styles from "../../css/mobilenav.module.css";
const MobileNav = () => {
  const context = useContext(homepage);
  const { menu, setMenu } = context;
  return (
    <article className={`${styles.nav} ${menu ? styles.open : styles.close}`}>
      <ul>
        <li>
          <Link to="Home">Home</Link>
        </li>
        <li>
          <Link to="Gallery">Gallery</Link>
        </li>
        <li>
          <Link to="Shop">Shop</Link>
        </li>
        <li>
          <Link to="Signin">Sign in</Link>
        </li>
        <li>
          <Link to="Contactus">Contact us</Link>
        </li>
      </ul>
    </article>
  );
};

export default MobileNav;
