import React from "react";
import { Col, Container, Row } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import SkillItem from "./SkillItem";
import { skillsData } from "../data/skillsData";

export default function Skills() {
  return (
    <section id="skills">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <SectionSubtitle subtitle="Skills" />
          </Col>

          {skillsData?.map((item, idx) => (
            <Col lg="4" md="6" sm="6" key={idx}>
              <SkillItem skill={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
