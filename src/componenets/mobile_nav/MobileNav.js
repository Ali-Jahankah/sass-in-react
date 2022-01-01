import { Link } from "react-router-dom";
import styles from "../../css/mobilenav.module.css";
const MobileNav = () => {
  return (
    <article className={styles.nav}>
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
