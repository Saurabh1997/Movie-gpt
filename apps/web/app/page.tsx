import Image from "next/image";
import { Card } from "@repo/ui/card";
import { Code } from "@repo/ui/code";
import styles from "./page.module.css";
import { Button } from "@repo/ui/button";
import { Navbar } from "@repo/ui/navbar";

export default function Page(): JSX.Element {
  let options = [
    {
      displayName: "Home",
      path: "/",
    },
    {
      displayName: "About",
      path: "/about",
    },
    {
      displayName: "Contact us",
      path: "/contact",
    },
    {
      displayName: "Careers",
      path: "/careers",
    },
    {
      displayName: "Login",
      path: "/login",
    },
    {
      displayName: "Sign up",
      path: "/signup",
    },
  ];

  let options_withmap = {
    Home: "#home",
  };

  return (
    <main className={styles.main}>
      <Navbar options={options}></Navbar>
    </main>
  );
}
