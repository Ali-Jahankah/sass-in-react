import React from "react";

import styles from "../../css/hero.module.css";
const Hero = () => {
  return (
    <article className={styles.hero}>
      <section className={styles.form_section}>
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
