import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Fragment } from "react";
import Intro from "@/components/ui/Intro";
import Portfolio from "@/components/ui/Portfolio";
import Contact from "@/components/ui/Contact";
import Skills from "@/components/ui/Skills";
import Skill from "@/components/ui/Skill";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Fragment>
      <Intro />
      <Skill />
      <Portfolio />
      <Contact />
    </Fragment>
  );
}
