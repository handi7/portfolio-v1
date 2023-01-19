import Link from "next/link";
import React from "react";
import classes from "@/styles/contact.module.css";
import { Col, Container, Row } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import Form from "./Form";
import { MdContentCopy } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";

export default function Contact() {
  const onCopy = () => {
    navigator.clipboard.writeText("+6285642212252");
    toast.success("Phone Number Copied.", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <section id="contact" className={`${classes.contact}`}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Kontak" />
            <h3 className="mt-4 mb-4">Hubungi saya</h3>

            <ul className={`${classes.contact__info__list}`}>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <p>Bekasi</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-mail-line"></i>
                </span>
                <p>handi7.co@gmail.com</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-phone-line"></i>
                </span>
                <p>+62856 4221 2252</p>
                <button className="secondary__btn" onClick={onCopy}>
                  <MdContentCopy />
                </button>
              </li>
            </ul>

            <ToastContainer
              position="top-center"
              autoClose={1500}
              hideProgressBar
              newestOnTop={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              closeButton={false}
              icon={false}
              bodyClassName="bg-transparent"
              className={classes.toast}
            />

            <div className={`${classes.social__links}`}>
              <Link href="https://wa.me/6285642212252" target="_blank">
                <i className="ri-whatsapp-line p-1"></i>
              </Link>
              <Link href="https://github.com/handi7" target="_blank">
                <i className="ri-github-line p-1"></i>
              </Link>
              <Link href="https://www.instagram.com/mr_hand12" target="_blank">
                <i className="ri-instagram-line p-1"></i>
              </Link>
            </div>
          </Col>

          <Col lg="6" md="6">
            <Form />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
