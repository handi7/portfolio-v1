import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import { Container } from "reactstrap";
import classes from "../../styles/header.module.css";
import { navData } from "../data/NavData";

export default function Header() {
  const router = useRouter();
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const tag = router.asPath.slice(1) || "home";

  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add(`${classes.header__shrink}`);
    } else {
      headerRef.current.classList.remove(`${classes.header__shrink}`);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);

    return () => window.removeEventListener("scroll", headerFunc);
  }, []);

  const toggleMenu = () => {
    menuRef.current.classList.toggle(`${classes.menu__active}`);
  };

  return (
    <header className={`${classes.header}`} ref={headerRef}>
      <Container className={classes.container}>
        <div className={`${classes.nav__wrapper}`}>
          {/* ======== navigation logo ======== */}
          <div className={`${classes.logo}`}>
            <Link href="/">
              <h1>
                <span>H</span>andiani
              </h1>
            </Link>
          </div>

          {/* ========= nav menu =========== */}
          <div
            className={`${classes.navigation}`}
            ref={menuRef}
            onClick={toggleMenu}
          >
            <div className={`${classes.nav__menu}`}>
              {navData.map((item, index) => {
                const current = item.path.slice(1) || "home";
                return (
                  <Link
                    style={{
                      color: tag.includes(current) ? "#01d293" : "",
                    }}
                    href={item.path}
                    key={index}
                  >
                    {item.display}
                  </Link>
                );
              })}

              <div className={`${classes.nav__right}`}>
                <p className=" d-flex align-items-center gap-2 mb-0">
                  <i className="ri-phone-line"></i> +6285642212252
                </p>
              </div>
            </div>
          </div>

          <span className={`${classes.mobile__menu}`}>
            <i className="ri-menu-line" onClick={toggleMenu}></i>
          </span>
        </div>
      </Container>
    </header>
  );
}
