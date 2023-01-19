import { Fragment } from "react";
import Intro from "@/components/ui/Intro";
import Portfolio from "@/components/ui/Portfolio";
import Contact from "@/components/ui/Contact";
import Skills from "@/components/ui/Skills";

export default function Home() {
  return (
    <Fragment>
      <Intro />
      <Skills />
      <Portfolio />
      <Contact />
    </Fragment>
  );
}
