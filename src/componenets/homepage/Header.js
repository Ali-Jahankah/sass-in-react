import React, { useContext } from "react";
import styles from "../../css/header.module.css";
import { Link } from "react-router-dom";
import { homepage } from "../../contexts/homePage";

const Header = () => {
  const context = useContext(homepage);
  const { menu, setMenu } = context;
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.header_nav}>
          <div className="logo_div">
            <img src="/img/logo.svg" alt="logo" className={styles.logo} />
          </div>
          <ul>
            <li>
              <Link className={styles.nav_link} to="#">
                Home
              </Link>
            </li>
            <li>
              <Link className={styles.nav_link} to="#">
                Gallery
              </Link>
            </li>
            <li>
              <Link className={styles.nav_link} to="#">
                Shop
              </Link>
            </li>
            <li>
              <Link className={styles.nav_link} to="#">
                Sign in
              </Link>
            </li>
            <li>
              <Link className={styles.nav_link} to="#">
                Contact us
              </Link>
            </li>
          </ul>
          <section className={styles.burger_btn} onClick={() => setMenu(!menu)}>
            <div className={styles.burger_item}></div>
            <div className={styles.burger_item}></div>
            <div className={styles.burger_item}></div>
          </section>
        </nav>
      </header>
    </>
  );
};

export default Header;
