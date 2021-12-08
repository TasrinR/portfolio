import React, { useEffect } from "react";
import styles from "./MainNav.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faBars } from "@fortawesome/free-solid-svg-icons";
import { menuBtnAct } from "./MainNavMech";

function MainNav() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <span>Kanij</span>
          <span>Tasrin</span>
        </div>
        <div className={styles.mainContent}>
          <ul className={styles.links}>
            <li className={styles.link}>
              <a href="#hero">Home</a>
            </li>
            <li className={styles.link}>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className={styles.link}>
              <a href="#about">About</a>
            </li>
            <li className={styles.link}>
              <a href="#blog">Blog</a>
            </li>
            <li className={styles.link}>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <a href={"#"} target="_blank" className={styles.Resume}>
            Download Resume <FontAwesomeIcon icon={faDownload} style={{width:"fit-content"}} />
          </a>
          <button
            className={styles.menuBtn}
            onClick={(e) => menuBtnAct(e, styles.subMenu)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <div id={styles.subMenu} style={{ display: "none" }}>
          <ul className={styles.subLinks}>
            <li className={styles.subLink}>
              <a href="#hero">Home</a>
            </li>
            <li className={styles.subLink}>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className={styles.subLink}>
              <a href="#about">About</a>
            </li>
            <li className={styles.subLink}>
              <a href="#blog">Blog</a>
            </li>
            <li className={styles.subLink}>
              <a href="#contact">Contact</a>
            </li>
            <li className={styles.resume}>
              <a href={"#"} target="_blank">
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MainNav;
