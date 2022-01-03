import Header from "./Header";
import styles from "../../css/common.module.css";
import Hero from "./Hero";
import MobileNav from "../mobile_nav/MobileNav";
const HomePage = () => {
  return (
    <>
      <Header></Header>
      <MobileNav />
      <Hero></Hero>
    </>
  );
};

export default HomePage;
