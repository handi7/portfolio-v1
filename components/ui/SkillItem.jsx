import React from "react";
import classes from "@/styles/skill-item.module.css";
import { BsFillCaretRightFill } from "react-icons/bs";
import { Col } from "reactstrap";

export default function SkillItem({ skill }) {
  return (
    <div className={`${classes.skill}`}>
      <Col className={classes.icon_wrapper}>
        {skill.icon}
        <h5>{skill.name}</h5>
      </Col>

      <Col className={classes.skill_items}>
        {skill.items.map((item, idx) => {
          return (
            <div key={idx}>
              <BsFillCaretRightFill
                style={{ backgroundColor: "transparent", color: "#01d293" }}
              />
              {` ${item}`}
            </div>
          );
        })}

        <div key={skill.items.length}>
          <BsFillCaretRightFill
            style={{ backgroundColor: "transparent", color: "#01d293" }}
          />{" "}
          dll.
        </div>
      </Col>
    </div>
  );
}
