import React from "react";
import { Container, Row, Col } from "reactstrap";
import classes from "@/styles/footer.module.css";
import Link from "next/link";
import { navData } from "../data/NavData";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  const tag = router.asPath.slice(1) || "home";

  return (
    <footer>
      <Container>
        <Row>
          {/* ========= footer top =========== */}
          <Col lg="6" className={`${classes.footer__top}`}>
            <div className={`${classes.nav__menu}`}>
              {navData.map((item, index) => {
                const current = item.path.slice(1) || "home";
                return (
                  <Link
                    style={{
                      color: tag.includes(current) ? "#01d293" : "#808dad",
                    }}
                    href={item.path}
                    key={index}
                  >
                    {item.display}
                  </Link>
                );
              })}
            </div>
          </Col>

          <Col lg="12">
            <div className={`${classes.footer__copyright}`}>
              <p>2023 - Handiani</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
