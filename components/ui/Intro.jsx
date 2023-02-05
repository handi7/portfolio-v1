import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import classes from "@/styles/intro.module.css";
import SectionSubtitle from "./SectionSubtitle";
import introImg from "../../public/intro.jpg";
import useDownloader from "react-use-downloader";
import { useRouter } from "next/router";

export default function Intro() {
  const router = useRouter();

  const { download } = useDownloader();
  const path = "/CV_Handiani.pdf";
  const filename = "CV_Handiani.pdf";

  return (
    <section className={`${classes.intro}`}>
      <Container>
        <Row>
          {/* ========== intro img ============= */}
          <Col lg="6" md="6" className={classes.intro__img_top}>
            <div className={`${classes.intro__img} text-end`}>
              <Image
                alt="intro-image"
                src={introImg}
                width="400"
                height="400"
              />
            </div>
          </Col>

          {/* ========== intro content ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.intro__content}`}>
              <SectionSubtitle subtitle="About me" />
              <h2 className="mt-3 mb-3">Handiani</h2>
              <h5 className="mb-4">Fullstack Web Developer</h5>
              <p>
                I am a full-stack web developer with expertise in JavaScript,
                ReactJS, and MySQL. I have a passion for creating dynamic and
                interactive web applications that solve real-world problems.
                With my technical skills and experience, I am confident in
                delivering high-quality and user-friendly projects.
              </p>
              <p>
                I also have a wealth of experience in other fields. I have a
                strong work ethic and am always eager to apply my skills and
                knowledge to tackle new challenges. I am confident that my
                diverse background and strong problem-solving skills will allow
                me to make a valuable contribution to any team or project.
              </p>
              <div className="mt-5">
                <button
                  className="primary__btn"
                  onClick={() => router.push("/#contact")}
                >
                  Hire me
                </button>

                <button
                  className="secondary__btn"
                  onClick={() => download(path, filename)}
                >
                  Download CV
                </button>
              </div>
            </div>
          </Col>

          {/* ========== intro img ============= */}
          <Col lg="6" md="6" className={classes.intro__img_bottom}>
            <div className={`${classes.intro__img} text-end`}>
              <Image
                alt="intro-image"
                src={introImg}
                width="400"
                height="400"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
