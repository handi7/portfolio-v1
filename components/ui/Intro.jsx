import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import classes from "@/styles/intro.module.css";
import SectionSubtitle from "./SectionSubtitle";
import introImg from "../../public/intro.jpg";
import useDownloader from "react-use-downloader";

export default function Intro() {
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
              <SectionSubtitle subtitle="Tentang saya" />
              <h2 className="mt-3 mb-3">Handiani</h2>
              <h5 className="mb-4">Fullstack Web Developer</h5>
              <p>
                Lulusan Purwadhika Digital Technology School sebagai Fullstack
                Web Developer tahun 2022. Menguasai HTML/CSS/Javascript,
                React/Next Js, Node Js. Menguasai database MySQL dan MongoDB.
                Sebelumnya saya bekerja di perusahaan manufaktur selama 8 tahun
                di 4 perusahaan berbeda. Saya memutuskan belajar di Purwadhika
                karena saya sadar sejak lama sebenarnya saya berminat di bidang
                pemrograman.
              </p>
              <div className="mt-5">
                <button className="primary__btn">
                  <Link href="#contact">Rekrut saya</Link>
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
