import React from "react";
import classes from "@/styles/portfolio-item.module.css";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioItem({ item }) {
  const { title, img, liveUrl, github, project, keyword } = item;
  const portfolio = title === "Personal Portfolio";

  return (
    <div className={`${classes.portfolio__item}`}>
      <div className="bg-transparent">
        <h5>{title}</h5>
        <h6 className="bg-transparent">
          <small>{project}</small>
        </h6>
        {keyword.map((item, index) => (
          <span className={`${classes.portfolio__keyword}`} key={index}>
            {item}
          </span>
        ))}
      </div>

      <div className={`${classes.portfolio__img}`}>
        <Image alt="portfolio-img" src={img} width="380" height="250" />
      </div>

      <div className={`${classes.portfolio__live} bg-transparent`}>
        <button className="primary__btn">
          <Link href={github} target="_blank">
            Github
          </Link>
        </button>

        <button className="primary__btn">
          <Link href={liveUrl} target={portfolio ? "_self" : "_blank"}>
            {portfolio ? "Demo" : "Video Demo"}
          </Link>
        </button>
      </div>
    </div>
  );
}
