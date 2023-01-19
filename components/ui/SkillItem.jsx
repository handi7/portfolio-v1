import React from "react";
import classes from "@/styles/skill-item.module.css";
import Image from "next/image";
import Link from "next/link";
import { AiFillHtml5 } from "react-icons/ai";
import { BsFillCaretRightFill } from "react-icons/bs";
import { Col, Row } from "reactstrap";

export default function SkillItem({ skill }) {
  return (
    <div className={`${classes.skill}`}>
      {/* <div className="bg-transparent">
        <h6>{name}</h6>
        {items.map((item, index) => (
          <span className={`${classes.portfolio__keyword}`} key={index}>
            {item}
          </span>
        ))}
      </div> */}

      <Col className={classes.icon_wrapper}>
        {/* <AiFillHtml5 className={classes.skill_icon} /> */}
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

      {/* <div className={`${classes.portfolio__img}`}>
        <Image alt="portfolio-img" src={img} width="380" height="250" />
      </div>

      <div className={`${classes.portfolio__live} bg-transparent`}>
        <button className="primary__btn w-100">
          <Link href={liveUrl}>Launch</Link>
        </button>

        <button className="primary__btn w-100">
          <Link href={liveUrl}>Launch</Link>
        </button>
      </div> */}
    </div>
  );
}
