import React, { useContext } from "react";
import { homepage } from "../../contexts/homePage";

import styles from "../../css/hero.module.css";
const Hero = () => {
  const context = useContext(homepage);
  const { hero, setHero } = context;
  console.log(context);
  return (
    <article
      className={styles.hero}
      onClick={() => {
        setHero(true);
      }}
    >
      {hero ? null : (
        <h1 style={{ textAlign: "center" }}>Touch or click on the man</h1>
      )}

      <section className={`${styles.form_section} ${hero ? "" : styles.hide}`}>
        <form action="" className={styles.hero_form}>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Lastname" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button type="submit">Sign up</button>
        </form>
      </section>
    </article>
  );
};

export default Hero;
