import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { portfolioData } from "../data/portfolioData";
import SectionSubtitle from "./SectionSubtitle";
import classes from "@/styles/portfolio.module.css";
import PortfolioItem from "./PortfolioItem";

export default function Portfolio() {
  //   const [filter, setFilter] = useState("Mobile App");
  //   const [data, setData] = useState();

  //   useEffect(() => {
  //     if (filter === "Mobile App") {
  //       const filteredData = portfolioData.filter(
  //         (item) => item.category === filter
  //       );

  //       setData(filteredData);
  //     }

  //     if (filter === "Web Design") {
  //       const filteredData = portfolioData.filter(
  //         (item) => item.category === filter
  //       );

  //       setData(filteredData);
  //     }
  //   }, [filter]);

  const active = `${classes.tab__btn__active}`;

  return (
    <section id="portfolio">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <SectionSubtitle subtitle=" Portfolio" />
            {/* <h4 className="mt-4">Some of my distinguished works</h4> */}
          </Col>

          {/* <Col lg="6" md="6">
            <div className={`${classes.tab__btns} text-end`}>
              <button
                className={` ${
                  filter === "Mobile App" ? active : ""
                } secondary__btn text-white`}
                onClick={() => setFilter("Mobile App")}
              >
                Mobile App
              </button>
              <button
                className={`${
                  filter === "Web Design" ? active : ""
                } secondary__btn text-white`}
                onClick={() => setFilter("Web Design")}
              >
                Web Design
              </button>
            </div>
          </Col> */}

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
