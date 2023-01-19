import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiNodejsSmall, DiReact } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { SiNextdotjs } from "react-icons/si";
import classes from "@/styles/skill-item.module.css";

export const skillsData = [
  {
    name: "HTML",
    icon: <AiFillHtml5 className={classes.skill_icon} />,
    items: ["Elements", "Text Formatting", "Table"],
  },
  {
    name: "CSS",
    icon: <DiCss3 className={classes.skill_icon} />,
    items: ["Position", "Pseudo", "Effect"],
  },
  {
    name: "Javascript",
    icon: <IoLogoJavascript className={classes.skill_icon} />,
    items: ["Arrow Function", "Async Await", "Array"],
  },
  {
    name: "React",
    icon: <DiReact className={classes.skill_icon} />,
    items: ["Lifecycle", "Hooks", "Redux"],
  },
  {
    name: "Node",
    icon: <DiNodejsSmall className={classes.skill_icon} />,
    items: ["Restful API", "Express", "MySql"],
  },
  {
    name: "Next Js",
    icon: <SiNextdotjs className={classes.skill_icon} />,
    items: ["Route", "Layout", "Error"],
  },
];
