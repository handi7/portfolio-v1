import React from "react";
import { Col, Container, Row } from "reactstrap";
import { portfolioData } from "../data/portfolioData";
import SectionSubtitle from "./SectionSubtitle";
import PortfolioItem from "./PortfolioItem";

export default function Portfolio() {
  return (
    <section id="portfolio">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <SectionSubtitle subtitle=" Portfolio" />
          </Col>

          {portfolioData?.map((item) => (
            <Col lg="4" md="6" sm="12" key={item.id}>
              <PortfolioItem item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
